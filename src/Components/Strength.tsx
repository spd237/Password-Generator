export default function Strength({ strength }: { strength: string }) {
  return (
    <div className=" bg-very-dark-grey p-4 mt-8 flex justify-between items-center gap-12 md:px-6">
      <span className=" uppercase text-grey md:text-lg ">strength</span>
      <div className="flex gap-2">
        <span className="uppercase text-almost-white text-lg mr-2 md:text-2xl">
          {strength}
        </span>
        <div
          className={`border-2 w-[10px] h-7 ${
            strength === "weak"
              ? "bg-orange border-orange"
              : strength === "medium"
              ? "bg-yellow border-yellow"
              : strength === "strong"
              ? "bg-neon-green border-neon-green"
              : "bg-red border-red"
          }`}
        ></div>
        <div
          className={`border-2 w-[10px] h-7 ${
            strength === "weak"
              ? "bg-orange border-orange"
              : strength === "medium"
              ? "bg-yellow border-yellow"
              : strength === "strong"
              ? "bg-neon-green border-neon-green"
              : ""
          }`}
        ></div>
        <div
          className={`border-2 w-[10px] h-7 ${
            strength === "medium"
              ? "bg-yellow border-yellow"
              : strength === "strong"
              ? "bg-neon-green border-neon-green"
              : ""
          } "`}
        ></div>
        <div
          className={` border-2 w-[10px] h-7 ${
            strength === "strong" ? "bg-neon-green border-neon-green" : ""
          } `}
        ></div>
      </div>
    </div>
  );
}
