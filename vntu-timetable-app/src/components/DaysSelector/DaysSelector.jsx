import Button from "../Button/Button";

function DaysSelector({ nextDay, day }) {
  return (
    <div className="flex overflow-auto mx-4 px-2 py-1 bg-slate-800 rounded-3xl">
      <Button
        value={0}
        onClick={nextDay}
        text={"Пн"}
        enabled={day === 0 ? true : false}
      />
      <Button
        value={1}
        onClick={nextDay}
        text={"Вт"}
        enabled={day === 1 ? true : false}
      />
      <Button
        value={2}
        onClick={nextDay}
        text={"Ср"}
        enabled={day === 2 ? true : false}
      />
      <Button
        value={3}
        onClick={nextDay}
        text={"Чт"}
        enabled={day === 3 ? true : false}
      />
      <Button
        value={4}
        onClick={nextDay}
        text={"Пт"}
        enabled={day === 4 ? true : false}
      />
      <Button
        value={5}
        onClick={nextDay}
        text={"Сб"}
        enabled={day === 5 ? true : false}
      />
      <Button
        value={6}
        onClick={nextDay}
        text={"Нд"}
        enabled={day === 6 ? true : false}
      />
    </div>
  );
}

export default DaysSelector;
