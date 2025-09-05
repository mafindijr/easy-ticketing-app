import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
}

export default useModal;



//use inside component
// // ...existing code...
// import useModal from "../hooks/useModal";
// import UseModal from "./UseModal";

// function MyComponent() {
//   const { isOpen, open, close } = useModal();

//   return (
//     <div>
//       <button onClick={open}>Open Modal</button>
//       <UseModal isOpen={isOpen} onClose={close}>
//         <p>Hello from the modal!</p>
//       </UseModal>
//     </div>
//   );
// }
// // ...existing code...