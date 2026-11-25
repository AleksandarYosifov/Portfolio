# Aleksandar Yosifov — Personal Portfolio (2026)

A modern, original, single-page portfolio based on the **Technical Editorial** homework wireframe and inspired by the visual pacing of Kaloyan’s portfolio. This is not a clone.

## Run locally

Open `src/index.html` in a modern browser. No package manager, build step, external JavaScript library or server is required. For the best experience, start a local server from `src/`:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. The portfolio works offline using local CSS and JS; web fonts and public evidence links need internet access.

## Structure

```
.
├── src/
│   ├── index.html          # semantic markup, content, source links
│   ├── styles.css          # layouts, art, responsive styling, interactions
│   ├── script.js           # tabs, modal case studies, mobile nav, scroll progress
│   └── assets/
│       └── favicon.svg
├── conversations/
│   └── README.md           # instructions to export authentic agent transcripts
├── Skill-List.md
├── SOURCES.md               # evidence register and source limitations
└── README.md
```

## Design and features

- No portrait photograph; the hero uses custom typographic and CSS motion graphics.
- MTQ 2026 is deliberately prominent, including the 2nd-place result, Sports discipline win, 50% tuition award and official AUBG feature.
- Selected work includes **Escape Yourself**, **ABLE Mentor** and **A1 Bulgaria**, each with a case-study dialog. External links are attached where trustworthy independent coverage exists.
- Interactive **Build / Lead / Compete** tabbed profile with keyboard navigation.
- Source library explicitly separates named personal verification from broader event/organization context.
- Sticky navigation, hover effects, responsive design, accessibility labels, Escape-to-dismiss dialogs, reduced-motion support and scroll-reveal animation.
- Desktop and mobile layouts tested at 1440px and 390px; source contains no injected photos or fake GitHub/social profile links.

## Information still needed to fully personalize

1. Exact Instagram/LinkedIn/GitHub profile URLs and specific public posts about MTQ, Escape Yourself, ABLE Mentor, Interact or sports results. No individual Instagram post URL could be independently verified.
2. Public competition results/certificates supporting the eight-time BJJ champion record.
3. Software project names, repositories, screenshots and technical stack, if distinct from the A1 internship.
4. Actual participant numbers and results for Escape Yourself, and outcomes or measurable results for projects.

See `SOURCES.md` for the evidence register. The A1 internship and individual roles not independently documented by sources were taken from the supplied CV. The Escape Yourself UNWE article verifies the event, but not Aleksandar's individual co-lead role.

## Submission notes

The assignment requires exporting actual agent conversations to `conversations/`. The assistant cannot manufacture native Claude Code, Codex or Gemini transcripts. Export your real sessions using the format specified in the assignment, and place them in that directory before submitting. `AGENTS.md` was not used and is therefore not included.

## November 2026: updated personal context

The portfolio now emphasizes event leadership, public speaking, national-scale organization, and athletics rather than presenting software development as the primary career identity. The 90-team and 8-finalist figures for Escape Yourself are provided directly by the organizer. Fifteen supporting organization names were supplied, while the stated total is 12 partners (plus five rooms); until reconciled, the website uses the conservative phrase **12+** and avoids a definitive total. Specific Instagram post URLs were not independently verifiable; direct official account links are provided instead.
