import { Link } from "react-router";

const storyMoments = [
  {
    title: "The beginning of us",
    text: "The day we first met became the beginning of something I never want to lose. It was the start of my favorite feeling, my favorite person, and my favorite love story.",
    image: "/images/story/story1.jpeg",
  },
  {
    title: "The little moments",
    text: "The late talks, the smiles, the teasing, the comfort, and all the small memories in between slowly became the most beautiful part of my life.",
    image: "/images/story/story2.jpeg",
  },
  {
    title: "Still you, always you",
    text: "Through time, changes, and everything life brings, one thing has stayed the same — how deeply I love you and how special you are to me.",
    image: "/images/story/story3.jpeg",
  },
];

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 via-rose-50 to-pink-100 px-5 py-10">
      <section className="mx-auto max-w-md">
        <div className="mb-10 text-center">
          <p className="mb-3 inline-block rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-rose-500 shadow-sm">
            Our Story 💕
          </p>

          <img
            src="/gifs/cute-cat.gif"
            alt="Cute gif"
            className="mx-auto mb-4 h-20 w-20 object-contain"
          />

          <h1 className="mb-4 text-4xl font-bold leading-tight text-rose-600">
            Every chapter
            <br />
            feels better with you
          </h1>

          <p className="text-base leading-7 text-rose-900/70">
            If someone asked me what love looks like, I’d think of us — of all
            the little memories that turned into something so precious.
          </p>
        </div>

        <div className="space-y-8">
          {storyMoments.map((moment, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] bg-white/80 shadow-lg shadow-rose-200/40"
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-5 text-left">
                <h2 className="mb-2 text-2xl font-semibold text-rose-600">
                  {moment.title}
                </h2>
                <p className="text-sm leading-7 text-rose-900/70">
                  {moment.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-between gap-3">
          <Link
            to="/"
            className="flex-1 rounded-full border border-rose-300 bg-white/80 px-5 py-3 text-center text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
          >
            Back ❤
          </Link>

          <Link
            to="/memories"
            className="flex-1 rounded-full bg-rose-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-rose-300 transition hover:scale-105 hover:bg-rose-600"
          >
            Memory Wall ✨
          </Link>
        </div>
      </section>
    </main>
  );
}