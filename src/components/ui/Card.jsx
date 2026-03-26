import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const cardVariants = {
  glass: `
    bg-[rgba(30,41,59,0.6)]
    backdrop-blur-xl
    border border-white/10
    border-t-white/20
  `,
  solid: `
    bg-brand-surface
    border border-white/5
  `,
  elevated: `
    bg-brand-surface-elevated
    border border-white/10
    shadow-lg
  `,
  outline: `
    bg-transparent
    border border-white/10
    hover:border-brand-primary/50
  `,
  glow: `
    bg-[rgba(30,41,59,0.6)]
    backdrop-blur-xl
    border border-brand-primary/30
    shadow-[0_0_20px_rgba(0,229,255,0.15)]
  `,
};

const Card = forwardRef(({
  children,
  variant = 'glass',
  className,
  hover = false,
  animate = false,
  onClick,
  ...props
}, ref) => {
  const Component = animate ? motion.div : 'div';
  
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  } : {};
  
  const hoverProps = hover && animate ? {
    whileHover: { 
      scale: 1.02,
      transition: { duration: 0.15 }
    },
  } : {};

  return (
    <Component
      ref={ref}
      className={cn(
        'rounded-xl p-6',
        cardVariants[variant],
        hover && !animate && 'transition-all duration-200 hover:scale-[1.02] hover:border-brand-primary/30',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...animationProps}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

// Subcomponents
const CardHeader = ({ children, className, ...props }) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className, ...props }) => (
  <h3 className={cn('text-xl font-display font-bold text-brand-text', className)} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className, ...props }) => (
  <p className={cn('text-brand-text-muted mt-1', className)} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className, ...props }) => (
  <div className={cn('mt-6 pt-4 border-t border-white/10', className)} {...props}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
