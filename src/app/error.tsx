"use client";

import { useEffect } from "react";
import ErrorMessage from "@/components/ErrorMessage";

export const metadata = {
  title: "Erro interno do servidor",
};

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    // Aqui é um bom lugar para logar o erro futuramente
    // console.error(error);
  }, [error]);

  return (
    <ErrorMessage
      variant="error"
      pageTitle="Erro interno do servidor"
      title="Erro interno"
      description="Ocorreu um erro inesperado e a aplicação não conseguiu se recuperar. Tente novamente mais tarde."
    />
  );
}
