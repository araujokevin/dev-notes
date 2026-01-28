"use client";

import { useState } from "react";
import { Button } from "../Button";
import { InputCheckbox } from "../InputCheckbox";
import { InputText } from "../InputText";
import { MarkdownEditor } from "../MarkdownEditor";
import { ImageUploader } from "../ImageUploader";

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState("");
  return (
    <form action="">
      <div className="my-8 flex flex-col gap-6">
        <InputText label="Nome" placeholder="Digite seu nome" />

        <InputText label="Sobrenome" placeholder="Digite seu sobrenome" />

        <ImageUploader
          label="Imagem de capa"
          helperText="Usada na listagem e no destaque do post"
        />

        <InputCheckbox
          label="Publicar imediatamente"
          helperText="O post ficará visível para todos"
        />

        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />

        <div className="my-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
