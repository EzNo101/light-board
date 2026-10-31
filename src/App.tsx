import { useState } from "react";

// score of both teams
interface State {
  home: number;
  guest: number;
}

const INITIAL_STATE: State = {
  home: 0,
  guest: 0,
};

function App() {
  const [state, setState] = useState<State>(INITIAL_STATE);

  // message showing which team is leading
  let statusMessage: string;
  if (state.home > state.guest) {
    statusMessage = "Vyhrávají Domácí";
  } else if (state.guest > state.home) {
    statusMessage = "Vyhrávají Hosté";
  } else {
    statusMessage = "Zápas je nerozhodný";
  }

  const addPoint = (team: keyof State): void => {
    setState((previousState) => ({
      ...previousState,
      [team]: previousState[team] + 1,
    }));
  };

  const resetMatch = (): void => {
    setState(INITIAL_STATE);
  };

  return (
    <div className="scoreboard">
      <h1 className="title">Světelná tabule</h1>

      <div className="score">
        <div className="team">
          <h2>Domácí</h2>
          <div className="score-value">{state.home}</div>
          <button onClick={() => addPoint("home")}>+1 bod</button>
        </div>

        <div className="separator">:</div>

        <div className="team">
          <h2>Hosté</h2>
          <div className="score-value">{state.guest}</div>
          <button onClick={() => addPoint("guest")}>+1 bod</button>
        </div>
      </div>

      <p className="status">{statusMessage}</p>

      <button className="reset-button" onClick={resetMatch}>
        Reset zápasu
      </button>
    </div>
  );
}

export default App;
