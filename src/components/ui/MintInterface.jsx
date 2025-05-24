"use client";

import { useState } from "react";

export default function MintInterface() {
  const [quantity, setQuantity] = useState(1);

  const handleMint = () => {
    alert(`Minting ${quantity} NFT(s)...`);
    // Here you'd integrate Web3 logic
  };

  return (
    <div className="p-4 bg-gray-900 rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-4">Mint Your Purrgatory NFT</h2>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          min={1}
          max={10}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="bg-gray-800 p-2 rounded w-20 text-center"
        />
        <button
          onClick={handleMint}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
        >
          Mint
        </button>
      </div>
    </div>
  );
}
