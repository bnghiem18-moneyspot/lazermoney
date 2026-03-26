import { forwardRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { Eye, EyeOff } from 'lucide-react';

const Input = forwardRef(({
  label,
  error,
  hint,
  type = 'text',
  className,
  containerClassName,
  prefix,
  suffix,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={cn('w-full', containerClassName)}>
      {label && (
        <label className="block text-sm font-medium text-brand-text mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {prefix && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text-muted">
            {prefix}
          </div>
        )}
        
        <input
          ref={ref}
          type={inputType}
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'bg-brand-surface border border-white/10',
            'text-brand-text placeholder:text-brand-text-muted',
            'focus:outline-none focus:border-brand-primary',
            'focus:ring-1 focus:ring-brand-primary',
            'focus:shadow-[0_0_10px_rgba(0,229,255,0.2)]',
            'transition-all duration-200',
            'font-body',
            prefix && 'pl-12',
            (suffix || isPassword) && 'pr-12',
            error && 'border-brand-error focus:border-brand-error focus:ring-brand-error',
            className
          )}
          {...props}
        />
        
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-text-muted hover:text-brand-text transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Eye className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        )}
        
        {suffix && !isPassword && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-text-muted">
            {suffix}
          </div>
        )}
      </div>
      
      {hint && !error && (
        <p className="mt-2 text-sm text-brand-text-muted">{hint}</p>
      )}
      
      {error && (
        <p className="mt-2 text-sm text-brand-error">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
