import { ChangeEvent, useState } from "react";

interface PledgeProps {
  id: string;
  title: string;
  description: string;
  minimum?: number;
  remaining?: number;
  selected: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Pledge({ id, title, description, minimum, remaining, selected, onChange }: PledgeProps) {
  const [pledge, setPledge] = useState(minimum || 1);

  const disabled = remaining !== undefined && remaining < 1;
  const isSelected = selected === id;

  return (
    <div
      className={`rounded-lg ${disabled ? "opacity-50" : ""} ${
        isSelected ? "border-2 border-cyan-400" : "border border-gray-200"
      }`}
    >
      <div
        className={`${
          remaining === undefined ? "md:pledge-area-empty-md pledge-area-empty" : "md:pledge-area-md pledge-area"
        } md:items-start items-center grid gap-4 md:m-8 m-4`}
      >
        <input
          className="a-radio md:mt-[0.35rem] mr-2 cursor-pointer disabled:cursor-default font-normal text-gray-400"
          name="pledge"
          type="radio"
          id={id}
          value={id}
          checked={isSelected}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <label
          className={`${disabled ? "cursor-default" : "cursor-pointer"} a-title flex items-center font-bold text-black`}
          htmlFor={id}
        >
          <div>
            {title}
            {minimum && <span className="block font-normal text-cyan-400">Pledge ${minimum} or more</span>}
          </div>
        </label>
        <p className="a-description leading-relaxed">{description}</p>
        {remaining !== undefined && (
          <p className="a-remaining flex gap-2 items-center">
            <span className="text-lg font-bold text-black">{remaining}</span>
            left
          </p>
        )}
      </div>

      {isSelected && (remaining ?? 1) > 0 && (
        <div className="md:flex md:justify-between md:m-8 m-4 text-center border-t">
          <p className="mt-6">Enter your pledge</p>
          <div className="mt-4 grid grid-cols-2 justify-between gap-4 h-12">
            <label className="px-4 flex items-center gap-2 rounded-full border border-gray-200 text-gray-300">
              $
              <input
                className="font-bold text-black"
                type="text"
                size={4}
                value={pledge}
                onChange={(e) => setPledge(Number(e.target.value))}
              />
            </label>
            <button className="button">Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pledge;
