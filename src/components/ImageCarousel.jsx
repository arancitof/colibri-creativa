import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography} from '@mui/material';

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide:0,
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
                    slidesToShow:1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const artists = [
        {id:1, src: '/Pintora.png', title: 'Pintura 1', description: 'Descripción del colaborador'},
        {id:2, src:'/alfarero.png', title: 'Alfarero', description: 'Descripción de colaborador 2'},
        {id:3, src: '/Chef.png' , title: 'Chef' , description: 'Descripción del colaborador 3 ' },
        {id:4, src: '/estilista.jpg' , title: 'Estilista' , description: 'Descripción del colaborador 4 ' },
    ];


    return (
        <div className='container mx-auto p-4'>
            <Slider {...settings}>
                {artists.map((artist) => (
                    <div key={artist.id} className='p-2'>
                        <Card className='max-w-sm mx-auto'>
                            <CardMedia
                                component='img'
                                height='140'
                                image={artist.src}
                                alt={artist.title} 
                                className='object-cover'
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


