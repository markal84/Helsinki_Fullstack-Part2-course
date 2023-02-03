function Header({ course }) {
  return <h2>{course.name}</h2>;
}

function Part({ course }) {
  return (
    <li>
      {course.name} : {course.exercises}
    </li>
  );
}

function Content({ course }) {
  return (
    <ul>
      {course.map((part) => (
        <Part key={part.id} course={part} />
      ))}
    </ul>
  );
}

function Sum({ course }) {
  // console.log(props);
  // const { course } = props;
  const sum = course.reduce((acc, obj) => {
    return acc + obj.exercises;
  }, 0);
  return <h4>Total of {sum} exercises</h4>;
}

function Course({ course }) {
  // console.log(course.parts);

  return (
    <>
      <Header course={course} />
      <div>
        <Content course={course.parts} />
        <Sum course={course.parts} />
      </div>
    </>
  );
}

export default Course;
