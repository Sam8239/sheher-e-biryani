import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants/site";
import { CONTACT_EMAIL } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we handle your information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-6 md:px-12 py-16 pt-28">
          <Link
            href="/"
            className="text-sm text-muted hover:text-primary transition-colors duration-200 mb-4 inline-block cursor-pointer"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-muted mt-2 text-sm">
            Last updated: May 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-3xl mx-auto space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Introduction
            </h2>
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website{" "}
              <Link href={SITE_URL} className="text-primary hover:underline">
                {SITE_URL}
              </Link>
              . This Privacy Policy explains how we collect, use, and protect
              your personal information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Information We Collect
            </h2>
            <p>
              We collect minimal information to provide you with the best
              experience:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium text-foreground">Analytics data:</span>{" "}
                We use Vercel Analytics to understand website traffic and
                performance. This includes anonymized page views and
                performance metrics.
              </li>
              <li>
                <span className="font-medium text-foreground">Communication data:</span>{" "}
                If you contact us via WhatsApp or phone, we may retain your
                contact details and conversation for order fulfillment purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To process and fulfill your food orders</li>
              <li>To improve our website and services</li>
              <li>To communicate with you regarding orders and inquiries</li>
              <li>To comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Third-Party Services
            </h2>
            <p>
              Orders are processed through Zomato, which has its own privacy
              policy governing how your order information is handled. We
              recommend reviewing Zomato&apos;s privacy policy when placing orders.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect any personal information we
              collect. However, no method of electronic transmission or storage
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
