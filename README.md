# minions-qa-runs

**Test execution records, assertion results, and pass/fail tracking across clawspaces**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-qa-runs/sdk minions-sdk

# Python
pip install minions-qa-runs

# CLI (global)
npm install -g @minions-qa-runs/cli
```

---

## CLI

```bash
# Show help
qa-runs --help
```

---

## Python SDK

```python
from minions_qa_runs import create_client

client = create_client()
```

---

## Project Structure

```
minions-qa-runs/
  packages/
    core/           # TypeScript core library (@minions-qa-runs/sdk on npm)
    python/         # Python SDK (minions-qa-runs on PyPI)
    cli/            # CLI tool (@minions-qa-runs/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [qa-runs.minions.help](https://qa-runs.minions.help)
- Blog: [qa-runs.minions.blog](https://qa-runs.minions.blog)
- App: [qa-runs.minions.wtf](https://qa-runs.minions.wtf)

---

## License

[MIT](LICENSE)
