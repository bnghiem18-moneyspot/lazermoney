import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from './BottomNav';

const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Radial gradient glow at top */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(0,229,255,0.08) 0%, transparent 70%)',
          }}
        />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay noise-overlay" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <Outlet />
        </main>
        
        <Footer />
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
