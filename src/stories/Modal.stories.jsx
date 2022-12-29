import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Modal } from "../components/Modal";

const stories = storiesOf('App Test', module)

stories.add('App', () => {
    const [showModal, setShowModal] = useState(false);

    const modalStyle = {
        modalOverlay: {
            background: ''
        },
        modalWrapper: {
            width: '',
            height: '',
            boxShadow: '',
            background: '',
            borderRadius: '',
            border: '',
        },
        modalContent: {
            color: '',
            background: '',
            fontSize: '',
            fontWeight: '',
            fontFamily: ''
        },
        closeModalButton: {
            color: ''
        }
    }

    return (
        <>
            <button onClick={() => setShowModal(prev => !prev)}>I'm a modal</button>
            <Modal showModal={showModal} setShowModal={setShowModal} modalStyle={modalStyle}>
            <h2>Employee created!</h2>
            </Modal>
        </>
    )
})