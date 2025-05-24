'use client';

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function NftCard({ nft }) {
  const rarityColors = {
    Common: 'bg-gray-500',
    Uncommon: 'bg-green-500',
    Rare: 'bg-blue-500',
    Epic: 'bg-purple-500',
    Legendary: 'bg-orange-500',
    Mythic: 'bg-red-500',
  };

  const traitColors = {
    rank: 'bg-red-500',
    mainclass: 'bg-blue-500',
    subclass: 'text-pink-400',
  };

  const traitKeys = ['faction', 'rank', 'mainclass', 'subclass'];

  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b from-purple-900/50 to-black/70 rounded-2xl overflow-hidden border border-purple-700/50 shadow-lg"
    >
      <div className="relative aspect-square">
        <Image 
          src={nft.image} 
          alt={nft.name}
          fill
          style={{ objectFit: 'cover' }}  
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{nft.name}</h3>
          <Badge className={`${rarityColors[nft.rarity] || 'bg-gray-700'} text-white`}>
            {nft.rarity}
          </Badge>
        </div>
        <p className="text-sm text-gray-300 mb-3">{nft.description}</p>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {traitKeys.map((key) => {
            const value = nft[key];
            const colorClass = traitColors[key.toLowerCase()] || 'text-white';

            return (
              <div key={key} className="bg-purple-900/30 p-2 rounded">
                <span className="block text-gray-400 capitalize">{key}</span>
                <span className={`font-medium ${colorClass}`}>
                  {value}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-purple-800/30 flex justify-between items-center">
          <span className="font-bold text-purple-300"># {nft.id}</span>
          {nft.price && (
            <span className="font-medium">
              {nft.price} ETH
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
