import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";

const Title = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 1,
        pl: 0,
      }}
    >
      <ButtonBase component={Link} to="/" sx={{ px: 1 }}>
        <Logo />
      </ButtonBase>
    </Box>
  );
};

export default Title;
