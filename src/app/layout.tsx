import "./globals.css";

export const metadata = {
  title: "Luis Hueicha - Ingeniero Civil",
  description: "Web personal de Luis Hueicha - Ingeniero Civil en Obras Civiles • Máster en Ingeniería Geotécnica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#0f172a] text-[#e2e8f0] font-sans">
        {children}
      </body>
    </html>
  );
}
