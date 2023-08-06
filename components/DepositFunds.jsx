import React, { useState } from "react";
import { Stack, Box, Text, Input } from "@chakra-ui/react";
import { Web3Button } from "@thirdweb-dev/react";
import { ACCOUNTABILITY_CONTRACT } from "../const/address";
import { ethers } from "ethers";

const DepositFunds = () => {
  const [depositamount, setDepositAmount] = useState(0); // set initial state to 0
  return (
    <Stack spacing={8}>
      <Box mt={10}>
        <Text fontSize={"2xl"} mb={8}>
          You currently don`t have a goal set
        </Text>
        <Text>
          Desposit funds that will be transferred back once you complete the
          tasks you set
        </Text>
      </Box>

      <Box mt={10}>
        <Text fontSize={"2xl"} mb={8}>
          Deposit Amount
        </Text>
        <Input
          placeholder="0.0"
          type="number"
          value={depositamount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
      </Box>
      <Web3Button
        contractAddress={ACCOUNTABILITY_CONTRACT}
        action={(contract) =>
          contract.call("depositFunds", [], {
            value: ethers.utils.parseEther(depositamount.toString()),
          })
        }
      >
        Deposit to start
      </Web3Button>
    </Stack>
  );
};

export default DepositFunds;
