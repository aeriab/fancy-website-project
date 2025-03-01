import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="p-[1vh] grid grid-cols-[1fr_3fr_1fr] content-normal gap-[0vh] h-[99vh] ...">
        <div className="flex items-center justify-center bg-blue-100 h-[var(--custom-height)]">01</div>
        <div className="flex items-center justify-center bg-blue-200 h-[var(--custom-height)]">02</div>
        <div className="flex items-center justify-center bg-blue-300 h-[var(--custom-height)]">03</div>
        <div className="flex items-center justify-center bg-blue-400 h-[var(--triple-height)]">04</div>
        <div className="flex items-center justify-center bg-blue-500 h-[var(--triple-height)]">05</div>
        <div className="flex items-center justify-center bg-blue-600 h-[var(--triple-height)]">06</div>
        <div className="flex items-center justify-center bg-blue-700 h-[var(--custom-height)]">07</div>
        <div className="flex items-center justify-center bg-blue-800 h-[var(--custom-height)]">08</div>
        <div className="flex items-center justify-center bg-blue-900 h-[var(--custom-height)]">09</div>
      </div>
    </div>
    
  );
}
