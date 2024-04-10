import {
  HiMiniUserCircle,
  HiAcademicCap,
  HiMiniBuildingOffice,
} from "react-icons/hi2";
import { useState } from "react";

function LessonItemExtended({ lessons }) {
  const [extended, setExtended] = useState(false);

  const handleExtendClick = () => {
    setExtended(!extended);
  };

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
      <div className="flex items-center">
        <HiAcademicCap />
        <p className="font-semibold ml-1">{lessons[0].name}</p>
      </div>
      <div className={extended ? "flex items-center" : "hidden"}>
        <HiMiniUserCircle />
        <p className="ml-1">{lessons[0].teacher.name}</p>
      </div>
      <div className="flex items-center">
        <HiMiniBuildingOffice />
        <p className="font-semibold ml-1">{lessons[0].auditory}</p>
      </div>
      <p className="italic">
        {lessons[0].subgroup ? lessons[0].subgroup + " пг." : null}
      </p>
      <p className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2">
        {lessons[1].type}
      </p>
      <div className="flex items-center">
        <HiAcademicCap />
        <p className="font-semibold ml-1">{lessons[1].name}</p>
      </div>
      <div className={extended ? "flex items-center" : "hidden"}>
        <HiMiniUserCircle />
        <p className="ml-1">{lessons[1].teacher.name}</p>
      </div>
      <div className="flex items-center">
        <HiMiniBuildingOffice />
        <p className="font-semibold ml-1">{lessons[1].auditory}</p>
      </div>
      <p className="italic">
        {lessons[1].subgroup ? lessons[1].subgroup + " пг." : null}
      </p>

      {/* {lessons.map((lesson) => (
        <LessonItem lesson={lesson} />
      ))} */}
      <button
        onClick={handleExtendClick}
        className={
          extended
            ? "bg-opacity-0 border-blue-500 border-2 text-white font-bold py-0.5 px-1.5 rounded w-full m-1 block"
            : "bg-blue-500 border-blue-500 border-2 text-white font-bold py-0.5 px-1.5 rounded w-full m-1 block"
        }
      >
        {extended ? "Менше інформації" : "Більше інформації"}
      </button>
    </div>
  );
}

export default LessonItemExtended;
