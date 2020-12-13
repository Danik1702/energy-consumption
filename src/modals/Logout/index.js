import React from "react";
import Modal from "react-modal";

import styles from "./logout.module.scss";

Modal.setAppElement("#root");

export const LogoutModal = ({ handleCloseModal, isOpen, onLogoutClick }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={styles.container}
      overlayClassName={styles.overlay}
    >
      <div className={styles.logoutWrapper} onClick={onLogoutClick}>
        <p className={styles.logoutText}>
          Вийти
        </p>
      </div>
    </Modal>
  );
};
