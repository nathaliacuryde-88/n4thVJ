function CorenerElement() {
  return (
    <div className="relative size-[187.856px]" data-name="corener element 2">
      <div className="absolute bg-[#aeff4b] bottom-0 left-[30%] right-[69.29%] top-0" />
      <div className="absolute bottom-[70.71%] flex items-center justify-center left-0 right-0 top-[28.57%]">
        <div className="flex-none h-[187.856px] rotate-[270deg] w-[1.342px]">
          <div className="bg-[#aeff4b] size-full" />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[20px] top-[32px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "187.84375", "--transform-inner-height": "187.84375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <CorenerElement />
        </div>
      </div>
    </div>
  );
}