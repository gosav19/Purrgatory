"use client";

import { useState } from "react";

const options = ["All", "Common", "Rare", "Epic", "Legendary"];

export default function RarityFilter({ onChange }) {
  const [selected, setSelected] = useState("All");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">Filter by Rarity:</label>
      <select
        value={selected}
        onChange={handleChange}
        className="bg-gray-800 text-white p-2 rounded"
      >
        {options.map((rarity) => (
          <option key={rarity} value={rarity}>
            {rarity}
          </option>
        ))}
      </select>
    </div>
  );
}
