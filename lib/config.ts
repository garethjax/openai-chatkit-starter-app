import { StartScreenPrompt } from "@openai/chatkit";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "ho un problema di impianto slave",
    prompt: "Saltuariamente l'impianto Slave non serve le chiamate di piano",
    icon: "circle-question",
  },
  {
    label: "L'impianto non accetta chiamate interne e chiamate esterne",
    prompt: "Ho un problema : l'impianto non accetta chiamate interne e chiamate esterne",
    icon: "star",
  },
  {
    label: "non funziona ripescaggio",
    prompt: "ho un problema con il ripescaggio",
    icon: "lightbulb",
  },
  {
    label: "che giorno è oggi?",
    prompt: "che giorno è oggi?",
    icon: "book-open",
  },
];

export const PLACEHOLDER_INPUT = "Chiedi aiuto su manutenzione ascensori...";

export const GREETING = "👋 Ciao! Sono l'assistente tecnico per la manutenzione ascensori. Come posso aiutarti?";
