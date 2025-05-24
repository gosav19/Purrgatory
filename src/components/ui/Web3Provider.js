'use client';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { mainnet, polygon, arbitrum } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThirdwebProvider } from '@thirdweb-dev/react'; // ✅ Import this

const config = getDefaultConfig({
  appName: 'Purrgatory NFT',
  projectId: 'cc679bc0fc71d71f1481af44b07ddf34',
  chains: [mainnet, polygon, arbitrum],
  ssr: true,
});

const queryClient = new QueryClient();

export default function Web3Provider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <ThirdwebProvider // ✅ Wrap inside this
          activeChain="ethereum"
          clientId="4a4a767d0a73c9933ab242479b7f95ad"
        >
          <RainbowKitProvider
            chains={config.chains}
            theme={darkTheme()}
            modalSize="compact"
          >
            {children}
          </RainbowKitProvider>
        </ThirdwebProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}

