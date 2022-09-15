import React from 'react'
import classes from './Modal.module.css'
import ReactDom from "react-dom";


const Background = function (props) {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};


const ModalOverlay = function (props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = function (props) {
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <Background onClose={props.onClose} />,
                portalElement
            )}
            {ReactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    );
};


export default Modal;
