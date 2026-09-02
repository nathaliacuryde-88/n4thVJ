import imgRectangle from "figma:asset/32498a1703bf835ee54ef0b099b870d77ab33ae6.png";

function Group() {
  return (
    <div className="absolute contents inset-[-0.67%_-0.6%_-0.18%_-0.59%]" data-name="Group">
      <div className="absolute inset-[-0.67%_-0.6%_-0.18%_-0.59%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Ioe() {
  return (
    <div className="absolute h-[373px] left-[145px] overflow-clip top-[138px] w-[317px]" data-name="_ÎÓÈ_1">
      <Group />
    </div>
  );
}

export default function SingleElement() {
  return (
    <div className="relative size-full" data-name="single element3">
      <Ioe />
    </div>
  );
}