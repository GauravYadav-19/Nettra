# Nettra

Nettra is an AI-powered incident intelligence system that helps engineering teams
understand **why** their production systems failed by correlating application logs
and network-level signals, and explaining the root cause with evidence.

## 🚨 Problem

When production incidents occur:
- Logs are noisy and overwhelming
- Metrics and network signals are disconnected
- Engineers spend hours manually correlating data
- Monitoring tools detect issues but do not explain them

**The hard part is not detection — it’s diagnosis.**

## 💡 Solution

Nettra assists engineers by:
- Ingesting application logs and network signals
- Correlating them across a time window
- Generating a clear root-cause explanation
- Showing supporting evidence
- Suggesting investigation steps

Nettra is **human-in-the-loop** — it does not fix systems automatically.

## 🧠 What Nettra Is NOT
- ❌ Not a monitoring tool like Datadog
- ❌ Not an autonomous AI SRE
- ❌ Not a system that modifies infrastructure

## 🏗 Architecture (High-level)

- Frontend: Next.js (TypeScript)
- Backend: FastAPI (Python)
- AI: Hosted LLM (reasoning only)
- Database: PostgreSQL

Frontend handles presentation.  
Backend handles ingestion, correlation, and AI reasoning.

## 📦 Repository Structure
frontend/   # UI and dashboard (Next.js)
backend/    # APIs, ingestion, AI logic (FastAPI)
docs/       # Architecture and design decisions

## 🚀 Project Status

Phase 1: Planning & Architecture ✅  
Phase 2: MVP Implementation 🚧

## 📅 Roadmap (MVP)

- Incident creation API
- Log ingestion
- Correlation logic
- AI-generated explanations
- Incident analysis dashboard

## 👤 Author

Built by a solo founder as a learning + interview-grade systems project.