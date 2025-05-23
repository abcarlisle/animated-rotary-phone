import { useState } from "react";
import { Role, roleDescriptions } from "../roles";

const roles: Role[] = [
  "ShippingReceiving",
  "Purchase",
  "Engineer",
  "Manufacturer",
  "Paint",
  "Sales",
  "Technician",
  "Manager",
  "Admin"
];

const roleLabels: Record<Role, string> = {
  ShippingReceiving: "Shipping/Receiving",
  Purchase: "Purchase",
  Engineer: "Engineer",
  Manufacturer: "Manufacturer",
  Paint: "Paint",
  Sales: "Sales",
  Technician: "Technician",
  Manager: "Manager",
  Admin: "Admin"
};

export default function RolesPage() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Role-Based UI Demo</h1>
      <div className="flex flex-wrap gap-3 mb-8">
        {roles.map((role) => (
          <button
            key={role}
            className={`px-4 py-2 rounded border font-semibold transition bg-white hover:bg-blue-50 shadow-sm ${selectedRole === role ? "border-blue-600 text-blue-700" : "border-gray-300"}`}
            onClick={() => setSelectedRole(role)}
          >
            {roleLabels[role]}
          </button>
        ))}
      </div>
      {selectedRole && (
        <section className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">{roleLabels[selectedRole]}</h2>
          <ul className="list-disc ml-6 space-y-1">
            {roleDescriptions[selectedRole].map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          {/* Placeholders for role-specific UI components */}
          <div className="mt-6">
            <RoleDemo role={selectedRole} />
          </div>
        </section>
      )}
    </main>
  );
}

