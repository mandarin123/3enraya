import { Restart } from "./Restart";
import { Win } from "./Win";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext"
import { Names } from "./Names";
import { Scoreboard } from "./ScoreBoard";


export const Modal = () => {

  const { show, modalMode } = useContext(ModalContext)

  return (
    <>
    {show && (
      <div className="modal">
          <div className="modal__content">
              <div className="container">
                {modalMode === 'winner' && <Win />}
                {modalMode === 'start' && <Restart />}
                {modalMode === 'names' && <Names />}
                {modalMode === 'score' && <Scoreboard />}
              </div>
          </div>
      </div>
    )}

    </>
  )
}
