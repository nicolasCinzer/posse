export default function Select({ selectedValue, options, onChange, style, bgColor, id }: Select) {
  const numberOptions = options.map(number => (
    <option
      key={number}
      value={number}
      selected={number === selectedValue}
    >
      {number}
    </option>
  ))

  const stringsOptions = options.map(string => (
    <option
      key={string}
      value={string.id}
      selected={string === selectedValue}
    >
      {string.name || string}
    </option>
  ))

  const select = (
    <select
      id={id}
      className={`bg-${bgColor}-color p-2 gap-4 outline-none ${style}`}
      onChange={onChange}
    >
      {typeof options[0] === 'number' ? numberOptions : stringsOptions}
    </select>
  )

  return select
}
