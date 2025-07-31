import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <nav className="bg-title flex items-center justify-between p-4">
            {/* Logo y Rutas de Navegación */}
            <div className="flex items-center">
                <img src='./public/logo-colibri-brand.png' alt="LogoColibri" className="h-16 mr-auto" />
            </div>
            <ul className="flex space-x-6">
                <li><a href="#" className="font-bold">Inicio</a></li>
                <li><a href="#" className="font-bold">Artistas</a></li>
                <li><a href="#" className="font-bold">Sobre Nosotros</a></li>
                <li><a href="#" className="font-bold">Contacto</a></li>
            </ul>
            <div className="flex space-x-4">
                <a href="#"><SearchIcon /></a>
                <a href="#"><ShoppingCartIcon /></a>
            </div>
        </nav>
    );
}

export default Navbar;
