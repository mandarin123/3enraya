import { createContext, useState } from "react";


const ModalContext = createContext();

const ModalState = ( props ) => {

    const [ show, setShow ] = useState(false);
    const [ mode, setMode ] = useState('winner'); //winner || start    
    
    const showModal = () => setShow(true);
    const hideModal = () => {
        setShow(false);
    };

    return (
        <ModalContext.Provider value={{
            show,
            modalMode: mode,
            setModalMode: setMode,
            showModal,
            hideModal
        }}
        >
            { props.children }
        </ModalContext.Provider>
    )
};

export { ModalContext, ModalState };