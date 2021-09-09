import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Header from '../components/header'
import TopBar from '../components/top_bar'
import SolBar from '../components/sol_bar'
import Footer from '../components/footer'

export default function Home({arac_tipleri,kiralama_tipleri,ozellik_listesi}) {
//console.log({arac_tipleri})
  return (
    <div className="container-fluid">
      <Head>
        <title>Kiralık Karavanlar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className="row">
        <div className="col-12">
          {/*<Header arac_tipleri={arac_tipleri} kiralama_tipleri={kiralama_tipleri} ozellik_listesi={ozellik_listesi}/>*/}
          <TopBar />
        </div> 
      </header>
      <main className="row">
      <div className="col-3">
          <SolBar arac_tipleri={arac_tipleri} kiralama_tipleri={kiralama_tipleri} ozellik_listesi={ozellik_listesi}/>
        </div>

        <div className="col-9">
          main 
        </div>
      </main>

      <footer className="container">                
        <Footer />                  
      </footer>
    </div>
  )
}

export async function getServerSideProps(context){
  
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/items/arac_tipi`)

  const arac_tipleri = await res.json()

  const res_kiralama_tipleri = await fetch(`${API_URL}/items/kiralama_tipi`)

  const kiralama_tipleri = await res_kiralama_tipleri.json()

  const res_ozellik_listesi = await fetch(`${API_URL}/items/ozellik_listesi`)

  const ozellik_listesi = await res_ozellik_listesi.json()

  
  /*if (!arac_tipleri) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }*/
  return{
      props: {
          arac_tipleri:arac_tipleri.data,
          kiralama_tipleri:kiralama_tipleri.data,
          ozellik_listesi:ozellik_listesi.data,
          
      },
  }

}