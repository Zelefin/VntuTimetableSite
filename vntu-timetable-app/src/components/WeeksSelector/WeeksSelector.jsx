import Button from "../Button/Button";

function WeeksSelector({ changeWeek, week }) {
  return (
    <div className="flex justify-between mx-4">
      <Button
        value={1}
        onClick={changeWeek}
        text={"Перший тиждень"}
        enabled={week === "firstWeek" ? true : false}
      />
      <Button
        value={2}
        onClick={changeWeek}
        text={"Другий тиждень"}
        enabled={week === "secondWeek" ? true : false}
      />
    </div>
  );
}

export default WeeksSelector;
