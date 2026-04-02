'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export default function Card({
  icon,
  title,
  description,
  href,
  linkText = 'Dowiedz się więcej →',
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      {icon && (
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-heading font-semibold text-xl text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-light leading-relaxed mb-4 flex-1">
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className="text-accent font-semibold hover:text-accent-hover transition-colors"
        >
          {linkText}
        </Link>
      )}
    </motion.div>
  );
}
