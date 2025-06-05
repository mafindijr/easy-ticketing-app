const UseModal = ({ isOpen, onClose, children}) => {
    
    if(!isOpen) return null;

    const handleOverLayClick =(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
        <div
          className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-[1000]"
          onClick={handleOverLayClick}
        >
          <div className="bg-white p-5 rounded-lg relative w-[300px] text-center">
            <button
              className="absolute top-2.5 right-4 text-lg cursor-pointer bg-none border-none"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
        </div>
    );

};


export default UseModal;