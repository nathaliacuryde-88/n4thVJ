import imgRectangle from "figma:asset/5c488eaa55fd9716d5b08aa3c65d57503e82b93a.png";

function Group() {
  return (
    <div className="absolute contents inset-[-0.33%_-0.4%_-0.13%_-0.29%]" data-name="Group">
      <div className="absolute inset-[-0.33%_-0.4%_-0.13%_-0.29%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Ioe() {
  return (
    <div className="absolute h-[545.641px] left-[160px] overflow-clip top-[127px] w-[434.734px]" data-name="_ÎÓÈ_1">
      <Group />
    </div>
  );
}

export default function SingleElement() {
  return (
    <div className="relative size-full" data-name="single element 2">
      <Ioe />
    </div>
  );
}