import React from 'react';
import { Container, Image } from 'semantic-ui-react';

const Accueil = () => {
    return (
        <div style={ {textAlign:"center"}}>
        <h1>
                <Image src="/images/imageDesk.jpg" fluid/>
            {/* style={{backgroundImage:"url(/images/imageDesk.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height:900, width:900 }} */}
    
        </h1>
        
        <h7  >2021</h7>
        <hr></hr>
        </div>
            );
}

export default Accueil;