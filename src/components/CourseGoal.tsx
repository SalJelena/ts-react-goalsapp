import { type ReactNode } from "react";

interface CourseGoalProps {
    title: string;
    id: number;
    onDelete: (id: number) => void;
    children: ReactNode
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>

function CourseGoal({ title, id, onDelete, children }: CourseGoalProps) {
  return (
    <article>
    <div>
      <h2>{title}</h2>
      {children}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  </article>
  )
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//     return (
//       <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//         <button>Delete</button>
//       </div>
//     </article>
//     )
// }

export default CourseGoal