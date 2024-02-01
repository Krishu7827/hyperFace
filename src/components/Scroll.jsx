import React from 'react'
import './Scroll.css'





const  ScrollBar = ({header,text,data,ind})=>{
 
  


    return(
        <div className='Scroll-Header'>
            <div style={{width:'30px'}}>
          
            </div>
            
            <p style={{color:"white",fontSize:'24px',fontWeight:500}} >{header}</p>
            <p style={{color:"#B6BBC4",fontSize:'14px'}}>{text}</p>
        <section className="container">
     {data.map((el,ind)=>
     <div key={ind}>
        <div  className='card' style={{background:`linear-gradient(to left, ${el.color}, #FFD6A5)`}}>

        </div>
        <p style={{color:"white",fontSize:'17px',fontWeight:'500'}}>{el.title}</p>
        <p style={{color:"#B6BBC4",fontSize:'14px'}}>{`${el.chapters} Chapters ${el.duration}`}</p>
        </div>
     )}
      </section>
      </div>
    )
}

export default ScrollBar