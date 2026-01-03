import React from 'react';
import { BadgeCheck } from 'lucide-react';

interface VerifiedBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ size = 'md', label, className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`inline-flex items-center gap-1 text-cyan-400 font-medium ${className}`}>
      <BadgeCheck className={`${sizeClasses[size]} fill-cyan-400/20`} />
      {label && <span className={`${textSizes[size]} tracking-tight uppercase`}>{label}</span>}
    </div>
  );
};

export default VerifiedBadge;