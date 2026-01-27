import { InputText } from "@/components/InputText";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div className="my-8 flex flex-col gap-6">
      <InputText
        label="Nome"
        placeholder="Digite seu nome"
        type="password"
        helperText="Use uma senha forte"
      />

      <InputText label="Sobrenome" placeholder="Digite seu sobrenome" />

      <InputText
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        defaultValue="Olá mundo"
        disabled
        helperText="Campo desabilitado"
      />

      <InputText
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        disabled
      />

      <InputText
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        readOnly
        helperText="Campo somente leitura"
      />

      <InputText
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        defaultValue="Olá mundo"
        readOnly
      />
    </div>
  );
}
