# Galaxia

Colección de enlaces valiosos de Internet con sugerencias de uso práctico.

- 📚 **Sitio publicado:** [totallynotdavid.github.io/galaxia](https://totallynotdavid.github.io/galaxia/)
- ✏️ **Cómo contribuir:** edita o crea un archivo `.md` en [`docs/`](./docs) y abre un pull request.

## Desarrollo local

```bash
bun install
bun run dev      # servidor de desarrollo en http://localhost:5173
bun run build    # build de producción a docs/.vitepress/dist
bun run preview  # previsualizar el build de producción
```

## Estructura

- `docs/` — contenido del sitio (Markdown)
- `docs/.vitepress/` — configuración y tema de VitePress
- `docs/public/` — assets estáticos servidos en la raíz
- `.github/workflows/` — pipelines de CI/CD

## CI/CD

| Workflow | Propósito |
| --- | --- |
| [`publish.yml`](./.github/workflows/publish.yml) | Construye y despliega el sitio a GitHub Pages en cada push a `master` |
| [`audit-lighthouse.yml`](./.github/workflows/audit-lighthouse.yml) | Auditoría de experiencia de usuario con Lighthouse |
| [`404.yml`](./.github/workflows/404.yml) | Verificación de enlaces rotos |
| [`toc.yml`](./.github/workflows/toc.yml) | Genera el TOC del README |
