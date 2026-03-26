import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, Zap, ExternalLink 
} from 'lucide-react';
import { useConfig } from '../../hooks/useConfig';
import { Button, Card, Input } from '../ui';
import { cn } from '../../lib/utils';

const Contact = () => {
  const config = useConfig();
  const { contact } = config;

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phoneDisplay,
      href: `tel:${contact.phone}`,
      description: 'Talk to a loan specialist',
      primary: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      description: 'Get a response within 24 hours',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: `${contact.address.city}, ${contact.address.state}`,
      description: `${contact.address.street}, ${contact.address.suite}`,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              We're Here to <span className="text-gradient">Help</span>
            </h1>
            <p className="text-lg text-brand-text-muted">
              Have questions? Our team of loan specialists is standing by to assist you.
            </p>
          </motion.div>

          {/* Mobile: Tap-to-Call Buttons */}
          <div className="lg:hidden space-y-4 mb-12">
            <motion.a
              href={`tel:${contact.phone}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="block"
            >
              <Card variant="glow" className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                  <Phone className="w-6 h-6 text-brand-background" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-brand-text text-lg">
                    Call Us Now
                  </p>
                  <p className="text-brand-primary font-mono tabular-nums">
                    {contact.phoneDisplay}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-brand-text-muted" />
              </Card>
            </motion.a>

            <motion.a
              href={`mailto:${contact.email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              <Card variant="glass" className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-brand-surface-elevated flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-brand-text">
                    Email Us
                  </p>
                  <p className="text-brand-text-muted text-sm">
                    {contact.email}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-brand-text-muted" />
              </Card>
            </motion.a>
          </div>

          {/* Desktop: Split Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Terminals */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const Wrapper = method.href ? 'a' : 'div';
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Wrapper
                      href={method.href}
                      className={cn(
                        'block',
                        method.href && 'group'
                      )}
                    >
                      <Card 
                        variant={method.primary ? 'glow' : 'glass'}
                        hover={!!method.href}
                        className="flex items-start gap-5"
                      >
                        <div className={cn(
                          'w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0',
                          method.primary 
                            ? 'bg-brand-primary shadow-[0_0_20px_rgba(0,229,255,0.4)]' 
                            : 'bg-brand-surface-elevated border border-white/10'
                        )}>
                          <Icon 
                            className={cn(
                              'w-6 h-6',
                              method.primary ? 'text-brand-background' : 'text-brand-primary'
                            )} 
                            strokeWidth={1.5} 
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-brand-text-muted mb-1">
                            {method.label}
                          </p>
                          <p className={cn(
                            'font-display font-bold text-xl mb-1',
                            method.primary ? 'text-brand-primary' : 'text-brand-text',
                            method.href && 'group-hover:text-brand-primary transition-colors'
                          )}>
                            {method.value}
                          </p>
                          <p className="text-sm text-brand-text-muted">
                            {method.description}
                          </p>
                        </div>
                        {method.href && (
                          <ExternalLink className="w-5 h-5 text-brand-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Card>
                    </Wrapper>
                  </motion.div>
                );
              })}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card variant="glass">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-surface-elevated flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-brand-text mb-3">
                        Business Hours
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between gap-8">
                          <span className="text-brand-text-muted">Mon - Fri</span>
                          <span className="text-brand-text font-mono tabular-nums">
                            {contact.hours.weekdays}
                          </span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-brand-text-muted">Saturday</span>
                          <span className="text-brand-text font-mono tabular-nums">
                            {contact.hours.saturday}
                          </span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-brand-text-muted">Sunday</span>
                          <span className="text-brand-text font-mono tabular-nums">
                            {contact.hours.sunday}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card variant="glow">
                <h3 className="font-display text-xl font-bold text-brand-text mb-6">
                  Send Us a Message
                </h3>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="John"
                      required
                    />
                    <Input
                      label="Last Name"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  
                  <Input
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                  
                  <Input
                    label="Phone (Optional)"
                    type="tel"
                    placeholder="(555) 123-4567"
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2">
                      How Can We Help?
                    </label>
                    <select className={cn(
                      'w-full px-4 py-3 rounded-lg',
                      'bg-brand-surface border border-white/10',
                      'text-brand-text',
                      'focus:outline-none focus:border-brand-primary',
                      'focus:ring-1 focus:ring-brand-primary',
                      'transition-all duration-200',
                      'appearance-none cursor-pointer'
                    )}>
                      <option value="">Select a topic...</option>
                      <option value="application">Loan Application</option>
                      <option value="existing">Existing Loan</option>
                      <option value="payment">Payment Question</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us more about your question..."
                      className={cn(
                        'w-full px-4 py-3 rounded-lg',
                        'bg-brand-surface border border-white/10',
                        'text-brand-text placeholder:text-brand-text-muted',
                        'focus:outline-none focus:border-brand-primary',
                        'focus:ring-1 focus:ring-brand-primary',
                        'transition-all duration-200',
                        'resize-none'
                      )}
                    />
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="w-full"
                    icon={Send}
                    iconPosition="right"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Mobile Contact Form */}
          <div className="lg:hidden">
            <Card variant="glass">
              <h3 className="font-display text-xl font-bold text-brand-text mb-6 text-center">
                Send Us a Message
              </h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  required
                />
                
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
                
                <Input
                  label="Phone (Optional)"
                  type="tel"
                  placeholder="(555) 123-4567"
                />
                
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help?"
                    className={cn(
                      'w-full px-4 py-3 rounded-lg',
                      'bg-brand-surface border border-white/10',
                      'text-brand-text placeholder:text-brand-text-muted',
                      'focus:outline-none focus:border-brand-primary',
                      'focus:ring-1 focus:ring-brand-primary',
                      'transition-all duration-200',
                      'resize-none'
                    )}
                  />
                </div>
                
                <Button 
                  variant="primary" 
                  className="w-full"
                  icon={Send}
                  iconPosition="right"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Mobile Business Hours */}
            <Card variant="glass" className="mt-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
                <p className="font-display font-bold text-brand-text">
                  Business Hours
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-text-muted">Mon - Fri</span>
                  <span className="text-brand-text font-mono tabular-nums">
                    {contact.hours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-muted">Saturday</span>
                  <span className="text-brand-text font-mono tabular-nums">
                    {contact.hours.saturday}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-muted">Sunday</span>
                  <span className="text-brand-text font-mono tabular-nums">
                    {contact.hours.sunday}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-surface/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-text mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg text-brand-text-muted mb-8">
              Skip the questions and check your rate now — it only takes a few minutes.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              icon={Zap}
              glow
            >
              Check Your Rate
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
