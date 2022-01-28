import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { navigate } from "gatsby";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <AddAPhotoIcon />, name: "Photo" },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 450, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => navigate("/add-document")}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
