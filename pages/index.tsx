import { add } from "@/functions";
import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
      setResult(null);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Enter numbers"
        />
        <button type="submit">Add</button>
      </form>
      {result !== null && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}
      {error && (
        <div>
          <h2 style={{ color: "red" }}>Error: {error}</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
