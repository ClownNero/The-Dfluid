export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // screen
    <div className="flex-col flex-grow-0 w-[1680px] h-screen bg-white mx-auto">
      {children}
    </div>
  );
}
