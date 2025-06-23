import "./footer.css";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg"
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div>
                <Image src={Logo} width={160}/>
            </div>
            <nav>
                <h3>Solutions</h3>
                <ul className="footer-links">
                    <li>Small Businness</li>
                    <li>Freelancers</li>
                    <li>Customers</li>
                    <li>Taxes</li>
                </ul>
            </nav>
            <nav>
                <h3>Company</h3>
                <ul className="footer-links">
                    <li>About Us</li>
                    <li>Carreer</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <nav>
                <h3>Learn</h3>
                <ul className="footer-links">
                    <li>Blog</li>
                    <li>Ebooks</li>
                    <li>Guides</li>
                    <li>Templates</li>
                </ul>
            </nav>
            <div className="redes-sociais">
                <p>Follow us on</p>
                <FaTwitter size={25} fill="#013146" style={{margin: "5px"}}/>
                <FaLinkedin size={25} fill="#013146" style={{margin: "5px"}}/>
                <FaFacebook size={25} fill="#013146" style={{margin: "5px"}}/>
            </div>
        </footer>
    )
}

export default Footer;