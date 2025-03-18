/* eslint-disable react/prop-types */
function InputBar({
  iconSize = "text-lg",
  Icon = "fas fa-search",
  placeholder = "Search for destinations or activities...",
  width = "w-full",
  value,
  onChange,
  onKeyDown,
}) {
  return (
    <div
      className={`flex mx-30 items-center ${width} border border-gray-300 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-blue-400`}
    >
      <span className={`px-3 text-gray-400 ${iconSize}`}>
        <i className={Icon}></i>
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value} // pass down the value
        onChange={onChange} // pass down the onChange handler
        onKeyDown={onKeyDown} // pass down the onKeyDown handler
        className="w-full py-2 focus:outline-none"
      />
    </div>
  );
}

export default InputBar;
