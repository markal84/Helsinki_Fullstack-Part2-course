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

function Course({ course }) {
  // console.log(course.parts);

  return (
    <>
      <Header course={course} />
      <div>
        <Content course={course.parts} />
      </div>
    </>
  );
}

export default Course;
