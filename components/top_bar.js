import Link from "next/link"
import Image from "next/image";

function TopBar() {
    return (
        <div className="col-12">
            <div className="row">
                {/*<div className="col text-white-50 bg-dark"></div>*/}
                <div className="col position-relative" style={{height:'50px'}}  >
                <Link href="/">
                    <a>
                    <Image 
                        src="https://links.papareact.com/qd3" 
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left" />
                    </a>    
                </Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar
