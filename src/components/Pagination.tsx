import { Button, Box, Grid } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Pagination = ({
  setPagination,
  pagination,
}: {
  setPagination: (p: number) => void;
  pagination: number;
}) => {
  const onChangePage = ({ next }: { next: boolean }) => {
    if (next) {
      setPagination(pagination + 1);
    } else {
      setPagination(pagination - 1);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, m: "1rem auto" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Button
            fullWidth
            disabled={pagination <= 1 ? true : false}
            onClick={() => onChangePage({ next: true })}
            startIcon={<KeyboardDoubleArrowLeftIcon />}
          >
            ..Previous page
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Button
            fullWidth
            onClick={() => onChangePage({ next: true })}
            endIcon={<KeyboardDoubleArrowRightIcon />}
          >
            Next Page..
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pagination;
