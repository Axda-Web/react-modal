import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';

import StyledModal from './Modal.styled';


export const Modal = ({ showModal, setShowModal, modalStyle, children }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <StyledModal onClick={closeModal} ref={modalRef} modalStyle={modalStyle}>
            <animated.div style={animation}>
                <div className='modal-wrapper' showModal={showModal}>
                <div className='modal-content'>
                    {children}
                </div>
                <MdClose
                    className='close-modal-button'
                    aria-label='Close modal'
                    onClick={() => setShowModal(prev => !prev)}
                />
                </div>
            </animated.div>
        </StyledModal>
      ) : null}
    </>
  );
};
