# Unicafe - exercises 1.6-1.11

Feedback application prepared with AI assistance for Full Stack Open Part 1.

## Run and check

```sh
npm ci
npm run dev
npm run lint
npm run build
```

## Exercise coverage

- **1.6:** Good, neutral, and bad buttons each update their own useState counter.
- **1.7:** Show total feedback, average score, and percentage positive.
- **1.8:** Statistics owns the display; the counters remain in App.
- **1.9:** Show No feedback given when the total is zero.
- **1.10:** Reuse Button for feedback controls and StatisticLine for each statistic.
- **1.11:** Render the statistics as table rows inside tbody.

## Understand the code

useState returns the current value and a setter. Calling setGood(count => count + 1) asks React to calculate the new count from its previous value and render again. Passing an arrow function to onClick delays that call until the click occurs.

Statistics receives the counters as props. It calculates all = good + neutral + bad. Good is worth +1, neutral 0, and bad -1, so average = (good - bad) / all. Positive percentage = good / all * 100.

These totals are derived values, not additional state. This avoids keeping duplicate values synchronized. The early return for zero feedback avoids NaN and Infinity. Components are defined outside App so React keeps their identities stable.

## Manual checks

- Initially show No feedback given, with no statistics table.
- Click good twice, neutral once, and bad once: counts 2/1/1, all 4, average 0.25, positive 50%.
- Refresh: all counts reset and the empty message returns. Persistence is not required.

Instructions: https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps/
