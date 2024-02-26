import Head from "next/head";
import Layout from "./layout";
import HomePage from "./pages/index";
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default App;
