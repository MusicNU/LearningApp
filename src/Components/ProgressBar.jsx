import React from 'react';
import theme from '../theme';

export default function ProgressBar(props) {

    const completed = Math.floor(props.progress/props.length*100);

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        color: theme.palette.primary.light,
        paddingTop: 20,
        fontFamily: ['Londrina Solid','sans-serif'],
        fontSize: '24px'
    }

    return (
        <div className='bar-container'>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
}