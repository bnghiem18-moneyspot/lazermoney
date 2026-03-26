import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, Shield, Lock } from 'lucide-react';
import { useConfig } from '../../hooks/useConfig';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';

const Footer = () => {
  const config = useConfig();

  const socialIcons = {
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
  };

  return (
    <footer className="bg-brand-surface border-t border-white/10 pb-24 lg:pb-0">
      {/* Main Footer */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt={config.brand.name} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
              {config.brand.description}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {Object.entries(config.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                if (!Icon) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-text-muted hover:text-brand-primary hover:bg-brand-primary/10 transition-all duration-200"
                    aria-label={platform}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-brand-text mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {config.navigation.main.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-text-muted hover:text-brand-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-bold text-brand-text mb-4">Legal</h4>
            <ul className="space-y-3">
              {config.navigation.footer.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-text-muted hover:text-brand-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-brand-text mb-4">Contact Us</h4>
            <ul className="space-y-3 text-brand-text-muted">
              <li>
                <a 
                  href={`tel:${config.contact.phone}`}
                  className="hover:text-brand-primary transition-colors duration-200"
                >
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-brand-primary transition-colors duration-200"
                >
                  {config.contact.email}
                </a>
              </li>
              <li className="text-sm">
                <span className="block">{config.contact.address.street}</span>
                <span className="block">{config.contact.address.suite}</span>
                <span className="block">
                  {config.contact.address.city}, {config.contact.address.state} {config.contact.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-brand-text-muted">
              <Shield className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
              <span className="text-sm">Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2 text-brand-text-muted">
              <Lock className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
              <span className="text-sm">256-bit Encryption</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-brand-background/50">
        <div className="section-container py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-brand-text-muted">
            <p>{config.legal.copyright}</p>
            <p className="text-center lg:text-right text-xs max-w-2xl">
              {config.legal.licenses}
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-brand-background">
        <div className="section-container py-6">
          <p className="text-xs text-brand-text-muted/70 leading-relaxed">
            {config.legal.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
