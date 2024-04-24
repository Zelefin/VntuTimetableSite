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
        <div className="h-4 w-4">
          <HiAcademicCap />
        </div>
        <p className="font-semibold ml-1">{lessonName}</p>
      </div>
      <div className={extended ? "flex items-center" : "hidden"}>
        <div className="h-4 w-4">
          <HiMiniUserCircle />
        </div>
        <p className="ml-1">{lessonTeacherName}</p>
      </div>
      <div className="flex items-center">
        <div className="h-4 w-4">
          <HiMiniBuildingOffice />
        </div>
        <p className="font-semibold ml-1">{lessonAuditory}</p>
      </div>
    </>
  );
}

export default LessonDescription;
