"use client";

import { Button } from "../Button";
import { InputCheckbox } from "../InputCheckbox";
import { InputText } from "../InputText";

export function ManagePostForm() {
  return (
    <form action="">
      <div className="my-8 flex flex-col gap-6">
        <InputText
          label="Nome"
          placeholder="Digite seu nome"
          type="password"
          helperText="Use uma senha forte"
        />

        <InputText label="Sobrenome" placeholder="Digite seu sobrenome" />

        <InputCheckbox
          label="Publicar imediatamente"
          helperText="O post ficará visível para todos"
        />

        <InputCheckbox
          label="Aceitar termos"
          error="Você precisa aceitar os termos para continuar"
        />

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

        <div className="my-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
