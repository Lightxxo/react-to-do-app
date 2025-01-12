import { useEffect, useState } from 'react';
import './MainContentHeader.css'

export default function MainContentHeader(){
    const [iconColor, setIconColor] = useState('');

    useEffect(() => {
        const placeholderColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--placeholder-icon-color')
        .trim();
        console.log('Icon color retrieved:', placeholderColor); // Debugging
        setIconColor(placeholderColor.slice(1)); // Set the color without '#'
    }, []);
    return (
        <div className="main-content-header">
            <img src={`https://img.icons8.com/?size=100&id=Nwf1wTRZmTUM&format=png&color=${iconColor}`}></img>
            <p>View</p>
        </div>
    );
}