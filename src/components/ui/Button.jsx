import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const buttonVariants = {
  primary: `
    relative px-6 py-3 rounded-lg font-semibold text-[#0B1120] 
    bg-gradient-to-r from-[#00E5FF] to-[#0091EA]
    shadow-[0_0_10px_rgba(0,229,255,0.3)]
    hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]
    active:scale-[0.98]
    transition-all duration-200
    overflow-hidden
  `,
  secondary: `
    px-6 py-3 rounded-lg font-semibold 
    border-2 border-brand-primary text-brand-primary
    bg-transparent
    hover:bg-[rgba(0,229,255,0.1)]
    hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]
    transition-all duration-200
  `,
  ghost: `
    px-4 py-2 rounded-lg font-medium 
    text-brand-text-muted bg-transparent
    hover:text-brand-text hover:bg-white/5
    transition-all duration-200
  `,
  icon: `
    p-3 rounded-lg
    text-brand-text-muted bg-transparent
    hover:text-brand-primary hover:bg-white/5
    transition-all duration-200
  `,
};

const sizeVariants = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-6 py-3',
  lg: 'text-lg px-8 py-4',
  xl: 'text-xl px-10 py-5',
};

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  loading,
  icon: Icon,
  iconPosition = 'left',
  glow = false,
  as = 'button',
  ...props
}, ref) => {
  const Component = as === 'motion' ? motion.button : as;
  
  const motionProps = as === 'motion' ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  } : {};

  return (
    <Component
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-display touch-target',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        buttonVariants[variant],
        variant !== 'icon' && sizeVariants[size],
        glow && variant === 'primary' && 'animate-glow-pulse',
        className
      )}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {/* Laser streak effect for primary buttons */}
      {variant === 'primary' && (
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute inset-0 -translate-x-full animate-[laser-streak_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </span>
      )}
      
      {loading ? (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" strokeWidth={1.5} />}
          {children && <span className="relative">{children}</span>}
          {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" strokeWidth={1.5} />}
        </>
      )}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
