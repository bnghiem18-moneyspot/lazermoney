import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, HelpCircle, DollarSign, MessageCircle, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: HelpCircle, label: 'How', path: '/how-it-works' },
  { icon: DollarSign, label: 'Costs', path: '/costs' },
  { icon: MessageCircle, label: 'FAQ', path: '/faq' },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-background/90 backdrop-blur-xl border-t border-white/10 safe-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center py-2 px-4 rounded-xl transition-all duration-200 touch-target',
                isActive 
                  ? 'text-brand-primary' 
                  : 'text-brand-text-muted hover:text-brand-text'
              )}
            >
              <div className="relative">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-glow"
                    className="absolute -inset-2 rounded-full bg-brand-primary/20 -z-10"
                    style={{ filter: 'blur(8px)' }}
                  />
                )}
              </div>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
        
        {/* Apply Now CTA */}
        <Link
          to="/apply"
          className="flex flex-col items-center justify-center"
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-primary to-[#0091EA] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.4)]">
              <Zap className="w-5 h-5 text-brand-background" strokeWidth={2} fill="currentColor" />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-brand-primary/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
          <span className="text-xs mt-1 font-semibold text-brand-primary">Apply</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
