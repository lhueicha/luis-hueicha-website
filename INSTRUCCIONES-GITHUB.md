# Instrucciones para autenticar GitHub CLI

1. **Ejecuta el comando de login:**
```bash
gh auth login
```

2. **Sigue las instrucciones:**
   - Selecciona: `github.com`
   - Selecciona: `HTTPS`
   - Selecciona: `Log in to a new account`
   - Ingresas tu username: `luishueicha`
   - Ingresas tu Personal Access Token (cuando te pida contraseña)

3. **Después de autenticar, sube el repo:**
```bash
cd /root/.openclaw/workspace/luis-hueicha-website
gh repo create luis-hueicha-website --public --source=. --remote=origin --push
```

**Nota:** Si ya existe el repo en GitHub, usa:
```bash
gh repo clone luishueicha/luis-hueicha-website
cd luis-hueicha-website
git push -u origin main
```

El comando `gh auth login` es interactivo y requiere que ingreses tus credenciales manualmente.
