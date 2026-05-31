import {
  Box,
  Pagination,
} from "@mui/material";

function JobsPagination({
  page,
  totalPages,
  setPage,
}) {
  if (totalPages <= 1) return null;

  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        justifyContent:
          "center",
      }}
    >
      <Pagination
        page={page}
        count={totalPages}
        color="primary"
        onChange={(
          event,
          value
        ) => setPage(value)}
      />
    </Box>
  );
}

export default JobsPagination;