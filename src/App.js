import React from 'react'
import './App.css'
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
import images from './images';


function App() {
  const [width, setWidth] = useState(0);
  const main = useRef();

  useEffect(() => {
    setWidth(main.current.scrollWidth - main.current.offsetWidth);
  }, [])

  return (
    <motion.div ref={main} className='main'>     
      <div className="header">
        <h1>IMAGE SLIDER</h1>
        </div> 
      <motion.div drag="x"
       dragConstraints = {{right : 0, left : -width}}
       className="inner-main">
        {
          (images.map(image =>{
            return(
              <motion.div className='item'> 
                <img src = {image} />
              </motion.div>
            )
          }) )
        }
      </motion.div>      
     </motion.div>
  );
}

export default App