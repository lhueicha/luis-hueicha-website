#!/bin/bash

cd /root/.openclaw/workspace/luis-hueicha-website

echo "=== Subiendo repo a GitHub ==="
echo "Requiere tus credenciales de GitHub"
echo ""

read -p "Ingresa tu username de GitHub: " GITHUB_USER
read -sp "Ingresa tu Personal Access Token de GitHub: " GITHUB_TOKEN
echo ""

# Crear remote con credenciales
git remote add origin "https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/luis-hueicha-website.git" 2>/dev/null || \
git remote set-url origin "https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/luis-hueicha-website.git"

echo "Subiendo a GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Repo subido exitosamente!"
    echo "URL: https://github.com/${GITHUB_USER}/luis-hueicha-website"
else
    echo ""
    echo "❌ Error al subir. Verifica tus credenciales."
fi
