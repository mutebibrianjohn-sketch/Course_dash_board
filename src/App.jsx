// const courses=[{id:1,title:'Web Development',lecturer:'Dr. Kato',progress:70,completed:false},{id:2,title:'Database Systems',lecturer:'Ms. Auma',progress:100,completed:true}];
// function CourseCard({course}){return <article className='card'><h2>{course.title}</h2><p>{course.lecturer}</p><strong>{course.completed?'Completed':'In progress'}</strong></article>}
// export default function App(){return <main><h1>My Course Dashboard</h1><section className='grid'>{courses.map(c=><CourseCard key={c.id} course={c}/>)}</section></main>}


import { courses } from "./data/courses";
import CourseCard from "./components/CourseCard";

function App() {
  return (
    <div className="dashboard">
      <h1>Student Course Dashboard</h1>

      {courses.length === 0 ? (
        <p className="empty-message">
          No courses yet. Check back soon!
        </p>
      ) : (
        <div className="course-list">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              lecturer={course.lecturer}
              progress={course.progress}
              completed={course.completed}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;