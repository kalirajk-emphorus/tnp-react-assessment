import { Box, Pagination } from "@mui/material";

const JobsPagination = ({
  page,
  totalPages,
  setPage,
}) => {
  if (totalPages <= 1) return null;

  const handleChange = (event, value) => {
    setPage(value);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pagination
        page={page}
        count={totalPages}
        color="primary"
        onChange={handleChange}
      />
    </Box>
  );
}

export default JobsPagination;