// Single source of truth for brand + LINE contact + booking.
// Every CTA in the site reads from here — do not hardcode URLs elsewhere.
// Override via .env (VITE_LINE_*, VITE_BOOKING_URL) for staging/prod without touching code.

export const site = {
  brand: 'หมอแจว',
  subtitle: 'พ่อปู่โหรา ญาณหยั่งรู้',
  positioning:
    'ที่ปรึกษาจังหวะชีวิตและธุรกิจ ด้วยศาสตร์จีน โหงวเฮ้ง และญาณหยั่งรู้',
  yearsExperience: 30,
  priceStart: 999,

  lineOaId: import.meta.env.VITE_LINE_OA_ID ?? '@mohjaew',
  lineUrl: import.meta.env.VITE_LINE_URL ?? 'https://line.me/R/ti/p/@mohjaew',
  bookingUrl:
    import.meta.env.VITE_BOOKING_URL ?? 'https://backoffice.mohjaew.com/booking',
} as const;

// Required compliance disclaimer — reused in the footer and trust section.
export const disclaimer =
  'การพยากรณ์เป็นความเชื่อส่วนบุคคล ใช้เป็นแนวทางประกอบการตัดสินใจ ไม่มีการรับประกันผลลัพธ์ และผลลัพธ์แตกต่างตามบริบทของแต่ละบุคคล';
