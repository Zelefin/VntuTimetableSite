import LessonHeader from "./LessonHeader";
import LessonType from "./LessonType";
import LessonDescription from "./LessonDescription";

function LessonItem({ lesson }) {
  return (
    <div className="text-white border-4 m-4 p-4 rounded-2xl bg-gray-800 border-gray-800">
      <LessonHeader
        lessonNum={lesson.num}
        lessonBegin={lesson.begin}
        lessonEnd={lesson.end}
      />
      <LessonType lessonType={lesson.type} />
      <LessonDescription
        lessonName={lesson.name}
        lessonTeacherName={lesson.teacher.name}
        lessonAuditory={lesson.auditory}
        extended={true}
      />
      <p className="italic">
        {lesson.subgroup ? lesson.subgroup + " пг." : null}
      </p>
    </div>
  );
}

export default LessonItem;
