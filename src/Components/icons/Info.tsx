import React from 'react';

import InfoSvg from '../../assets/Info.svg';

interface Props{
    stroke: string;
}

export function Info({stroke}:Props) {
    return(
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14.5" cy="14.5" r="10.875" stroke={stroke} stroke-width="2"/>
        <path d="M15.1041 9.0625C15.1041 9.39618 14.8337 9.66667 14.5 9.66667C14.1663 9.66667 13.8958 9.39618 13.8958 9.0625C13.8958 8.72883 14.1663 8.45834 14.5 8.45834C14.8337 8.45834 15.1041 8.72883 15.1041 9.0625Z" fill="#8D8D8D" stroke="#8D8D8D"/>
        <path d="M14.5 20.5417V12.0833" stroke={stroke} stroke-width="2"/>
        </svg>
    );
}
