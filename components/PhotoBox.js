export default function PhotoBox() {
  return (
    <div className="flex mt-2 gap-1">
      {/* Large Photo (50% width) */}
      <div className="w-1/2 h-auto ">
        <img
          src="../images/sitting_area.webp"
          alt="Large Photo"
          className="w-full h-full rounded-l-lg"
        />
      </div>

      {/* Small Photos (50% width) */}
      <div className="w-1/4 h-full flex flex-col gap-1">
        <div className="w-full h-full">
          <img
            src="../images/table.webp"
            alt="Small Photo 1"
            className="w-full h-full"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="../images/sofa.webp"
            alt="Small Photo 2"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col gap-1">
        <div className="w-full h-full">
          <img
            src="../images/candles.webp"
            alt="Small Photo 3"
            className="w-full h-full rounded-tr-lg"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="../images/large_area.webp"
            alt="Small Photo 4"
            className="w-full h-full rounded-br-lg"
          />
        </div>
      </div>
    </div>
  );
}
