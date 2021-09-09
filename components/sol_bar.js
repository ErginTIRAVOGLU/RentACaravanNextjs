import AracTipiList from "./arac_tipi_list"
import TarihAraligi from "./tarih_araligi"
import { useEffect, useState } from "react";
import { CalenderIcon, SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import ZiyaretciSayisi from "./ziyaretci_sayisi";
import KiralamaTipiList from "./kiralama_tipi_list";
import OzellikList from "./ozellik_list"; 


import { useRouter } from "next/dist/client/router";


function SolBar({arac_tipleri,kiralama_tipleri,ozellik_listesi,placeholder,routerData}) {

    //console.log(routerData + "ww")
    //console.log(routerData.aracTipi  + "ew")


    const kiralamaTipi1="11122"
    const router = useRouter();
    const [tarihAraligiText,settarihAraligiText]=useState("")
    const [aractipiText,setaractipiText]=useState("")
    const [kiralamatipiText,setkiralamatipiText]=useState("")
    const [ozellikText,setozellikText]=useState("")
    const [kisiSayisi,setkisiSayisi]=useState(0)
    
    const [aracTipleri,setaracTipleri]=useState([])
    const [kiralamaTipleri,setkiralamaTipleri]=useState([])
    const [ozellikler,setOzellikler]=useState([])

    //console.log(router.query);

    //settarihAraligi(vtarihAraligi)
    /*const aracTipiGuncelle2= (id) => {
        console.log(id)
        if(aracTipleri.indexOf(id) >= 0)
        {
            aracTipleri.splice(aracTipleri.indexOf(id),1)
        }
        else
        {
            aracTipleri.push(id)
        }
        setaracTipleri({aracTipleri})
      
      }  */
      /*useEffect(() => {
        console.log(aracTipleri);
      }, [aracTipleri])
      */
const aracTipiGuncelle=(e)=>{
    console.log(e)
    console.log(aracTipleri.indexOf(e))
    if(aracTipleri.indexOf(e) >= 0)
    {
        aracTipleri.splice(aracTipleri.indexOf(e),1)
    }
    else
    {
        aracTipleri.push(e)
    }
    
    
    setaracTipleri(aracTipleri)
    console.log(aracTipleri)
}
const kiralamaTipiGuncelle=(e)=>{
    
    if(kiralamaTipleri.indexOf(e) >= 0)
    {
        kiralamaTipleri.splice(kiralamaTipleri.indexOf(e),1)
    }
    else
    {
        kiralamaTipleri.push(e)
    }
    
    
    setkiralamaTipleri(kiralamaTipleri)
    //console.log(aracTipleri)
}

const ozellikGuncelle=(e)=>{
    
    if(ozellikler.indexOf(e) >= 0)
    {
        ozellikler.splice(ozellikler.indexOf(e),1)
    }
    else
    {
        ozellikler.push(e)
    }
    
    
    setOzellikler(ozellikler)
    //console.log(aracTipleri)
}
    const handleClick = (e) => {
        e.preventDefault()
        var myseciliTarih = document.getElementById("seciliTarih").value
        
        var myModalEl = document.querySelector('#tarihAraligiModal')
        var modal = bootstrap.Modal.getOrCreateInstance(myModalEl) // Returns a Bootstrap modal instance
        modal.hide()
    //    console.log(myseciliTarih)
    //    console.log(aracTipleri)
    //    console.log({aracTipleri})
        settarihAraligiText(myseciliTarih)
       
        //var mysearchInput = document.getElementById('tarihAraligi')
        //mysearchInput.value=myseciliTarih
       // settarihAraligi(myseciliTarih)
       
    };
    const handleInputChange = (e) => {
        
        console.log(e.target.value+"9")
        settarihAraligiText(e.target.value)
        
    };
  /*  
       const handleSelect = (e) => {
        
        var myseciliTarih = e.target.value        
        settarihAraligi(myseciliTarih)
       };
*/     
const handleSubmit = async (event) => {
    event.preventDefault()
    await new Promise((r) => setTimeout(r, 500));
    var href ="";
    /*
    const currentText = router.query.text
      ? router.query.text
      : 'none'
    const href = `/?text=${currentText}`
    */
   var aractipi="";
   var kiralama="";
   var ozellikleri="";

   aracTipleri.map(
            aractip=>
            aractipi = aractip+","+aractipi
        )
    
    aractipi=aractipi.slice(0,-1)
    setaractipiText(aractipi)
    

    kiralamaTipleri.map(
            kiralamaTipi=>
            kiralama=kiralamaTipi+","+kiralama
        )    
        
    kiralama=kiralama.slice(0,-1)
    setkiralamatipiText(kiralama)
    
    ozellikler.map(
        ozelligi=>
        ozellikleri=ozelligi+","+ozellikleri
        )    
    ozellikleri=ozellikleri.slice(0,-1)
    setozellikText(ozellikleri)

 //   console.log("1 "+aractipi)
 //   console.log("2 "+kiralama)
 //   console.log("3 "+ozellikleri)
    //console.log("2"+aractipiText)
   // href=`/search?aracTipi=${aractipi}&kiralamaTip=${kiralama}&ozellik=${ozellikleri}`
    router.push({
        pathname:"/search",
        query:{
            tarihAraligi:tarihAraligiText,
            kiralamaTip:kiralama,
            ozellik:ozellikleri,
            aracTipi:aractipi,
            kisisayisi:kisiSayisi,
        }
    })

    
    
}


    return (

        
         
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-12" style={{display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Araç Tipleri
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {
                                arac_tipleri?.map(arac_tipi => (
                                <AracTipiList key={arac_tipi.id} arac_tipi={arac_tipi}
                                    aracTipiGuncelle={aracTipiGuncelle} aractipiArray={aracTipleri} queryData={routerData?.aracTipi} />

                                ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Kiralama Tipleri
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {
                                kiralama_tipleri?.map(kiralama_tip => (
                                <KiralamaTipiList key={kiralama_tip.id} kiralama_tip={kiralama_tip}
                                    kiralamaTipiGuncelle={kiralamaTipiGuncelle} kiralamatipiArray={kiralamaTipleri} />
                                ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Özellik Listesi
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {
                                ozellik_listesi?.map(ozellik => (
                                <OzellikList key={ozellik.id} ozellik={ozellik} ozellikGuncelle={ozellikGuncelle}
                                    ozellikArray={ozellikler} />

                                ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Ziyaretçi Sayısı
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ZiyaretciSayisi kisiSayisi={kisiSayisi} setkisiSayisi={setkisiSayisi} />
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <div className="p-3 text-center" style={{display:"flex",flexDirection:"column"}}>
                        <input style={{marginBottom:"12px"}} disabled type="text" name="tarihAraligi"
                            value={tarihAraligiText} onChange={(e)=>{handleInputChange(e)} } />
                        <button type="button" style={{}} className="btn btn-outline-primary pl-3" data-bs-toggle="modal"
                            data-bs-target="#tarihAraligiModal">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                style={{width: "18px",height: "18px",marginBottom: "2px"}} viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd" />
                            </svg>
                            Tarih Seç
                        </button>
                    </div>

                    <div className="modal fade" id="tarihAraligiModal" tabIndex="-1"
                        aria-labelledby="tarihAraligiModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="tarihAraligiModalLabel">Tarih Aralığı</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-center">
                                    <TarihAraligi aracTipleri={aracTipleri} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={(e)=>
                                        handleClick(e)}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Ara</button>
                </div>
            </div>
        </div>
    </form>
        
    )
}

export default SolBar
