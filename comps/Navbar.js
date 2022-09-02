
import Link from "next/link";
import Styles from "../styles/Home.module.css"
import Image from "next/image"

const Navbar = () => {
    return <nav>
        <div className="logo">
            {/* <img src="/llogo.png"  className={Styles.logo} /> */}
            <Image src="/llogo.png" width={128} height={77} alt="logo"/>
        </div>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/ninjas/'}><a>Ninja Listing</a></Link>
        
    </nav>
}
 
export default Navbar;