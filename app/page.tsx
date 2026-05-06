"use client";

import { useMemo, useState } from "react";

const initialLeads = [
  {
    name: "John Smith",
    company: "Smith Roofing",
    source: "Website Form",
    status: "Recovered",
    value: 1250,
    priority: "High",
    lastContact: "2 min ago",
  },
  {
    name: "Sarah Johnson",
    company: "Johnson Dental",
    source: "Missed Call",
    status: "AI Contacted",
    value: 890,
    priority: "Medium",
    lastContact: "9 min ago",
  },
  {
    name: "Michael Brown",
    company: "Brown HVAC",
    source: "Facebook Ad",
    status: "Pending",
    value: 2400,
    priority: "High",
    lastContact: "18 min ago",
  },
  {
    name: "Emily Carter",
    company: "Carter Med Spa",
    source: "Old Lead",
    status: "Recovered",
    value: 3200,
    priority: "High",
    lastContact: "31 min ago",
  },
  {
    name: "David Wilson",
    company: "Wilson Plumbing",
    source: "Text Inquiry",
    status: "Needs Review",
    value: 740,
    priority: "Low",
    lastContact: "1 hr ago",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [leads, setLeads] = useState(initialLeads);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [value, setValue] = useState("");

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) =>
      `${lead.name} ${lead.company} ${lead.source} ${lead.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, leads]);

  const totalValue = leads.reduce((sum, lead) => sum + lead.value, 0);
  const recoveredValue = leads
    .filter((lead) => lead.status === "Recovered")
    .reduce((sum, lead) => sum + lead.value, 0);

  function addLead() {
    if (!name || !company || !value) return;

    setLeads([
      {
        name,
        company,
        source: "Manual Entry",
        status: "Pending",
        value: Number(value),
        priority: "Medium",
        lastContact: "Just now",
      },
      ...leads,
    ]);

    setName("");
    setCompany("");
    setValue("");
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-black px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Disciplina AI
              </p>
              <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                RevenueRecovery
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                Capture missed leads, trigger instant AI follow-ups, recover lost
                revenue, and track every client opportunity from one command
                center.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl">
              <p className="text-sm text-zinc-400">Live Recovery Status</p>
              <p className="mt-2 text-3xl font-bold text-green-400">Active</p>
              <p className="mt-2 text-sm text-zinc-500">
                AI agent monitoring leads 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-400">Total Leads</p>
            <h2 className="mt-3 text-4xl font-bold">{leads.length}</h2>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-400">Pipeline Value</p>
            <h2 className="mt-3 text-4xl font-bold">
              ${totalValue.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-400">Recovered Revenue</p>
            <h2 className="mt-3 text-4xl font-bold text-green-400">
              ${recoveredValue.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-400">AI Responses Sent</p>
            <h2 className="mt-3 text-4xl font-bold">1,024</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950">
            <div className="flex flex-col gap-4 border-b border-zinc-800 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Lead Recovery Inbox</h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Search, track, and prioritize every opportunity.
                </p>
              </div>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search leads..."
                className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead>
                  <tr className="border-b border-zinc-800 bg-black text-left text-sm text-zinc-400">
                    <th className="p-4">Lead</th>
                    <th className="p-4">Source</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Priority</th>
                    <th className="p-4">Value</th>
                    <th className="p-4">Last Contact</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLeads.map((lead, index) => (
                    <tr key={index} className="border-b border-zinc-800">
                      <td className="p-4">
                        <p className="font-semibold">{lead.name}</p>
                        <p className="text-sm text-zinc-500">{lead.company}</p>
                      </td>
                      <td className="p-4 text-zinc-300">{lead.source}</td>
                      <td className="p-4">
                        <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4">{lead.priority}</td>
                      <td className="p-4 font-semibold">
                        ${lead.value.toLocaleString()}
                      </td>
                      <td className="p-4 text-zinc-400">{lead.lastContact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="text-2xl font-bold">Add New Lead</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Temporary frontend entry system before Supabase production.
              </p>

              <div className="mt-5 space-y-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Lead name"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
                />

                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
                />

                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Estimated value"
                  type="number"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
                />

                <button
                  onClick={addLead}
                  className="w-full rounded-xl bg-white px-4 py-3 font-bold text-black transition hover:bg-zinc-200"
                >
                  Add Lead
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="text-2xl font-bold">AI Agent Actions</h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-black p-4">
                  <p className="font-semibold">Instant Follow-Up</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Sends replies to missed calls, forms, and text inquiries.
                  </p>
                </div>

                <div className="rounded-2xl bg-black p-4">
                  <p className="font-semibold">Lead Reactivation</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Reaches out to old leads and no-shows automatically.
                  </p>
                </div>

                <div className="rounded-2xl bg-black p-4">
                  <p className="font-semibold">Revenue Tracking</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Shows pipeline value, recovered revenue, and opportunity loss.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-950 to-black p-8">
          <h2 className="text-3xl font-bold">Next Production Steps</h2>
          <p className="mt-3 max-w-3xl text-zinc-400">
            This frontend is now ready to be connected to Supabase for real lead
            storage, Twilio for missed-call/text automation, authentication for
            client accounts, and a custom domain through Vercel.
          </p>
        </div>
      </section>
    </main>
  );
}