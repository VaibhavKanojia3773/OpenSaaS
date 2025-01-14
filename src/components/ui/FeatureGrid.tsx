'use client'

import { motion } from 'framer-motion'
import { Card } from './Card'
import { Shield, CreditCard, Building2, BarChart3 } from 'lucide-react'

const features = [
  { title: 'Authentication with Role Management', Icon: Shield, color: '#FF6B6B' },
  { title: 'Payment Integration', Icon: CreditCard, color: '#4ECDC4' },
  { title: 'Organization Management', Icon: Building2, color: '#FFA400' },
  { title: 'Real Time Analytics', Icon: BarChart3, color: '#45B7D1' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function FeatureGrid() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card title={feature.title} Icon={feature.Icon} color={feature.color} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

