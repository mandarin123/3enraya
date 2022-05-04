import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { ScoreContext } from "../../context/ScoreContext";

export const Scoreboard = () => {
  const { scoreboard } = useContext(ScoreContext);
  const { hideModal } = useContext(ModalContext);

  const sortedItems = scoreboard.sort((a,b) => {
    return b.score - a.score;
  });

  return (
    <div className="restart">
      {console.log(scoreboard)}
      <h3 className="restart__title">Scoreboard</h3>
      <div className="restart__btns">
        <div className="table__container">
          <ul className="table">
            <li className="table__header">
              <div className="col col-1">Player's Name</div>
              <div className="col col-2">Player's Score</div>
            </li>
            {
              sortedItems.map((player) => {
                return (
                <li className="table__row" key={`player_${player.name}`}>
                  <div className="col col-1">
                    {player.name}
                  </div>
                  <div className="col col-2">
                    {player.score}
                  </div>
                </li>
              )})
            }
          </ul>
        </div>
      </div>
      <button
        className="btn btn-sm"
        onClick={() => {
          hideModal();
        }}
      >
        Quit
      </button>
    </div>
  );
};
