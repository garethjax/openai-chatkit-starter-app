import { StartScreenPrompt } from "@openai/chatkit";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Come si sostituisce il motore?",
    prompt: "Come si sostituisce il motore di un ascensore?",
    icon: "circle-question",
  },
  {
    label: "Interventi di manutenzione",
    prompt: "Ho un problema con un KONE che non accetta chiamate esterne o interne. Come posso risolvere il problema?",
    icon: "star",
  },
  {
    label: "Problemi comuni",
    prompt: "Quali sono i problemi più comuni negli ascensori e come risolverli?",
    icon: "lightbulb",
  },
  {
    label: "Manuale tecnico",
    prompt: "Dove trovo le specifiche tecniche per la marca di ascensore che sto riparando?",
    icon: "book-open",
  },
];

export const PLACEHOLDER_INPUT = "Chiedi aiuto su manutenzione ascensori...";

export const GREETING = "👋 Ciao! Sono l'assistente tecnico per la manutenzione ascensori. Come posso aiutarti?";
