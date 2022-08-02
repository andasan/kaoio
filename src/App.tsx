import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let faceio: any;
  useEffect(() => {
    faceio = new faceIO("Your Public ID goes here");
  }, []);

  return (
    <section>
      <h1>Face Authentication by KaoIO</h1>
      <button>Sign-in</button>
      <button>Log-in</button>
    </section>
  );
}

export default App;
