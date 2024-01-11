import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppMediaQuery } from "@/hooks/useAppMediaQuery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ pagesCount }: { pagesCount: number }) => {
  const params = useSearchParams();

  const isMobile = useAppMediaQuery(({ breakpoints }) =>
    breakpoints.down("md"),
  );

  const pathname = usePathname();

  const router = useRouter();

  const page = parseInt(params.get("page") ?? "1");

  return (
    <Stack spacing={2}>
      <MuiPagination
        size={isMobile ? "medium" : "large"}
        count={pagesCount}
        page={page}
        color="primary"
        onChange={(_, value) => {
          const newParams = new URLSearchParams(params.toString());
          newParams.set("page", value.toString());

          router.push(`${pathname}?${newParams.toString()}`);
        }}
        shape="rounded"
      />
    </Stack>
  );
};

export default Pagination;
