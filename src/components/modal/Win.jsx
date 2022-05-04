import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { ScoreContext } from "../../context/ScoreContext";
import { Oicon } from "../icons/Oicon";
import { Xicon } from "../icons/Xicon";

export const Win = () => {
  
  const { winner, handleReset, handleNextRound, ties, activeUser, showScoreBoard, playMode } = useContext(GameContext);
  const { player, setPlayer, scoreboard, player2, setPlayer2 } =  useContext(ScoreContext);

  const showTies = (player) => {
    
    const existingPlayer = scoreboard.find(x => x.name === player.name);
    const existingPlayer2 = scoreboard.find(x => x.name === player2.name);

    if( playMode === 'cpu' ){
      if(activeUser === 'x'){
        if ( !existingPlayer ) {
          player.score += ties.x;
          setPlayer(player);
          scoreboard.push(player);
        } else {
          existingPlayer.score += ties.x;
        }
      }else if (activeUser === 'o'){
        if ( !existingPlayer ) {
          player.score += ties.o;
          setPlayer(player);
          scoreboard.push(player);
        } else {
          existingPlayer.score += ties.o;
        }
      };
      ties.x = 0;
      ties.o = 0;
    }else if ( playMode === 'user' ){
      if(activeUser === 'x'){
        if ( !existingPlayer && !existingPlayer2) {
          player.score += ties.x;
          player2.score += ties.o;
          setPlayer(player);
          setPlayer2(player2);
          scoreboard.push(player);
          scoreboard.push(player2);
        } else {
          existingPlayer.score += ties.x;
          existingPlayer2.score += ties.o;
        }
      }else if (activeUser === 'o'){
        if ( !existingPlayer && !existingPlayer2 ) {
          player.score += ties.o;
          player2.score += ties.x;
          setPlayer(player);
          setPlayer2(player2);
          scoreboard.push(player);
          scoreboard.push(player2);
        } else {
          existingPlayer.score += ties.o;
          existingPlayer2.score += ties.x;
        }
      };
      ties.x = 0;
      ties.o = 0;
    };
  };

  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          <p>you win!</p>
          <h3
            className={`score__title ${
              winner === "o" ? "text-yellow" : "text-blue"
            }`}
          >
            {winner === "x" ? <Xicon /> : <Oicon />}
            Takes the round
          </h3>
        </>
      ) : (
        <h3 className="score__title text-yellow">No Winner</h3>
      )}
      <div className="score__btns">
        <button
          className="btn btn-sm"
          onClick={() => {
            handleReset();
            showTies(player);
            showScoreBoard();
          }}
        >
          Quit
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handleNextRound}>
          Next Round
        </button>
      </div>
    </div>
  );
};
