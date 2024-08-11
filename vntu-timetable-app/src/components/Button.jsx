function Button({ value, onClick, text, enabled }) {
  return (
    <button
      value={value}
      onClick={onClick}
      className={
        enabled
          ? "bg-blue-500 text-white font-bold p-2 m-0.5 rounded-3xl w-full block transition duration-500"
          : "bg-opacity-0 text-white font-bold p-2 m-0.5 rounded-3xl w-full block transition duration-500"
      }
    >
      {text}
    </button>
  );
}

export default Button;
