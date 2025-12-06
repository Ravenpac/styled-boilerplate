'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ptBR } from 'date-fns/locale';
import { setDefaultOptions } from 'date-fns';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';
import handleError from '@/utils/handleToast';
import AuthProvider from '@/hooks/useAuth';
import ModalManager from '@/components/ModalManager/ModalManager';
import { ModalProvider, useModal } from './useModalContext';
import { setModalRef } from './modalRef';

setDefaultOptions({
  locale: ptBR,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: handleError,
      retry: false,
      initialDataUpdatedAt: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const InitModalRef = () => {
  const modal = useModal();
  setModalRef(modal);
  return null;
};

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <AuthProvider>
            <ModalProvider>
              <InitModalRef />
              <ModalManager>{children}</ModalManager>
            </ModalProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
