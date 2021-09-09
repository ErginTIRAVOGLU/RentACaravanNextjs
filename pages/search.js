import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SolBar from "../components/sol_bar";
import TekKaravan from "../components/tek_karavan";
import TopBar from "../components/top_bar";

function Search({liste,sorgu,arac_tipleri,kiralama_tipleri,ozellik_listesi}) {
    
    const router = useRouter();
    var {tarihAraligi, kiralamaTip, ozellik,aracTipi,kisisayisi} = router.query;
var data = {tarihAraligi, kiralamaTip, ozellik,aracTipi,kisisayisi}
    return (
        <div className="container-fluid">

            <Head>
                <title>Kiralık Karavanlar Arama Sonuçları</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="row">
                <div className="col-12">
                    {tarihAraligi}, {kiralamaTip}, {ozellik},{aracTipi},{kisisayisi}
                    {/*
                    <Header arac_tipleri={arac_tipleri} kiralama_tipleri={kiralama_tipleri}
                        ozellik_listesi={ozellik_listesi} />*/}
                    <TopBar />
                </div>
            </header>
            <main className="row">
                <div className="col-3">
                    <SolBar arac_tipleri={arac_tipleri} kiralama_tipleri={kiralama_tipleri}
                        ozellik_listesi={ozellik_listesi} routerData={data}/>
                </div>

                <div className="col-9">
                    <div className="row" style={{backgroundColor:"#ffffff"}}>
                        { liste.map((listeTek) => (
                        <div key={listeTek.id} className="card col-3 rounded"
                            style={{border: "4px solid #ffffff", backgroundColor:"#efefef"}}>
                            <TekKaravan karavan={listeTek} />
                        </div>
                        )) }
                    </div>
                </div>
            </main>
            <footer className="container">
                <Footer />
            </footer>
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
   
    const { API_URL } = process.env

    
    const dateRange = context.query.dateRange
    const kiralamaTip = context.query.kiralamaTip
    const ozellik = context.query.ozellik
    const aracTipi = context.query.aracTipi
    var sorgu="?fields=resimler.fotograf_id.*,id,baslik,yatma_yeri_sayisi,arac_tipi_id.tip,il_id.adi,baslik_url"
    if(dateRange){
        sorgu=sorgu+dateRange
    }
    if(kiralamaTip){

        const kiralamaTipArray=kiralamaTip.split(',')
        var kiralamaTipList=""
        kiralamaTipArray.map(kiralamaTipTek => {
            kiralamaTipList=kiralamaTipTek+","+kiralamaTipList
        })
        kiralamaTipList=kiralamaTipList.slice(0,-1)
        sorgu=sorgu+"&filter[kiralama_tipi_id.tip_slug][in]="+kiralamaTipList
        
    }
    if(ozellik){
        
        const ozellikArray=ozellik.split(',')
        var ozellikList=""
        ozellikArray.map(ozellikTek => {
            ozellikList=ozellikTek+","+ozellikList
        })
        ozellikList=ozellikList.slice(0,-1)
        sorgu=sorgu+"&filter[ozellik_liste.ozellik_listesi_id.ozellik_slug][in]="+ozellikList
       
    }
    if(aracTipi){
        const aracTipiArray=aracTipi.split(',') 
        var aracTipiList=""
        aracTipiArray.map(aracTipiTek => {
            aracTipiList=aracTipiTek+","+aracTipiList
        })
        aracTipiList=aracTipiList.slice(0,-1)
        sorgu=sorgu+"&filter[arac_tipi_id.tip_slug][in]="+aracTipiList   
        
    }
    const res = await fetch(`${API_URL}/items/liste${sorgu}`)
  
    const liste = await res.json()
    
    const res_arac_tipleri = await fetch(`${API_URL}/items/arac_tipi`)

    const arac_tipleri = await res_arac_tipleri.json()
  
    const res_kiralama_tipleri = await fetch(`${API_URL}/items/kiralama_tipi`)
  
    const kiralama_tipleri = await res_kiralama_tipleri.json()
  
    const res_ozellik_listesi = await fetch(`${API_URL}/items/ozellik_listesi`)
  
    const ozellik_listesi = await res_ozellik_listesi.json()
  
     return{
        props: { 
            liste:liste.data,
            sorgu:sorgu,
            arac_tipleri:arac_tipleri.data,
            kiralama_tipleri:kiralama_tipleri.data,
            ozellik_listesi:ozellik_listesi.data,
        },
    }
  
  }
