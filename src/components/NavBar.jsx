import { Link } from "react-router-dom";
import fondoNavbar from "../assets/12067355_4884273.jpg"
import CartWidget from './CartWidget';


function NavBar(){
    
    return(
        <nav className="flex w-full h-40 justify-around items-center bg-cover bg-center" style={{ backgroundImage: `url(${fondoNavbar})` }}>

            <ul className="text-whitesmoke text-xl list-none flex flex-row justify-start pl-60 gap-20 flex-grow ">
                <Link to="/">Inicio</Link>
                <Link to="/catalogo">Catalogo</Link>
                <Link to="/faqs">Faqs</Link>
            </ul>

            <CartWidget className="flex-grow" />
        </nav>
    )
}

export default NavBar;

