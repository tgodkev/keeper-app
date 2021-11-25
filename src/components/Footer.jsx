import { exportDefaultDeclaration } from '@babel/types';
import React from 'react';

function Footer(){
    let year = new Date().getFullYear();
    return(
        <div className="footer">
            <p>Code by Kev {year}</p>
        </div>
    )
};


export default Footer;