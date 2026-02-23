---
title: Quick Start
description: Get up and running with Minions Qa-runs in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-qa-runs/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_qa_runs import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
qa-runs info
```
