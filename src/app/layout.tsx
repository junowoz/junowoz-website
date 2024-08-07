import type { Metadata } from "next";
import "@/styles/globals.css";
import Link from "next/link";
import { navItems } from "@/data/navItems";

export const metadata: Metadata = {
  title: "junowoz | website",
  description: "जूनोवोस्",
  openGraph: {
    type: "website",
    url: "https://junowoz.com",
    title: "junowoz | website",
    description: "जूनोवोस्",
    siteName: "junowoz",
    images: [
      {
        url: "https://junowoz.com/og.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@junow0z",
    creator: "@junow0z",
    images: "https://junowoz.com/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-bg text-white font-mono text-sm p-4 max-w-3xl mx-auto flex flex-col gap-4">
        <nav className="text-secondary flex flex-wrap gap-2">
          {navItems.map((item) =>
            item.external ? (
              <a
                target="_blank"
                key={item.href}
                className="hover:bg-hover hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                className="hover:bg-hover hover:text-white"
                href={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <main>{children}</main>
        <footer className="text-foreground">
          <p>© {new Date().getFullYear()} @junowoz</p>
        </footer>
      </body>
    </html>
  );
}
