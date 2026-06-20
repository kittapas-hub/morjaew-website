type DecorVariant =
  | 'consult'
  | 'about'
  | 'reviews'
  | 'gallery'
  | 'services'
  | 'cta'
  | 'pricing'
  | 'faq'
  | 'footer';

const decorByVariant: Record<DecorVariant, string[]> = {
  consult: ['mountain', 'cloud', 'blossom'],
  about: ['cloud', 'mountain'],
  reviews: ['blossom-png', 'cloud'],
  gallery: ['cloud-png', 'blossom-png'],
  services: ['divider', 'blossom'],
  cta: ['cloud', 'divider'],
  pricing: ['frame', 'blossom'],
  faq: ['mountain', 'cloud'],
  footer: ['divider', 'cloud'],
};

const assetByName: Record<string, string> = {
  blossom: '/assets/blossom.png',
  'blossom-png': '/assets/blossom.png',
  cloud: '/assets/cloud.png',
  'cloud-png': '/assets/cloud.png',
  divider: '/assets/divider.png',
  frame: '/assets/mandala.png',
  mountain: '/assets/mountain.png',
};

type Props = {
  variant: DecorVariant;
};

export function DecorativeLayer({ variant }: Props) {
  return (
    <div className={`decor-layer decor-layer--${variant}`} aria-hidden="true">
      {decorByVariant[variant].map((name) => (
        <img
          key={name}
          className={`decor decor--${variant}-${name}`}
          src={assetByName[name]}
          alt=""
          loading="lazy"
        />
      ))}
    </div>
  );
}
