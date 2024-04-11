import {
  HiMiniUserCircle,
  HiAcademicCap,
  HiMiniBuildingOffice,
} from "react-icons/hi2";

function LessonItem({ lesson }) {
  return (
    <div className="text-white border-4 m-4 p-4 rounded-2xl bg-gray-800 border-gray-800">
      <div className="flex justify-between">
        <p className="bg-white px-3 py-1 rounded-3xl text-black">
          {lesson.num}
        </p>
        <p>
          {lesson.begin}-{lesson.end}
        </p>
      </div>
      <p className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 mb-2">
        {lesson.type}
      </p>
      <div className="flex items-center">
        <HiAcademicCap />
        <p className="font-semibold ml-1">{lesson.name}</p>
      </div>
      <div className="flex items-center">
        <HiMiniUserCircle />
        <p className="ml-1">{lesson.teacher.name}</p>
      </div>
      <div className="flex items-center">
        <HiMiniBuildingOffice />
        <p className="font-semibold ml-1">{lesson.auditory}</p>
      </div>
      <p className="italic">
        {lesson.subgroup ? lesson.subgroup + " пг." : null}
      </p>
    </div>
  );
}

export default LessonItem;
