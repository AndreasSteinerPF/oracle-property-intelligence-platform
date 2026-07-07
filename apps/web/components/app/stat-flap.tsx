function StatFlap({ value, label }: { value: string; label?: string }) {
  return (
    <div>
      <div className="flex justify-center gap-2" role="img" aria-label={`${value}${label ? ` ${label}` : ""}`}>
        {value.split("").map((ch, i) => (
          <span
            key={i}
            aria-hidden
            className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-transparent font-display text-3xl text-primary md:h-20 md:w-20 md:text-4xl"
          >
            {ch}
          </span>
        ))}
      </div>
      <div className="mx-auto mt-4 h-px w-3/4 bg-primary/30" />
      {label ? <p className="mt-4 text-center text-sm text-white/72">{label}</p> : null}
    </div>
  );
}

export { StatFlap };
