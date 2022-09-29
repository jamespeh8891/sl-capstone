import React from 'react'
import classes from './goodnight.module.css'
import goodnightImage from '../../Assets/goodnight.JPG'

export default function Goodnight() {
    function addFav (song) {
      alert(`You have succefully ${song} to favorites`)
    }
      return (
        
        <div className={classes.goodnight}>    
        
       
        <div className={classes.goodnightImg}>
     
     <div className={classes['image']}>
      <img src={goodnightImage} alt='goodnight-screen'></img>
      </div>
      </div>
      <div className={classes.albuminfo}>
          <h2> GOODNIGHTS & GOODBYES </h2>
          <h6>SL ERROR</h6>
          <h6>7 SONGS</h6>
          <h6>RELEASE NOVEMBER, 26 2019</h6>
          <hr></hr>
        
          <div className={classes.songnames}>
            <ol>
              <li className={classes.songlist}>
                <h4>1. LOST</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Lost')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>2. DETACHED</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Detached')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>3. I'LL BE OKAY</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Ill be okay')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>4. HELP</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Help')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>5. THANK YOU</h4>
                <button className={classes.heartBtn} onClick={()=>addFav('Thank you')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>6. SPACE</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Space')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>7. FAREWELL</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Farewell')}>♡</button>
              </li> 
             
              
            </ol>
          </div>
        </div>
        </div>
        // </div>
  
      )
  }