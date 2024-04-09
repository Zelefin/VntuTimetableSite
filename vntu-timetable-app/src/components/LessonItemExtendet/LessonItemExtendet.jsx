import LessonItem from "../LessonItem/LessonItem";

function LessonItemExtended({ lessons }) {
  return (
    <div className="text-white m-4 border-4">
      {lessons.map((lesson) => (
        <LessonItem lesson={lesson} />
      ))}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2">
        Більше інформації
      </button>
    </div>
  );
}

export default LessonItemExtended;
