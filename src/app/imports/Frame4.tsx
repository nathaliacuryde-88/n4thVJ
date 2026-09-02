function Circle() {
  return (
    <div className="relative size-[123.448px]" data-name="circle 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 124">
        <g id="circle 1">
          <circle cx="61.724" cy="61.724" fill="var(--fill-0, #AEFF4B)" id="Ellipse 623" r="61.724" />
        </g>
      </svg>
    </div>
  );
}

function Circle1() {
  return (
    <div className="relative size-[123.448px]" data-name="circle 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 124">
        <g id="circle 1">
          <circle cx="61.724" cy="61.724" fill="var(--fill-0, #AEFF4B)" id="Ellipse 623" r="61.724" />
        </g>
      </svg>
    </div>
  );
}

function Circle2() {
  return (
    <div className="relative size-[123.448px]" data-name="circle 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 124">
        <g id="circle 1">
          <circle cx="61.724" cy="61.724" fill="var(--fill-0, #AEFF4B)" id="Ellipse 623" r="61.724" />
        </g>
      </svg>
    </div>
  );
}

function Circle3() {
  return (
    <div className="relative size-[123.448px]" data-name="circle 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 124">
        <g id="circle 1">
          <circle cx="61.724" cy="61.724" fill="var(--fill-0, #AEFF4B)" id="Ellipse 623" r="61.724" />
        </g>
      </svg>
    </div>
  );
}

function Circle4() {
  return (
    <div className="relative size-[123.448px]" data-name="circle 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 124">
        <g id="circle 1">
          <circle cx="61.724" cy="61.724" fill="var(--fill-0, #AEFF4B)" id="Ellipse 623" r="61.724" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "123", "--transform-inner-height": "123" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Circle />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[125.1px] top-[0.08px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "123", "--transform-inner-height": "123" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Circle1 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[248.1px] top-[0.08px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "123", "--transform-inner-height": "123" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Circle2 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[373.1px] top-[0.08px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "123", "--transform-inner-height": "123" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Circle3 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[496px] top-[0.08px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "123", "--transform-inner-height": "123" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Circle4 />
        </div>
      </div>
    </div>
  );
}