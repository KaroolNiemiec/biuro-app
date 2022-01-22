import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
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
              />
              <BottomNavigationAction
                label="Sprzedaż"
                icon={<ShowChartOutlinedIcon />}
              />
              <BottomNavigationAction
                label="Zakupy"
                icon={<AddShoppingCartOutlinedIcon />}
              />
              <BottomNavigationAction
                label="Wiadomości"
                icon={<ForumOutlinedIcon />}
              />
            </BottomNavigation>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
