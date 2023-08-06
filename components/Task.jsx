import { Input, Spinner, Stack, Text } from "@chakra-ui/react";
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import { ACCOUNTABILITY_CONTRACT } from "../const/address";
import { useState } from "react";
import TaskCard from "./TaskCard";
import AddTask from "./AddTaskButton";

const Tasks = () => {
  const { contract } = useContract(ACCOUNTABILITY_CONTRACT);

  const { data: taskCount, isLoading: isTaskCountLoading } = useContractRead(
    contract,
    "getTaskCount"
  );

  const [firstTask, setFirstTask] = useState("");

  const { data: tasks, isLoading: isTasksLoading } = useContractRead(
    contract,
    "getTasks"
  );

  return (
    <Stack>
      {!isTaskCountLoading ? (
        taskCount != 0 ? (
          <Stack>
            {!isTasksLoading ? (
              tasks.map((task, index) => (
                <TaskCard
                  key={index}
                  taskId={index}
                  task={task[0]}
                  isCompleted={task.isCompleted}
                />
              ))
            ) : (
              <Spinner />
            )}
            <AddTask />
          </Stack>
        ) : (
          <Stack>
            <Text textAlign={"left"}>Create a your first task:</Text>
            <Input
              placeholder="Your first task."
              type="text"
              value={firstTask}
              onChange={(e) => setFirstTask(e.target.value)}
            />
            <Web3Button
              contractAddress={ACCOUNTABILITY_CONTRACT}
              action={(contract) => contract.call("createTask", [firstTask])}
            >
              Create task
            </Web3Button>
          </Stack>
        )
      ) : (
        <Spinner />
      )}
    </Stack>
  );
};

export default Tasks;
