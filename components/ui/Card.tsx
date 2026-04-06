'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  index?: number;
}

export default function Card({
  icon,
  title,
  description,
  href,
  linkText = 'Dowiedz się więcej →',
  index = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-rows-subgrid row-span-4 gap-0"
    >
      {icon && (
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-heading font-semibold text-xl text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-light leading-relaxed mb-4">
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className="text-accent font-semibold hover:text-accent-hover transition-colors self-end"
        >
          {linkText}
        </Link>
      )}
    </motion.div>
  );
}
