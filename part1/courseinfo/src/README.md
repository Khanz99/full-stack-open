# Part 1 - Introduction to React

AI-assisted implementations of exercises 1.1-1.14. The final versions of each application are included, as permitted by the course instructions.

| Directory | Exercises | Main concepts |
| --- | --- | --- |
| courseinfo | 1.1-1.5 | Components, props, objects, arrays |
| unicafe | 1.6-1.11 | State, event handlers, derived values, conditional rendering, tables |
| anecdotes | 1.12-1.14 | Random selection, immutable array updates, finding the most voted item |

Each app is independent. Open its directory, run npm ci, then npm run dev. Use the local URL printed by Vite. Each app README explains the code, the exercise progression, and manual checks.

AI assistance was used to explain the material, implement the apps, and verify their behavior. Review the code and try the suggested changes to build understanding before marking the exercises complete in the course portal.

Part 1 has not been submitted to the course portal.

## Validation

All three apps passed npm run lint and npm run build. Browser checks confirmed the course information total is 31; Unicafe initially shows no feedback, then 2 good / 1 neutral / 1 bad produces total 4, average 0.25, positive 50%; anecdotes retain separate vote counts and update the leader when another item overtakes it (3 votes versus 2). No application errors were shown in the browser console during these checks.
