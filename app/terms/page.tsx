import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/constants/site";
import { CONTACT_EMAIL } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}. Review our terms and conditions.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
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
            Terms of Service
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
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using the {SITE_NAME} website at{" "}
              <Link href={SITE_URL} className="text-primary hover:underline">
                {SITE_URL}
              </Link>
              , you agree to be bound by these Terms of Service. If you do not
              agree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Our Services
            </h2>
            <p>
              {SITE_NAME} operates a cloud kitchen specializing in authentic dum
              biryani and Indian cuisine. Our website serves as an informational
              platform for our brand and menu. All orders are placed and
              fulfilled through third-party platforms such as Zomato.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Orders & Payments
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                All food orders are processed through Zomato and are subject to
                Zomato&apos;s terms and conditions.
              </li>
              <li>
                Payments are handled entirely by the third-party platform used
                for ordering.
              </li>
              <li>
                Menu items, prices, and availability are subject to change
                without prior notice.
              </li>
              <li>
                For bulk orders and catering, please contact us directly via
                WhatsApp or phone.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Food Safety & Hygiene
            </h2>
            <p>
              We are committed to maintaining the highest standards of food
              safety and hygiene. Our kitchen operates in compliance with FSSAI
              guidelines. However, customers with food allergies should inform us
              at the time of ordering. We cannot guarantee a completely
              allergen-free environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, logos, and
              design elements, is the property of {SITE_NAME} and is protected
              by applicable intellectual property laws. You may not reproduce,
              distribute, or use any content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Limitation of Liability
            </h2>
            <p>
              {SITE_NAME} shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of our website or
              services. Our total liability is limited to the amount paid for the
              specific order in question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to this page. We
              encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
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
