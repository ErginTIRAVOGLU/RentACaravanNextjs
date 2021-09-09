

function AracTipiList({ arac_tipi,aracTipiGuncelle,aractipiArray,queryData}) {
    //console.log(aractipiArray.indexOf(arac_tipi.tip_slug) >= 0)
    //console.log(aractipiArray) onChange={()=> aracTipiGuncelle(arac_tipi.tip_slug)} selected={aractipiArray.indexOf(arac_tipi.tip_slug) >= 0}  
    //console.log(aractipiArray)
    ///console.log(queryData + "et")
    //console.log(queryData.indexOf(arac_tipi.tip_slug) >= 0)
    //aractipiArray.indexOf(arac_tipi.tip_slug) >= 0 || 
    //const isLoggedIn = aractipiArray.indexOf(arac_tipi.tip_slug) >= 0 || queryData.indexOf(arac_tipi.tip_slug) >= 0;
//selected={aractipiArray.indexOf(arac_tipi.tip_slug) >= 0}
//console.log(queryData.indexOf(arac_tipi.tip_slug) >= 0)
    return (
        
        <label style={{display:"flex",flexDirection:"row"}} className="">
            { aractipiArray.indexOf(arac_tipi.tip_slug) >= 0 ? "aractipi evet" : "aractipi hayır"}  - 
            { queryData?.indexOf(arac_tipi.tip_slug) >= 0 ? "query evet" : "query hayır" }
                           
            <input style={{display:"inline"}} type="checkbox" name="aracTipi"  value={`${arac_tipi.tip_slug}`} onChange={()=> aracTipiGuncelle(arac_tipi.tip_slug)} /> 
            {/*
            queryData.indexOf(arac_tipi.tip_slug) >= 0 ? 
            <input style={{display:"inline"}} type="checkbox" name="aracTipi"  value={`${arac_tipi.tip_slug}`} onChange={()=> aracTipiGuncelle(arac_tipi.tip_slug)} checked />
            : 
            <input style={{display:"inline"}} type="checkbox" name="aracTipi"  value={`${arac_tipi.tip_slug}`} onChange={()=> aracTipiGuncelle(arac_tipi.tip_slug)} />
            */
            }
            
             

            
            
            {/*
                       <span style={{display:"inline"}} className="">{arac_tipi.tip} {queryData?.indexOf(arac_tipi.tip_slug) >= 0 ? "true" : "false"} - {aractipiArray.indexOf(arac_tipi.tip_slug) >= 0 ? "true" : "false"}</span>
 */}
            
        </label>
    )
}


export default AracTipiList

