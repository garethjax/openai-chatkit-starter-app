# Manuale di Personalizzazione Frontend

Questo documento descrive come personalizzare l'interfaccia utente dell'applicazione ChatKit.

## 📋 Indice

1. [Personalizzazione Testi e Messaggi](#personalizzazione-testi-e-messaggi)
2. [Personalizzazione Prompts Iniziali](#personalizzazione-prompts-iniziali)
3. [Personalizzazione Colori e Tema](#personalizzazione-colori-e-tema)
4. [Personalizzazione Header e Layout](#personalizzazione-header-e-layout)
5. [Personalizzazione Metadata](#personalizzazione-metadata)
6. [Personalizzazione Stili Globali](#personalizzazione-stili-globali)

---

## Personalizzazione Testi e Messaggi

### Modificare il Messaggio di Benvenuto

Il messaggio di benvenuto viene visualizzato quando l'utente apre la chat. Per modificarlo:

**File:** `lib/config.ts`

```typescript
export const GREETING = "👋 Il tuo messaggio personalizzato qui";
```

### Modificare il Placeholder dell'Input

Il testo placeholder che appare nella casella di input:

**File:** `lib/config.ts`

```typescript
export const PLACEHOLDER_INPUT = "Scrivi qui il tuo messaggio...";
```

---

## Personalizzazione Prompts Iniziali

I prompts iniziali sono i pulsanti che appaiono nella schermata di benvenuto. Per modificarli:

**File:** `lib/config.ts`

```typescript
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Testo del pulsante",        // Testo visibile sul pulsante
    prompt: "Messaggio completo inviato", // Testo inviato quando si clicca
    icon: "wrench",                      // Icona FontAwesome (es: "wrench", "star", "lightbulb")
  },
  // Aggiungi altri prompts...
];
```

### Icone Disponibili

Puoi utilizzare qualsiasi icona FontAwesome. Alcuni esempi:
- `"wrench"` - Chiave inglese
- `"star"` - Stella
- `"lightbulb"` - Lampadina
- `"book-open"` - Libro aperto
- `"circle-question"` - Punto interrogativo
- `"gear"` - Ingranaggio
- `"shield"` - Scudo
- `"rocket"` - Razzo

Consulta [FontAwesome Icons](https://fontawesome.com/icons) per l'elenco completo.

---

## Personalizzazione Colori e Tema

### Modificare i Colori del Tema ChatKit

I colori del componente ChatKit possono essere personalizzati nel file `components/ChatKitPanel.tsx`:

**File:** `components/ChatKitPanel.tsx` (circa riga 259-273)

```typescript
theme: {
  colorScheme: theme, // "light" o "dark"
  color: {
    grayscale: {
      hue: 220,        // Tonalità base (0-360)
      tint: 6,         // Intensità del colore chiaro
      shade: theme === "dark" ? -1 : -4, // Intensità del colore scuro
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a", // Colore principale
      level: 1,        // Livello di intensità (0-3)
    },
  },
  radius: "round",    // Bordi arrotondati ("round", "square", o valore numerico)
},
```

### Esempi di Personalizzazione Colori

**Tema Blu:**
```typescript
accent: {
  primary: theme === "dark" ? "#3b82f6" : "#1e40af",
  level: 2,
},
```

**Tema Verde:**
```typescript
accent: {
  primary: theme === "dark" ? "#10b981" : "#065f46",
  level: 1,
},
```

**Tema Rosso:**
```typescript
accent: {
  primary: theme === "dark" ? "#ef4444" : "#991b1b",
  level: 2,
},
```

### Modificare i Colori di Sfondo

**File:** `components/ChatKitPanel.tsx` (circa riga 347)

```typescript
<div className="relative flex h-[90vh] w-full flex-col overflow-hidden bg-white shadow-sm transition-colors dark:bg-slate-900">
```

Sostituisci `bg-white` e `dark:bg-slate-900` con i tuoi colori preferiti usando le classi Tailwind CSS.

---

## Personalizzazione Header e Layout

### Modificare l'Header

L'header principale si trova nel file `app/App.tsx`:

**File:** `app/App.tsx` (circa riga 26-31)

```typescript
<div className="mb-4 rounded-t-lg bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white shadow-lg">
  <h1 className="text-3xl font-bold">🛗 Il Tuo Titolo</h1>
  <p className="mt-2 text-blue-100">
    Il tuo sottotitolo personalizzato
  </p>
</div>
```

### Personalizzare il Gradiente

Modifica `bg-gradient-to-r from-blue-600 to-purple-600` con altri gradienti Tailwind:
- `from-green-500 to-blue-500` - Verde a Blu
- `from-purple-500 to-pink-500` - Viola a Rosa
- `from-orange-500 to-red-500` - Arancione a Rosso
- `from-indigo-500 to-purple-500` - Indaco a Viola

### Modificare il Layout Principale

**File:** `app/App.tsx` (circa riga 23-24)

```typescript
<main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 py-6 dark:bg-slate-950">
  <div className="mx-auto w-full max-w-5xl">
```

- `bg-slate-100` / `dark:bg-slate-950`: Colore di sfondo della pagina
- `max-w-5xl`: Larghezza massima del contenitore (puoi usare `max-w-4xl`, `max-w-6xl`, `max-w-7xl`)

### Modificare l'Altezza del Pannello Chat

**File:** `components/ChatKitPanel.tsx` (circa riga 347)

```typescript
<div className="relative flex h-[90vh] w-full ...">
```

Modifica `h-[90vh]` con:
- `h-[80vh]` - 80% dell'altezza dello schermo
- `h-[95vh]` - 95% dell'altezza dello schermo
- `h-screen` - 100% dell'altezza dello schermo

---

## Personalizzazione Metadata

I metadata della pagina (titolo, descrizione, ecc.) si trovano in:

**File:** `app/layout.tsx` (circa riga 5-8)

```typescript
export const metadata: Metadata = {
  title: "Il Tuo Titolo",
  description: "La tua descrizione personalizzata",
};
```

Questi valori appaiono:
- Nel titolo della scheda del browser
- Nei risultati di ricerca (SEO)
- Quando si condivide il link sui social media

### Modificare la Lingua

**File:** `app/layout.tsx` (circa riga 16)

```typescript
<html lang="it">
```

Cambia `"it"` con il codice lingua desiderato (es: `"en"`, `"es"`, `"fr"`, `"de"`).

---

## Personalizzazione Stili Globali

### Modificare i Colori di Base

**File:** `app/globals.css`

```css
:root {
  --background: #ffffff;    /* Colore di sfondo tema chiaro */
  --foreground: #171717;    /* Colore del testo tema chiaro */
  color-scheme: light;
}

:root[data-color-scheme="dark"] {
  --background: #0a0a0a;    /* Colore di sfondo tema scuro */
  --foreground: #ededed;    /* Colore del testo tema scuro */
  color-scheme: dark;
}
```

### Modificare i Font

**File:** `app/globals.css` (circa riga 26-27)

```css
--font-sans: Arial, Helvetica, sans-serif;
--font-mono: SFMono-Regular, Consolas, "Liberation Mono", monospace;
```

Esempi di font alternativi:
```css
--font-sans: "Inter", "Segoe UI", sans-serif;
--font-sans: "Roboto", "Helvetica Neue", sans-serif;
--font-sans: "Open Sans", "Arial", sans-serif;
```

Per utilizzare font personalizzati, aggiungi il link nel file `app/layout.tsx`:

```typescript
<head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <Script ... />
</head>
```

---

## 🔧 Esempi Pratici

### Esempio 1: Cambiare Tema Colori a Verde

1. Modifica `components/ChatKitPanel.tsx`:
```typescript
accent: {
  primary: theme === "dark" ? "#10b981" : "#065f46",
  level: 2,
},
```

2. Modifica `app/App.tsx` per l'header:
```typescript
<div className="mb-4 rounded-t-lg bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
```

### Esempio 2: Header Minimalista

Sostituisci l'header in `app/App.tsx` con:
```typescript
<div className="mb-4 border-b border-slate-200 dark:border-slate-700 pb-4">
  <h1 className="text-2xl font-semibold">Assistente Tecnico</h1>
</div>
```

### Esempio 3: Prompts Personalizzati per un Altro Dominio

**File:** `lib/config.ts`
```typescript
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Come funziona?",
    prompt: "Spiegami come funziona questo sistema",
    icon: "circle-question",
  },
  {
    label: "Documentazione",
    prompt: "Mostrami la documentazione tecnica",
    icon: "book-open",
  },
  {
    label: "Supporto",
    prompt: "Ho bisogno di supporto tecnico",
    icon: "shield",
  },
];
```

---

## 📝 Note Importanti

1. **Dopo ogni modifica**, riavvia il server di sviluppo (`npm run dev`) per vedere le modifiche
2. **Tailwind CSS**: L'applicazione usa Tailwind CSS per gli stili. Consulta la [documentazione Tailwind](https://tailwindcss.com/docs) per le classi disponibili
3. **Tema Dark/Light**: Il tema viene gestito automaticamente tramite il hook `useColorScheme`. Gli utenti possono cambiare tema tramite il chatbot
4. **TypeScript**: Tutti i file sono in TypeScript. Assicurati che le modifiche rispettino i tipi definiti

---

## 🚀 Prossimi Passi

Dopo aver personalizzato il frontend:
1. Testa tutte le modifiche in modalità sviluppo
2. Verifica che il tema dark/light funzioni correttamente
3. Controlla la responsività su dispositivi mobili
4. Esegui il build di produzione: `npm run build`

