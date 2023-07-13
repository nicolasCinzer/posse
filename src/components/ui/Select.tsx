export default function Select({ options, onChange, style, id }: Select) {
  const numberOptions = options.map(number => (
    <option
      key={number}
      value={number}
    >
      {number}
    </option>
  ))

  const stringsOptions = options.map(string => (
    <option
      key={string}
      value={string}
    >
      {string}
    </option>
  ))

  const select = (
    <select
      id={id}
      className={`bg-dom-color p-2 gap-4 outline-none ${style}`}
      onChange={onChange}
    >
      {typeof options[0] === 'number' ? numberOptions : stringsOptions}
    </select>
  )

  return select
}
