function Button({ value, onClick, text, enabled }) {
  return (
    <button
      value={value}
      onClick={onClick}
      className={
        enabled
          ? "bg-opacity-0 border-blue-500 border-2 text-white font-bold py-0.5 px-1.5 rounded w-full m-1 block transition duration-500"
          : "bg-blue-500 border-blue-500 border-2 text-white font-bold py-0.5 px-1.5 rounded w-full m-1 block transition duration-500"
      }
    >
      {text}
    </button>
  );
}

export default Button;
