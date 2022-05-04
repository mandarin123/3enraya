import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ModalState } from './context/ModalContext';
import { GameState } from './context/GameContext';
import { ScoreState } from './context/ScoreContext';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalState>
      <GameState>
        <ScoreState>
          <App />
        </ScoreState>
      </GameState>
    </ModalState>
  </React.StrictMode>,
);