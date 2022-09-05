import React from 'react';
import { motion } from 'framer-motion';
import fun from '../img/fun.jpg'
 

const Hero = () => {
    return (
    <header>
    <motion.h1
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5,delay: 1 }}
  >
    <div class="hero__content">
    <h3>This is my life in photos, add if you like....</h3>
    </div>
    <h1>Product</h1>

   </motion.h1>
  </header>
)
}
  

export default Hero;