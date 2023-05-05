import { useState } from "react";

export default function Length() {
  const [lengthVal, setLengthVal] = useState(0);
  const style = {
    background: `linear-gradient(90deg, #a4ffaf ${lengthVal * 5}%, #fff ${
      lengthVal * 5
    }%)`,
  };

  return (
    <div>
      <p className="flex justify-between items-center mb-2 md:text-lg">
        Character Length{" "}
        <span className=" text-neon-green text-2xl md:text-3xl">
          {lengthVal}
        </span>
      </p>
      <label>
        <input
          type="range"
          name="pass-length"
          id="pass length"
          className="w-full"
          max={20}
          style={style}
          value={lengthVal}
          onChange={(e) => setLengthVal(parseInt(e.target.value))}
        />
      </label>
    </div>
  );
}
