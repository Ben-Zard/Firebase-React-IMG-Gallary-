import React from 'react';
import { motion } from 'framer-motion';
const Title = () => {
  return (
    <motion.h2  initial={{ x: "80%" }}
  animate={{ x: "calc(100vh - 160%)" }}
  transition={{ duration: 0.9,delay: .2 }}
  >
    <div className="title">
      <h1>MyGram</h1>
      <h2>Life In Pictures</h2>
    </div>
    </motion.h2>
  )
}

export default Title;