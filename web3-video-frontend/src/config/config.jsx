import { mainnet, sepolia } from "viem/chains";
import { http, createConfig } from "wagmi";

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});
