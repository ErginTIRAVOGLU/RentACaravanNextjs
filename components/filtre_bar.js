import AracTipiList from "./arac_tipi_list"
import TarihAraligi from "./tarih_araligi"
import { useState } from "react";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import ZiyaretciSayisi from "./ziyaretci_sayisi";
import KiralamaTipiList from "./kiralama_tipi_list";
import OzellikList from "./ozellik_list";
import { useRouter } from "next/dist/client/router";

function FiltreBar({arac_tipleri,kiralama_tipleri,ozellik_listesi,placeholder}) {
    const router = useRouter();
    const [searchInput, setSearchInput] = useState("")
    const [kiralamaTip, setKiralamaTip] = useState("")
    return (
        
            <Form>


                <div className="row">
                    <div className="col-12" style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                        <div>                    
                            <div className="dropdownER p-3 ">
                                <div className="dropbtn btn btn-outline-primary">Araç Tipleri</div>
                                    <div className="dropdownER-content p-3">
        
    
                                {
                                arac_tipleri?.map(arac_tipi => (
                                <AracTipiList key={arac_tipi.id} arac_tipi={arac_tipi} /> 

                                ))
                                }
                                    </div>
                                </div>
                        </div>
                        <div>                        
                            <div className="dropdownER p-3 ">
                                <div className="dropbtn btn btn-outline-primary">Kiralama Tipi</div>
                                <div className="dropdownER-content p-3">    
                                    {
                                        kiralama_tipleri?.map(kiralama_tip => (
                                        <KiralamaTipiList key={kiralama_tip.id} kiralama_tip={kiralama_tip} onChange={(e)=> setKiralamaTip(e.target.value)} /> 
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div>                        
                            <div className="dropdownER p-3 ">
                                <div className="dropbtn btn btn-outline-primary">Özellik Listesi</div>
                                <div className="dropdownER-content p-3">    
                                {
                                    ozellik_listesi?.map(ozellik => (
                                    <OzellikList key={ozellik.id} ozellik={ozellik} /> 

                                    ))
                                }
                                </div>
                            </div>                    
                        </div>
    
                        <div>
                            <div className="p-3">
                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#tarihAraligiModal">
                            Tarih Aralığı
                            </button>
                            </div>

                            <div className="modal fade" id="tarihAraligiModal" tabIndex="-1" aria-labelledby="tarihAraligiModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="tarihAraligiModalLabel">Tarih Aralığı</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-center">
                                <TarihAraligi />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>

                        </div>
                        <div>
                            Ziyaretçi Sayısı
                            <ZiyaretciSayisi />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Ara</button>
                        </div>
                    </div>
                </div>
            </Form>
 
    )
}

export default FiltreBar
