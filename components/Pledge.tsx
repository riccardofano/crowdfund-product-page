interface PledgeProps {
  title: string;
  minimum: number;
  description: string;
  remaining: number;
  onClick: () => void;
}

function Pledge({ title, minimum, description, remaining, onClick }: PledgeProps) {
  const disabled = remaining < 1;

  return (
    <section className={`${disabled ? "opacity-50" : ""} my-6 px-4 py-6 border rounded-lg`}>
      <h3 className="font-bold text-black leading-relaxed">
        {title}
        <span className="block font-normal text-cyan-400">Pledge ${minimum} or more</span>
      </h3>
      <p className="paragraph">{description}</p>

      <div className="md:flex md:justify-between md:items-center mt-6">
        <p className="flex items-center gap-2">
          <span className="font-bold text-3xl text-black">{remaining}</span>
          left
        </p>

        <button disabled={disabled} className="button | md:m-0 mt-6 py-3 px-8" onClick={onClick}>
          {disabled ? "Out of Stock" : "Select Reward"}
        </button>
      </div>
    </section>
  );
}

export default Pledge;
