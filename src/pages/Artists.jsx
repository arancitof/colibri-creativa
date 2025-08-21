import React from 'react';
import RotatingText from '../components/RotatingText';
import PixelTransition from '../components/PixelTransition';
import { CardContent } from '@mui/material';

const Artists = () => {
    return (
        /* Div principal */
        <div className='flex flex-col lg:flex-row items-center justify-center pt-40 mx-15 gap-30'>
            {/* Primer Artista */}
            <div className='flex flex-col items-center'>
                {/* Imágenes de los artistas  */}
                <PixelTransition
                    firstContent={
                        <img
                            src="/Jess.jpg"
                            alt="Foto de Jessica Escalera"
                            style={{ width: "150%", height: "150%", objectFit: "cover" }}
                        />
                    }
                    secondContent={
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "grid",
                                placeItems: "center",
                                backgroundColor: "#f0A04b"
                            }}
                        >
                            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffff", textAlign: 'center' }}>Jessica Escalera</p>
                        </div>
                    }
                    gridSize={12}
                    pixelColor='#B1C29E'
                    animationStepDuration={0.4}
                    className="custom-pixel-card"
                />

                {/* Div del texto fijo y cambiante */}
                <div className='flex flex-col lg:flex-row items-center py-5 '>
                    <CardContent className="flex items-center justify-center flex-row gap-2">
                        <div className='font-bold text-xl mb-2 text-center font-body' >
                            Creando
                        </div>
                        <div className='flex justify-center'>
                            <RotatingText
                                texts={['Arte', 'Conexiones', 'Autocuidado', 'Amor']}
                                mainClassName="px-2 sm:px-2 md:px-3 bg-subtitle text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl font-body w-40"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </div>
                    </CardContent>
                </div>
            </div>

            {/* Segundo Artista */}
            <div className='flex flex-col items-center'>
                <PixelTransition
                    firstContent={
                        <img
                            src="/Alan.jpg"
                            alt="Foto de Alan Flores"
                            style={{ width: "150%", height: "150%", objectFit: "cover" }}
                        />
                    }
                    secondContent={
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "grid",
                                placeItems: "center",
                                backgroundColor: "#f0A04b"
                            }}
                        >
                            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffff", textAlign: 'center' }}>Alan Flores</p>
                        </div>
                    }
                    gridSize={12}
                    pixelColor='#B1C29E'
                    animationStepDuration={0.4}
                    className="custom-pixel-card"
                />
                <div className='flex flex-col lg:flex-row items-center py-5'>
                    <CardContent className="flex items-center justify-center flex-row gap-2">
                        <div className='font-bold text-xl mb-2 text-center font-body' >
                            Creando
                        </div>
                        <div className='flex justify-center'>
                            <RotatingText
                                texts={['Soluciones', 'Innovación', 'Interfaces', 'Amor']}
                                mainClassName="px-2 sm:px-2 md:px-3 bg-subtitle text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl font-body w-40"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </div>
                    </CardContent>
                </div>
            </div>
        </div>

    );
}

export default Artists;
