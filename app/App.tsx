"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 py-6 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header personalizzato */}
        <div className="mb-4 rounded-t-lg bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white shadow-lg">
          <h1 className="text-3xl font-bold">🛗 Assistente Tecnico Ascensori</h1>
          <p className="mt-2 text-blue-100">
            Supporto intelligente per manutenzione e riparazione
          </p>
        </div>
        
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>
    </main>
  );
}
