import React from 'react'
import livingImage from '../../Assets/living.JPG'
import classes from './livinginerror.module.css'


export default function Living() {
  function addFav (song) {
    alert(`You have added ${song} to favorites`)
  }
    return (
      <div className={classes.livingImg}>
     
      <div className={classes['image']}>
       <img src={livingImage} alt='living-screen'></img>
       </div>
       
      <div className={classes.living}>    
      
      <div className={classes.albuminfo}>
      <h2> LIVING IN ERROR </h2>
        <h6>SL ERROR</h6>
        <h6>12 SONGS</h6>
        <h6>RELEASE JULY, 8 2022</h6>
        <hr></hr>
        <div className={classes.songnames}>
          <ol>
            <li className={classes.songlist}>
              <h4>1. LIVING IN ERROR</h4>
            <button className={classes.heartBtn} onClick={()=>addFav('Living In Error')}>♡</button>
            </li> 
            <li className={classes.songlist}>
              <h4>2. WAKING UP</h4>
            <button className={classes.heartBtn} onClick={()=>addFav('Waking Up')}>♡</button>
            </li> 
            <li className={classes.songlist}>
              <h4>3. WISHES</h4>
             <button className={classes.heartBtn} onClick={()=>addFav('Wishes')}>♡</button>
             </li>
            <li className={classes.songlist}>
              <h4>4. FALLING II</h4>
            <button className={classes.heartBtn} onClick={()=>addFav('Falling II')}>♡</button>
            </li> 
            <li className={classes.songlist}>
        
              <h4>5. DRIVE AROUND</h4>
            <button className={classes.heartBtn} onClick={()=>addFav('Drive Around')}>♡</button>
            </li> 
            <li className={classes.songlist}>
              <h4>6. TO THE STARS AND BACK</h4>
            <button className={classes.heartBtn} onClick={()=>addFav('To The Stars And Back')}>♡</button>
            </li> 
            <li className={classes.songlist}>
              <h4>7. PEACE OF MIND (INTERLUDE)</h4>
            <button className={classes.heartBtn} onClick={()=>addFav('Peace Of Mind')}>♡</button>
            </li> 
            <li className={classes.songlist}>
              <h4>8. STRUCK</h4>
            <button className={classes.heartBtn} onClick={()=>addFav('Struck')}>♡</button>
            </li> 
            <li className={classes.songlist}>
              <h4>9. ARRIVAL </h4>
            <button className={classes.heartBtn} onClick={()=>addFav('Arrival')}>♡</button>
            </li> 
            <li className={classes.songlist}>
              <h4>10. 4AM</h4>
            <button className={classes.heartBtn} onClick={()=>addFav('4AM')}>♡</button>
            </li>
            <li className={classes.songlist}>
              <h4>11. REMAIN </h4>
            <button className={classes.heartBtn} onClick={()=>addFav('Remain')}>♡</button>
            </li> 
            <li className={classes.songlist}>
              <h4>12. AETHER</h4>
            <button className={classes.heartBtn} onClick={()=>addFav('Aether')}>♡</button>
            </li> 
          </ol>
        </div>
      </div>
      </div>
      </div>
      
     
      

    )
}