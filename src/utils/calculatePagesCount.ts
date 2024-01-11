export const calculatePagesCount = ({
  total,
  resultsPerPage,
}: {
  total: number;
  resultsPerPage: number;
}) => {
  return Math.ceil(total / resultsPerPage);
};
