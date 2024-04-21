function LessonHeader({ lessonNum, lessonBegin, lessonEnd }) {
  return (
    <div className="flex justify-between">
      <p className="bg-white px-3 py-1 min-w-8 rounded-3xl text-black">
        {lessonNum}
      </p>
      <p>
        {lessonBegin}-{lessonEnd}
      </p>
    </div>
  );
}

export default LessonHeader;
