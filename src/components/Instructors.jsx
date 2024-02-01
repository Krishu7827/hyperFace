import React from 'react'
import './Instructors.css'





const  Instructors = ({header,text,data})=>{



    return(
        <div className='Scroll-Header'>
            <p style={{color:"white",fontSize:'24px'}} >Tweets Shorts</p>
            <p style={{color:"#B6BBC4",fontSize:'14px'}}>Listen to audio versions of tweet threads</p>
        <section className="container">
     
     
        <div className='Instructor-card' style={{backgroundImage:`#191B20`}}>
       <div className="img">
        <img src='https://marketplace.canva.com/EAFOWUXOOvs/1/0/1600w/canva-green-gradient-minimalist-simple-instagram-profile-picture-tBlf3wVYGhg.jpg' alt='img'/>
       </div>
       <div className="InstructorDetails">
        <div>Product</div>
        <p>Fundamentals of Product Design</p>
        <p>Sneha Bansal</p>
       </div>
        </div>

        <div className='Instructor-card' style={{backgroundImage:`#191B20`}}>
       <div className="img">
        <img src='https://media.licdn.com/dms/image/D5603AQFdVDpgkGBfNA/profile-displayphoto-shrink_800_800/0/1701398028430?e=2147483647&v=beta&t=kVn2r7JuX52NGA7adVfUgjl6WYuOAEicnjNTvrUq4lY' alt='img'/>
       </div>
       <div className="InstructorDetails">
        <div style={{width:'63px'}}>Cloud Service</div>
        <p>AWS(Amazon Web Serivce)</p>
        <p>Nikita</p>
       </div>
        </div>

        <div className='Instructor-card' style={{backgroundImage:`#191B20`}}>
       <div className="img">
        <img src='https://marketplace.canva.com/EAFxmKaN1hY/1/0/1600w/canva-pink-modern-facebook-profile-picture-ukaMbw_Nvfk.jpg' alt='img'/>
       </div>
       <div className="InstructorDetails">
        <div>DevOps</div>
        <p>Python Concepts</p>
        <p>Lykka Christan</p>
       </div>
        </div>
        
        
     
      </section>
      </div>
    )
}

export default Instructors