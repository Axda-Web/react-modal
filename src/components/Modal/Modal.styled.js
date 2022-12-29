import styled from "styled-components";

const StyledModal = styled.div`
    
    width: 100vw;
    height: 100vh;
    background: ${({modalStyle}) => modalStyle.modalOverlay.background || 'rgba(0, 0, 0, .5)'};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-wrapper {
        width: ${({modalStyle}) => modalStyle.modalWrapper.width || '500px'};
        height: ${({modalStyle}) => modalStyle.modalWrapper.height || '200px'};
        box-shadow: ${({modalStyle}) => modalStyle.modalWrapper.boxShadow || '0 5px 16px rgba(0, 0, 0, 0.2)'};
        background: ${({modalStyle}) => modalStyle.modalWrapper.background || '#fff'};
        position: relative;
        z-index: 1000;
        border-radius: ${({modalStyle}) => modalStyle.modalWrapper.borderRadius || '5px'};
        display: flex;
        justify-content: center;
        align-items: center;
        border: ${({modalStyle}) => modalStyle.modalWrapper.border || 'none'};
    }

    .modal-content {
        color: ${({modalStyle}) => modalStyle.modalContent.color || 'rgba(0, 0, 0, 0.8)'};
        background: ${({modalStyle}) => modalStyle.modalContent.background || '#fff'};
        font-size: ${({modalStyle}) => modalStyle.modalContent.fontSize || '1.5rem'};
        font-weight: ${({modalStyle}) => modalStyle.modalContent.fontWeight || '700'};
        font-family: ${({modalStyle}) => modalStyle.modalContent.fontFamily || 'inherit'};
    }

    .close-modal-button {
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 32px;
        height: 32px;
        padding: 0;
        z-index: 10;
        color: ${({modalStyle}) => modalStyle.closeModalButton.color || 'rgba(0, 0, 0, 0.8)'};
    }
`

export default StyledModal