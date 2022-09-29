import React from 'react';
import heartBtn from './LivingInError'

export default function Heart() {
    const favReq = () => {
        
        <heartBtn />
        axios.get('http://localhost:3000/api/lie')
        .then(res => {
          const data = res.data;
          alert(data)
          
        })
      }
      let heartBtn = document.querySelectorAll('.heart');
      heartBtn.forEach(heart => heart.addEventListener("click", favReq))
      
}