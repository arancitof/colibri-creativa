import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material'


/* Componente Caja Estilos */
const TextBoxContainer = styled(Card)({
    background: 'rgb(240, 160, 75)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    margin: '16px 0',
    width: '100%',
    maxWidth: 'auto',
});

const InfoBox = ({ title, children }) => {
    return (
        <TextBoxContainer>
            <CardContent>
                {title && (
                    <div className='font-titles font-bold text-2xl mb-2 text-center'>
                        {title}
                    </div>
                )}
                <div className='font-body'>
                    {children}
                </div>
            </CardContent>
        </TextBoxContainer>
    );
}

export default InfoBox;
