import { keyframes } from '@emotion/react';
import { Card, CardContent, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';

/* Animación  */
const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

/* Componente de tarjeta Animada */
const AnimateCard = styled(Card)`
animation: ${fadeIn} 0.5s ease-out forwards;
background: rgb(240, 160, 75);
backdrop-filter: blur(10px);
box-shadow: 0 4px 6 px rgba(0, 0, 0, 0.1);
`;

/* Filosofía Colibrí Creativa */
const philosophyPoints = [
    {
        id: 1, 
        title: 'Raíces',
        description: 'De donde nace nuestra magia: En Raíces y Alas creemos que el autocuidado es un arte y que cada persona lleva dentro un mundo creativo esperando florecer. Nacimos de la idea de crear momentos de paz, belleza y expresión a traves del estilismo, el arte y la conexión emocional. Aquí, cada detalle esta hecho con el corazón, para recordarte que cuidarte es también una forma de amarte.',
        image: '/raices.webp',
    },
    {
        id: 1, 
        title: 'Alas',
        description: 'El arte de cuidarte y volar libre. Para nosotros, la belleza va mas allá del físico: es sentirte en armonía contigo misma y dejar que tu creatividad te de alas. Cada servicio, taller o pieza artesanal tiene el mismo propósito: conectarte con tu esencia, liberar el estrés y regalarte momento de magia. ',
        image: '/alas.webp',
    },
    {
        id: 1, 
        title: 'Lo que creamos',
        description: 'Entre hilos, colores y momentos de autocuidado: Estilismo Consiente: peinados, cortes y color que reflejan esencia. Arte:hecho a mano: piezas de crochet y accesorios de nuestra energía creativa. Talleres creativos: espacios para relajarte, reconectar contigo y despertar tu artista interior. ',
        image: '/colors.webp',
    }
]

const AboutUs = () => {
    return (
        <Box className='p-4'>
            {philosophyPoints.map(( point, index) => (
            <Box
            key={point.id}
            className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} justify-center my-8`}
            >
                <img
                src={point.image}
                alt={point.title}
                className='w-full lg:w-1/2 rounded-lg mb-4 lg:mb-0 lg:mx-8'
                style={{ width: '500px' , height: '500', objectFit: 'cover' }}
                />
                <AnimateCard className='w-full lg:w-1/2'>
                <CardContent>
                    <div className='font-bold text-xl mb-2 text-center font-titles' >
                        {point.title}
                    </div>
                    <div className='font-body' component='p'>
                        {point.description}
                    </div>
                </CardContent>
                </AnimateCard>
                </Box>
            ))}
        </Box>
    );
}

export default AboutUs;
