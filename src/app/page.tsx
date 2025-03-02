import ThreeDScene from "../../components/ThreeDScene";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="p-[1vh] grid grid-cols-[1fr_minmax(200px,_3fr)_1fr] content-normal gap-[0vh] h-[99vh] ...">
        <div className="big-style h-[var(--custom-height)]">01</div>
        <div className="big-style h-[var(--custom-height)] text-white text-3xl">WEBSITE UNDER CONSTRUCTION</div>
        <div className="big-style h-[var(--custom-height)]">03</div>
        <div className="big-style h-[var(--triple-height)]">04</div>
        <div id="threeDContainer" className="big-style h-[var(--triple-height)]"><ThreeDScene /></div>
        <div className="big-style h-[var(--triple-height)]">06</div>
        <div className="big-style h-[var(--custom-height)]">07</div>
        <div className="big-style h-[var(--custom-height)]">08</div>
        <div className="big-style h-[var(--custom-height)]">09</div>
      </div>
    </div>
    
  );
}
