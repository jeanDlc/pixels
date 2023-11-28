import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import Form from "./Form";
import Title from "./Title";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Title />
          <Form />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
