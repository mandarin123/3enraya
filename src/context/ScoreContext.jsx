import { createContext, useState } from "react";


const ScoreContext = createContext();

const ScoreState = ( props ) => {
    
    const [ player, setPlayer ] = useState({
        "name": "",
        "score": 0
    });
    
    const [ player2, setPlayer2 ] = useState({
        "name": "",
        "score": 0
    });
        
    const [ scoreboard, setScoreboard ] = useState([]);
    
    return (
        <ScoreContext.Provider value={{
            player,
            setPlayer,
            scoreboard,
            setScoreboard,
            player2,
            setPlayer2
        }}
        >
            { props.children }
        </ScoreContext.Provider>
    )
};

export { ScoreContext, ScoreState };