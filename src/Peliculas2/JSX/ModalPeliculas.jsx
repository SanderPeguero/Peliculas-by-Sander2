import { useState, useEffect } from 'react'
import Styles from "../CSS/Modal.module.css";
import { MovieDetails } from "./MovieDetails";
import { Home } from ".//Home"
import Modal from 'react-modal'
import { useNavigate } from "react-router-dom";

Modal.setAppElement('#root')

export function ModalPeliculas() {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    
    let navigate = useNavigate();
//    const [Navigate, setNavigate] = useState(false);

    useEffect(() => {
    if (!modalIsOpen){
        navigate
        return navigate(-1);
    }
    },[modalIsOpen, setModalIsOpen]);

    return (
        <>
            {/* <Home/> */}
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
            style={
                {
                    overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.10)',
                            // position: 'sticky',
                            // content: 'wrap',
                            // width: '1000px',
                            // height: '800px',
                            // display: 'flex',
                            
                            margin: 'none',
                            // marginBottom: '4rem',
                            // marginLeft: '9rem',
                            // marginRight: '9rem',
                            // inset: '2rem'                            
                        },
                    content: {
                            //  color: 'black',
                             background: 'rgba(0, 0, 0, 0.85)',
                             border: 'none',
                             padding: '2%',
                             width: '1000px',
                             height: '700px',
                             overflow: 'hidden',
                             top:'15%',
                             left:'10%',
                            //  margin: '4rem',
                            //  inset: '0'
                        }
                    }
                }
            >
                <MovieDetails/>
            </Modal>
        </>
    )

}