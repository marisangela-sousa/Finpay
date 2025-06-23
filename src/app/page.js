import "../styles/global.css"
import Menu from "../components/Menu/Menu.jsx"
import Layout from "@/pages/Layout";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div style={{backgroundColor: "#F4F9F8", height: "120vh"}}>
      <Menu/>
      <Layout/>
      <Footer/>
    </div>
  );
}
