import imgRectangle from "figma:asset/bd57732831c4be8a01135a80bf71e4a280755a1b.png";

function Group() {
  return (
    <div className="absolute contents inset-[-0.08%_-0.29%_-0.24%_-0.2%]" data-name="Group">
      <div className="absolute inset-[-0.08%_-0.29%_-0.24%_-0.2%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Ioe() {
  return (
    <div className="absolute h-[656.469px] left-[64px] overflow-clip top-[90px] w-[632.239px]" data-name="_ÎÓÈ_1">
      <Group />
    </div>
  );
}

export default function SingleElement() {
  return (
    <div className="relative size-full" data-name="single element">
      <Ioe />
    </div>
  );
}