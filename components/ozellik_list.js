

function OzellikList({ozellik,ozellikGuncelle,ozellikArray}) {

    return (        
        <label style={{display:"flex",flexDirection:"row"}} >
            <input style={{display:"inline"}} type="checkbox" name="ozellik" value={`${ozellik.ozellik_slug}`} selected={ozellikArray.indexOf(ozellik.ozellik_slug) >= 0} onChange={()=> ozellikGuncelle(ozellik.ozellik_slug)}  />
            <span style={{display:"inline"}} className="">{ozellik.ozellik}</span>
        </label>       
    )
}
 
export default OzellikList
