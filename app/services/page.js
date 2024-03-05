import "tailwindcss/tailwind.css";
const { default: Footer } = require("../components/common/Footer");
const { default: Navbar } = require("../components/common/Navbar");
import ServicesMain from "../components/ServicesPage/ServiceMain";

const index = () => {
  return (
    <>
      <Navbar />
      <ServicesMain />
      <Footer />
    </>
  );
};

export default index;
