import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import { Oicon } from '../icons/Oicon'
import { Xicon } from '../icons/Xicon'

export const Start = () => {

    const { activeUser, setActiveUser, changePlayMode } = useContext( GameContext );
  
    return (
        <div className="start">
            <div className="start__header">
                <Xicon />
                <Oicon />
            </div>
            
            <div className="card shadow-gray">
                <h1 className="text-lg">Pick player 1'st mark</h1>
                <div className="start__players">
                    <span 
                        className={ activeUser === "x" ? "start__players--active" : ""}
                        onClick={ () => setActiveUser("x") }
                    >
                        <Xicon color={ activeUser === "x" ? "dark" : "light" } />
                    </span>
                    <span 
                        className={ activeUser === "o" ? "start__players--active" : ""}
                        onClick={ () => setActiveUser("o") }
                    >
                        <Oicon color={ activeUser === "o" ? "dark" : "light" } />
                    </span>
                </div>
                <p className="text-light">Remember: x goes first</p>
            </div>
            
            <div className="start__btns">
                <button className="btn btn-yellow" onClick={ () => changePlayMode('cpu') }>New game (vs CPU)</button>
                <button className="btn btn-blue" onClick={ () => changePlayMode('user') }>New game (vs Player)</button>
            </div>
        </div>
    )
}
