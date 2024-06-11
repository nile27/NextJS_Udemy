export default function Blog(params: any) {
  return (
    <>
      <h1 className="text-2xl">{`Blog Component `}</h1>
      <h2 className="text-2xl">{new Date().toLocaleTimeString()}</h2>
    </>
  );
}
