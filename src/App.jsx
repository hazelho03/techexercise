import { useEffect, useState } from "react";
function App() {
  const [challenges, setChallenges] = useState([]);
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Easy");

  useEffect(() => {
    fetch("http://localhost:3001/challenges")
      .then((response) => response.json())
      .then((data) => setChallenges(data));
  }, []);

  function startChallenge(challenge) {
    fetch(`http://localhost:3001/challenges/${challenge.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "In Progress" }),
    })
      .then((response) => response.json())
      .then((updatedChallenge) => {
        setChallenges(
          challenges.map((item) =>
            item.id === updatedChallenge.id ? updatedChallenge : item
          )
        );
      });
  }

  function addChallenge(event) {
    event.preventDefault();

    const newChallenge = {
      title: title,
      level: level,
      status: "Not Started",
    };

    fetch("http://localhost:3001/challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newChallenge),
    })
      .then((response) => response.json())
      .then((data) => {
        setChallenges([...challenges, data]);
        setTitle("");
        setLevel("Easy");
      });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fitness Challenge Tracker</h1>
      <p>This app reads and modifies challenge data stored in a database.</p>

      <form onSubmit={addChallenge} style={{ marginBottom: "20px" }}>
        <h2>Add New Challenge</h2>

        <input
          type="text"
          placeholder="Challenge title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <select value={level} onChange={(event) => setLevel(event.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button type="submit">Add Challenge</button>
      </form>

      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{challenge.title}</h3>
          <p>Level: {challenge.level}</p>
          <p>Status: {challenge.status}</p>
          <button onClick={() => startChallenge(challenge)}>
            Start Challenge
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;