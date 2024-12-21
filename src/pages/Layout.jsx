import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
function Layout (){

    return(
        <div className="flex flex-col justify-between align-middle">
            <NavBar/>
            <Outlet />
            <footer className="bg-primary text-center p-5 text-whitesmoke text-xl">Pie de pagina</footer>
        </div>
    )
}

export default Layout;
/* 
<div className="flex flex-col h-50 align-middle">
<NavBar/>
<ItemListContainer greeting="¡BIENVENIDOS!"/>
<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}  />
</div> */