import React from 'react'
import classes from './broken.module.css'
import brokenImage from '../../Assets/broken.JPG'

export default function Broken() {
    function addFav (song) {
      alert(`You have succefully ${song} to favorites`)
    }
    return (
      
        
        <div className={classes.broken}>    
        <div className={classes.brokenImg}>
     
      <div className={classes['image']}>
       <img src={brokenImage} alt='living-screen'></img>
       </div>
       </div>
  
        <div className={classes.albuminfo}>
          <h2> BROKEN & BENT </h2>
          <h6>SL ERROR</h6>
          <h6>9 SONGS</h6>
          <h6>RELEASE FEBUARY, 14 2020</h6>
          <hr></hr>
          <div className={classes.songnames}>
            <ol>
              <li className={classes.songlist}> 
                <h4>1. DITCHED (INTRO)</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Ditched')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>2. SOMETHING BEAUTIFUL LEFT BEHIND</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Something Beautiful Left Behind')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>3. FALLING</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Falling')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>4. YEAR'S END</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Years End')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>5. GHOST</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Ghost')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>6. FINAL DAYS</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Final Days')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>7. EMPTY (INTERLUDE)</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Empty')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>8. BROKEN & BENT</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Broken & Bent')}>♡</button>
              </li> 
              <li className={classes.songlist}>
                <h4>9. OUTER CLASSIC (BONUS TRACK)</h4>
              <button className={classes.heartBtn} onClick={()=>addFav('Outer Classic')}>♡</button>
              </li> 
            </ol>
          </div>
        </div>
        </div>
        
    
  
      )
  }