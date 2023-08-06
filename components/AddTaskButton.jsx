import React, { useState } from "react";
import {
  useToast,
  useDisclosure,
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Stack,
  ModalContent,
} from "@chakra-ui/react";
import { ACCOUNTABILITY_CONTRACT } from "../const/address";
import { Web3Button } from "@thirdweb-dev/react";

const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [task, setTask] = useState("");

  return (
    <Box>
      <Button onClick={onOpen}>Add Task</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={8}>
              <Text>
                Add a task to your accountability list. All tasks must be
                completed to receive deposit back.
              </Text>
              <Box>
                <Text fontWeight={"bold"}>Task:</Text>
                <Input
                  placeholder="Your task here."
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </Box>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Web3Button
              contractAddress={ACCOUNTABILITY_CONTRACT}
              action={(contract) => contract.call("createTask", [task])}
              onSuccess={() => {
                onClose();
                setTask("");
                toast({
                  title: "Task added.",
                  description: "Your new task has been added to your list.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
            >
              Add Task
            </Web3Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddTask;
