import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Pulpit"
        icon={<HomeOutlinedIcon />}
        title="Pulpit"
      />
      <BottomNavigationAction
        label="Faktury"
        icon={<DescriptionIcon />}
        title="Faktury"
      />
      <BottomNavigationAction
        label="Wiadomości"
        icon={<ForumOutlinedIcon />}
        title="Wiadomości"
      />
    </BottomNavigation>
  );
};

export default Footer;
