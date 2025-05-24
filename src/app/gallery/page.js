'use client';

import { useContract, useNFTs } from "@thirdweb-dev/react";
import Image from 'next/image';

const contractAddress = "0x26e02fD009941357d412afAb08D3F7FC560F258F";

export default function GalleryPage() {
  const { contract } = useContract(contractAddress, "nft-drop");
  const { data: nfts, isLoading } = useNFTs(contract);

  const getRarityColor = (value) => {
    switch (value.toLowerCase()) {
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-500';
      case 'legendary': return 'text-yellow-400';
      case 'mythic': return 'text-red-500';
      default: return 'text-gray-300';
    }
  };

  const getRankColor = (value) => {
    switch (value.toLowerCase()) {
      case 'adept': return 'text-teal-400';
      case 'master': return 'text-green-400';
      case 'elite': return 'text-orange-400';
      default: return 'text-gray-300';
    }
  };

  const getClassColor = (value) => {
    switch (value.toLowerCase()) {
      case 'enforcer': return 'text-pink-400';
      case 'mage': return 'text-indigo-400';
      default: return 'text-gray-300';
    }
  };

  const getFactionColor = (value) => {
    switch (value.toLowerCase()) {
      case 'undead': return 'text-rose-400';
      case 'celestial': return 'text-cyan-400';
      case 'infernal': return 'text-orange-500';
      case 'nature': return 'text-green-400';
      default: return 'text-gray-300';
    }
  };

  const getAttributeColor = (trait, value) => {
    switch (trait.toLowerCase()) {
      case 'rarity': return getRarityColor(value);
      case 'rank': return getRankColor(value);
      case 'class': return getClassColor(value);
      case 'faction': return getFactionColor(value);
      default: return 'text-gray-300';
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Purrgatory NFT Gallery</h1>

      {isLoading ? (
        <p className="text-center text-gray-400">Loading NFTs...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {nfts?.map((nft) => (
            <div
              key={nft.metadata.id}
              className="flex flex-col items-center text-center bg-zinc-900 p-6 rounded-2xl shadow-md w-full max-w-xs"
            >
              <Image
                src={nft.metadata.image}
                alt={nft.metadata.name}
                width={256}
                height={256}
                className="object-contain mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-2">{nft.metadata.name}</h2>

              <div className="space-y-1 text-sm">
                {nft.metadata.attributes?.map((attr, index) => (
                  <div key={index} className="flex justify-center gap-2">
                    <span className="font-medium text-gray-400">{attr.trait_type}:</span>
                    <span className={getAttributeColor(attr.trait_type, attr.value)}>
                      {attr.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
