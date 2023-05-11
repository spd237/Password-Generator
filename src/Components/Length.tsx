interface PropsType {
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
}
export default function Length({ length, setLength }: PropsType) {
  const style = {
    background: `linear-gradient(90deg, #a4ffaf ${length * 5}%, #fff ${
      length * 5
    }%)`,
  };

  return (
    <div>
      <p className="flex justify-between items-center mb-2 md:text-lg">
        Character Length{" "}
        <span className=" text-neon-green text-2xl md:text-3xl">{length}</span>
      </p>
      <label>
        <input
          type="range"
          name="pass-length"
          id="pass length"
          className="w-full"
          max={20}
          style={style}
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </label>
    </div>
  );
}
