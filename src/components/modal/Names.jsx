import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import { ModalContext } from "../../context/ModalContext";
import { ScoreContext } from "../../context/ScoreContext";

export const Names = () => {

  const { playMode } = useContext(GameContext);
  const { hideModal } = useContext(ModalContext);
  const { player, setPlayer, player2, setPlayer2 } = useContext(ScoreContext);

  const onChange = (event) => {
    setPlayer((prev) => ({
      ...player,
      name: event.target.value,
      score: 0,
    }));
  };
  
  const onChangeSecondPlayer = (event) => {
    setPlayer2((prev) => ({
      ...player2,
      name: event.target.value,
      score: 0,
    }));
  }
    
  useEffect(() => {
    // localStorage.setItem("scoreboard", JSON.stringify([{ "name": name, "score": ties.x}]))
    // const scoreBoard = JSON.parse(localStorage.getItem("scoreboard"));
    // setPlayer(scoreBoard.find( x => x.name === name));
    // if( !player ){
    //   setPlayer({"name": name, "score": ties.x});
    //   scoreBoard.push(player);
    //   localStorage.setItem("scoreboard", JSON.stringify(scoreBoard))
    // };
    // console.log("player", player)
    // console.log("scoreboard", scoreBoard)
    // return player;
    // const score = ties.x
    // setPlayer({ "name": name, "score": score });
    // localStorage.setItem("scoreboard", JSON.stringify(player));
    // const player = { "name": name, "score": 5 }
    
    // localStorage.setItem("scoreBoard", JSON.stringify([{"name": name, "score": 5}]))
    // console.log("scoreboard", localStorage.getItem("scoreBoard"))
    // let scoreBoard = JSON.parse(localStorage.getItem("scoreBoard"));
    // console.log("json.parse:scoreboard", scoreBoard)
    // console.log("name",name)
    // let player = scoreBoard.find((x) => x.name === name);
    // console.log("player", player)
    // if( !player ){
    //   player = { "name": name, "score": 0 };
    //   scoreBoard.push(player);
    //   localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
    // } 
    // return player;
  },[]);


  return (
    <div className="name">
      <h3 className="name__title">Enter Players Name</h3>
      <div className="name__btns">
              {playMode === "cpu" ? (
                <div className="input__group">
                  <input 
                    type="text" 
                    name="namePlayer1"
                    onChange={ onChange }
                    required
                    />
                    <span className="input__highlight"></span>
                    <span className="input__bar"></span>
                    <label>Player 1 name's</label>
                  </div>
              ) : (
                <div>
                  <div className="input__group">
                    <input 
                      type="text" 
                      name="namePlayer1"
                      onChange={ onChange }
                      required
                      />
                    <span className="input__highlight"></span>
                    <span className="input__bar"></span>
                    <label>Player 1 name's</label>
                  </div>

                  <div className="input__group">
                    <input 
                      type="text" 
                      name="namePlayer2"
                      onChange={ onChangeSecondPlayer }
                      required
                      />
                    <span className="input__highlight"></span>
                    <span className="input__bar"></span>
                    <label>Player 2 name's</label>
                  </div>
                </div>
                
              )}
              <button className="btn btn-sm" onClick={ hideModal } type="submit">
                {" "}
                Acept
              </button>
      </div>
    </div>
  );
};
