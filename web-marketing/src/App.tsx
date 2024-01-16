import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(3);

  return (
    <>
      <Button />
      <p>{count}</p>
    </>
  );
}

export default App;
