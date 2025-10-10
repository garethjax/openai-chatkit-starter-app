# 🚀 Deploy su Netlify - Manutentia ChatKit

## ✅ Configurazione Completata

Il progetto è già configurato per Netlify grazie al file `netlify.toml` incluso:

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

## 📝 Passi per il Deploy

### 1. Crea Nuovo Sito su Netlify

1. Vai su [https://app.netlify.com](https://app.netlify.com)
2. Click su **"Add new site"** → **"Import an existing project"**
3. Connetti il repository GitHub: `garethjax/openai-chatkit-starter-app`
4. Netlify rileverà automaticamente Next.js

### 2. Configura Environment Variables

⚠️ **IMPORTANTE:** Aggiungi queste variabili d'ambiente su Netlify:

**Vai su:** Site settings > Environment variables > Add a variable

```
OPENAI_API_KEY=sk-...your_project_key...
```

```
NEXT_PUBLIC_CHATKIT_WORKFLOW_ID=wf_68e42f880c008190bcf69b908ec5ae1904a2e2c39f438055
```

🔒 **NOTA SICUREZZA:** Non inserire chiavi reali nei file del repo. Impostale solo come variabili d'ambiente su Netlify/GitHub. Rigenera eventuali chiavi esposte.

### 3. Deploy

1. Click su **"Deploy site"**
2. Netlify eseguirà automaticamente:
   - `npm install`
   - `npm run build`
   - Deploy su CDN globale

### 4. Verifica il Deploy

Dopo il deploy:
- Apri l'URL fornito da Netlify (es. `https://nome-random.netlify.app`)
- Dovrebbe apparire l'assistente tecnico ascensori
- Testa i prompts predefiniti

## 🔄 Deploy Automatici

Ogni volta che fai `git push` su GitHub, Netlify farà automaticamente:
1. Pull del codice
2. Build
3. Deploy

## 🐛 Troubleshooting

### Errore: "Set NEXT_PUBLIC_CHATKIT_WORKFLOW_ID"

- Verifica che la variabile sia configurata su Netlify
- Il nome deve essere esattamente: `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID`

### Errore di Sessione ChatKit

- Verifica che `OPENAI_API_KEY` sia configurata
- Verifica che la chiave API sia valida
- Controlla che il workflow ID sia corretto

### Build Failed

- Controlla i log di build su Netlify
- Verifica che `package.json` e `package-lock.json` siano committati

## 📊 Build Settings su Netlify

Se Netlify non rileva automaticamente le impostazioni:

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18.x o superiore

## 🔗 Link Utili

- [Netlify Next.js Documentation](https://docs.netlify.com/frameworks/next-js/)
- [ChatKit Documentation](https://platform.openai.com/docs/guides/chatkit)

---

## ⏭️ Prossimi Passi Consigliati

1. **Rigenera la chiave API** su [platform.openai.com](https://platform.openai.com/api-keys)
2. **Aggiorna le variabili d'ambiente** su Netlify con la nuova chiave
3. **Configura un dominio custom** (opzionale)
4. **Aggiungi analytics** (opzionale)
