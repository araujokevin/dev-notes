import ErrorMessage from "@/components/ErrorMessage";

export const metadata = {
  title: "Página não encontrada",
};

export default function NotFoundPage() {
  return (
    <ErrorMessage
      variant="error"
      pageTitle="Erro 404 | Página não encontrada"
      title="404 — Página não encontrada"
      description="A página que você está tentando acessar não existe ou foi removida."
    />
  );
}
