import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const onWrapperClick = event => {
    if (event.target.classList.contains(css.modalWrapper)) onClose();
  };

  return (
    <div className={`${css.modal} ${isOpen ? css.open : ''}`}>
      <div className={css.modalWrapper} onClick={onWrapperClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
