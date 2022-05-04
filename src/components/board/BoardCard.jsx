import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { Oicon } from "../icons/Oicon"
import { Xicon } from "../icons/Xicon"

export const BoardCard = ({ user="nouser", active, index }) => {

    const { handleSquareClick } = useContext(GameContext)


    return (
        <div 
            className={ `card ${active && user === "x" && "shadow-blue"} 
                ${ active && user === "o" && "shadow-yellow"}
                ${ !active ? "shadow-gray" : "active"}`}
            onClick={ () => handleSquareClick(index) }        
        >
            { user === 'x' && <Xicon color={ active && 'dark' } size="lg"/> }
            { user === 'o' && <Oicon color={ active && 'dark' } size="lg"/> }
        </div>
    )
}
