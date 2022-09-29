import React from 'react';
import classes from './body.module.css';




function Body() {

    

  return (
    <div className={classes.body}>
       
         <a href="https://www.youtube.com/channel/UC5S5BlbHgmPNGA_CcBV5yOQ" target="_blank" rel="noreferrer">
          <button className={classes.youBtn}>YouTube</button>
        </a>
      
        
        
        <a href="https://open.spotify.com/artist/3RvDGMBpZHZZWBF2deOupf" target="_blank" rel="noreferrer">
          <button className={classes.spotBtn}>Spotify</button>
        </a>
        
        
        
        <a href="https://music.apple.com/us/artist/sl-error/1488519182" target="_blank" rel="noreferrer">
          <button className={classes.appleBtn}>Apple Music</button>
        </a>
        
        
        
        <a href="https://soundcloud.com/sl_error" target="_blank" rel="noreferrer">
          <button className={classes.cloudBtn}>Sound Cloud</button>
        </a>

        
        
        
      

            
    </div>
  )
}

export default Body;





