import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, Zap } from 'lucide-react';
import { useConfig } from '../../hooks/useConfig';
import { Button, Card, Accordion, Input } from '../ui';
import { cn } from '../../lib/utils';

const FAQ = () => {
  const config = useConfig();
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = config.faqs;

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? categories.flatMap(cat => 
        cat.questions.filter(q => 
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : categories[activeCategory]?.questions || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg text-brand-text-muted mb-8">
              Find answers to common questions about {config.brand.name} loans.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-muted" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    'w-full pl-12 pr-4 py-4 rounded-xl',
                    'bg-brand-surface border border-white/10',
                    'text-brand-text placeholder:text-brand-text-muted',
                    'focus:outline-none focus:border-brand-primary',
                    'focus:ring-1 focus:ring-brand-primary',
                    'focus:shadow-[0_0_20px_rgba(0,229,255,0.15)]',
                    'transition-all duration-200'
                  )}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-8 lg:py-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Tabs - Desktop Sidebar / Mobile Horizontal Scroll */}
            {!searchQuery && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1"
              >
                {/* Mobile: Horizontal scrolling tabs */}
                <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar">
                  <div className="flex gap-2">
                    {categories.map((cat, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={cn(
                          'flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200',
                          activeCategory === index
                            ? 'bg-brand-primary text-brand-background shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                            : 'bg-brand-surface text-brand-text-muted hover:text-brand-text'
                        )}
                      >
                        {cat.category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desktop: Vertical tabs */}
                <div className="hidden lg:block sticky top-24">
                  <p className="text-sm font-semibold text-brand-text-muted uppercase tracking-wider mb-4">
                    Categories
                  </p>
                  <div className="space-y-2">
                    {categories.map((cat, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={cn(
                          'w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200',
                          activeCategory === index
                            ? 'bg-brand-primary/10 text-brand-primary border-l-2 border-brand-primary shadow-[inset_0_0_20px_rgba(0,229,255,0.1)]'
                            : 'text-brand-text-muted hover:text-brand-text hover:bg-white/5'
                        )}
                      >
                        {cat.category}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={cn(
                searchQuery ? 'lg:col-span-4' : 'lg:col-span-3'
              )}
            >
              {searchQuery && (
                <div className="mb-6">
                  <p className="text-brand-text-muted">
                    {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
                  </p>
                </div>
              )}

              {filteredFaqs.length > 0 ? (
                <Card variant="glass" className="p-0 overflow-hidden">
                  <div className="p-6">
                    <Accordion 
                      items={filteredFaqs.map(faq => ({
                        title: faq.q,
                        content: faq.a,
                      }))}
                    />
                  </div>
                </Card>
              ) : (
                <Card variant="glass" className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-brand-text-muted mx-auto mb-4" />
                  <p className="text-brand-text font-semibold mb-2">No results found</p>
                  <p className="text-brand-text-muted text-sm">
                    Try a different search term or browse by category.
                  </p>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 lg:py-24 bg-brand-surface/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-text mb-4">
              Still Have Questions?
            </h2>
            <p className="text-brand-text-muted mb-8">
              Our team is here to help. Reach out and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Support
              </Button>
              <Button 
                variant="secondary"
                onClick={() => window.location.href = `tel:${config.contact.phone}`}
              >
                Call {config.contact.phoneDisplay}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
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
              Check your rate in minutes with no impact to your credit score.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              icon={Zap}
              glow
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
