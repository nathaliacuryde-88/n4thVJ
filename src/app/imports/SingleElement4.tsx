import imgRectangle from "figma:asset/f3ba8d1da37578d8a15cfcf73b4fbe0d6104c913.png";

function Group() {
  return (
    <div className="absolute contents inset-[-0.24%_-0.33%_-0.23%_-0.19%]" data-name="Group">
      <div className="absolute inset-[-0.24%_-0.33%_-0.23%_-0.19%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Ioe() {
  return (
    <div className="absolute h-[674.715px] left-[137px] overflow-clip top-[99px] w-[529.855px]" data-name="_ÎÓÈ_1">
      <Group />
    </div>
  );
}

export default function SingleElement() {
  return (
    <div className="relative size-full" data-name="single element 4">
      <Ioe />
    </div>
  );
}