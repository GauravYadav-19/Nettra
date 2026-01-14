# Nettra Backend

This directory contains the backend services for Nettra.

## Responsibilities
- Incident creation and management
- Log ingestion and parsing
- Correlation of logs and network signals
- AI-powered root cause explanation
- Data storage and retrieval

## Tech Stack
- Python 3.10+
- FastAPI
- PostgreSQL
- Hosted LLM (API-based)

## Structure
app/
├── api/        # Route definitions
├── models/     # Database models
├── services/   # Business logic (AI, correlation)
├── core/       # Config, security, utils
└── main.py     # App entry point

## Notes
- Backend is read-only with respect to user systems
- No infrastructure mutation or automation is performed