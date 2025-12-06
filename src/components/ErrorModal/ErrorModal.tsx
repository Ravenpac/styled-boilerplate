import { useOutside } from '@/hooks/useOutside';
import { useRef } from 'react';
import {
  ButtonDivider,
  CancelButton,
  Container,
  Content,
  Description,
  Header,
  Icon,
  SendButton,
  TextDivider,
  Title,
} from './styles';

interface ModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  action: any;
  buttonText: string;
  secondaryButtonText?: string;
  secondaryAction?: () => void;
}

const ErrorModal = ({
  setModalOpen,
  title,
  description,
  action,
  buttonText,
  secondaryButtonText,
  secondaryAction,
}: ModalProps) => {
  const modalRef = useRef(null);

  useOutside(modalRef, () => {
    if (secondaryAction) {
      secondaryAction();
    } else {
      setModalOpen(false);
    }
  });

  return (
    <Container>
      <Content ref={modalRef}>
        <Header>
          <Icon src="/img/modal/error.svg" alt="Ícone de erro" />

          <Title>{title}</Title>
        </Header>

        <TextDivider>
          <Description>{description}</Description>
        </TextDivider>

        <ButtonDivider>
          {secondaryButtonText && (
            <CancelButton
              type="button"
              onClick={() => {
                if (secondaryAction) {
                  secondaryAction();
                } else {
                  setModalOpen(false);
                }
              }}
            >
              {secondaryButtonText}
            </CancelButton>
          )}

          <SendButton type="button" onClick={action}>
            {buttonText}
          </SendButton>
        </ButtonDivider>
      </Content>
    </Container>
  );
};

export default ErrorModal;
