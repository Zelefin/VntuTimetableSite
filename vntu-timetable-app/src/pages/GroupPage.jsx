import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekOfYear from "dayjs/plugin/weekOfYear";
import uk from "dayjs/locale/uk";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import TimetableData from "../components/TimetableData/TimetableData";
import WeeksSelector from "../components/WeeksSelector/WeeksSelector";
import DaysSelector from "../components/DaysSelector/DaysSelector";
import FacultiesSelector from "../components/FacultiesSelector/FacultiesSelector";
import GroupsSelector from "../components/GroupsSelector/GroupsSelector";

dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.locale(uk);

function weekToString(week) {
  return week % 2 === 0 ? "Перший тиждень" : "Другий тиждень";
}

function GroupPage() {
  const navigate = useNavigate();
  const linkParams = useParams();
  const [weeks, setWeeks] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [facultyId, setFacultyId] = useState(parseInt(linkParams.facultyId));
  const [groupId, setGroupId] = useState(parseInt(linkParams.groupId));
  const [week, setWeek] = useState("firstWeek");
  const [day, setDay] = useState(0);

  useEffect(() => {
    fetchWeeks();
    fetchFaculties();
  }, []);

  useEffect(() => {
    fetchWeeks();
  }, [groupId]);

  const fetchWeeks = async () => {
    const response = await fetch(`http://127.0.0.1:8000/v0/groups/${groupId}`);
    const data = await response.json();
    setWeeks(data.data);
  };

  const fetchFaculties = async () => {
    const response = await fetch("http://127.0.0.1:8000/v0/faculties");
    const data = await response.json();
    setFaculties(data.data);
  };

  const nextDay = (e) => {
    setDay(parseInt(e.target.value));
  };

  const changeWeek = (e) => {
    setWeek(parseInt(e.target.value) === 1 ? "firstWeek" : "secondWeek");
  };

  const handleGroupChange = (e) => {
    navigate(`/${facultyId}/${parseInt(e.target.value)}`);
    setGroupId(parseInt(e.target.value));
  };

  const handleFacultyChange = (e) => {
    setFacultyId(parseInt(e.target.value));
  };

  return (
    <>
      <Header />
      <FacultiesSelector
        faculties={faculties}
        facultyId={facultyId}
        handleFacultyChange={handleFacultyChange}
      />
      <GroupsSelector
        faculties={faculties}
        facultyId={facultyId}
        groupId={groupId}
        handleGroupChange={handleGroupChange}
      />
      <WeeksSelector week={week} changeWeek={changeWeek} />
      <DaysSelector nextDay={nextDay} />
      <p>
        {day} and {week}
      </p>
      <p>
        {"Сьогодні: " +
          dayjs()
            .format("dd D MMMM")
            .replace(/(?:^|\s)\S/g, function (a) {
              return a.toUpperCase();
            }) +
          ", " +
          weekToString(dayjs().week())}
      </p>
      {Object.keys(weeks).length > 0 ? (
        <TimetableData lessons={weeks[week][day]["lessons"]} />
      ) : (
        <p>monkey</p>
      )}
    </>
  );
}

export default GroupPage;
