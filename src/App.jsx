function App() {
  const challenges = [
    {
      id: 1,
      title: "Walk 5,000 Steps",
      level: "Easy",
    },
    {
      id: 2,
      title: "Drink 2 Liters of Water",
      level: "Easy",
    },
    {
      id: 3,
      title: "Run 2 Miles",
      level: "Medium",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fitness Challenge Tracker</h1>
      <p>Select a challenge to begin.</p>

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
          <button>Start Challenge</button>
        </div>
      ))}
    </div>
  );
}

export default App;