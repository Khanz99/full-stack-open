import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button type="button" onClick={onClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <th scope="row">{text}</th>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return <p>No feedback given</p>
  }

  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positive} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGood(count => count + 1)} />
      <Button text="neutral" onClick={() => setNeutral(count => count + 1)} />
      <Button text="bad" onClick={() => setBad(count => count + 1)} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
