# Tasks: Professional Portfolio Website

**Input**: Design documents from `/specs/001-professional-portfolio-site/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: Manual browser testing via `npm run dev` and `npm run build` validation - no automated test suite

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Project root**: `package.json`, `next.config.js`, `pages/`, `components/`, `styles/`, `data/`, `public/`
- **Pages**: `pages/index.js`, `pages/experiences.js`, `pages/projects.js`, `pages/education.js`
- **Components**: `components/Layout.js`, `components/NavBar.js`, etc.
- **Styles**: `styles/globals.css`, `styles/Home.module.css`, etc.
- **Data**: `data/landing.json`, `data/experience.json`, etc.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Next.js project with `npx create-next-app@latest port4lio --typescript=no --eslint=no`
- [x] T002 Configure `next.config.js` for static export with `output: 'export'`
- [x] T003 [P] Create directory structure: `mkdir -p components data styles pages public/assets`
- [x] T004 [P] Setup `package.json` with scripts: `dev`, `build`, `export` for static generation

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 [P] Create global styles in `styles/globals.css` with responsive breakpoints (320px, 768px, 1920px)
- [x] T006 [P] Create `components/Layout.js` wrapper component with meta tags and page structure
- [x] T007 [P] Create `components/NavBar.js` with links to all four pages (home, experiences, projects, education)
- [x] T008 [P] Create `components/SectionHeader.js` reusable component for page section headings
- [x] T009 [P] Create `data/` directory structure and initialize empty JSON files
- [x] T010 Verify responsive layout with DevTools at 320px, 768px, and 1920px widths

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Explore Professional Profile (Priority: P1) 🎯 MVP

**Goal**: Deliver a professional landing page with summary, skills, interests, and achievements visible within one scroll

**Independent Test**: Open `http://localhost:3000` in browser, verify summary, skills list, interests, and at least three achievements are visible without scrolling or within one scroll

### Data for User Story 1

- [x] T011 [P] [US1] Create mock data file `data/landing.json` with headline, summary, skills array, interests array, and achievements array (3+ items)

### Implementation for User Story 1

- [x] T012 [P] [US1] Create `components/HeroSection.js` component to display headline and professional summary
- [x] T013 [P] [US1] Create `components/SkillsSection.js` component to display core skills in a grid or list layout
- [x] T014 [P] [US1] Create `components/InterestsSection.js` component to display interests
- [x] T015 [P] [US1] Create `components/AchievementsSection.js` component to display achievement highlights (3+ items with title and description)
- [x] T016 [US1] Create `styles/Home.module.css` with mobile-first responsive styles for landing page sections
- [x] T017 [US1] Create `pages/index.js` landing page that imports Layout and all section components, populates from `data/landing.json`
- [x] T018 [US1] Verify landing page loads without errors at `http://localhost:3000` and displays all sections

**Checkpoint**: User Story 1 is fully functional and independently testable

---

## Phase 4: User Story 2 - Review Work Experience (Priority: P2)

**Goal**: Deliver an experiences page showing at least three past roles with organization, title, dates, and highlights

**Independent Test**: Navigate to `/experiences`, verify at least three experience entries are displayed with organization, title, dates, and summary bullets

### Data for User Story 2

- [x] T019 [P] [US2] Create mock data file `data/experience.json` with array of at least three experience entries (each with title, company, location, dates, summary, highlights array)

### Implementation for User Story 2

- [x] T020 [P] [US2] Create `components/ExperienceItem.js` component to display a single experience entry with all fields
- [x] T021 [P] [US2] Create `styles/Experiences.module.css` with styles for experience list and individual items
- [x] T022 [US2] Create `pages/experiences.js` page that imports Layout and ExperienceItem, populates from `data/experience.json`
- [x] T023 [US2] Verify experiences page loads and displays all experience entries without console errors

**Checkpoint**: User Stories 1 AND 2 are both independently functional

---

## Phase 5: User Story 3 - Browse Projects and GitHub Profile (Priority: P2)

**Goal**: Deliver a projects page showing at least three portfolio projects and a GitHub section below them

**Independent Test**: Navigate to `/projects`, verify at least three project cards and a distinct GitHub section with profile link are displayed

### Data for User Story 3

- [x] T024 [P] [US3] Create mock data file `data/projects.json` with array of at least three projects (each with name, description, technologies array, url, repo)
- [x] T025 [P] [US3] Create mock data file `data/github.json` with profileUrl, description, and keyRepos array (2-3 repos)

### Implementation for User Story 3

- [x] T026 [P] [US3] Create `components/ProjectCard.js` component to display a single project with name, description, technologies, and links
- [x] T027 [P] [US3] Create `components/GitHubSection.js` component to display GitHub profile info and featured repos
- [x] T028 [P] [US3] Create `styles/Projects.module.css` with styles for project grid and GitHub section
- [x] T029 [US3] Create `pages/projects.js` page that imports Layout, ProjectCard, and GitHubSection, populates from `data/projects.json` and `data/github.json`
- [x] T030 [US3] Verify projects page loads and displays project cards and GitHub section without console errors

**Checkpoint**: All user stories 1, 2, and 3 are independently functional

---

## Phase 6: User Story 4 - Verify Education and Qualifications (Priority: P3)

