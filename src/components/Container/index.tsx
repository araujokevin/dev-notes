type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="bg-slate-900 text-green-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-8">{children}</div>
    </div>
  );
}
