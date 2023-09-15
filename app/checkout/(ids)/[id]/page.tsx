import { FC } from "react";

interface pageProps {
  params: { id: string };
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <main>
      <div>{}</div>
    </main>
  );
};

export default page;
