import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Ethereum } from "@thirdweb-dev/chains";

// Replace with your actual thirdweb client ID
const sdk = new ThirdwebSDK(Ethereum, {
  clientId: "YOUR_CLIENT_ID",
});

export default sdk;
