"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

export const metadata = {
  title: "Internal Server Error",
};

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {}, [error]);

  return (
    <ErrorMessage
      contentTitle="501"
      content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Tente novamente mais tarde."
    />
  );
}
