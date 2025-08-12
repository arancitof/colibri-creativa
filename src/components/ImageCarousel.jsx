import React, { useState } from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, Stack, CircularProgress, Box } from '@mui/material';
import InfoBox from './InfoBox';

const ImageCarousel = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const artists = [
        { id: 1, src: '/Pintora.webp', title: 'Pintora', description: 'Descripción del colaborador' },
        { id: 2, src: '/alfarero.webp', title: 'Alfarero', description: 'Descripción de colaborador 2' },
        { id: 3, src: '/Chef.webp', title: 'Chef', description: 'Descripción del colaborador 3 ' },
        { id: 4, src: '/estilista.webp', title: 'Estilista', description: 'Descripción del colaborador 4 ' },
    ];

    const [imageLoaded, setImageLoaded] = useState({});


    /*  Función de feedback para carga de imágenes */
    const handleImageLoad = (id) => {
        setImageLoaded(prev => ({ ...prev, [id]: true }));
    };


    return (
        <div className='container mx-auto p-30'>
            <div className=' mx-auto p-4'>
                <InfoBox title='Momentos Mágicos'>
                    "Pequeños instantes que se vuelven arte."

                    Cada foto cuenta una historia:
                    un cabello transformado,
                    un hilo convertido en alas,
                    un taller donde la risa y la calma se encuentran.
                    Explora nuestra galería y siente la magia de crear y cuidarte a la vez.
                </InfoBox>
            </div>

            <Slider {...settings}>
                {artists.map((artist) => (
                    <div key={artist.id} className='p-2'>
                        <Card className='max-w-sm mx-auto'>
                            {!imageLoaded[artist.id] && (
                                <Box display='flex' justifyContent='center' alignItems='center' height='140px'>
                                    <CircularProgress color='secondary' />
                                </Box>
                            )}
                            <CardMedia
                                component='img'
                                height='140'
                                image={artist.src}
                                alt={artist.title}
                                className='object-cover'
                                style={{ display: imageLoaded[artist.id] ? 'block' : 'none' }}
                                onLoad={() => handleImageLoad(artist.id)}
                            />
                            <CardContent >
                                <Typography className='font-titles' gutterBottom variant='h5' component='div'>
                                    {artist.title}
                                </Typography>
                                <Typography variant='body2' color='textSecondary'>
                                    {artist.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImageCarousel;


