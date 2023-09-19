import { Outlet, useLoaderData } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Navbar/Header";


const Home = () => {
      return (
            <div className=" px-8 h-screen w-full">
                  <Header></Header>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Home;