"use client";

export default function RoadmapPage() {
  const milestones = [
    { title: "Phase 1", desc: "Launch website & community." },
    { title: "Phase 2", desc: "Minting live and NFT reveal." },
    { title: "Phase 3", desc: "Exclusive events & collabs." },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>
      <ul className="space-y-4">
        {milestones.map((m, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-bold">{m.title}</h3>
            <p>{m.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
