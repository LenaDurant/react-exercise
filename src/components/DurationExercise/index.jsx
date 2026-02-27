import { useState } from "react";
import { useEffect } from "react";

function DurationExercise({name}) {
  const [secs, setSecs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    if(!isRunning) return; 

      const interval = setInterval(() => setSecs(priorSecs => priorSecs + 1),1000);
    
    return () => clearInterval(interval);
    }, [isRunning]);
  
    const mins = Math.floor(seconds / 60).toString();
    const seconds = (seconds % 60).toString();
  
  return (
    <div>
      <h3>{name}</h3>
      <h4>{mins}:{secs}</h4>
      <button onClick={() => setIsRunning(true)}> Start
      </button>

      <button onClick={() => {setIsRunning(false);
        setSecs(0);
        }}
        > Reset 
      </button>
    </div>
  );
}

export default DurationExercise;