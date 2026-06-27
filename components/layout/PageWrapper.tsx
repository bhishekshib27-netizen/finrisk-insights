export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10">
      {children}
    </div>
  );
}
