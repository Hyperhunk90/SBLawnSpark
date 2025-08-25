import React from 'react'
import { motion } from 'framer-motion'

const DeerMascot = ({ size = 60, className = '' }) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Deer Body */}
        <ellipse cx="50" cy="65" rx="20" ry="15" fill="#8B4513" />
        
        {/* Deer Head */}
        <ellipse cx="50" cy="40" rx="15" ry="12" fill="#A0522D" />
        
        {/* Antlers */}
        <motion.g
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '50px 30px' }}
        >
          <path
            d="M42 25 L38 20 M42 25 L40 15 M42 25 L45 18"
            stroke="#654321"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M58 25 L62 20 M58 25 L60 15 M58 25 L55 18"
            stroke="#654321"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>
        
        {/* Eyes */}
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <circle cx="45" cy="38" r="2" fill="#000" />
          <circle cx="55" cy="38" r="2" fill="#000" />
        </motion.g>
        
        {/* Eye highlights */}
        <circle cx="46" cy="37" r="0.5" fill="#FFF" />
        <circle cx="56" cy="37" r="0.5" fill="#FFF" />
        
        {/* Nose */}
        <ellipse cx="50" cy="45" rx="1.5" ry="1" fill="#000" />
        
        {/* Legs */}
        <rect x="40" y="78" width="3" height="12" fill="#8B4513" />
        <rect x="47" y="78" width="3" height="12" fill="#8B4513" />
        <rect x="53" y="78" width="3" height="12" fill="#8B4513" />
        <rect x="60" y="78" width="3" height="12" fill="#8B4513" />
        
        {/* Tail */}
        <motion.ellipse
          cx="70"
          cy="62"
          rx="3"
          ry="2"
          fill="#8B4513"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Southern Buck text */}
        <text
          x="50"
          y="95"
          textAnchor="middle"
          fontSize="6"
          fill="#2D3748"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          Southern Buck
        </text>
      </svg>
    </motion.div>
  )
}

export default DeerMascot