import Contents from "./Contents";
import Header from "./Header";
import Total from "./Total";
import { Course } from "./types";

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: Course[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header name={courseName} />
      <Contents courseParts={courseParts} />
      <Total totalExercises={totalExercises} />
    </div>
  );
};

export default App;