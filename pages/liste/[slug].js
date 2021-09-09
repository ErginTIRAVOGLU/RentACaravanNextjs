import Head from "next/head"
import TopBar from "../../components/top_bar"
import { LocationMarkerIcon, CheckCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from "next/link"
import React from "react"
import SolBar from "../../components/sol_bar"
import Footer from "../../components/footer"

 

//import { Splide, SplideSlide } from '@splidejs/react-splide';
function Slug({ slug,karavan,arac_tipleri,kiralama_tipleri,ozellik_listesi }) {
     
    React.useEffect(() => {
        // window is accessible here.
        //      console.log("window.innerHeight", window.innerHeight);
        //import("@splidejs/react-splide");
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: false,
                margin: 10,
                nav: true,
                lazyLoad: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 8
                    }
                }
            });

        });
    }, []);
    //console.log({karavan})

      return (

<div className="container-fluid">

    <Head>
        <title>Kiralık Karavanlar {slug}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="row">

        <TopBar />

    </header>
    <main className="row">
        
       
            
        <div className="col-3">
            <SolBar arac_tipleri={arac_tipleri} kiralama_tipleri={kiralama_tipleri}
                ozellik_listesi={ozellik_listesi} />
        </div>
        <div className="col-9" style={{fontFamily: "Poppins"}}>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex flex-row align-self-stretch overflow-hidden">


                        <div className="owl-carousel owl-theme">


                            {
                            karavan.resimler?.map((resim,index) => (


                            <Link key={index} href={`${encodeURI(resim.fotograf_id.data.full_url)}`}>
                            <a data-lightbox="roadtrip" data-caption="This image has a simple caption">

                                <img src={resim.fotograf_id.data.thumbnails[2].url}
                                    className="item image image-thumbnail rounded" />
                            </a>
                            </Link>

                            ))

                            }




                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-12">

                    <br /> {/*slug*/} {/*karavan.baslik_url}*/} {/* karavan.id */}
                    <br />
                    <h3 style={{fontSize:"52px"}}>{karavan.baslik}</h3>
                    <div>
                        <div>
                            <LocationMarkerIcon style={{height:"25px",width:"25px", float:"left"}} />
                            <h4>{karavan.il_id.adi}</h4>
                        </div>
                    </div>

                    <div style={{display:"flex", fontSize:"20px", fontWeight:"700"}}>
                        <span>{karavan.arac_tipi_id.tip}</span>
                        <div style={{margin:"0 5px 0 5px",width:"3px",backgroundColor:"#ff5454"}}>&nbsp;
                        </div>
                        <span> Yatak Sayısı : {karavan.yatma_yeri_sayisi}</span>
                        <div style={{margin:"0 5px 0 5px",width:"3px",backgroundColor:"#ff5454"}}>&nbsp;
                        </div>
                        <span style={{}}>{karavan.kiralama_tipi_id.tip}</span>
                        <div style={{margin:"0 5px 0 5px",width:"3px",backgroundColor:"#ff5454"}}>&nbsp;
                        </div>
                        <span>
                            {
                            karavan.ozellik_liste?.map(ozellik => (
                            (ozellik.ozellik_listesi_id.ozellik_slug==="evcil-hayvan-izni") ?
                            ozellik.ozellik_listesi_id.ozellik : ""
                            ))
                            }
                        </span>
                    </div>
                    
                    <div className="sticky-top" style={{height:"50px",backgroundColor:"#ffffff"}}>sağ</div>
                    
                    <hr />
                    <div>
                        <div dangerouslySetInnerHTML={{__html: karavan.ilan_aciklama}}></div>
                    </div>
                    <hr />
                    <h4>Önemli Bilgiler</h4>
                    <div>
                        <div className="baslikDiv">
                            <div>Minimum Gün : </div>
                            <div>{karavan.minimum_gun} gün</div>
                        </div>
                        <div className="baslikDiv">
                            <div>Minimum Kiralayıcı Yaşı : </div>
                            <div>{karavan.minimum_yas} yaş</div>
                        </div>
                        <div className="baslikDiv">
                            <div>Kiralama İli : </div>
                            <div>{karavan.il_id.adi}</div>
                        </div>
                        <div className="baslikDiv">
                            <div>Ehliyet Gereksinimi : </div>
                            <div>{
                                karavan.surucu_belge_id?.map((surucuBelge,index) => (
                                (index ? ', ': '') + surucuBelge.surucu_belge_id.belge
                                ))
                                }</div>
                        </div>
                        <div className="baslikDiv">
                            <div>Teslimat aralığı : </div>
                            <div>{karavan.ilce} {karavan.maksimum_km} km uzağa teslim edilir/kurulabilir
                            </div>
                        </div>
                        <div className="baslikDiv">
                            <div>Araç Vites Bilgisi : </div>
                            <div>{karavan.vites_tipi_id.vites}</div>
                        </div>
                    </div>
                    <hr />

                    <h4>{karavan.arac_tipi_id.tip} hakkında</h4>
                    <div
                        style={{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <div style={{flexGrow:"1"}}>
                            <div className="baslikDiv">
                                <div>Marka</div>
                                <div>{karavan.marka_id.adi}</div>
                            </div>
                            <div className="baslikDiv">
                                <div>Model</div>
                                <div>{karavan.model}</div>
                            </div>
                            <div className="baslikDiv">
                                <div>Yil</div>
                                <div>{karavan.yil}</div>
                            </div>
                            <div className="baslikDiv">
                                <div>Uzunluk</div>
                                <div>{karavan.uzunluk}</div>
                            </div>
                            <div className="baslikDiv">
                                <div>Genişlik</div>
                                <div>{karavan.genislik}</div>
                            </div>
                        </div>
                        <div style={{flexGrow:"1"}}>
                            <div className="baslikDiv">
                                <div>Yatak Sayısı</div>
                                <div>{karavan.yatma_yeri_sayisi} adet</div>
                            </div>
                            <div className="baslikDiv">
                                <div>Oturma Yeri Sayısı</div>
                                <div>{karavan.oturma_yeri_sayisi} adet</div>
                            </div>
                            <div className="baslikDiv">
                                <div>Yakıt Tipi</div>
                                <div>{
                                    karavan.yakit_tipi_id?.map((yakitTipi,index) => (
                                    (index ? ', ': '') + (yakitTipi.yakit_tipi_id.yakit)
                                    ))
                                    }</div>
                            </div>
                            <div className="baslikDiv">
                                <div>Yakıt Kullanımı</div>
                                <div>km'de {karavan.km_yakit_tuketimi} TL</div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h4>Özellikler</h4>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"stretch"}}>
                        {
                        karavan.ozellik_liste?.map(ozellik => (
                        <div key={ozellik.ozellik_listesi_id.id} style={{flexGrow:"1"}}>
                            <div>
                                <CheckCircleIcon
                                    style={{height:"25px",width:"25px", float:"left",marginRight:"10px"}} />
                            </div>
                            <div>{(ozellik.ozellik_listesi_id.ozellik)}</div>
                        </div>
                        ))
                        }
                    </div>
                    <br />
                </div>
            </div>
        </div>
    </main>

    <footer className="container">                
        <Footer />                  
    </footer>
</div>


)}

export default Slug

export async function getServerSideProps({ params }) {
    const { API_URL } = process.env
    
    //const yol=`${API_URL}/items/liste?fields=arac_tipi_id.tip,baslik,baslik_url,genislik,id,il_id.adi,ilan_aciklama,kiralama_tipi_id.tip,km_yakit_tuketimi,maksimum_km,marka_id.adi,minimum_gun,minimum_yas,model,oturma_yeri_sayisi,uzunluk,vites_tipi_id.vites,yakit_tipi_id.yakit_tipi_id.yakit,yatma_yeri_sayisi,yil,ozellik_liste.ozellik_listesi_id.*,surucu_belge_id.surucu_belge_id.*&filter[baslik_url][eq]=${params.slug}&filter[status][eq]=published`

    const res = await fetch(`${API_URL}/items/liste?fields=resimler.fotograf_id.data,ilce,arac_tipi_id.tip,baslik,baslik_url,genislik,id,il_id.adi,ilan_aciklama,kiralama_tipi_id.tip,km_yakit_tuketimi,maksimum_km,marka_id.adi,minimum_gun,minimum_yas,model,oturma_yeri_sayisi,uzunluk,vites_tipi_id.vites,yakit_tipi_id.yakit_tipi_id.yakit,yatma_yeri_sayisi,yil,ozellik_liste.ozellik_listesi_id.*,surucu_belge_id.surucu_belge_id.*&filter[baslik_url][eq]=${params.slug}&filter[status][eq]=published`) 
    
    const karavan = await res.json()
    
    const res_arac_tipleri = await fetch(`${API_URL}/items/arac_tipi`)

    const arac_tipleri = await res_arac_tipleri.json()
  
    const res_kiralama_tipleri = await fetch(`${API_URL}/items/kiralama_tipi`)
  
    const kiralama_tipleri = await res_kiralama_tipleri.json()
  
    const res_ozellik_listesi = await fetch(`${API_URL}/items/ozellik_listesi`)
  
    const ozellik_listesi = await res_ozellik_listesi.json()
  
 
    return {
        props: { 
            slug: params.slug,
            karavan:karavan.data[0], 
            arac_tipleri:arac_tipleri.data,
            kiralama_tipleri:kiralama_tipleri.data,
            ozellik_listesi:ozellik_listesi.data,

        }
    }
}