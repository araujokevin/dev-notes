import ErrorMessage from "@/components/ErrorMessage";

export const metadata = {
  title: "Página não encontrada",
};

export default function NotFoundPage() {
  return (
    <ErrorMessage
      contentTitle="404"
      content="Erro 404 - A página que você está tentando acessar não existe neste
            site."
    />
  );
}
