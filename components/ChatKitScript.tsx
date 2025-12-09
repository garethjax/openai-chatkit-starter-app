"use client";

import Script from "next/script";

export function ChatKitScript() {
    return (
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
    );
}
