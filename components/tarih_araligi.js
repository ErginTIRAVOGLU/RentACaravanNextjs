import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";

import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import {format} from "date-fns";

function TarihAraligi(aractipiArray) {


    const router = useRouter();
    var {location, startDate2, endDate2,noOfGuests} = router.query;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    if(!startDate2)
    {
        startDate2=new Date();
    }
    if(!endDate2)
    {
        endDate2=new Date();
    }
    const handleSelect = (ranges) => {
//        console.log(ranges)
//        console.log(aractipiArray)
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        
  /*      var myModal = new bootstrap.Modal(document.getElementById('tarihAraligiModal'))
          
       
        myModal.hide()
*/
        

    }
    const formattedStartDate= format(new Date(startDate), "dd/MM/yyyy");
    const formattedEndDate= format(new Date(endDate), "dd/MM/yyyy");
    const range =`${formattedStartDate} - ${formattedEndDate}`;
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection"

    }

    return (
        <div style={{zIndex: "55"}}>
            <input type="hidden" id="seciliTarih" value={range} />

<DateRangePicker
                ranges={[selectionRange]} 
                minDate={new Date()}
                rangeColors={["#FD5B01"]}
                onChange={handleSelect}
                staticRanges={[]}
                inputRanges={[]}
                dateDisplayFormat="dd/MM/yyyy"
                />            
        </div>
    )
}


export default TarihAraligi
