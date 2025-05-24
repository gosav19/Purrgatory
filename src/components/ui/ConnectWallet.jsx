'use client';

import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button } from '@/components/ui/button';

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div>
      {isConnected ? (
        <div className="flex items-center space-x-4">
          <span className="text-sm text-white">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </span>
          <Button onClick={() => disconnect()} className="bg-red-600 hover:bg-red-700">
            Disconnect
          </Button>
        </div>
      ) : (
        <Button onClick={() => connect()} className="bg-purple-700 hover:bg-purple-800">
          Connect Wallet
        </Button>
      )}
    </div>
  );
}
