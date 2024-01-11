import ButtonBase from "@mui/material/ButtonBase";
import Link from "next/link";

import { Logo } from "./Logo";

const Title = () => {
  return (
    <ButtonBase component={Link} href="/" sx={{ px: 1 }}>
      <Logo />
    </ButtonBase>
  );
};

export default Title;
