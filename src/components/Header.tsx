import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Form from "./Form";
import Title from "./Title";
import GithubLink from "./GithubLink";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container sx={{ p: { xs: 0 } }}>
        <Toolbar>
          <Box sx={{ mr: 1 }}>
            <Title />
          </Box>
          <Form />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <GithubLink color="white" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
