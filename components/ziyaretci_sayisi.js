import { useEffect } from "react";

function ZiyaretciSayisi({kisiSayisi,setkisiSayisi}) {
    useEffect(() => {
        var slider = document.getElementById("myRange");
        var output = document.getElementById("range");
        output.innerHTML = slider.value; // Display the default slider value
        
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
          output.innerHTML = this.value;
        } 
      },)
   
    return (
        <div >
 <input className="col-12" type="range" min="0" max="10" value={kisiSayisi} onChange={(e)=>{setkisiSayisi(e.target.value)}}  id="myRange" name="myRange" /><div id="range" ></div>
        </div>
    )
}


export default ZiyaretciSayisi
