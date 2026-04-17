# Instrucciones para desplegar en Vercel

## Opción 1: Con Vercel CLI (recomendado)

1. **Genera un token en Vercel:**
   - Ve a https://vercel.com/account/tokens
   - Haz clic en "Add New"
   - Copia el token

2. **Configura el token:**
```bash
export VERCEL_TOKEN="tu-token-de-vercel"
```

3. **Despliega:**
```bash
cd /root/.openclaw/workspace/luis-hueicha-website
vercel --prod --yes
```

## Opción 2: Con GitHub Integration (más fácil)

1. **Ve a https://vercel.com**
2. **Importa desde GitHub:**
   - Selecciona "Import Git Repository"
   - Busca `luishueicha/luis-hueicha-website`
   - Importa el repo

3. **Despliega:**
   - Vercel detecta automáticamente que es un Next.js
   - Haz clic en "Deploy"

## Opción 3: Con Netlify (alternativa)

1. **Ve a https://app.netlify.com/drop**
2. **Arrastra la carpeta `out`** que se generó en el build

---

**Después del deploy, Vercel te dará un URL como:**
https://luis-hueicha-website.vercel.app
