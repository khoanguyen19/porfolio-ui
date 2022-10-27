import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Player from "./Player";

const VideoModal = ({ url, open, toggleModal }) => {
  console.log(url);
  return (
    <Modal
      open={open}
      onClose={toggleModal}
      styles={{
        modal: {
          maxWidth: "unset",
          width: "80%",
          padding: "unset",
          overflow: "hidden",
        },
        overlay: {
          background: "rgb(0, 0, 0)",
        },
        closeButton: {
          border: "none",
          background: "rgba(255, 255, 255, 0.7)",
        },
      }}
      center
    >
      <Player url={url} />
    </Modal>
  );
};

export default VideoModal;
