const RAW_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW!;

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL!;
export const CONTACT_PHONE_HREF = `+${RAW_PHONE}`;
export const WHATSAPP_PHONE_HREF = RAW_PHONE;
export const WHATSAPP_MESSAGE = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE!;
export const CONTACT_ADDRESS = process.env.NEXT_PUBLIC_CONTACT_ADDRESS!;
export const CONTACT_ADDRESS_SHORT = process.env.NEXT_PUBLIC_CONTACT_ADDRESS_SHORT!;

/** Format the raw number for human display: +91 92178 06719 */
export const CONTACT_PHONE = `+${RAW_PHONE.slice(0, 2)} ${RAW_PHONE.slice(2, 7)} ${RAW_PHONE.slice(7)}`;
