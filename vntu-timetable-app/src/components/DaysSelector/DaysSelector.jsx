import Button from "../Button/Button";

function DaysSelector({ nextDay }) {
  return (
    <div>
      <Button value={0} onClick={nextDay} text={"Пн"} />
      <Button value={1} onClick={nextDay} text={"Вт"} />
      <Button value={2} onClick={nextDay} text={"Ср"} />
      <Button value={3} onClick={nextDay} text={"Чт"} />
      <Button value={4} onClick={nextDay} text={"Пт"} />
      <Button value={5} onClick={nextDay} text={"Сб"} />
      <Button value={6} onClick={nextDay} text={"Нд"} />
    </div>
  );
}

export default DaysSelector;
