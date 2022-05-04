import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { ModalContext } from "../../context/ModalContext";

export const Restart = () => {

    const { handleReset } = useContext(GameContext);

    const { hideModal } = useContext( ModalContext );

    return (
        <div className="restart">
            <h3 className="restart__title">Restart Game?</h3>       
            <div className="restart__btns">
                <button className="btn btn-sm" onClick={ hideModal }>
                    {" "}
                    no, cancel
                </button>
                <button className="btn btn-sm btn-yellow" onClick={ handleReset }>
                    {" "}
                    yes, restart
                </button>
            </div>
        </div>
    )
}
