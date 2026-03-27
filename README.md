<!-- @format -->

# Fide

Catholic Faith Made Easy

AI-powered catechism learning platform focused on structured doctrine, active reasoning, and practical faith formation.

---

## Overview

Fide is an AI-powered catechism learning platform designed to help users understand, live, and defend the Catholic faith in a structured and practical way. It focuses on delivering clear, non-ambiguous teachings while combining education with interactive learning methods.

The platform addresses modern challenges such as shallow understanding of faith, secular influence, and lack of consistent spiritual formation.

## Vision

To build Catholics with a complete, deep, and relevant faith, enabling them to live Church teachings consistently in the modern world.

## Problem Statement

Many Catholics:

- Only follow selected teachings instead of the full doctrine
- Lack deep understanding due to limited formation
- Are influenced by secularism and relativism
- Struggle to apply faith in daily life

## Solution

Fide provides a structured and accessible learning experience that:

- Covers the faith comprehensively
- Uses interactive methods to reinforce understanding
- Encourages active reasoning and articulation of belief

## Core Features

### 1. Structured Catechism Learning

- Based on the **Catechism of the Council of Trent**
- Organized into four main pillars:
  - Creed
  - Sacraments
  - Moral Law
  - Prayer

- Content is presented in clear, definition-based format to avoid ambiguity

### 2. Quiz System

- Short assessments to test understanding
- Real-time feedback for retention improvement
- Concept-based micro learning

### 3. AI Debate Simulation

- Users engage in simulated debates with AI
- Trains logical reasoning and articulation of faith
- Encourages active defense of beliefs

### 4. Gamification

- Grace Points earned from learning activities
- Leaderboard system with anonymity to avoid pride
- Daily streaks to maintain consistency

### 5. Personalized Learning

- AI adapts content difficulty based on user performance
- Learning path adjusts to user progress and understanding

---

## Learning Flow

1. Study structured material
2. Complete quizzes
3. Engage in AI debate
4. Earn points and track progress

---

## Tech Stack

- Frontend: React + TypeScript
- State Management: React Context & Zustand
- Styling: Tailwind CSS
- Icons: Lucide
- Build Tool: Vite
- API: External AI service for debate and evaluation

---

## Project Structure

Derived from the provided project archive.

```
fide-main/
│
├── public/                 # Static assets
│
├── src/
│   ├── assets/             # Images, SVGs, logos
│   │
│   ├── components/         # Reusable components
│   │   ├── ui/             # Buttons, inputs, basic UI
│   │   ├── layout/         # Layout structure (sidebar, navbar)
│   │   └── feature/        # Feature-specific components
│   │
│   ├── pages/              # Route-level pages
│   │   ├── Dashboard/      # Main learning dashboard
│   │   ├── Quiz/           # Quiz interface
│   │   ├── Debate/         # AI debate feature
│   │   └── Auth/           # Authentication
│   │
│   ├── hooks/              # Custom hooks
│   ├── context/            # Global state (auth, user)
│   ├── api/                # API calls and services
│   ├── interfaces/         # TypeScript types
│   ├── utils/              # Helper functions
│   ├── constants/          # Static configs
│   │
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── routes.tsx          # Routing
│
├── .env                    # Environment variables
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite config
```

---

## Purpose

Fide is designed to address modern challenges in Catholic faith formation:

- Shallow understanding of doctrine
- Selective belief (cafeteria Catholicism)
- Influence of secularism and relativism

It focuses on forming users who not only know the faith but can live and defend it.

---

## Target Users

- Children
- Youth
- Adults
- Catechumens

---

## Contributors

- Abraham Gregorius Anderson Thio (Team Leader & Backend Developer)
- Stanislaus Alva Jufinto (UI Designer and Frontend Developer)

Team: Deus Vult

---

## Realated Links

Frontend Deployment: [LINK](https://fide-zeta.vercel.app/)
Backend Repo: [LINK](https://github.com/abrahamgregorius/fide-backend)
