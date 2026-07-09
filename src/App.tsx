import { useState } from "react";
import "./App.css";
import { Cube3D } from "./Cube3D";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>test ...</p>
        <h1 className="text-4xl font-bold mb-8">TWW React App</h1>
      </div>

      <div className="mb-8">
        <Cube3D />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
