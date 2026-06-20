export type BrandIconName =
  | 'calendar'
  | 'checklist'
  | 'compass'
  | 'heart'
  | 'home'
  | 'lock'
  | 'message'
  | 'phone'
  | 'question'
  | 'sparkle'
  | 'work';

type Props = {
  name: BrandIconName;
  className?: string;
};

const paths: Record<BrandIconName, ReactNode> = {
  calendar: (
    <>
      <rect x="4.5" y="5.5" width="15" height="14" rx="3" />
      <path d="M8 3.8v3.4" />
      <path d="M16 3.8v3.4" />
      <path d="M4.5 9.4h15" />
      <path d="M8.2 13h2.1" />
      <path d="M13.7 13h2.1" />
      <path d="M8.2 16.1h2.1" />
      <path d="M13.7 16.1h2.1" />
    </>
  ),
  checklist: (
    <>
      <path d="M9.5 6.6h9" />
      <path d="M9.5 12h9" />
      <path d="M9.5 17.4h9" />
      <path d="M5 6.6h.01" />
      <path d="M5 12h.01" />
      <path d="M5 17.4h.01" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
    </>
  ),
  heart: (
    <path d="M12 19s-7-4.1-7-9.1A3.9 3.9 0 0 1 12 7.6a3.9 3.9 0 0 1 7 2.3C19 14.9 12 19 12 19Z" />
  ),
  home: (
    <>
      <path d="m4 11 8-6.5 8 6.5" />
      <path d="M6.5 10.5V19h11v-8.5" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  lock: (
    <>
      <rect x="5.5" y="10" width="13" height="9" rx="2" />
      <path d="M8.5 10V7.8a3.5 3.5 0 0 1 7 0V10" />
      <path d="M12 14v2" />
    </>
  ),
  message: (
    <>
      <path d="M5 6.4h14v9.4H9.4L5 19.1V6.4Z" />
      <path d="M8.5 10h7" />
      <path d="M8.5 13h4.8" />
    </>
  ),
  phone: (
    <>
      <path d="M14 5.2c2.4.5 4.2 2.3 4.7 4.8" />
      <path d="M14 8.5c.7.2 1.2.7 1.4 1.4" />
      <path d="M7.2 4.8 10 8.1 8.7 9.8c.8 1.7 2.1 3 3.8 3.8l1.7-1.3 3.3 2.8-.9 3.1c-.2.7-.9 1.2-1.7 1.1A12.4 12.4 0 0 1 4.7 9.1c-.1-.8.4-1.5 1.1-1.7l1.4-.4Z" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.5 9.2A2.6 2.6 0 0 1 12 7.5c1.6 0 2.8 1 2.8 2.4 0 1.7-1.8 2.2-2.4 3.3" />
      <path d="M12 16.5h.01" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.8 13.9 9l5.3 1.9-5.3 1.9L12 18.2l-1.9-5.4-5.3-1.9L10.1 9 12 3.8Z" />
      <path d="M18 4.5v3" />
      <path d="M16.5 6h3" />
    </>
  ),
  work: (
    <>
      <path d="M9 7V5.8c0-.8.6-1.4 1.4-1.4h3.2c.8 0 1.4.6 1.4 1.4V7" />
      <rect x="4.5" y="7" width="15" height="11.5" rx="2.5" />
      <path d="M4.5 11.3h15" />
      <path d="M10.2 11.3v1.2h3.6v-1.2" />
    </>
  ),
};

export function BrandIcon({ name, className = '' }: Props) {
  return (
    <svg
      className={`brand-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
import type { ReactNode } from 'react';
