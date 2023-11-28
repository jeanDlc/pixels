import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "react-router-dom";
import { useAppMediaQuery } from "../hooks/useAppMediaQuery";

const Pagination = () => {
  const [params, setParams] = useSearchParams();

  const isMobile = useAppMediaQuery(({ breakpoints }) =>
    breakpoints.down("md")
  );

  const page = Number(params.get("page") ?? 1);

  return (
    <Stack spacing={2}>
      <MuiPagination
        size={isMobile ? "medium" : "large"}
        count={10}
        page={page}
        color="primary"
        onChange={(_, value) =>
          setParams((p) => {
            p.set("page", value.toString());
            return p;
          })
        }
        shape="rounded"
      />
    </Stack>
  );
};

export default Pagination;
