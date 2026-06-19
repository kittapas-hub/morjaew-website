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
      <path d="M7 3v3" />
      <path d="M17 3v3" />
      <path d="M4.5 8.5h15" />
      <rect x="4.5" y="5.5" width="15" height="14" rx="2.5" />
      <path d="M8 12h2.5" />
      <path d="M13.5 12H16" />
      <path d="M8 15.5h2.5" />
    </>
  ),
  checklist: (
    <>
      <path d="M9 6.5h10" />
      <path d="M9 12h10" />
      <path d="M9 17.5h10" />
      <path d="m4.5 6.5 1 1 2-2" />
      <path d="m4.5 12 1 1 2-2" />
      <path d="m4.5 17.5 1 1 2-2" />
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
      <path d="M5 6.5h14v9.5H9l-4 3v-12.5Z" />
      <path d="M8.5 10h7" />
      <path d="M8.5 13h4.5" />
    </>
  ),
  phone: (
    <path d="M7.5 4.5 10 8l-1.6 1.5c.8 1.8 2.3 3.3 4.1 4.1L14 12l3.5 2.5-1 3.3c-.2.7-.9 1.1-1.6 1A12.1 12.1 0 0 1 5.2 9.1c-.1-.7.3-1.4 1-1.6l1.3-3Z" />
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
      <path d="M9 7V5.8c0-.7.6-1.3 1.3-1.3h3.4c.7 0 1.3.6 1.3 1.3V7" />
      <rect x="4.5" y="7" width="15" height="11.5" rx="2.2" />
      <path d="M4.5 11.5h15" />
      <path d="M10 11.5v1h4v-1" />
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
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
import type { ReactNode } from 'react';
