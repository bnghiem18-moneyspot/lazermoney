import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Slider = forwardRef(({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  formatValue,
  prefix,
  suffix,
  className,
  showTicks = false,
  ...props
}, ref) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  const displayValue = formatValue 
    ? formatValue(value) 
    : `${prefix || ''}${value.toLocaleString()}${suffix || ''}`;

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-brand-text">
            {label}
          </label>
          <span className="text-lg font-mono font-semibold text-brand-primary tabular-nums">
            {displayValue}
          </span>
        </div>
      )}
      
      <div className="relative">
        {/* Track background */}
        <div className="absolute inset-0 h-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-surface" />
        
        {/* Filled track */}
        <div 
          className="absolute h-2 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-primary to-[#0091EA]"
          style={{ width: `${percentage}%` }}
        />
        
        {/* Glow effect */}
        <div 
          className="absolute h-2 top-1/2 -translate-y-1/2 rounded-full opacity-50 blur-sm bg-brand-primary"
          style={{ width: `${percentage}%` }}
        />
        
        {/* Input */}
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={cn(
            'relative w-full h-6 appearance-none bg-transparent cursor-pointer z-10',
            '[&::-webkit-slider-thumb]:appearance-none',
            '[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6',
            '[&::-webkit-slider-thumb]:rounded-full',
            '[&::-webkit-slider-thumb]:bg-brand-primary',
            '[&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(0,229,255,0.6)]',
            '[&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white',
            '[&::-webkit-slider-thumb]:cursor-pointer',
            '[&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150',
            '[&::-webkit-slider-thumb]:hover:scale-110',
            '[&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6',
            '[&::-moz-range-thumb]:rounded-full',
            '[&::-moz-range-thumb]:bg-brand-primary',
            '[&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white',
            '[&::-moz-range-thumb]:cursor-pointer',
          )}
          {...props}
        />
      </div>
      
      {/* Min/Max labels */}
      <div className="flex justify-between mt-2 text-xs text-brand-text-muted">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
});

Slider.displayName = 'Slider';

export default Slider;
