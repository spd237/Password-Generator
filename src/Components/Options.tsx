const OPTIONS = [
  {
    id: 1,
    name: "uppercase-letters",
    option: "Uppercase Letters",
  },
  {
    id: 2,
    name: "lowercase-letters",
    option: "Lowercase Letters",
  },
  {
    id: 3,
    name: "numbers",
    option: "Numbers",
  },
  {
    id: 4,
    name: "symbols",
    option: "Symbols",
  },
];

const optionElements = OPTIONS.map((option) => {
  return (
    <div className="flex items-center gap-5 relative" key={option.id}>
      <input
        type="checkbox"
        name={option.name}
        id={option.name}
        className={`appearance-none  
           cursor-pointer w-5 h-5 after:w-5 after:h-5 after:absolute after:border-2 after:border-almost-white checked:after:border-neon-green
           checked:after:bg-checkmark
           checked:after:bg-neon-green
           after:bg-no-repeat after:bg-center
           `}
      />
      <label htmlFor={option.name} className="cursor-pointer md:text-lg">
        Include {option.option}
      </label>
    </div>
  );
});

export default function Options() {
  return <div className="flex flex-col gap-4 mt-8">{optionElements}</div>;
}
