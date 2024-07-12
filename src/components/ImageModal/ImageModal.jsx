import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    maxWidth: '90%',
    maxHeight: '90%',
  },
};

Modal.setAppElement('#root'); // Make Modal accessible

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="View Image Modal"
    >
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <div>
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
          <p>Description: {image.description}</p>
        </div>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
