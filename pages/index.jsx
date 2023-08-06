import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Container, Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import AccountabilityCard from "../components/AccountabilityCard";

export default function Home() {
  const address = useAddress();

  return (
    <Container maxW={"1440px"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        flexDirection={"column"}
      >
        <ConnectWallet />
        <Box h={"20px"}></Box>
        {address && <AccountabilityCard />}
      </Flex>
    </Container>
  );
}
