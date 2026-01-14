# Nettra Architecture

## Overview

Nettra follows a modular client-server architecture.

[ Next.js Frontend ]
|
| REST API
v
[ FastAPI Backend ]
|
| Context + Signals
v
[ AI Reasoning Layer ]

## Design Principles
- Clear separation of concerns
- Human-in-the-loop AI
- Read-only access to user data
- Minimal surface area for security risks

## Why This Architecture
- Easy to reason about
- Easy to explain in interviews
- Future-proof and extensible