import { useState } from "react";
import { Link } from "react-router";

const reasons = [
  "I love the way your smile makes everything feel lighter.",
  "I love how even ordinary moments feel special with you.",
  "I love your heart, your softness, and your warmth.",
  "I love how you make me feel safe without even trying.",
  "I love the little things you do that stay in my mind all day.",
  "I love how beautiful you are, inside and out.",
  "I love the way you’ve become such a big part of my life.",
  "I love how talking to you can fix my mood.",
  "I love that loving you feels natural, gentle, and real.",
  "I love that after all this time, it is still you.",
  "I love your eyes, your expressions, and all your little moods.",
  "I love the way you make my world feel warmer.",
];

function RevealCard({ reason, index }) {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left" type="button">
      <div className="relative overflow-hidden rounded-[24px] bg-white/85 shadow-lg shadow-rose-200/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        {!open ? (
          <div className="relative flex min-h-[140px] flex-col items-center justify-center px-6 py-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-100 to-fuchsia-100" />
            <div className="absolute -top-6 -right-4 text-5xl opacity-20">❤</div>
            <div className="absolute -bottom-6 -left-4 text-5xl opacity-20">💗</div>

            <div className="relative z-10">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-xl text-rose-500 shadow">
                🔒
              </div>
              <h2 className="text-xl font-semibold text-rose-600">
                Reason {index + 1}
              </h2>
              <p className="mt-2 text-sm text-rose-900/70">
                Tap to reveal my heart ✨
              </p>
            </div>
          </div>
        ) : (
          <div className="relative min-h-[140px] px-6 py-8">
            <div className="absolute inset-0 bg-white/95" />
            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-lg text-rose-500">
                  ❤
                </div>
                <h2 className="text-lg font-semibold text-rose-600">
                  Reason {index + 1}
                </h2>
              </div>

              <p className="text-sm leading-7 text-rose-900/70">{reason}</p>

              <p className="mt-4 text-xs font-medium text-rose-400">
                Tap again to close
              </p>
            </div>
          </div>
        )}
      </div>
    </button>
  );
}

export default function ReasonsILoveYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-fuchsia-50 via-rose-50 to-pink-100 px-4 py-8">
      <section className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <p className="mb-3 inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-rose-500 shadow-sm">
            Reasons I Love You 🌷
          </p>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-rose-600">
            Hidden little reasons
            <br />
            just for you
          </h1>

          <p className="text-base leading-7 text-rose-900/70">
            Tap each card and uncover a little piece of my heart, Boonoo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {reasons.map((reason, index) => (
            <RevealCard key={index} reason={reason} index={index} />
          ))}
        </div>

        <img
          src="/gifs/love-bear.gif"
          alt="Love gif"
          className="mx-auto mt-8 h-24 w-24 object-contain"
        />

        <div className="mt-10 flex justify-between gap-3">
          <Link
            to="/memories"
            className="flex-1 rounded-full border border-rose-300 bg-white/80 px-5 py-3 text-center text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
          >
            Back 📸
          </Link>

          <Link
            to="/letter"
            className="flex-1 rounded-full bg-rose-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-rose-300 transition hover:scale-105 hover:bg-rose-600"
          >
            Love Letter ✨
          </Link>
        </div>
      </section>
    </main>
  );
}