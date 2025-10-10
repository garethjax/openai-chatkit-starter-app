# 🛗 Manutentia - Assistente Tecnico Ascensori

Chatbot intelligente per assistenza tecnica ai manutentori di ascensori, basato su OpenAI ChatKit.

## ✨ Caratteristiche

- 🤖 **AI-powered** - Basato su GPT-4.1 con Agent Builder di OpenAI
- 📚 **Knowledge Base** - Vector store con manuali tecnici e storico interventi
- 🇮🇹 **Lingua Italiana** - Ottimizzato per supporto in italiano
- ⚡ **Real-time** - Risposte immediate e contestuali
- 🎨 **Modern UI** - Interfaccia pulita con theme dark/light

## 🚀 Quick Start Locale

### Prerequisiti
- Node.js 18+
- Account OpenAI con accesso a ChatKit
- Workflow ChatKit configurato

### 1. Clona il Repository

```bash
git clone https://github.com/garethjax/openai-chatkit-starter-app.git
cd openai-chatkit-starter-app
```

### 2. Installa Dipendenze

```bash
npm install
```

### 3. Configura Environment Variables

Crea file `.env.local`:

```bash
cp .env.example .env.local
```

Modifica `.env.local` e inserisci:

```env
OPENAI_API_KEY=sk-proj-...
NEXT_PUBLIC_CHATKIT_WORKFLOW_ID=wf_68e42f880c008190bcf69b908ec5ae1904a2e2c39f438055
```

### 4. Avvia il Server

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 📦 Deploy su Netlify

Vedi [DEPLOY_NETLIFY.md](./DEPLOY_NETLIFY.md) per istruzioni dettagliate.

**TL;DR:**
1. Connetti il repo a Netlify
2. Aggiungi le variabili d'ambiente
3. Deploy automatico ✅

## 🎯 Funzionalità Disponibili

### Prompts Predefiniti

1. **"Come si sostituisce il motore?"** - Guide per sostituzione componenti
2. **"Interventi di manutenzione"** - Storico interventi passati
3. **"Problemi comuni"** - Troubleshooting problemi frequenti  
4. **"Manuale tecnico"** - Accesso a documentazione tecnica

### Capacità dell'Assistente

- ✅ Ricerca nei manuali tecnici
- ✅ Consultazione storico interventi
- ✅ Suggerimenti proattivi
- ✅ Riferimenti precisi a sezioni manuali
- ✅ Domande di chiarimento contestuali

## 🏗️ Architettura

```
openai-chatkit-starter-app/
├── app/
│   ├── api/create-session/  # API endpoint per sessioni ChatKit
│   ├── App.tsx              # Componente principale
│   ├── layout.tsx           # Layout e metadata
│   └── page.tsx             # Home page
├── components/
│   ├── ChatKitPanel.tsx     # Componente ChatKit
│   └── ErrorOverlay.tsx     # Gestione errori
├── lib/
│   └── config.ts            # Configurazione prompts e UI
└── hooks/
    └── useColorScheme.tsx   # Hook per theme switching
```

## 🔧 Personalizzazione

### Modificare i Prompts

Edita `lib/config.ts`:

```typescript
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Tuo prompt",
    prompt: "Testo completo del prompt",
    icon: "wrench", // Icona FontAwesome
  },
];
```

### Cambiare Workflow

Aggiorna `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` in `.env.local` con il tuo workflow ID.

### Personalizzare UI

- **Theme colors**: Modifica `ChatKitPanel.tsx` nella sezione `theme`
- **Header**: Modifica `app/App.tsx`
- **Metadata**: Modifica `app/layout.tsx`

## 🔒 Sicurezza

⚠️ **IMPORTANTE:**
- Non committare mai `.env.local`
- Rigenera le chiavi API se esposte
- Usa variabili d'ambiente su Netlify
- Solo `NEXT_PUBLIC_*` è esposto al client

## 📚 Documentazione

- [ChatKit Documentation](https://platform.openai.com/docs/guides/chatkit)
- [ChatKit React Library](https://www.npmjs.com/package/@openai/chatkit-react)
- [Next.js Documentation](https://nextjs.org/docs)
- [Netlify Next.js Guide](https://docs.netlify.com/frameworks/next-js/)

## 🐛 Troubleshooting

### "Set NEXT_PUBLIC_CHATKIT_WORKFLOW_ID"

Verifica che `.env.local` esista e contenga `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID`.

### Errori di Sessione

1. Verifica che `OPENAI_API_KEY` sia valida
2. Controlla che il workflow ID sia corretto
3. Verifica i log browser (F12)

### Build Failed su Netlify

1. Controlla le variabili d'ambiente su Netlify
2. Verifica i log di build
3. Assicurati che Node version sia 18+

## 📄 Licenza

MIT License - vedi [LICENSE](./LICENSE)

## 🙏 Credits

Basato su [OpenAI ChatKit Starter Template](https://github.com/openai/openai-chatkit-starter-app)
