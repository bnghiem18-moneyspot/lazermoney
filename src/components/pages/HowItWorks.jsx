import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ArrowRight, Zap } from 'lucide-react';
import { useConfig } from '../../hooks/useConfig';
import { Button, Card } from '../ui';
import { cn } from '../../lib/utils';

const HowItWorks = () => {
  const config = useConfig();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Total Time: ~10 Minutes
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              How <span className="text-gradient">{config.brand.name}</span> Works
            </h1>
            <p className="text-lg text-brand-text-muted">
              From application to funding in four simple steps. 
              Our streamlined process gets you the cash you need, fast.
            </p>
          </motion.div>

          {/* Mobile: Vertical Laser Path Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Laser line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-primary to-brand-primary/30" />
              <div className="absolute left-8 top-0 bottom-0 w-0.5 blur-sm bg-brand-primary/50" />

              <div className="space-y-8">
                {config.howItWorks.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    {/* Step number node */}
                    <div className="absolute left-4 top-0">
                      <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-brand-background font-display font-bold text-sm shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                        {step.step}
                      </div>
                    </div>

                    <Card variant="glass" className="relative overflow-hidden">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display font-bold text-lg text-brand-text">
                          {step.title}
                        </h3>
                        <span className="text-xs font-mono text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-brand-text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Diagonal Staggered Grid */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
              {config.howItWorks.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className={cn(
                      isEven ? 'justify-self-end' : 'justify-self-start',
                      index === 1 && 'mt-16',
                      index === 3 && 'mt-16'
                    )}
                  >
                    <Card 
                      variant="glow" 
                      hover
                      className="relative max-w-md overflow-hidden group"
                    >
                      {/* Connecting laser */}
                      {index < 3 && (
                        <div className={cn(
                          'absolute w-32 h-0.5 bg-gradient-to-r',
                          isEven 
                            ? 'right-0 translate-x-full top-1/2 from-brand-primary to-transparent' 
                            : 'left-0 -translate-x-full top-1/2 from-transparent to-brand-primary'
                        )} />
                      )}

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                          <span className="text-2xl font-display font-bold text-brand-primary">
                            {step.step}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-display font-bold text-xl text-brand-text">
                              {step.title}
                            </h3>
                            <span className="text-xs font-mono text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-brand-text-muted leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Laser sweep on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      />
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Need Section */}
      <section className="py-16 lg:py-24 bg-brand-surface/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              What You'll Need
            </h2>
            <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
              Have these items ready for a smooth application process.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Valid Government ID',
                description: "Driver's license, passport, or state ID",
              },
              {
                title: 'Proof of Income',
                description: 'Recent pay stubs or tax returns',
              },
              {
                title: 'Bank Account Info',
                description: 'Checking or savings account for funding',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass" className="text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-brand-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-muted text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {config.faqs[0].questions.slice(0, 4).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="outline" hover className="h-full">
                  <h4 className="font-display font-semibold text-brand-text mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-brand-text-muted mb-8">
              It only takes a few minutes to check your rate. 
              No commitment, no impact to your credit score.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              icon={Zap}
              glow
            >
              Check Your Rate Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
