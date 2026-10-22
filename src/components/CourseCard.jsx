function CourseCard({ title, lecturer, progress, completed }) {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>Lecturer: {lecturer}</p>
      <p>Progress: {progress}%</p>
      <p>{completed ? "Completed" : "In progress"}</p>
    </div>
  );
}

export default CourseCard;