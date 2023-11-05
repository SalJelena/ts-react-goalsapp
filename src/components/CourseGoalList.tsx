import { ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
    // goals: {
    //     title: string;
    //     description: string;
    //     id: number;
    //   }[]
    goals: CGoal[];
    onDelete: (id: number) => void;
}

function CourseGoalList({goals, onDelete}: CourseGoalListProps) {

  if (goals.length === 0) {
    return <InfoBox mode='hint'>
      You have no goals yet. Start adding some!
    </InfoBox>
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = <InfoBox mode="warning" severity="medium">You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>
  }

  return (
    <>
    {warningBox}
    <ul>
      {goals.map((goal) => (<li key={goal.id}>
        <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
          <p>{goal.description}</p>
        </CourseGoal>
        </li>)
      )}
    </ul>
    </>
  )
}

export default CourseGoalList