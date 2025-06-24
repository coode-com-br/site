async function getData() {
  const data = await fetch("http://localhost:3001/api/external/openshift");
  const payment = await data.json();
  return payment;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto px-4 py-10">
      {data}
    </div>
  );
}
