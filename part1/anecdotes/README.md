# Anecdotes - exercises 1.12-1.14

Random anecdote and voting application prepared with AI assistance for Full Stack Open Part 1. The anecdote texts come from the exercise starter data.

## Run and check

```sh
npm ci
npm run dev
npm run lint
npm run build
```

## Exercise coverage

- **1.12:** Show a randomly selected anecdote when next anecdote is clicked.
- **1.13:** Store votes for every anecdote in a state array.
- **1.14:** Display an anecdote with the largest vote count.

## Understand the code

selected is the index of the currently displayed anecdote. Array(anecdotes.length).fill(0) creates one initial zero vote count per anecdote.

Math.random() returns a number from 0 inclusive to 1 exclusive. Multiplying by the array length and applying Math.floor produces a valid index. A random choice is allowed to select the same anecdote again.

handleVote uses the previous state, copies it with [...previousVotes], increments the selected entry, and returns the copy. It never mutates the original state array.

Math.max(...votes) finds the largest count. votes.indexOf(mostVotes) finds the first index with that count. This also handles ties, including the initial all-zero tie: the first anecdote is shown.

Anecdote is reused for the current and leading anecdotes. Each receives its own text and count through props. When state changes, React renders both again, so the leader updates immediately.

## Manual checks

- Initially both sections show the first anecdote with zero votes.
- Vote twice: both counts become 2.
- Select another anecdote: its votes remain zero and the leader keeps 2.
- Give that anecdote three votes: it becomes the new leader with 3.
- Select other anecdotes and return: each keeps its own votes during the session.
- Refresh: voting starts again from zero. Persistence is not required.

Instructions: https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps/
