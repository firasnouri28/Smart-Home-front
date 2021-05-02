import React from 'react';
import { Button } from 'react-bootstrap';


const Landing = () => {
    return (
        <main className='welcomePage' >
            <div className='leftBox'>
                <Button variant="outline-secondary" href='/signup'>Inscription</Button>
            </div>
            <div className='rightBox'>
                <Button variant="outline-info" href='/login'>Connexion</Button>
            </div>
        </main>
    )
}

export default Landing;
