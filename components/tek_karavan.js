import Link from "next/link"
import Image from "next/image"
function TekKaravan({ karavan }) {
//    console.log(karavan.resimler)
    return (
        <div >
            <Link href={`/liste/${encodeURIComponent(karavan.baslik_url)}`}>
                <a style={{textTransform:"none",textDecoration:"none"}}>
                {
                    karavan.resimler[0] ? <img src={karavan.resimler[0]?.fotograf_id.data.thumbnails[3].url} className="img-fluid rounded mx-auto d-block image image-thumbnail" /> : ""
                }
                </a>
            </Link>
            <div className="card-body">
                <Link href={`/liste/${encodeURIComponent(karavan.baslik_url)}`}>
                    <a style={{textTransform:"none",textDecoration:"none"}}>
                    <span  className="card-title CardTitle">{karavan.baslik}</span>
                    </a>
                </Link>
                <div className="card-text CardType">
                    <div className="d-inline">
                        {karavan.arac_tipi_id?.tip}
                    </div>
                    <div className="d-inline"> - </div>
                    <div className="d-inline">{karavan.yatma_yeri_sayisi} Yatak</div>
                </div>
                <div className="card-text CardLocationAndRating">
                    {karavan.il_id.adi}
                </div>
            </div>
        </div>
    )
}

export default TekKaravan
