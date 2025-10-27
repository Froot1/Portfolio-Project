# 🧩 Qattah — Stage 4: MVP Development & Execution (Simple Version)

### to view and test the Qattah project on railway:

[Qattah on railway](https://qattahapp-production.up.railway.app)


---

## ⚙️ Project Stack
| Component | Description |
|------------|--------------|
| **Backend** | Supabase (Database + Auth + RLS) |
| **API Client** | `api.ts` |
| **Hosting** | Railway (`https://qattahapp-production.up.railway.app`) |
| **Testing** | Postman collection (`/postman/Qattah.postman_collection.json`) |
| **Environment File** | `.env.sample` → rename to `.env` and fill Supabase keys |

---

## 📂 Folder Overview
```
Qattah_Stage4_Final/
├── README.md
├── .env.sample
├── stage4/
│   ├── 0-sprint-plan.md
│   ├── 1-execute.md
│   ├── 2-monitor.md
│   ├── 3-review-retro.md
│   ├── 4-final-qa.md
│   └── 5-deliverables.md
├── postman/
│   └── Qattah.postman_collection.json
└── supabase/
    └── schema.sql
```

---

## 🚀 Quick Setup (for the team)
1. Copy `.env.sample` → `.env` and fill your Supabase keys.  
2. Review `stage4/0-sprint-plan.md` for sprint goals.  
3. Import `postman/Qattah.postman_collection.json` into Postman and test `/health`.  
4. Develop → open PRs → review → merge.  
5. Before deployment, check `stage4/4-final-qa.md`.

---

## 🧱 Stage 4 Tasks
| Task | File | Description |
|------|------|--------------|
| **0. Plan & Define Sprints** | `0-sprint-plan.md` | Define sprint goals and priorities. |
| **1. Execute Development Tasks** | `1-execute.md` | Coding standards, PR flow, QA checks. |
| **2. Monitor Progress** | `2-monitor.md` | Standups and metrics. |
| **3. Review & Retrospective** | `3-review-retro.md` | Review demos and process improvement. |
| **4. Final QA Testing** | `4-final-qa.md` | Smoke tests and verification. |
| **5. Deliverables** | `5-deliverables.md` | Final submission checklist. |

---

## ✅ Before Deployment Checklist
- [ ] All sprint tasks complete  
- [ ] PRs merged to `main`  
- [ ] Postman tests pass    
- [ ] App live on Railway  
- [ ] Evidence in `5-deliverables.md`

---

## 🧰 Tools
| Tool | Purpose |
|------|----------|
| Supabase | Database & Auth |
| VS Code | Development |
| Postman | API Testing |
| Railway | Hosting |
| GitHub  | Task Management |

---

## 💬 Team
| Name | Role | Focus |
|------|------|-------|
| ibrahem | PM | Planning, standups |
| khaled | FE Lead | UI, Docs |
| fahad | BE & QA | Supabase, Testing |

---

## 💡 Tips
- Keep standups short & daily  
- Push small commits often  
- Always test before merge  
- Communicate blockers early  
- Focus on MVP first, polish later

**Date:** 2025-10-25  
**Team**
- 🧭 **ibrahem** — Project Manager (PM)
- 💻 **khaled** — Frontend & Documentation Lead
- 🗄️ **fahad** — Backend/Database Lead & QA Tester
