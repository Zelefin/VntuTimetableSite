import LessonItem from "../LessonItem/LessonItem";

function LessonItemExtended({ lessons }) {
  return (
    <div>
      <p>Bicheees</p>
      {lessons.map((lesson) => (
        <LessonItem lesson={lesson} />
      ))}
    </div>
  );
}

export default LessonItemExtended;