**Goal**: Deliver an education page showing academic history and professional qualifications

**Independent Test**: Navigate to `/education`, verify at least one education entry and one or more professional qualifications are displayed

### Data for User Story 4

- [x] T031 [P] [US4] Create mock data file `data/education.json` with array of education entries (1+ academic, 1+ professional qualifications, each with degree/credential, institution, dates, location, details array)

### Implementation for User Story 4

- [x] T032 [P] [US4] Create `components/EducationItem.js` component to display a single education or qualification entry
- [x] T033 [P] [US4] Create `styles/Education.module.css` with styles for education list and items
- [x] T034 [US4] Create `pages/education.js` page that imports Layout and EducationItem, populates from `data/education.json`
- [x] T035 [US4] Verify education page loads and displays education and qualification entries without console errors

**Checkpoint**: All four user stories are fully functional and independently testable

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements and validation across all user stories

- [x] T036 [P] Test responsive layout on mobile (375px), tablet (768px), and desktop (1920px) viewports in browser DevTools
- [x] T037 [P] Test keyboard navigation through all pages and links using Tab and Enter keys
- [x] T038 [P] Run `npm run build` and verify no build errors
- [x] T039 [P] Run `npm run build && npm run export` and verify `out/` directory contains static HTML files
- [x] T040 [P] Test all internal navigation links between pages work correctly
- [x] T041 [P] Test all external links (GitHub, project URLs) open correctly in new tabs
- [x] T042 [P] Verify no console errors or warnings in browser DevTools on all four pages
- [x] T043 Open Chrome DevTools Lighthouse and run audits on each page, target performance ≥80, accessibility ≥90
- [x] T044 Verify page load time is acceptable (target <1s on fast 3G)
- [x] T045 Review site on actual mobile devices (phone/tablet) for layout and readability
- [x] T046 [P] Clean up any unused imports or code comments
- [x] T047 Final smoke test: Visit all four pages, verify all content displays correctly
- [x] T048 Documentation: Update README.md with instructions to run `npm run dev`, `npm run build`, and deploy from `out/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - User stories CAN proceed in parallel (separate files, independent implementations)
  - OR sequentially in priority order (P1 → P2 → P2 → P3)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories - **MVP focus**
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent of US1
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Independent of US1, US2
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - Independent of US1, US2, US3

### Within Each User Story

- Data files created before component implementation
- Components created before page implementation
- Pages created before verification

### Parallel Opportunities

**Setup Phase**:

- All tasks marked [P] (T003, T004) can run in parallel

**Foundational Phase**:

- All tasks marked [P] (T005, T006, T007, T008, T009) can run in parallel
- T010 depends on previous tasks complete

**User Stories**:

- Once Foundational phase completes, **all user stories can start in parallel**:
  - Developer A: Work on US1 (T011-T018)
  - Developer B: Work on US2 (T019-T023)
  - Developer C: Work on US3 (T024-T030)
  - Developer D: Work on US4 (T031-T035)
- Within each story, data creation [P] and component creation [P] can overlap
- Different developers can work on different stories simultaneously

**Parallel Example: User Story 1**:

```
T011 (data), T012 (HeroSection), T013 (SkillsSection), T014 (InterestsSection), T015 (AchievementsSection) → can start together
T016, T017, T018 → depend on above completion
```

**Parallel Example: All Data Files**:

```
T011, T019, T024, T025, T031 → all marked [P], can be created simultaneously
```

---

## Implementation Strategy

### MVP First (User Story 1 Only) - Recommended Start

1. Complete Phase 1: Setup (5 tasks)
2. Complete Phase 2: Foundational (6 tasks) ← **CRITICAL - blocks all stories**
3. Complete Phase 3: User Story 1 (8 tasks)
4. **STOP and VALIDATE**: Test landing page independently - verify it works
5. Deploy to static host if satisfied

### Incremental Delivery Path

1. Setup + Foundational → Foundation ready (11 tasks)
2. Add User Story 1 → Validate independently → Deploy as MVP (8 tasks)
3. Add User Story 2 → Validate independently → Deploy update (5 tasks)
4. Add User Story 3 → Validate independently → Deploy update (7 tasks)
5. Add User Story 4 → Validate independently → Deploy final version (5 tasks)
6. Polish & Testing (13 tasks)

Each story adds value without breaking previous stories.

### Parallel Team Strategy

With multiple developers:

1. **Day 1**: Team completes Setup + Foundational together (11 tasks, ~2 hours)
2. **Day 2+**: Once Foundational is done, split work:
   - Developer A: User Story 1 (8 tasks)
   - Developer B: User Story 2 (5 tasks)
   - Developer C: User Story 3 (7 tasks)
   - Developer D: User Story 4 (5 tasks)
3. Stories complete in parallel and integrate independently
4. Final phase: Polish & testing (13 tasks, ~3 hours)

---

## Notes

- [P] tasks = different files, no dependencies, can run in parallel
- [Story] label (US1, US2, US3, US4) maps task to specific user story for traceability
- Each user story is independently completable and testable - can deploy after any story
- Verify responsive layout and no console errors after each story
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- MVP scope: Complete US1 (landing page) to have a functional portfolio
- Extended scope: Add US2 (experiences), US3 (projects), US4 (education) for full portfolio
