import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Shield, Clock, Percent, ArrowRight, 
  CheckCircle2, Star, TrendingUp 
} from 'lucide-react';
import { useConfig } from '../../hooks/useConfig';
import { Button, Card, Slider } from '../ui';
import { cn, formatCurrency } from '../../lib/utils';

const iconMap = {
  Zap,
  Shield,
  Clock,
  Percent,
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  const config = useConfig();
  const [loanAmount, setLoanAmount] = useState(15000);
  const [loanTerm, setLoanTerm] = useState(36);

  // Calculate estimated payment
  const apr = config.products.apr.average / 100 / 12;
  const monthlyPayment = (loanAmount * apr * Math.pow(1 + apr, loanTerm)) / 
    (Math.pow(1 + apr, loanTerm) - 1);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="section-container py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Copy */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-medium">
                  <Zap className="w-4 h-4" fill="currentColor" />
                  Lightning-Fast Approval
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-text mb-6 leading-tight"
              >
                Get Cash at the{' '}
                <span className="text-gradient">Speed of Light</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg lg:text-xl text-brand-text-muted mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Personal loans from {formatCurrency(config.products.minLoan)} to{' '}
                {formatCurrency(config.products.maxLoan)}. Rates starting at{' '}
                <span className="text-brand-primary font-semibold tabular-nums">
                  {config.products.apr.min}% APR
                </span>
                . Apply in minutes, funded same day.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  glow
                  className="text-lg"
                >
                  Check Your Rate
                </Button>
                <Button variant="secondary" size="lg">
                  See How It Works
                </Button>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-brand-text-muted"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span>No impact to credit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span>2-minute application</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span>Same-day funding</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Calculator Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <Card 
                variant="glow" 
                className="relative overflow-hidden"
              >
                {/* Laser streak effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <motion.div
                    className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    animate={{ x: ['-100%', '400%'] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 2,
                    }}
                  />
                </div>

                <div className="relative">
                  <h3 className="font-display text-xl font-bold text-brand-text mb-6">
                    Quick Rate Check
                  </h3>

                  <div className="space-y-6">
                    <Slider
                      label="Loan Amount"
                      value={loanAmount}
                      onChange={setLoanAmount}
                      min={config.products.minLoan}
                      max={config.products.maxLoan}
                      step={500}
                      prefix="$"
                    />

                    <Slider
                      label="Loan Term"
                      value={loanTerm}
                      onChange={setLoanTerm}
                      min={config.products.minTerm}
                      max={config.products.maxTerm}
                      step={6}
                      suffix=" months"
                    />

                    <div className="p-4 rounded-lg bg-brand-background/50 border border-white/10">
                      <p className="text-sm text-brand-text-muted mb-1">
                        Estimated Monthly Payment
                      </p>
                      <p className="text-3xl font-display font-bold text-brand-primary tabular-nums">
                        {formatCurrency(monthlyPayment, { minimumFractionDigits: 2 })}
                        <span className="text-base font-normal text-brand-text-muted">/mo</span>
                      </p>
                      <p className="text-xs text-brand-text-muted mt-2">
                        Based on {config.products.apr.average}% APR. Your actual rate may vary.
                      </p>
                    </div>

                    <Button variant="primary" className="w-full" glow>
                      Get My Personalized Rate
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Mobile Sticky CTA */}
        <div className="lg:hidden fixed bottom-20 left-4 right-4 z-40">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            <Button 
              variant="primary" 
              className="w-full shadow-2xl" 
              size="lg"
              glow
            >
              Check Your Rate — No Credit Impact
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-16 lg:py-24 bg-brand-surface/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              Why Choose <span className="text-gradient">{config.brand.name}</span>
            </h2>
            <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
              Experience the future of personal lending with our cutting-edge platform.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.valueProps.map((prop, index) => {
              const Icon = iconMap[prop.icon] || Zap;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    variant="glass" 
                    hover 
                    className="h-full text-center lg:text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                      <Icon className="w-6 h-6 text-brand-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-text mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-brand-text-muted text-sm leading-relaxed">
                      {prop.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile Calculator Section */}
      <section className="lg:hidden py-12 bg-brand-background">
        <div className="section-container">
          <Card variant="glow">
            <h3 className="font-display text-xl font-bold text-brand-text mb-6 text-center">
              Calculate Your Payment
            </h3>

            <div className="space-y-6">
              <Slider
                label="Loan Amount"
                value={loanAmount}
                onChange={setLoanAmount}
                min={config.products.minLoan}
                max={config.products.maxLoan}
                step={500}
                prefix="$"
              />

              <Slider
                label="Loan Term"
                value={loanTerm}
                onChange={setLoanTerm}
                min={config.products.minTerm}
                max={config.products.maxTerm}
                step={6}
                suffix=" months"
              />

              <div className="p-4 rounded-lg bg-brand-surface border border-white/10 text-center">
                <p className="text-sm text-brand-text-muted mb-1">
                  Estimated Monthly Payment
                </p>
                <p className="text-3xl font-display font-bold text-brand-primary tabular-nums">
                  {formatCurrency(monthlyPayment, { minimumFractionDigits: 2 })}
                  <span className="text-base font-normal text-brand-text-muted">/mo</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                  />
                ))}
              </div>
              <p className="text-brand-text font-semibold mb-1">4.9 out of 5 stars</p>
              <p className="text-brand-text-muted text-sm">Based on 10,000+ reviews</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-5xl lg:text-6xl font-display font-bold text-brand-primary tabular-nums mb-2">
                $500M+
              </p>
              <p className="text-brand-text-muted">Loans Funded</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-right"
            >
              <div className="flex items-center justify-center lg:justify-end gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-brand-primary" />
                <span className="text-2xl font-display font-bold text-brand-text">98%</span>
              </div>
              <p className="text-brand-text-muted text-sm">Customer Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-surface/50 to-brand-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-brand-text-muted mb-8">
              Check your rate in minutes with no impact to your credit score. 
              See your personalized offers instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg" 
                icon={Zap}
                glow
              >
                Apply Now
              </Button>
              <Link to="/how-it-works">
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
