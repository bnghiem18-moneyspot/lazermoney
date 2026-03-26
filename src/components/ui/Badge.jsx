import { cn } from '../../lib/utils';

const badgeVariants = {
  default: 'bg-brand-surface text-brand-text border-white/10',
  primary: 'bg-brand-primary/20 text-brand-primary border-brand-primary/30',
  success: 'bg-green-500/20 text-green-400 border-green-500/30',
  warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  error: 'bg-red-500/20 text-red-400 border-red-500/30',
  outline: 'bg-transparent text-brand-text-muted border-white/20',
};

const badgeSizes = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
  lg: 'text-base px-3 py-1.5',
};

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  glow = false,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border',
        'transition-all duration-200',
        badgeVariants[variant],
        badgeSizes[size],
        glow && variant === 'primary' && 'shadow-[0_0_10px_rgba(0,229,255,0.3)]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
