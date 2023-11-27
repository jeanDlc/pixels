import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Pagination = ({
  setPagination,
  pagination,
}: {
  setPagination: (p: number) => void;
  pagination: number;
}) => {
  return (
    <Stack spacing={2}>
      <MuiPagination
        size="large"
        count={10}
        page={pagination}
        color="primary"
        onChange={(_, value) => setPagination(value)}
        shape="rounded"
      />
    </Stack>
  );
};

export default Pagination;
