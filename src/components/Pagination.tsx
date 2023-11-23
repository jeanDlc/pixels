import styled from "@emotion/styled";
/**styled components*********************************************************** */
const Div = styled.div`
  display: grid;
  max-width: 600px;
  margin: 1rem auto;
  gap: 1rem;
  @media (min-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Boton = styled.button`
  transition: all 0.3s ease-out;
  font-size: 1.5rem;
  border-color: #333;
  &:hover {
    transform: scale(1.05);
    transform: rotate(3deg);
  }
`;
/**component*********************************************************** */
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
    <Div>
      <Boton
        className="btn btn-light mr-3 anterior"
        disabled={pagination <= 1 ? true : false}
        id="prev"
        onClick={() => onChangePage({ next: true })}
      >
        <i className="fas fa-arrow-circle-left"></i> ..Previous page
      </Boton>

      <Boton
        className="btn btn-light siguiente"
        id="btnSiguiente"
        onClick={() => onChangePage({ next: false })}
      >
        Next Page.. <i className="fas fa-arrow-circle-right"></i>
      </Boton>
    </Div>
  );
};

export default Pagination;
