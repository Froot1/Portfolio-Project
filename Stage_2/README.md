# Stage 2 — Technical Design Specification

## 1) System Overview
One-paragraph summary; link to Stage 1.

## 2) Architecture
Diagram + text: Frontend → Proxy → Backend → DB/External. Ports and protocols.

## 3) Components
- **Frontend:** framework, entry, env vars, build/run commands.
- **Backend:** framework, entry, env vars, logging, error model.
- **Proxy:** routes `/` → FE, `/api/` → BE.
- **Data stores / External services:** versions, access.

## 4) Data Model
Entities, fields, relations. ERD or table schema.

## 5) API Spec
| Method | Path | Auth | Request | Response | Notes |
|-------:|------|------|---------|----------|-------|
| GET | /health | No | — | 200 "OK" | liveness |
| …  | …       | …  | … | … | … |

## 6) Flows
Sequence for key actions (e.g., login, create item), edge cases.

## 7) Non-Functional
Perf targets, security, rate limits, availability, observability.

## 8) Environments & Config
Local/dev/prod, env vars, secrets handling, ports, sample `.env`.

## 9) Build & Run
Exact commands (npm/pip), Docker/Compose if applicable.

## 10) Testing Strategy
Unit, integration, e2e; tools; coverage targets.

## 11) Backlog / Dependencies
Blocked items, third-party deps, migration steps.

## 12) Open Questions
Unresolved decisions and owners.
