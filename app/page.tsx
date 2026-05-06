export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold">RevenueRecovery</h1>
      <p className="text-zinc-400 mt-4">
        AI-powered lead recovery dashboard by Disciplina AI.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-zinc-400">Leads Captured</p>
          <h2 className="text-4xl font-bold">148</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-zinc-400">Revenue Recovered</p>
          <h2 className="text-4xl font-bold">$12,480</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-zinc-400">AI Responses Sent</p>
          <h2 className="text-4xl font-bold">1,024</h2>
        </div>
      </div>
    </main>
  );
}