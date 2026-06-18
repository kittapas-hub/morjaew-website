import { site } from '../config/site';

function LineIcon() {
  // Simple LINE glyph; inherits currentColor.
  return (
    <svg className="line-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 5.69 2 10.23c0 4.07 3.58 7.48 8.41 8.13.33.07.78.22.89.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1.01.89.55 1.09-.46 5.86-3.45 7.99-5.91C21.4 13.7 22 12.03 22 10.23 22 5.69 17.52 2 12 2ZM8.1 12.62H6.16c-.28 0-.51-.23-.51-.51V8.23c0-.28.23-.51.51-.51.29 0 .52.23.52.51v3.36H8.1c.29 0 .52.23.52.51 0 .28-.23.51-.52.51Zm2.02-.51c0 .28-.23.51-.52.51-.28 0-.51-.23-.51-.51V8.23c0-.28.23-.51.51-.51.29 0 .52.23.52.51v3.88Zm4.5 0c0 .22-.14.41-.35.48a.5.5 0 0 1-.16.03c-.16 0-.31-.08-.41-.21l-1.99-2.71v2.41c0 .28-.23.51-.51.51-.29 0-.52-.23-.52-.51V8.23c0-.22.14-.41.35-.48.05-.02.11-.03.16-.03.16 0 .31.08.41.21l1.99 2.71V8.23c0-.28.23-.51.52-.51.28 0 .51.23.51.51v3.88Zm3.2-2.45c.28 0 .51.23.51.51 0 .29-.23.52-.51.52h-1.43v.91h1.43c.28 0 .51.23.51.51 0 .28-.23.51-.51.51h-1.94c-.28 0-.51-.23-.51-.51V8.23c0-.28.23-.51.51-.51h1.94c.28 0 .51.23.51.51 0 .29-.23.52-.51.52h-1.43v.9h1.43Z" />
    </svg>
  );
}

type Props = {
  children?: React.ReactNode;
  variant?: 'line' | 'ghost';
  block?: boolean;
  className?: string;
  /** override the LINE destination; defaults to the OA add-friend URL */
  href?: string;
};

/**
 * The one place that knows the LINE URL. Every "จองคิว / ทัก LINE" CTA on the
 * site routes through here so the destination lives only in src/config/site.ts.
 */
export function LineButton({
  children = `ทัก LINE ${site.lineOaId}`,
  variant = 'line',
  block = false,
  className = '',
  href = site.lineUrl,
}: Props) {
  return (
    <a
      className={`btn btn--${variant}${block ? ' btn--block' : ''} ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {variant === 'line' && <LineIcon />}
      {children}
    </a>
  );
}
