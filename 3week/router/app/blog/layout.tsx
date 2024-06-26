export const metadata = {
  title: "blog ",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
