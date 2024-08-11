import { useState } from "react";

import LessonHeader from "./LessonHeader";
import LessonType from "./LessonType";
import LessonDescription from "./LessonDescription";

function LessonItemExtended({ lessons }) {
  const [extended, setExtended] = useState(false);

  const handleExtendClick = () => {
    setExtended(!extended);
  };

  return (
    <div className="text-white m-4 p-4 border-4 rounded-2xl bg-gray-800 border-gray-800">
      <LessonHeader
        lessonNum={lessons[0].num}
        lessonBegin={lessons[0].begin}
        lessonEnd={lessons[0].end}
      />
      <LessonType lessonType={lessons[0].type} />
      <LessonDescription
        lessonName={lessons[0].name}
        lessonTeacherName={lessons[0].teacher.name}
        lessonAuditory={lessons[0].auditory}
        extended={extended}
      />
      <p className="italic">
        {lessons[0].subgroup ? lessons[0].subgroup + " пг." : null}
      </p>
      <LessonType lessonType={lessons[1].type} />
      <LessonDescription
        lessonName={lessons[1].name}
        lessonTeacherName={lessons[1].teacher.name}
        lessonAuditory={lessons[1].auditory}
        extended={extended}
      />
      <p className="italic">
        {lessons[1].subgroup ? lessons[1].subgroup + " пг." : null}
      </p>
      <button
        onClick={handleExtendClick}
        className={
          extended
            ? "bg-opacity-0 border-blue-500 border-2 text-white font-bold py-0.5 px-1.5 rounded w-full m-1 block transition duration-500"
            : "bg-blue-500 border-blue-500 border-2 text-white font-bold py-0.5 px-1.5 rounded w-full m-1 block transition duration-500"
        }
      >
        {extended ? "Менше інформації" : "Більше інформації"}
      </button>
    </div>
  );
}

export default LessonItemExtended;
