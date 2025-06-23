import "./menu.css";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg"
import PrimaryButton from "../Buttons/PrimaryButton";
import OutlinedButton from "../Buttons/OutlinedButton";

const Menu = () => {
    return(
        <nav className="menu">
            <div className="logo-container">
                <Image src={Logo} alt="logo do site" title="Finpay" width={160}/>
            </div>
            <ul className="menu-links">
                <li className="link-name"><a>Products</a></li>
                <li className="link-name"><a>Customers</a></li>
                <li className="link-name"><a>Pricing</a></li>
                <li className="link-name"><a>Learn</a></li>
            </ul>
            <div className="buttons-container">
                <OutlinedButton buttonName={"Login"}/>
                <PrimaryButton buttonName={"Sing Up"}/>
            </div>
        </nav>
    )
}

export default Menu;