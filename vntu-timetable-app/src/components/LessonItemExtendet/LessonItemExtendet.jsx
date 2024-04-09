import LessonItem from "../LessonItem/LessonItem";

function LessonItemExtended({ lessons }) {
  return (
    <div className="text-white m-4 p-4 border-4 rounded-2xl bg-gray-800 border-gray-800">
      <div className="flex justify-between">
        <p className="bg-white px-3 py-1 rounded-3xl text-black">
          {lessons[0].num}
        </p>
        <p>
          {lessons[0].begin}-{lessons[0].end}
        </p>
      </div>
      <p className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2">
        {lessons[0].type}
      </p>
      <p>{lessons[0].name}</p>
      <p>{lessons[0].teacher.name}</p>
      <p>{lessons[0].auditory}</p>
      <p>{lessons[0].subgroup ? lessons[0].subgroup + " пг." : null}</p>

      <p className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2">
        {lessons[1].type}
      </p>
      <p>{lessons[1].name}</p>
      <p>{lessons[1].teacher.name}</p>
      <p>{lessons[1].auditory}</p>
      <p>{lessons[1].subgroup ? lessons[1].subgroup + " пг." : null}</p>

      {/* {lessons.map((lesson) => (
        <LessonItem lesson={lesson} />
      ))} */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 w-full">
        Більше інформації
      </button>
    </div>
  );
}

export default LessonItemExtended;
