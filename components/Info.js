export default function Info() {
  return (
    <div className="mt-4">
      <h1 className="text-black font-thin text-xl">
        Entire rental unit in Keflavík, Iceland
      </h1>
      <h3 className="text-black font-thin text-l">
        <p>4 guests &middot; 1 bedroom &middot; 2 beds &middot; 1 bath</p>
      </h3>
      <hr className="border-0 h-0.5 w-11/12 bg-gray-200 my-2" />
      <div className="flex">
        <div className=" flex h-12 w-12 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-md font-bold">Self check-in</p>
          <p className="text-md">Check yourself in with the lockbox.</p>
        </div>
      </div>

      <div className="flex">
        <div className=" flex h-12 w-12 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-md font-bold">Park for free</p>
          <p className="text-md">
            This is one of the few places in the area with free parking.
          </p>
        </div>
      </div>
      <hr className="border-0 h-0.5 w-11/12 bg-gray-200 my-2" />
      <div className="mt-2">
        <h1 className="text-xl font-bold mb-1 ">About this space</h1>{" "}
        <p>
          Renting this place means becoming a part of the inspiring story that
          Elín and Ljósbrá have crafted. They discovered an old fishing house,
          transformed it into a gym and yoga studio. Seeking new adventure, they
          newly renovated it into a stunning apartment. By staying here, you not
          only enjoy the luxury and beauty but also become connected to their
          journey. The appartment offers a serene and upscale environment where
          one can unwind, recharge, and escape the hustle and bustle of daily
          life.
        </p>
        <h2 className="text-md font-bold mt-1">The space</h2>
        <p className="mt-1">
          The Apartment comes with a fully equipped kitchen, dining area and
          seating area with stunning ocean view. The apartment has a home gym
          area. The apartment's previous origins as a gym reflect Elin and
          Ljosbra's commitment to fitness and well-being. This provides an added
          incentive for renters who prioritize their health. You can enjoy the
          convenience of maintaining your exercise routine while being immersed
          in the tranquil ocean views, creating a holistic experience for both
          mind and body.
        </p>
        <h2 className="text-md font-bold mt-1">Guest access</h2>
        <p className="mt-1">
          Having the place all to yourself is a truly unmatched experience.
          Imagine stepping into this stunning apartment, surrounded by
          breathtaking ocean views, and knowing that it's exclusively yours to
          enjoy. It has its own entrance with a key box for easy check-in and
          check-out.
        </p>
        <h2 className="text-md font-bold mt-1">Other things to note</h2>
        <p className="mt-1 mb-4">
          Close to airport and only 15 minutes drive to the Blue Lagoon.
          Shopping center is in walking distance and only 10 minutes walk to
          down town Keflavík. Only 40 minutes drive to the capital region.
        </p>
      </div>
    </div>
  );
}
