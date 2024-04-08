function LessonItem({ lesson }) {
  return (
    <div>
      <p>{lesson.num}</p>
      <p>
        {lesson.begin} {lesson.end}
      </p>
      <p>{lesson.type}</p>
      <p>{lesson.name}</p>
      <p>{lesson.teacher.name}</p>
      <p>{lesson.auditory}</p>
      <p>{lesson.subgroup ? lesson.subgroup + " пг." : null}</p>
      <br></br>
    </div>
  );
}

export default LessonItem;
