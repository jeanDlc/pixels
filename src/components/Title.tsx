import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";

const Title = () => {
  return (
    <ButtonBase component={Link} to="/" sx={{ px: 1 }}>
      <Logo />
    </ButtonBase>
  );
};

export default Title;
