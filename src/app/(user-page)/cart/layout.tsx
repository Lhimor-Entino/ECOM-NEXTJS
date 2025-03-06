export default function CartLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
}
