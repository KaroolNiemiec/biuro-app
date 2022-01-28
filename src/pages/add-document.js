import { TextField } from "@mui/material";
import React from "react";
import { Button, IconButton, Tooltip } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Layout from "../components/Layout";

const AddDocument = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleCapture = ({ target }) => {
    setSelectedFile(target.files[0]);
  };

  console.info(selectedFile);

  return (
    <Layout pageName="Dodaj opłatę">
      <TextField
        id="outlined-basic"
        label="Nazwa"
        variant="outlined"
        sx={{ width: "100%", mb: 3 }}
      />
      <TextField
        id="outlined-basic"
        label="Kwota"
        variant="outlined"
        sx={{ width: "100%", mb: 3 }}
      />
      <input
        accept="image/jpeg"
        id="faceImage"
        type="file"
        onChange={handleCapture}
      />
      <Tooltip title="Select Image">
        <label htmlFor="faceImage">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
      </Tooltip>
      <label>{selectedFile ? selectedFile.name : "Select Image"}</label>
      <Button variant="contained" sx={{ width: "100%", mt: 10 }}>
        Zapisz
      </Button>
    </Layout>
  );
};

export default AddDocument;
