export const WHATSAPP_URL='https://wa.me/558321772460';
export function createWhatsAppUrl(message){return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`}
