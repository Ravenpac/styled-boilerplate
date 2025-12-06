import SmallPagination from '../Pagination/Pagination';
import { Container, PaginationText } from './styles';

interface Props {
  maximumPage: number;
  currentPage: number;
  setPage: (page: number) => void;
  totalItems: number;
  currentItems: number;
}

const PaginationItem = ({
  maximumPage,
  currentPage,
  setPage,
  totalItems,
  currentItems,
}: Props) => {
  return (
    <Container>
      <PaginationText>
        Mostrando {currentItems} de {totalItems}
      </PaginationText>

      <SmallPagination
        maximumPage={maximumPage}
        currentPage={currentPage}
        setPage={setPage}
      />
    </Container>
  );
};

export default PaginationItem;
