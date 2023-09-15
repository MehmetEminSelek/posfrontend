import { FC } from 'react'
import Registration1 from '@/app/components/registerationPage/registration1'
import Registration2 from '@/app/components/registerationPage/registration2'
import Registration3 from '@/app/components/registerationPage/registration3'
import Registration4 from '@/app/components/registerationPage/registration4'

interface pageProps {
  params: { id: string }
}

const page: FC<pageProps> = ({ params }) => {
  if (params.id === "1") {
    return <Registration1 params={params} />;
  } else if (params.id === "2") {
    return <Registration2 />;
  } else if (params.id === "3") {
    return <Registration3 />;
  } else if (params.id === "4") {
    return <Registration4 />;
  }
}

export default page