import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const whatsappTheme = createTheme({
  palette: {
    primary: {
      main: "#25D366", // WhatsApp green color
    },
  },
});

const contacts = [
  { number: "+919558971777", name: "Electrical Inquiry" },
  { number: "+919898041644", name: "Automation Inquiry" },
];

const FloatingWhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setQuery("");
  };

  const handleWhatsAppClick = (number, name) => {
    setSelectedContact({ number, name });
    setOpen(true);
  };

  const handleSendWhatsAppMessage = () => {
    if (selectedContact) {
      const url = `https://wa.me/${
        selectedContact.number
      }?text=${encodeURIComponent(query)}`;
      window.open(url, "_blank");
      handleClose();
    }
  };

  return (
    <ThemeProvider theme={whatsappTheme}>
      <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
        <WhatsAppIcon
          onClick={handleOpen}
          sx={{
            fontSize: 40,
            color: "#FFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
            "&:hover": {
              backgroundColor: "#128C7E",
            },
            backgroundColor: "#25D366",
            padding: "10px",
          }}
        />

        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle
            style={{
              backgroundColor: "#25D366",
              color: "#fff",
              fontSize: "1.2rem",
              padding: "16px 24px",
            }}
          >
            Send Message via WhatsApp
          </DialogTitle>
          <DialogContent
            sx={{
              margin: "20px",
            }}
          >
            {contacts.map((contact) => (
              <div key={contact.number}>
                <Button
                  onClick={() =>
                    handleWhatsAppClick(contact.number, contact.name)
                  }
                  color={
                    selectedContact && selectedContact.number === contact.number
                      ? "secondary"
                      : "primary"
                  }
                  variant={
                    selectedContact && selectedContact.number === contact.number
                      ? "contained"
                      : "outlined"
                  }
                  fullWidth
                  style={{ marginBottom: 10 }}
                >
                  {`${contact.name} (${contact.number})`}
                </Button>
              </div>
            ))}
            <TextField
              label="Enter your message"
              variant="outlined"
              fullWidth
              margin="normal"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendWhatsAppMessage}
              fullWidth
            >
              Send
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default FloatingWhatsAppButton;
