import { Button } from "./Button";
import { useState } from "react";
import axios from "axios";

interface Task {
  id: string;
  title: string;
}

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleClick = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );
      setTasks(data);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <p>Tasks from API</p>
      <Button disabled={false} onClick={handleClick}>
        Get Tasks
      </Button>

      {tasks.length > 0 &&
        tasks.map((task) => {
          return <p key={task.id}>{task.title}</p>;
        })}
      {errorMessage}
    </div>
  );
};
