import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className="dark:bg-black dark:text-gray-100 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
