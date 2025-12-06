import { Pagination, PaginationItem, Stack } from '@mui/material';

interface Props {
  maximumPage: number;
  currentPage: number;
  setPage: (page: number) => void;
}

const SmallPagination = ({ maximumPage, currentPage, setPage }: Props) => {
  return (
    <Stack>
      <Pagination
        count={maximumPage}
        renderItem={item => (
          <PaginationItem
            style={{
              minWidth: '0',
              width: '1.75rem',
              height: '1.75rem',
              padding: '0',
              margin: '0 0.25rem',
              color: item.page === currentPage ? '#FEFEFD' : '#747373',
              fontSize: '1rem',
              fontFamily: 'Lexend',
              fontWeight: 300,
              borderRadius: '50%',
              backgroundColor:
                item.page === currentPage ? '#798645' : 'transparent',
            }}
            {...item}
          />
        )}
        siblingCount={1}
        boundaryCount={1}
        page={currentPage}
        onChange={(e, number) => {
          setPage(number);
        }}
      />
    </Stack>
  );
};

export default SmallPagination;
