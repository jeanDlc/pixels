import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [params, setParams] = useSearchParams();

  const page = Number(params.get("page") ?? 1);

  return (
    <Stack spacing={2}>
      <MuiPagination
        size="large"
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