function RoleDemo({ role }: { role: Role }) {
  // Minimalist, Apple-style, clean UI for each role with realistic widgets and dummy data
  switch (role) {
    case "Engineer":
      return (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold mb-2">Engineer BOM Editor</h3>
          <div className="border p-4 rounded bg-gray-50">
            <form className="space-y-2">
              <div>
                <label className="block font-medium">Product Name</label>
                <input className="input" placeholder="e.g. Widget X" defaultValue="" />
                <span className="text-xs text-gray-400 ml-2">Required</span>
              </div>
              <div>
                <label className="block font-medium">Revision</label>
                <input className="input" placeholder="e.g. A1" defaultValue="" />
              </div>
              <div>
                <label className="block font-medium">Components</label>
                <textarea className="input" placeholder="part_number, quantity, version, notes"></textarea>
                <span className="text-xs text-gray-400 ml-2">CSV or one per line</span>
              </div>
              <button className="btn-primary" type="button">Create BOM</button>
            </form>
            <div className="mt-4">
              <h4 className="font-semibold">Your BOMs</h4>
              <ul className="list-disc ml-6 text-sm">
                <li>Widget A (Rev A1) <span className="text-gray-400">- Edit</span></li>
                <li>Widget B (Rev B2) <span className="text-gray-400">- Edit</span></li>
              </ul>
            </div>
          </div>
        </div>
      );
    case "Purchase":
      return (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold mb-2">Purchase Orders</h3>
          <div className="border p-4 rounded bg-gray-50">
            <form className="space-y-2">
              <div>
                <label className="block font-medium">Vendor</label>
                <select className="input">
                  <option>Acme Steel</option>
                  <option>Global Fasteners</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Part Number</label>
                <input className="input" placeholder="e.g. P-100" />
              </div>
              <div>
                <label className="block font-medium">Quantity</label>
                <input className="input" type="number" min={1} defaultValue={1} />
              </div>
              <button className="btn-primary" type="button">Create PO</button>
            </form>
            <div className="mt-4">
              <h4 className="font-semibold">Open Purchase Orders</h4>
              <ul className="list-disc ml-6 text-sm">
                <li>#PO-1234 - Acme Steel - 100x P-100 <span className="text-blue-600">submitted</span></li>
                <li>#PO-1235 - Global Fasteners - 50x F-200 <span className="text-gray-400">draft</span></li>
              </ul>
            </div>
          </div>
        </div>
      );
    case "ShippingReceiving":
      return (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold mb-2">Shipping/Receiving</h3>
          <div className="border p-4 rounded bg-gray-50">
            <div className="mb-2 font-medium">Incoming Goods</div>
            <ul className="list-disc ml-6 text-sm mb-4">
              <li>PO-1234: 100x P-100 from Acme Steel <button className="btn-secondary ml-2">Mark Received</button></li>
              <li>PO-1235: 50x F-200 from Global Fasteners <button className="btn-secondary ml-2">Mark Received</button></li>
            </ul>
            <div className="mb-2 font-medium">Outbound Shipments</div>
            <ul className="list-disc ml-6 text-sm">
              <li>Order #5678: 10x Widget A <button className="btn-secondary ml-2">Mark Shipped</button></li>
            </ul>
          </div>
        </div>
      );
    case "Technician":
      return (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold mb-2">Technician Tasks</h3>
          <div className="border p-4 rounded bg-gray-50">
            <ul className="list-disc ml-6 text-sm">
              <li>Build Widget A - Due: 2025-05-25 <button className="btn-secondary ml-2">Mark Done</button></li>
              <li>Inspect Inventory - Due: 2025-05-26 <button className="btn-secondary ml-2">Mark Done</button></li>
            </ul>
            <div className="mt-4">
              <label className="block font-medium">Add Comment</label>
              <textarea className="input" placeholder="Notes on completed work"></textarea>
              <button className="btn-primary mt-2" type="button">Submit</button>
            </div>
          </div>
        </div>
      );
    case "Manager":
      return (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold mb-2">Manager Workflow</h3>
          <div className="border p-4 rounded bg-gray-50">
            <div className="mb-2 font-medium">Assign Tasks</div>
            <form className="flex gap-2 mb-4">
              <input className="input" placeholder="Technician name" />
              <input className="input" placeholder="Task" />
              <button className="btn-primary" type="button">Assign</button>
            </form>
            <div className="mb-2 font-medium">Approve POs</div>
            <ul className="list-disc ml-6 text-sm">
              <li>PO-1234 - Acme Steel <button className="btn-secondary ml-2">Approve</button></li>
              <li>PO-1235 - Global Fasteners <button className="btn-secondary ml-2">Approve</button></li>
            </ul>
          </div>
        </div>
      );
    case "Admin":
      return (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold mb-2">Admin Panel</h3>
          <div className="border p-4 rounded bg-gray-50">
            <div className="mb-2 font-medium">Import/Export BOMs</div>
            <div className="flex gap-2 mb-4">
              <button className="btn-secondary">Import</button>
              <button className="btn-secondary">Export</button>
            </div>
            <div className="mb-2 font-medium">System Configuration</div>
            <button className="btn-secondary">Edit Settings</button>
          </div>
        </div>
      );
    case "Manufacturer":
      return (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold mb-2">Manufacturing Dashboard</h3>
          <div className="border p-4 rounded bg-gray-50">
            <div className="mb-2 font-medium">Log Time</div>
            <form className="flex gap-2 mb-4">
              <input className="input" type="date" />
              <input className="input" type="number" min={0} placeholder="Hours" />
              <button className="btn-primary" type="button">Log</button>
            </form>
            <div className="mb-2 font-medium">Mark Inventory Consumed</div>
            <input className="input mb-2" placeholder="Part Number" />
            <button className="btn-secondary mb-4">Mark Consumed</button>
            <div className="mb-2 font-medium">Report Build Issues</div>
            <textarea className="input mb-2" placeholder="Describe issue"></textarea>
            <button className="btn-secondary">Report</button>
          </div>
        </div>
      );
    case "Paint":
      return (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold mb-2">Paint Workflow</h3>
          <div className="border p-4 rounded bg-gray-50">
            <div className="mb-2 font-medium">Items to Paint</div>
            <ul className="list-disc ml-6 text-sm mb-4">
              <li>Widget A - Status: raw <button className="btn-secondary ml-2">Mark Painted</button></li>
              <li>Widget B - Status: welded <button className="btn-secondary ml-2">Mark Painted</button></li>
            </ul>
            <div className="mb-2 font-medium">Record Completion/Issue</div>
            <textarea className="input mb-2" placeholder="Notes"></textarea>
            <button className="btn-primary">Submit</button>
          </div>
        </div>
      );
    case "Sales":
      return (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold mb-2">Sales Dashboard</h3>
          <div className="border p-4 rounded bg-gray-50">
            <div className="mb-2 font-medium">Finished Goods</div>
            <ul className="list-disc ml-6 text-sm mb-4">
              <li>Widget A - 10 in stock <button className="btn-secondary ml-2">Allocate</button></li>
              <li>Widget B - 5 in stock <button className="btn-secondary ml-2">Allocate</button></li>
            </ul>
            <div className="mb-2 font-medium">Order Calendar</div>
            <div className="bg-white border rounded p-2 text-sm text-gray-500">No upcoming shipments</div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
