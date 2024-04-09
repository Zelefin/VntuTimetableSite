function Button({ value, onClick, text }) {
  return (
    <button
      value={value}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 w-full block"
    >
      {text}
    </button>
  );
}

export default Button;
