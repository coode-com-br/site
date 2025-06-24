import { columns, Payment } from "./payments/columns";
import { DataTable } from "./payments/data-table";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Payment[]> {
  const data = await fetch("https://api.vercel.app/blog");
  const payment = await data.json();
  return payment;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mt-1">
        <Button size="lg" className="rounded-full text-base">
          Acesse Seprol
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
