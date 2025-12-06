import { useRouter } from 'next/navigation';
import { Container, Description, Text } from './styles';

interface NoItemProps {
  text: string;
  description?: string;
}

const NoItem = ({ text, description }: NoItemProps) => {
  return (
    <Container>
      <Text>{text}</Text>

      {description && <Description>{description}</Description>}
    </Container>
  );
};

export default NoItem;
