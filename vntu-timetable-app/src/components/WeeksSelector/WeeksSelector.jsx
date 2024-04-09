function WeeksSelector({ week, changeWeek }) {
  return (
    <div>
      <button value={1} onClick={changeWeek}>
        Перший тиждень
      </button>
      <button value={2} onClick={changeWeek}>
        Другий тиждень
      </button>
    </div>
  );
}

export default WeeksSelector;
