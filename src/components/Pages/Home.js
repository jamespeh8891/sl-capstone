import React from 'react'
import profileImage from '../../Assets/profile.JPG'
import classes from './Home.module.css'
import Body from '../Loyout/Body'

export default function Home() {
  return (
    <div classname='Home'>
      <div className={classes.background}>
        <div className={classes.profile_image}>
        <img src={profileImage} alt='homescreen'></img>
          <Body/>
          

            
        </div>
        </div>
    </div>
    
  )
}
