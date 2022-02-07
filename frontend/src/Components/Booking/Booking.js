import React, {  useState } from 'react';

export default function Booking() {
    const [message,setMessage]=useState('lala');
   const book =()=>{
       let arr=[];
       let start=12;
       let end=17;
       let time=end-start;
       for (let index = start; index < end; index++) {
           let element0 = index;
         for (let index = 0; index < 4; index++) {
             if (index==0) {
              
             const element = element0;
             element0 = element;
             arr.push(element.toLocaleString(undefined,{maximumFractionDigits:3}));   
             }
             else{
                 
             const element = element0+0.15;
             element0 = element;
             arr.push(element.toLocaleString(undefined,{maximumFractionDigits:3}));
             }
         }  
       }
       arr.push(end.toString());
       let date=arr.map((element, index) =>{
           return <option value={element} key={index} style={{color:'red'}}>{element}</option>
       })
       return date;
   }
  return <div>
      <h1>{message}</h1>
      <select onChange={(e)=>{setMessage(e.target.value)}}>{book()}</select>
  
  </div>;
}
