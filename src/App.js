import { useContext } from "react";
import { Board } from "./components/board/Board";
import { Modal } from "./components/modal/Modal";
import { Start } from "./components/start/Start";
import { GameContext } from "./context/GameContext";

export const App = () => {

  const { screen } = useContext(GameContext);

  return (
    <div className="App">
      <div className="container">
        { screen === 'start' && <Start />}
        { screen === 'game' && <Board />}
      </div>
      <Modal />
    </div>
  );
}


