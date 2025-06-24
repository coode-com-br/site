import { NextRequest } from "next/server";

//
interface Project {
  metadata: {
    name: string;
    namespace?: string;
    labels?: Record<string, string>;
    annotations?: Record<string, string>;
  };
  spec: any;
  status: {
    phase: string;
  };
}

// https://docs.redhat.com/en/documentation/openshift_container_platform/4.19/html/monitoring_apis/prometheusrule-monitoring-coreos-com-v1#api-endpoints-8

// https://                              api/kubernetes/apis/project.openshift.io/v1/projects?limit=250
// https://api.dev.labredhat.seprol:6443/apis/project.openshift.io/v1/projects
// https://api.dev.labredhat.seprol:6443/apis/prometheus/v1/query?&query=namespace:container_cpu_usage:sum
// https://api.dev.labredhat.seprol:6443/apis/prometheus/api/v1/query?&query=sum%20by(namespace)%20(container_memory_working_set_bytes{container=%22%22,pod!=%22%22})

//
export async function GET(request: NextRequest) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  const { searchParams } = new URL(request.url);
  const filterName = searchParams.get("name");

  const response = await fetch(
    "https://api.dev.labredhat.seprol:6443/apis/monitoring.coreos.com/v1/prometheuses?&query=sum%20by(namespace)%20(container_memory_working_set_bytes{container=%22%22,pod!=%22%22})",
    {
      headers: {
        Authorization: `Bearer sha256~NYZeEbb-_Go-_y9yF51vHozGSDgSAJc3qQ4tvN7lIPI`,
      },
    }
  );

  // Transform or forward the response
  const data = await response.json();
  let filteredProjects = data.result || [];

  // Filtrar por nome
  if (filterName) {
    filteredProjects = filteredProjects.filter((project: Project) =>
      project.metadata.name.includes(filterName)
    );
  }

  const transformed = { ...filteredProjects, source: "proxied-through-nextjs" };
  //console.log(transformed);

  return new Response(JSON.stringify(transformed), {
    headers: { "Content-Type": "application/json" },
  });
}
