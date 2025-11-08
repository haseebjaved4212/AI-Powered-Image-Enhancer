# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Running & API configuration

This project uses a small API utility to call the PicWish photo-enhancement API. To avoid using up free API credits while developing, there's a mock mode you can enable.

1. Create a local `.env` file in the project root (do NOT commit it):

```
# Use the mock placeholder image (no API calls)
VITE_USE_MOCK=true

# When you're ready to test the real API, set these:
# VITE_USE_MOCK=false
# VITE_API_KEY=your_real_api_key
# VITE_BASE_URL=https://techhk.aoscdn.com
# Optional: enable verbose debug logs for one-shot debugging
# VITE_VERBOSE_DEBUG=true
```

2. Restart the dev server after changing `.env`:

```powershell
npm run dev
```

3. Developer workflow recommendation:

- Start with `VITE_USE_MOCK=true` to finish the UI and flows without consuming credits.
- When UI is ready, switch to `VITE_USE_MOCK=false` and add your `VITE_API_KEY` for a single focused live test. Capture the Network POST and GET responses if the API doesn't return the result, then share them so we can adapt parsing.

See `.env.example` for a sample file.
