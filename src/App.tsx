import { useState } from "react";
import { Button } from "./Button";

export function App() {
  const [message, setMessage] = useState("React");
  return (
    <div>
      <div>Hello World</div>
      <p>{message}</p>
      <Button disabled={false} onClick={() => setMessage("New message!")}>
        Change message
      </Button>
    </div>
  );
}
