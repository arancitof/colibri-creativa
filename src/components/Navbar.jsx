import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);


    return (
        <nav className="bg-title flex items-center text-center justify-between p-4 shadow-md relative ">
            {/* Logo y Rutas de Navegación */}
            <div className="flex items-center">
                <img src='/logo-colibri-brand.png' alt="LogoColibri" className="h-16 mr-auto" />
            </div>
            {/* Menu */}
            <div className="hidden md:flex space-x-6 font-titles">
                <Link to='/' className='font-semibold'>Inicio</Link>
                <Link to='/Artistas' className='font-semibold'>Artistas</Link>
                <Link to='/Sobre-nosotros' className='font-semibold'>Sobre Nosotros</Link>
                <Link to='/Contacto' className='font-semibold'>Contacto</Link>

            </div>
            {/* Iconos */}
            <div className="hidden md:flex space-x-4">
                <a href="#"><SearchIcon /></a>
                <a href="#"><ShoppingCartIcon /></a>
            </div>

            {/* Menu Hamburguesa */}
            <div className='md:hidden '>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CloseIcon /> : <MenuIcon /> }
                </button>
            </div>

            {/* Menu Desplegable */}
            {isOpen && (
                <div className='font-titles absolute top-full left-0 w-full bg-title text center py-4 shadow-lg flex flex-col space-y-4 md:hidden z-50 '>
                    <Link className='font-semibold' to='/' onClick={ () => setIsOpen(false)}>Inicio</Link>
                    <Link className='font-semibold' to='/Artistas' onClick={ () => setIsOpen(false)}>Artistas</Link>
                    <Link className='font-semibold' to='/Sobre-nosotros' onClick={ () => setIsOpen(false)}>Sobre Nosotros</Link>
                    <Link className='font-semibold' to='/Contacto' onClick={ () => setIsOpen(false)}>Contacto</Link>
                    <div className='flex justify-center space-x-4 mt-2'>
                        <a href=""><SearchIcon /></a>
                        <a href=""><ShoppingCartIcon /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
