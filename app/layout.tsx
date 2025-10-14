import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

/*I set up the metadata to define default title, description and template for all pages
 which would set up a strong site-wide SEO consistency. I've populated openGraph and Twitter
 with a mix of real and dummy information but the structure for this is something I would
 follow if I were working with real information. The JSON-LD org schema would help with
 entity recognition by Google and associates the brand with it's social profile. I also
 followed the beforeInteractive load strategy to ensure the schema markup executes early,
 giving those lovely crawlers what they want, consistency.
*/
export const metadata: Metadata = {
  
  title: {
    default: "Answering Legal | 24/7 legal answering service",
    template: "%s | Answering Legal",
  },
  description: "24/7 legal answering service for law firms.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Answering Legal",
    type: "website",
    url: "https://www.answeringlegal.com",
    title: "Answering Legal",
    description: "24/7 legal answering service for law firms.",
    images: [
      
      { url: "https://www.answeringlegal.com/og-default.jpg", width: 1200, height: 630, alt: "Answering Legal" },
    ],
  },
  twitter: {
    
    card: "summary_large_image",
    title: "Answering Legal",
    description: "24/7 legal answering service for law firms.",
    images: ["https://www.answeringlegal.com/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
       
        <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Answering Legal",
            url: "https://www.answeringlegal.com",
            logo: "https://www.answeringlegal.com/logo.png",
            sameAs: ["https://www.linkedin.com/company/answering-legal/"],
          })}
        </Script>

        {children}
      </body>
    </html>
  );
}
