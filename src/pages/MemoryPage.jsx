import { Link } from "react-router";

const memoryRows = [
  [
    {
      image: "/images/gallery/photo01.jpeg",
      caption: "A memory I never get tired of",
      rotate: "-rotate-6",
    },
    {
      image: "/images/gallery/photo02.jpeg",
      caption: "You and me, always my favorite",
      rotate: "rotate-3",
    },
    {
      image: "/images/gallery/photo03.jpeg",
      caption: "One of our cutest moments",
      rotate: "-rotate-3",
    },
  ],
  [
    {
      image: "/images/gallery/photo04.jpeg",
      caption: "My heart feels safe with you",
      rotate: "rotate-6",
    },
    {
      image: "/images/gallery/photo05.jpeg",
      caption: "A little piece of our story",
      rotate: "-rotate-2",
    },
    {
      image: "/images/gallery/photo06.jpeg",
      caption: "Still smiling because of you",
      rotate: "rotate-2",
    },
  ],
  [
    {
      image: "/images/gallery/photo07.jpeg",
      caption: "You make ordinary moments magical",
      rotate: "-rotate-6",
    },
    {
      image: "/images/gallery/photo08.jpeg",
      caption: "Forever one of my favorite pictures",
      rotate: "rotate-3",
    },
    {
      image: "/images/gallery/photo09.jpeg",
      caption: "My prettiest memory wall",
      rotate: "-rotate-3",
    },
  ],
  [
    {
      image: "/images/gallery/photo10.jpeg",
      caption: "Another little forever moment",
      rotate: "rotate-6",
    },
    {
      image: "/images/gallery/photo11.jpeg",
      caption: "A smile I’d choose every time",
      rotate: "-rotate-2",
    },
    {
      image: "/images/gallery/photo12.jpeg",
      caption: "One more reason I love us",
      rotate: "rotate-2",
    },
  ],
  [
    {
      image: "/images/gallery/photo13.jpeg",
      caption: "A memory full of warmth",
      rotate: "-rotate-6",
    },
    {
      image: "/images/gallery/photo14.jpeg",
      caption: "Still one of my happiest days",
      rotate: "rotate-3",
    },
    {
      image: "/images/gallery/photo15.jpeg",
      caption: "My heart looks happiest with you",
      rotate: "-rotate-3",
    },
  ],
  [
    {
      image: "/images/gallery/photo16.jpeg",
      caption: "A beautiful chapter of us",
      rotate: "rotate-6",
    },
    {
      image: "/images/gallery/photo17.jpeg",
      caption: "You make every picture softer",
      rotate: "-rotate-2",
    },
    {
      image: "/images/gallery/photo18.jpeg",
      caption: "The kind of moment I keep replaying",
      rotate: "rotate-2",
    },
  ],
  [
    {
      image: "/images/gallery/photo19.jpeg",
      caption: "One more memory to treasure",
      rotate: "-rotate-6",
    },
    {
      image: "/images/gallery/photo20.jpeg",
      caption: "And still, my favorite person",
      rotate: "rotate-3",
    },
  ],
];

export default function MemoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-orange-100 px-4 py-8">
      <section className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <p className="mb-3 inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-rose-500 shadow-sm">
            Our Memory Wall 📸
          </p>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-rose-600">
            The moments
            <br />
            I’ll always keep
          </h1>

          <p className="text-base leading-7 text-rose-900/70">
            If love had a wall full of memories, it would look a little like
            this — warm, soft, beautiful, and full of you.
          </p>
        </div>

        <div className="space-y-10">
          {memoryRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative pt-6">
              <div className="absolute left-0 right-0 top-2 h-[3px] rounded-full bg-amber-700/60" />

              <div className="grid grid-cols-1 gap-6">
                {row.map((photo, photoIndex) => (
                  <div
                    key={photoIndex}
                    className={`relative mx-auto w-[250px] ${photo.rotate} transition duration-300 hover:scale-105`}
                  >
                    <div className="absolute left-1/2 top-[-18px] z-20 h-6 w-7 -translate-x-1/2 rounded-sm bg-amber-200 shadow-md ring-1 ring-amber-300" />

                    <div className="rounded-[24px] bg-white p-3 shadow-xl shadow-rose-200/50">
                      <img
                        src={photo.image}
                        alt={photo.caption}
                        className="h-[260px] w-full rounded-[16px] object-cover"
                      />

                      <p className="pt-3 pb-1 text-center text-sm font-medium text-rose-500">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-between gap-3">
          <Link
            to="/our-story"
            className="flex-1 rounded-full border border-rose-300 bg-white/80 px-5 py-3 text-center text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
          >
            Back 💕
          </Link>

          <Link
            to="/reasons"
            className="flex-1 rounded-full bg-rose-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-rose-300 transition hover:scale-105 hover:bg-rose-600"
          >
            Next Page ✨
          </Link>
        </div>
      </section>
    </main>
  );
}