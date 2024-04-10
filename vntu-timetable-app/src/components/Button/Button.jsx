function Button({ value, onClick, text }) {
  return (
    <button
      value={value}
      onClick={onClick}
      className="bg-blue-500 hover:bg-opacity-0 border-blue-500 border-2 text-white font-bold py-0.5 px-1.5 rounded w-full m-1 block"
    >
      {text}
    </button>
  );
}

export default Button;
