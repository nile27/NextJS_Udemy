interface IParams {
  params: {
    id: string;
  };
}
// title 동적 할당
export async function generateMetadata({ params }: IParams) {
  console.log(params.id);
  return {
    title: `Blog ${params.id}`,
  };
}

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
