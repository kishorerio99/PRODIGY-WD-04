import React from 'react'
import kmprofile from "../../assets/Home.jpg"
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa'
import './home.css';

const Home = () => {
  return (
    <div>
      <section className='home section grid'>
        <img src={kmprofile} alt='' className='home__img'/>

      <div className='home__content'>
         <div className='home__data'>
            <h1 className='home__title'> 
            <span>I'm Kishore Murugavel .</span> Frontend Developer
            </h1>

            <p className="home__description">
            Strong in design and integration with intuitive problem solving skills . passionate and proficient in
            building websites and web applications using react.js and modern Javascript tools/frameworks . Looking
            to start the career as an developer and eager to contribute to all phase of the development cycle . Ability
            to translate business into technical solutions
            </p>

            <Link to='/about' className='button'>
              More About Me{''}
              <span className='button__icon'>
                 <FaArrowRight/>
              </span>
            </Link>
         </div>  
      </div>  

      <div className="color__block">

      </div>
      </section>
    </div>
  );
};

export default Home;