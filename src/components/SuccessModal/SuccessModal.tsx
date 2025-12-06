import { useOutside } from '@/hooks/useOutside';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import {
  ButtonDivider,
  Container,
  Content,
  Description,
  Header,
  Icon,
  Question,
  SendButton,
  TextDivider,
  Title,
} from './styles';

interface ModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  description: string;
  route?: string;
  action?: () => void;
}

const SuccessModal = ({
  setModalOpen,
  description,
  route,
  action,
}: ModalProps) => {
  const router = useRouter();

  const modalRef = useRef(null);

  useOutside(modalRef, () => {
    setModalOpen(false);
    if (action) {
      action();
    }
    if (route) {
      router.push(route);
    }
  });

  return (
    <Container>
      <Content ref={modalRef}>
        <Header>
          <Icon src="/img/modal/success.svg" alt="Ícone de sucesso" />

          <Title>Sucesso!</Title>
        </Header>

        <TextDivider>
          <Description>{description}</Description>
        </TextDivider>

        <ButtonDivider>
          <SendButton
            type="button"
            onClick={() => {
              setModalOpen(false);
              if (action) {
                action();
              }
              if (route) {
                router.push(route);
              }
            }}
          >
            Continuar
          </SendButton>
        </ButtonDivider>
      </Content>
    </Container>
  );
};

export default SuccessModal;
