import Button from "../Button/Button";

function WeeksSelector({ changeWeek }) {
  return (
    <div>
      <Button value={1} onClick={changeWeek} text={"Перший тиждень"} />
      <Button value={2} onClick={changeWeek} text={"Другий тиждень"} />
    </div>
  );
}

export default WeeksSelector;
