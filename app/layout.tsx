import { ChatKitScript } from "@/components/ChatKitScript";
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
        <ChatKitScript />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
