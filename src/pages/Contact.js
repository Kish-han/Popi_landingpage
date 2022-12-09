import React, { useContext } from 'react';
// import images
import WomanImg from '../img/contact/woman.png';
import Image1 from '../img/contact/A1.jpg';
import Image2 from '../img/contact/A2.jpg';
import Image3 from '../img/contact/A3.jpg';
import Image4 from '../img/contact/A4.jpg';
import Image5 from '../img/contact/A5.jpg';
import Image6 from '../img/contact/A6.jpg';
import Image7 from '../img/contact/A7.jpg';
import Image8 from '../img/contact/A8.jpg';
import Image9 from '../img/contact/A9.jpg';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
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
  )
};

export default Contact;
  // return (
  //   // <motion.section
  //   //   initial={{ opacity: 0, y: '100%' }}
  //   //   animate={{ opacity: 1, y: 0 }}
  //   //   exit={{ opacity: 0, y: '100%' }}
  //   //   transition={transition1}
  //   //   className='section bg-white'
  //   // >
  //   //   <div className='container mx-auto h-full'>
  //   //     <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
  //   //       {/* bg */}
  //   //       <motion.div
  //   //         initial={{ opacity: 0, y: '100%' }}
  //   //         animate={{ opacity: 1, y: 0 }}
  //   //         exit={{ opacity: 0, y: '100%' }}
  //   //         transition={transition1}
  //   //         className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
  //   //       ></motion.div>
  //   //       {/* text & form */}
  //   //       <div
  //   //         onMouseEnter={mouseEnterHandler}
  //   //         onMouseLeave={mouseLeaveHandler}
  //   //         className='lg:flex-1 lg:pt-32 px-4'
  //   //       >
  //   //         <h1 className='h1'>Contact me</h1>
  //   //         <p className='mb-12'>I would love to get suggestions from you.</p>
  //   //         {/* form */}
  //   //         <form className='flex flex-col gap-y-4'>
  //   //           <div className='flex gap-x-10'>
  //   //             <input
  //   //               className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
  //   //               type='text'
  //   //               placeholder='Your name'
  //   //             />
  //   //             <input
  //   //               className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
  //   //               type='text'
  //   //               placeholder='Your email address'
  //   //             />
  //   //           </div>
  //   //           <input
  //   //             className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
  //   //             type='text'
  //   //             placeholder='Your message'
  //   //           />
  //   //           <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
  //   //             Send it
  //   //           </button>
  //   //         </form>
  //   //       </div>
  //   //       {/* image */}
  //   //       <motion.div
  //   //         onMouseEnter={mouseEnterHandler}
  //   //         onMouseLeave={mouseLeaveHandler}
  //   //         initial={{ opacity: 0, y: '100%' }}
  //   //         animate={{ opacity: 1, y: 0 }}
  //   //         exit={{ opacity: 0, y: '100%' }}
  //   //         transition={{ transition: transition1, duration: 1.5 }}
  //   //         className='lg:flex-1'
  //   //       >
  //   //         <img src={WomanImg} alt='' />
  //   //       </motion.div>
  //   //     </div>
  //   //   </div>
  //   // </motion.section>
  // );

