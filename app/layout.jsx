import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Projects By Owino</title>
        <meta
          name="description"
          content="Explore a curated collection of projects by Owino, featuring web and mobile applications, SaaS platforms, and corporate websites built with modern technologies."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
