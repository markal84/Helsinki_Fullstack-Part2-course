import Course from "./Course";

function Courses({ courses }) {
  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Courses;
