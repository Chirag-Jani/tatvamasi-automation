import { Modal, Fade, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const ZoomedImage = ({ open, handleClose, src }) => {
  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 1)", // Adjust opacity here
            borderRadius: "10px",
            padding: "20px",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <IconButton
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={src}
            alt=""
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </div>
      </Fade>
    </Modal>
  );
};

export default ZoomedImage;
