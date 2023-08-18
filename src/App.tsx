import { useState } from "react";

export function App() {
  const [message, setMessage] = useState("React");
  return (
    <div>
      <div>Hello World</div>
      <p>{message}</p>
      <button onClick={() => setMessage("New message!")}>Change message</button>
    </div>
  );
}
