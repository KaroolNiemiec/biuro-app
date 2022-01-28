import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { navigate } from "gatsby";

const Footer = () => {
  const [value, setValue] = React.useState(0);
  const routes = [
    {
      text: "Pulpit",
      route: "/",
      IconComponent: HomeOutlinedIcon,
    },
    {
      text: "Faktury",
      route: "/invoices",
      IconComponent: DescriptionIcon,
    },
    {
      text: "Wiadomości",
      route: "/messages",
      IconComponent: ForumOutlinedIcon,
    },
  ];
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        navigate(routes[newValue].route);
      }}
    >
      {routes.map(({ text, IconComponent }) => (
        <BottomNavigationAction
          key={text}
          label={text}
          icon={<IconComponent />}
          title={text}
        />
      ))}
    </BottomNavigation>
  );
};

export default Footer;
