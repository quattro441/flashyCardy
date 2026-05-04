---
alwaysApply: true
---
# shadcn/ui Project Rule

This project uses shadcn/ui for all UI elements.

If shadcn/ui is not initialized in this project, use:

```bash
npx shadcn@latest init --preset b4rJqxuqtk --template next
```

If a particular component is not installed, add it with the shadcn CLI. For example, to install the button component, use:

```bash
npx shadcn@latest add button
```

Follow the existing project conventions in [components.json](md:components.json), [src/app/globals.css](md:src/app/globals.css), and [src/lib/utils.ts](md:src/lib/utils.ts) when adding or modifying UI.
