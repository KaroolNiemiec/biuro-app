import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { navigate } from "gatsby";
import { useNavigation } from "../contexts/navigation";
import { useUser } from "../contexts/user";

const Footer = () => {
  const { navigation, setNavigation } = useNavigation();
  const { user, adminUID } = useUser();
  const routes = [
    {
      text: "Pulpit",
      route: user?.uid === adminUID ? "/admin-menu" : "/",
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
      value={navigation}
      onChange={(event, newValue) => {
        setNavigation(newValue);
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
