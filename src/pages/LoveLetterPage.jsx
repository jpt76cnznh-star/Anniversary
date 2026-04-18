import { useState } from "react";
import { Link } from "react-router";

export default function LoveLetterPage() {
  const [openLetter, setOpenLetter] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-200 via-pink-100 to-orange-50 px-4 py-8">
      <section className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <p className="mb-3 inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-rose-500 shadow-sm">
            My Love Letter 💌
          </p>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-rose-700">
            A letter
            <br />
            only for you
          </h1>

          <p className="text-base leading-7 text-rose-900/70">
            I hid a little piece of my heart inside this envelope, Boonoo.
          </p>
        </div>

        <div className="relative mx-auto mb-10 w-full max-w-sm">
          {!openLetter ? (
            <button
              type="button"
              onClick={() => setOpenLetter(true)}
              className="relative w-full rounded-[28px] border border-rose-200 bg-[#f9d8df] px-6 pb-8 pt-10 text-center shadow-xl shadow-rose-200/50"
            >
              <div className="absolute left-0 right-0 top-0 h-0 w-0 border-l-[170px] border-r-[170px] border-t-[120px] border-l-transparent border-r-transparent border-t-rose-300/90 sm:border-l-[190px] sm:border-r-[190px]" />

              <div className="relative z-10 mt-16">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/70 text-3xl text-rose-500 shadow-md">
                  ❤
                </div>

                <h2 className="mb-2 text-2xl font-semibold text-rose-700">
                  Open my letter
                </h2>

                <p className="text-sm leading-7 text-rose-900/70">
                  Tap the envelope and read what my heart wants to tell you.
                </p>
              </div>
            </button>
          ) : (
            <div className="relative rounded-[28px] border border-rose-200 bg-[#f9d8df] p-3 shadow-xl shadow-rose-200/50">
              <div className="rounded-[24px] bg-white px-5 py-6 shadow-inner">
                <div className="mb-4 text-center">
                  <p className="text-sm font-medium tracking-wide text-rose-400">
                    To my Boonoo
                  </p>
                </div>

                <p className="text-[15px] leading-8 text-rose-900/75">
                  My dearest Boonoo,
                  <br />
                  <br />
                  These four years with you have been the most beautiful part of
                  my life. From the first moment we met, something about you
                  stayed with me, and ever since then, my world has felt warmer,
                  softer, and so much more meaningful because you are in it.
                  <br />
                  <br />
                  Thank you for every smile, every little conversation, every
                  moment of comfort, every bit of love, and every memory we have
                  made together. You have become such a precious part of my
                  heart that I cannot imagine my life without you in it.
                  <br />
                  <br />
                  I love the way you make ordinary days feel special. I love the
                  way your presence brings peace to me. I love your smile, your
                  heart, your softness, and the way loving you feels like the
                  most natural thing in the world.
                  <br />
                  <br />
                  If I could choose again, I would still choose you. In every
                  version of life, in every chapter, in every season, I would
                  still want it to be you. Because after all this time, my heart
                  still looks at you the same way — with love, warmth, and
                  something that only grows deeper.
                  <br />
                  <br />
                  Happy 4 years, my Boonoo.
                  <br />
                  You will always be one of the best things that ever happened to
                  me.
                  <br />
                  <br />
                  Forever yours ❤
                </p>

                <button
                  type="button"
                  onClick={() => setOpenLetter(false)}
                  className="mt-6 w-full rounded-full border border-rose-300 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-500 transition hover:bg-rose-100"
                >
                  Close letter
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between gap-3">
          <Link
            to="/reasons"
            className="flex-1 rounded-full border border-rose-300 bg-white/80 px-5 py-3 text-center text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
          >
            Back 🌷
          </Link>

          <Link
            to="/final-surprise"
            className="flex-1 rounded-full bg-rose-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-rose-300 transition hover:scale-105 hover:bg-rose-700"
          >
            Final Surprise ✨
          </Link>
        </div>
      </section>
    </main>
  );
}