import { Link } from "react-router-dom";
import Footer from "./utils/Footer";
import Header from "./utils/Header";

function Home() {
  return (
    <>
    <Header />
    <Footer />
      This is Home

      <Link to={"/Projects"}>Projects</Link>
    </>
  );
}

export default Home;
