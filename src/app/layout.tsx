import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickContactBar from "@/components/QuickContactBar";
import { BRAND } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://grace-therapy-centre.local"),
  title: {
    default: "GRACE Multidisciplinary Therapy Centre and Hearing Care | Chennai",
    template: "%s | GRACE Therapy Centre Chennai",
  },
  description:
    "Specialized paediatric & adult developmental care in Sholinganallur, Chennai. Speech Therapy, Occupational Therapy, Behavioural Support, Special Education, Physiotherapy, and Advanced Hearing Testing & Digital Hearing Aids.",
  keywords: [
    "GRACE therapy centre Chennai",
    "speech therapy Sholinganallur",
    "occupational therapy Chennai",
    "hearing aid centre Chennai",
    "behavioural therapy children",
    "special education Chennai",
    "paediatric physiotherapy Chennai",
    "hearing test Mandaveli Sholinganallur",
    "teletherapy speech therapy",
    "autism therapy centre Chennai",
  ],
  authors: [{ name: "GRACE Multidisciplinary Therapy Centre" }],
  icons: {
    icon: "/images/grace-logo.jpg",
    apple: "/images/grace-logo.jpg",
  },
  openGraph: {
    title: "GRACE Multidisciplinary Therapy Centre and Hearing Care",
    description:
      "Better Communication • Brighter Future. Multidisciplinary Speech, Occupational, Behavioural, Physiotherapy, and Hearing Care in Chennai.",
    url: "/",
    siteName: "GRACE Therapy Centre",
    images: [
      {
        url: "/images/grace-logo.jpg",
        width: 800,
        height: 800,
        alt: "GRACE Multidisciplinary Therapy Centre & Hearing Care",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: BRAND.name,
    alternateName: BRAND.shortName,
    description:
      "Multidisciplinary child developmental therapy and hearing care centre in Sholinganallur, Chennai.",
    image: "/images/grace-logo.jpg",
    telephone: BRAND.phoneClean,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Door #174, Sai Garden, Villa A, Village High Road",
      addressLocality: "Sholinganallur, Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600119",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9010",
      longitude: "80.2279",
    },
    url: BRAND.referenceUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: [
      "SpeechPathology",
      "OccupationalTherapy",
      "Physiotherapy",
      "Audiology",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-warm-white text-charcoal-800 antialiased selection:bg-gold-200 selection:text-navy-950">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <QuickContactBar />
      </body>
    </html>
  );
}
