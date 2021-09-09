
import FiltreBar from "./filtre_bar";
import TopBar from "./top_bar";

function Header({arac_tipleri,kiralama_tipleri,ozellik_listesi}) {

    return (
        <header className="row">

            <TopBar />
            <div className="col-12" ><FiltreBar arac_tipleri={arac_tipleri}  kiralama_tipleri={kiralama_tipleri}  ozellik_listesi={ozellik_listesi} /></div>
            
        </header>
    )
}

export default Header
