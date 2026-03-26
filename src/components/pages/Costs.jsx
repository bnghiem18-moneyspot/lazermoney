import { motion } from 'framer-motion';
import { DollarSign, Info, CheckCircle2, AlertCircle, Zap } from 'lucide-react';
import { useConfig } from '../../hooks/useConfig';
import { Button, Card, Badge } from '../ui';
import { cn, formatCurrency } from '../../lib/utils';

const Costs = () => {
  const config = useConfig();
  const { costs, products } = config;

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
              <DollarSign className="w-4 h-4" />
              Transparent Pricing
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              Clear Rates, <span className="text-gradient">No Surprises</span>
            </h1>
            <p className="text-lg text-brand-text-muted">
              We believe in complete transparency. Here's exactly what you can expect 
              to pay with a {config.brand.name} loan.
            </p>
          </motion.div>

          {/* Rate Overview Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="glow" className="text-center h-full">
                <p className="text-brand-text-muted text-sm mb-2">APR Starting At</p>
                <p className="text-4xl font-display font-bold text-brand-primary tabular-nums mb-2">
                  {products.apr.min}%
                </p>
                <p className="text-xs text-brand-text-muted">For excellent credit</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card variant="glass" className="text-center h-full">
                <p className="text-brand-text-muted text-sm mb-2">Loan Amounts</p>
                <p className="text-2xl font-display font-bold text-brand-text tabular-nums mb-2">
                  {formatCurrency(products.minLoan)} - {formatCurrency(products.maxLoan)}
                </p>
                <p className="text-xs text-brand-text-muted">Flexible options</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card variant="glass" className="text-center h-full">
                <p className="text-brand-text-muted text-sm mb-2">Loan Terms</p>
                <p className="text-2xl font-display font-bold text-brand-text tabular-nums mb-2">
                  {products.minTerm} - {products.maxTerm} months
                </p>
                <p className="text-xs text-brand-text-muted">Choose your timeline</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interest Rates Section */}
      <section className="py-16 lg:py-24 bg-brand-surface/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-text mb-4">
              Interest Rates by Credit Score
            </h2>
            <p className="text-brand-text-muted">
              Your rate depends on your credit profile. Here's what to expect.
            </p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden lg:block">
            <Card variant="glass" className="overflow-hidden p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 font-display font-semibold text-brand-text">
                      Credit Score Tier
                    </th>
                    <th className="text-right py-4 px-6 font-display font-semibold text-brand-text">
                      APR Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {costs.interestRates.map((rate, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        'border-b border-white/5 last:border-0',
                        'hover:bg-white/5 transition-colors'
                      )}
                    >
                      <td className="py-4 px-6 text-brand-text">
                        {rate.creditTier}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="font-mono text-brand-primary tabular-nums font-semibold">
                          {rate.aprRange}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>

          {/* Mobile Data Cards */}
          <div className="lg:hidden space-y-4">
            {costs.interestRates.map((rate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-brand-text-muted mb-1">Credit Tier</p>
                      <p className="font-semibold text-brand-text">{rate.creditTier}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-brand-text-muted mb-1">APR Range</p>
                      <p className="font-mono text-lg text-brand-primary tabular-nums font-bold">
                        {rate.aprRange}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-text mb-4">
              Fees & Charges
            </h2>
            <p className="text-brand-text-muted">
              Complete fee transparency — no hidden charges, ever.
            </p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden lg:block">
            <Card variant="glass" className="overflow-hidden p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 font-display font-semibold text-brand-text">
                      Fee Type
                    </th>
                    <th className="text-center py-4 px-6 font-display font-semibold text-brand-text">
                      Amount
                    </th>
                    <th className="text-left py-4 px-6 font-display font-semibold text-brand-text">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {costs.fees.map((fee, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        'border-b border-white/5 last:border-0',
                        'hover:bg-white/5 transition-colors'
                      )}
                    >
                      <td className="py-4 px-6 text-brand-text font-medium">
                        {fee.name}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Badge 
                          variant={fee.amount === '$0' ? 'success' : 'primary'}
                          className="font-mono tabular-nums"
                        >
                          {fee.amount}
                        </Badge>
                      </td>
                      <td className="py-4 px-6 text-brand-text-muted text-sm">
                        {fee.note}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>

          {/* Mobile Data Cards */}
          <div className="lg:hidden space-y-4">
            {costs.fees.map((fee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass">
                  <div className="flex items-start justify-between mb-3">
                    <p className="font-semibold text-brand-text">{fee.name}</p>
                    <Badge 
                      variant={fee.amount === '$0' ? 'success' : 'primary'}
                      className="font-mono tabular-nums"
                    >
                      {fee.amount}
                    </Badge>
                  </div>
                  <p className="text-sm text-brand-text-muted">{fee.note}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Highlight: No Prepayment Penalty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card variant="glow" className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="font-display font-bold text-brand-text mb-1">
                  No Prepayment Penalty
                </p>
                <p className="text-brand-text-muted text-sm">
                  Pay off your loan early and save on interest — we'll never penalize you for it.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-16 lg:py-24 bg-brand-surface/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-text mb-4">
                Example Loan Calculation
              </h2>
              <p className="text-brand-text-muted">
                Here's what a typical loan looks like with {config.brand.name}.
              </p>
            </div>

            <Card variant="glow">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-brand-text-muted mb-1">Loan Amount</p>
                  <p className="text-2xl font-display font-bold text-brand-text tabular-nums">
                    {formatCurrency(costs.example.amount)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-brand-text-muted mb-1">APR</p>
                  <p className="text-2xl font-display font-bold text-brand-primary tabular-nums">
                    {costs.example.apr}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-brand-text-muted mb-1">Loan Term</p>
                  <p className="text-2xl font-display font-bold text-brand-text tabular-nums">
                    {costs.example.term} months
                  </p>
                </div>
                <div>
                  <p className="text-sm text-brand-text-muted mb-1">Monthly Payment</p>
                  <p className="text-2xl font-display font-bold text-brand-primary tabular-nums">
                    {formatCurrency(costs.example.monthlyPayment, { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-brand-text-muted">Total Interest</span>
                  <span className="font-mono text-brand-text tabular-nums">
                    {formatCurrency(costs.example.totalInterest, { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-text font-semibold">Total Repayment</span>
                  <span className="font-mono text-xl text-brand-text font-bold tabular-nums">
                    {formatCurrency(costs.example.totalPayment, { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-brand-background/50 border border-white/10">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    This is an example only. Your actual rate and terms may vary based on your 
                    credit profile and other factors. This example does not include the origination fee.
                  </p>
                </div>
              </div>
            </Card>
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
              See Your Personalized Rate
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
              Get My Rate
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Costs;
