function LessonItem({ lesson }) {
  return (
    <div className="text-white border-4 m-4 p-4 rounded-2xl">
      <div className="flex justify-between">
        <p className="bg-white px-3 py-1 rounded-3xl text-black">
          {lesson.num}
        </p>
        <p>
          {lesson.begin}-{lesson.end}
        </p>
      </div>
      <p className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2">
        {lesson.type}
      </p>
      <p>{lesson.name}</p>
      <p>{lesson.teacher.name}</p>
      <p>{lesson.auditory}</p>
      <p>{lesson.subgroup ? lesson.subgroup + " пг." : null}</p>
    </div>
  );
}

export default LessonItem;
