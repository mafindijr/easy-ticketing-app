const Modal = ({ isOpen, onClose, children}) => {
    
    if(!isOpen) return null;

    const handleOverLayClick =(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
        <div style={styles.overlay} onClick={handleOverLayClick}>

          <div style={styles.modal}>
            <button style={styles.closeBtn} onClick={onClose}>
            X
            </button>

            {children}

          </div>
        </div>
    );

};


const styles = {
    overlay: {
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    modal: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      position: 'relative',
      width: '300px',
      textAlign: 'center'
    },
    closeBtn: {
      position: 'absolute',
      top: '10px',
      right: '15px',
      fontSize: '18px',
      cursor: 'pointer',
      background: 'none',
      border: 'none'
    }
};


export default Modal;