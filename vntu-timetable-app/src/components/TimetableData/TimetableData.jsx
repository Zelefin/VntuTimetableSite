import LessonItem from "../LessonItem/LessonItem";
import LessonItemExtended from "../LessonItemExtendet/LessonItemExtendet";

function TimetableData({ lessons }) {
  const generateComponents = (lessons) => {
    const components = [];

    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];

      if (i < lessons.length - 1 && lesson.begin === lessons[i + 1].begin) {
        components.push(
          <LessonItemExtended lessons={[lesson, lessons[i + 1]]} />
        );
        i++; // Skip my man
      } else {
        components.push(<LessonItem lesson={lesson} />);
      }
    }

    return components.length > 0 ? (
      components
    ) : (
      <p className="text-white font-bold text-2xl text-center m-10">
        Уроків немає 🏖️
      </p>
    );
  };

  return <div>{generateComponents(lessons)}</div>;
}

export default TimetableData;
