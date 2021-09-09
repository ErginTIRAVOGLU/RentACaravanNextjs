

function KiralamaTipiList({ kiralama_tip,kiralamaTipiGuncelle,kiralamatipiArray }) {

    return (        
        <label style={{display:"flex",flexDirection:"row"}} >
            <input style={{display:"inline"}} type="checkbox" name="kiralamaTip"  value={`${kiralama_tip.tip_slug}`}  selected={kiralamatipiArray.indexOf(kiralama_tip.tip_slug) >= 0} onChange={()=> kiralamaTipiGuncelle(kiralama_tip.tip_slug)} />
            <span style={{display:"inline"}} className="">{kiralama_tip.tip}</span>
        </label>
    )
}

export default KiralamaTipiList
