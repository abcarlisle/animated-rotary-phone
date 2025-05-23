import { useEffect, useState } from "react";

interface BOM {
  id: string;
  product_name: string;
  revision: string;
  components: { part_number: string; quantity: number }[];
}

export default function Index() {
  const [boms, setBoms] = useState<BOM[]>([]);

  useEffect(() => {
    // Simulate fetching from backend lambda
    setTimeout(() => {
      setBoms([
        { id: '1', product_name: 'Widget A', revision: 'A1', components: [{ part_number: 'P-100', quantity: 2 }] },
        { id: '2', product_name: 'Widget B', revision: 'B2', components: [{ part_number: 'P-200', quantity: 5 }] }
      ]);
    }, 300);
  }, []);

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">BOMer Prototype Dashboard</h1>
      <div className="mb-6">
        <a
          href="/roles"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Try Role-Based UI Demo
        </a>
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">Sample BOM List</h2>
        {boms.map(bom => (
          <div key={bom.id} className="border rounded p-4 bg-white shadow">
            <div className="font-semibold">{bom.product_name} (Rev {bom.revision})</div>
            <ul className="ml-4 text-sm text-gray-600">
              {bom.components.map((c, i) => (
                <li key={i}>{c.part_number} &times; {c.quantity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
