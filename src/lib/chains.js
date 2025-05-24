import { mainnet, polygon, arbitrum } from 'wagmi/chains';
import { http } from 'viem';

export const chains = [mainnet, polygon, arbitrum];

export const transports = {
  [mainnet.id]: http(),
  [polygon.id]: http(),
  [arbitrum.id]: http(),
};
