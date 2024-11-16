"use client";

import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider as WagmiProviderCore } from "wagmi";
import { injected, coinbaseWallet } from "@wagmi/connectors";

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    injected({ target: 'metaMask'}),
    coinbaseWallet({ 
      appName: "wagmi",
    })
  ],
})

export const WagmiProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <WagmiProviderCore config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProviderCore>
  )
};
