import { Link } from "react-router-dom";


const Header = () => {
      return (
            <div className="bg-[#5a1eff] p-4 flex justify-end items-center">
                 <nav className="flex gap-x-20 text-white">
                  <Link to='/'>Home</Link>
                  <Link to='/contact'>Contact</Link>
                  <div className="mr-24">
                  <Link to="/FAQ">FAQ</Link>
                  </div>
                  </nav>             
            </div>
      );
};

export default Header;