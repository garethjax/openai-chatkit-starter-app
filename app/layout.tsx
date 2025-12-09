import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manutentia - Assistente Tecnico Ascensori",
  description: "Chatbot di assistenza tecnica per manutentori di ascensori basato su OpenAI ChatKit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="afterInteractive"
          onLoad={() => {
            window.dispatchEvent(new Event("chatkit-script-loaded"));
          }}
          onError={() => {
            window.dispatchEvent(
              new CustomEvent("chatkit-script-error", {
                detail: "Failed to load ChatKit script",
              })
            );
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
