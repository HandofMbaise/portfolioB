import { useEffect } from 'react';
import pic from '../images/face-down.png'


function Portfolio(){
    
const skills = document.getElementsByClassName('skills');



useEffect(() => {
    setTimeout(() =>{
   skills[0].textContent = 'MONGO'
   skills[0].style.color = 'lime'
}, 3000);

setTimeout(() =>{
 skills[1].textContent = 'EXPRESS';
 skills[1].style.color = 'yellow'
}, 5000);

setTimeout(() =>{
   skills[2].textContent = 'REACT'; 
   skills[2].style.color = 'red'
}, 7000);

setTimeout(() =>{
   skills[3].textContent = 'NODE.JS';
   skills[3].style.color = 'blue'
}, 9000);
    
})


    return(
        <>
         <header>
        <h1 id="logo">PERSONAL PORTFOLIO</h1>

        <nav className="nav-bar">
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About-H.F.M</li></a>
                <a href="#"><li>Services</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
        </nav>
        
    </header>

    <main>

         <div className="container"></div>
        <img src={pic}></img>

        <h2 id="intro"><span id="Hi-span">Hi i am</span> <br/> Tochi. <br/> <span id="C-span">C.E.O H.F.M Groups.</span></h2> 

        <h1 id="read-me">README TEXT</h1>
        <p id="welcome-msg">Welcome. H.F.M Technology is an innovative and improvisive group of very skilled developers, <br/> we value our clients and perform task with so much efficiency, dedication and determination. <br/> With various developing and innovative skills embeded in each of our staffs, <br/> we assure our clients of powerful and responsive result that gets a job welldone after development. <br/> Feel free to connect with us from any part of the world, we are at your most honourable service.</p>

        
         <h1 id="overview">SKILLS OVERVIEW</h1>

        <div className="skills-container">

        <h2 className="skills" id="react"></h2>
        <h2 className="skills" id="node"></h2>
        <h2 className="skills" id="express"></h2>
        <h2 className="skills" id="mongo"></h2>

        </div>

    </main>
       
        
    <footer>

     <div id="icon">
      <h1 id="hfm-icon">🖖</h1>
      <p id="hfm">H.F.M</p>
      <p id="Tech">Technology.</p>

      <p id="made-with">made with <br/>
      <span id="special">REACT VITE</span>  </p>
      </div>


      </footer>
    

    </>

    

    )
}

export default Portfolio;