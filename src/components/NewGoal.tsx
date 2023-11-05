import { FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

function NewGoal({ onAddGoal }: NewGoalProps) {

  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    onAddGoal(enteredGoal, enteredSummary)
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input type="text" id="goal" ref={goal} />
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input type="text" id="summary" ref={summary} />
        </p>
        <p>
            <button type="submit">Add Goal</button>
        </p>
    </form>
  )
}

export default NewGoal