import React, { useContext } from 'react';
// import images
import Image1 from '../img/portfolio/1.jpg';
import Image2 from '../img/portfolio/2.jpg';
import Image3 from '../img/portfolio/3.jpg';
import Image4 from '../img/portfolio/4.jpg';
import Image5 from '../img/portfolio/5.jpg';
import Image6 from '../img/portfolio/6.jpg';
import Image7 from '../img/portfolio/7.jpg';
import Image8 from '../img/portfolio/8.jpg';
import Image9 from '../img/portfolio/9.jpg';

// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className='section'>
      <img src={Image1} alt='' className='opacity-30 absolute' />
      <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='section '
      >
        <div className='z-50 ml-[120px] w-full h-full relative'>
          <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
            {/* text */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              initial={{ opacity: 0, y: '-80%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-80%' }}
              transition={transition1}
              className='flex flex-col lg:items-start'
            >
              <h1 className='h1'>Portfolio</h1>
              <p className='mb-12 max-w-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <b> Exercitationem, veritatis.</b> Veritatis illum aut,
                reprehenderit sed dolorem dolore.
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
              </p>
              {/* <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
                Hire me
              </Link> */}
            </motion.div>
            {/* image grid */}
            <div
              // onMouseEnter={mouseEnterHandler}
              // onMouseLeave={mouseLeaveHandler}
              className='grid overflow-y-scroll h-[600px] w-[1000px] scrollbar-hide'
            >
              {/* image */}
              <div className='h-[507px] w-[870px] bg-accent overflow-hidden '>
                <img
                  className='object-cover h-full w-full hover:scale-[0.98] transition-all duration-500'
                  src={Image5}
                  alt=''
                />
              </div>
              <div className='h-[507px] w-[870px] bg-accent overflow-hidden '>
                <img
                  className='object-cover h-full w-full hover:scale-[0.98] transition-all duration-500'
                  src={Image2}
                  alt=''
                />
              </div>
              <div className='h-[507px] w-[870px] bg-accent overflow-hidden '>
                <img
                  className='object-cover h-full w-full hover:scale-[0.98] transition-all duration-500'
                  src={Image3}
                  alt=''
                />
              </div>
              <div className='h-[507px] w-[870px] bg-accent overflow-hidden '>
                <img
                  className='object-cover h-full w-full hover:scale-[0.98] transition-all duration-500'
                  src={Image4}
                  alt=''
                />
              </div>
              <div className='h-[507px] w-[870px] bg-accent overflow-hidden '>
                <img
                  className='object-cover h-full w-full hover:scale-[0.98] transition-all duration-500'
                  src={Image6}
                  alt=''
                />
              </div>
              <div className='h-[507px] w-[870px] bg-accent overflow-hidden '>
                <img
                  className='object-cover h-full w-full hover:scale-[0.98] transition-all duration-500'
                  src={Image7}
                  alt=''
                />
              </div>
              <div className='h-[507px] w-[870px] bg-accent overflow-hidden '>
                <img
                  className='object-cover h-full w-full hover:scale-[0.98] transition-all duration-500'
                  src={Image8}
                  alt=''
                />
              </div>
              <div className='h-[507px] w-[870px] bg-accent overflow-hidden '>
                <img
                  className='object-cover h-full w-full hover:scale-[0.98] transition-all duration-500'
                  src={Image9}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
