import { useState } from 'react'
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import './App.css';

function App() {
  const [chosenExercise, setChosenExercise] = useState(null);
  let exercises = [
    {name: "Push Ups", type: "repetition"},
    {name: "Squats", type: "repetition"},
    {name: "Planks", type: "duration"},
    {name: "Running", type: "duration"},
  ];

  let renExercise = () => {
    if (chosenExercise === null) {
    return (
      <div className="menu">
        <h2>Choose your Challenge</h2>
        {exercises.map((exercise, index) => (
            <button
              key={index}
              className="exercise-button"
              onClick={() => setChosenExercise(exercise)}
              >
              {exercise.name} ({exercise.type})
            </button>
          ))}
      </div>
    );
  } 

  if (chosenExercise.type === "repetition") {
    return <RepetitionExercise name={chosenExercise.name} />;
  }
  if (chosenExercise.type === "duration") {
    return <DurationExercise name={chosenExercise.name} />;
  }
};
  return (
    <div className="app">
      <h1>Body Craze</h1>
      {renExercise()}
    </div>
  );
}

export default App
