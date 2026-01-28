"use client";

import dynamic from "next/dynamic";
import { useId } from "react";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

type MarkdownEditorProps = {
  labelText?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  textAreaName: string;
  disabled?: boolean;
};

export function MarkdownEditor({
  labelText,
  value,
  setValue,
  textAreaName,
  disabled = false,
}: MarkdownEditorProps) {
  const textareaId = useId();
  const labelId = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label id={labelId} className="text-sm font-medium text-green-200">
          {labelText}
        </label>
      )}

      <MDEditor
        className="whitespace-pre-wrap"
        value={value}
        onChange={(value) => {
          if (value === undefined) return;
          setValue(value);
        }}
        height={400}
        extraCommands={[]}
        preview="edit"
        hideToolbar={disabled}
        textareaProps={{
          id: textareaId,
          name: textAreaName,
          disabled,
          "aria-labelledby": labelText ? labelId : undefined,
        }}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkGfm]],
        }}
      />
    </div>
  );
}
