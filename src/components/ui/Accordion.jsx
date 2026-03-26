import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const AccordionItem = ({ title, children, isOpen, onToggle, index }) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between py-5 px-4 text-left',
          'transition-all duration-200',
          'hover:bg-white/5 rounded-lg -mx-4 px-4',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary',
        )}
      >
        <span className={cn(
          'font-display font-semibold text-lg transition-colors duration-200',
          isOpen ? 'text-brand-primary' : 'text-brand-text'
        )}>
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'flex-shrink-0 ml-4 transition-colors duration-200',
            isOpen ? 'text-brand-primary' : 'text-brand-text-muted'
          )}
        >
          <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
        </motion.span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={cn(
              'pb-5 px-4 text-brand-text-muted leading-relaxed',
              'border-l-2 border-brand-primary ml-4 pl-4',
              'shadow-[inset_0_0_20px_rgba(0,229,255,0.05)]'
            )}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items, allowMultiple = false, className }) => {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={cn('divide-y divide-white/10', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title || item.q}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content || item.a}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
