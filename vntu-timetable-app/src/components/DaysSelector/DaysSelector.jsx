function DaysSelector({ nextDay }) {
  return (
    <div>
      <button value={0} onClick={nextDay}>
        Пн
      </button>
      <button value={1} onClick={nextDay}>
        Вт
      </button>
      <button value={2} onClick={nextDay}>
        Ср
      </button>
      <button value={3} onClick={nextDay}>
        Чт
      </button>
      <button value={4} onClick={nextDay}>
        Пт
      </button>
      <button value={5} onClick={nextDay}>
        Сб
      </button>
      <button value={6} onClick={nextDay}>
        Нд
      </button>
    </div>
  );
}

export default DaysSelector;
