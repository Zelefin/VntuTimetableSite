import {
  HiMiniUserCircle,
  HiAcademicCap,
  HiMiniBuildingOffice,
} from "react-icons/hi2";

function LessonDescription({
  lessonName,
  lessonTeacherName,
  lessonAuditory,
  extended,
}) {
  return (
    <>
      <div className="flex items-center">
        <HiAcademicCap />
        <p className="font-semibold ml-1">{lessonName}</p>
      </div>
      <div className={extended ? "flex items-center" : "hidden"}>
        <HiMiniUserCircle />
        <p className="ml-1">{lessonTeacherName}</p>
      </div>
      <div className="flex items-center">
        <HiMiniBuildingOffice />
        <p className="font-semibold ml-1">{lessonAuditory}</p>
      </div>
    </>
  );
}

export default LessonDescription;
