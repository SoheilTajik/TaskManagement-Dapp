import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./index";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";
const clientId = "75f91098f80b0aa81463e1dce751164e";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain} clientId="">
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
