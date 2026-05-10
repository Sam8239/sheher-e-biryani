/** Central site configuration for Sheher-e-Biryani */

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME!;
export const SITE_TAGLINE = process.env.NEXT_PUBLIC_SITE_TAGLINE!;
export const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION!;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

/** Zomato ordering link */
export const ZOMATO_URL = process.env.NEXT_PUBLIC_ZOMATO_URL!;

/** Google Business Review Link */
export const GOOGLE_BUSINESS_URL = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || '#';

/** Social media links */
export const SOCIAL_LINKS = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL!,
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL!,
} as const;
