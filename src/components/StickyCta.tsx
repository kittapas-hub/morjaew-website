import { LineButton } from './LineButton';

// Mobile-only sticky bar (hidden ≥720px via CSS) — keeps the conversion CTA in reach.
export function StickyCta() {
  return (
    <div className="sticky-cta">
      <LineButton block>จองคิวปรึกษาผ่าน LINE</LineButton>
    </div>
  );
}
