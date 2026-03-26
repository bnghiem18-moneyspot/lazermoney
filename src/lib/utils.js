import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines clsx and tailwind-merge for conditional class names
 * that properly handle Tailwind CSS class conflicts.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency values consistently
 */
export function formatCurrency(amount, options = {}) {
  const { minimumFractionDigits = 0, maximumFractionDigits = 2 } = options;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
}

/**
 * Format percentage values consistently
 */
export function formatPercent(value, options = {}) {
  const { minimumFractionDigits = 2, maximumFractionDigits = 2 } = options;
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value / 100);
}

/**
 * Format phone numbers for display
 */
export function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}-${match[4]}`;
  }
  return phone;
}
