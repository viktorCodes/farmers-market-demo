import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from '../components/Login'
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

export default function Home({trendingResults, followResults, providers}) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  
  if (!session) return <Login providers={providers} />;

  return (
    <div className="">
      <Head>
        <title>farmersmarketV9</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon -.ico" />
      </Head>



    <main  className="bg-black min-h-screen flex m-w-[1500px] mx-auto">
        {/* Sidebar */}
        <Sidebar />

          {/* Feed  */}
            <Feed />

            {/* Widgets */}
              
              
              {/*Modal */}

    </main>
      
    </div>
  )
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch( "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json").then(
    (res) => res.json()
  );
  const followResults = await fetch( "https://randomuser.me/api/?results=30&inc=name,login,picture").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}