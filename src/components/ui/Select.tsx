export default function Select({ selectedValue, options, onChange, style, bgColor, id }: Select) {
  const numberOptions = options.map(number => (
    <option
      key={number}
      value={number}
      defaultValue={selectedValue}
    >
      {number}
    </option>
  ))

  const stringsOptions = options.map(string => (
    <option
      key={string}
      value={string.id}
      defaultValue={selectedValue}
    >
      {string.name || string}
    </option>
  ))

  const select = (
    <select
      id={id}
      className={`bg-${bgColor}-color p-2 gap-4 outline-none ${style ? style : ''}`}
      onChange={onChange}
    >
      {typeof options[0] === 'number' ? numberOptions : stringsOptions}
    </select>
  )

  return select
}
