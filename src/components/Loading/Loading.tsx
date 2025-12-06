import { Container, Spinner } from './styles';

interface Props {
  style?: React.CSSProperties;
}

const Loading = ({ style }: Props) => {
  return (
    <Container>
      <Spinner style={style} />
    </Container>
  );
};

export default Loading;
