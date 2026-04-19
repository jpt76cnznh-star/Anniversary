import { useEffect, useState } from "react";
import { Link } from "react-router";

const surpriseMessages = [
  "No matter how much time passes, my heart will always find its way back to you. ❤",
  "You are my favorite chapter, my softest feeling, and my sweetest forever. ✨",
  "If love had a name in my life, it would sound a lot like you, Boonoo. 💕",
  "You made my world warmer, prettier, and so much more beautiful just by being in it. 🌙",
  "After 4 years, I still look at you like the best thing that ever happened to me. 💖",
];

function getAnniversaryCountdown() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 4, 24, 15, 0, 29);

  if (now > target) {
    target = new Date(now.getFullYear() + 1, 4, 24, 15, 0, 29);
  }

  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export default function FinalSurprisePage() {
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(getAnniversaryCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getAnniversaryCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const revealMessage = () => {
    const random =
      surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    setMessage(random);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2b1538] via-[#4a214f] to-[#f78fb3] px-4 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-8 text-2xl opacity-30">✨</div>
        <div className="absolute top-28 right-10 text-3xl opacity-20">💖</div>
        <div className="absolute top-1/2 left-6 text-2xl opacity-25">🌙</div>
        <div className="absolute bottom-40 right-8 text-2xl opacity-25">✨</div>
        <div className="absolute bottom-24 left-10 text-3xl opacity-20">💗</div>
        <div className="absolute right-1/4 top-20 text-xl opacity-20">⭐</div>
      </div>

      <section className="relative z-10 mx-auto max-w-md">
        <div className="mb-8 text-center">
          <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-sm">
            Final Surprise ✨
          </p>

          <img
            src="/gifs/sparkles.gif"
            alt="Sparkles gif"
            className="mx-auto mb-4 h-20 w-20 object-contain"
          />

          <h1 className="mb-4 text-4xl font-bold leading-tight text-white">
            Happy 5 Years,
            <br />
            my Boonoo ❤
          </h1>

          <p className="text-base leading-7 text-white/80">
            And after all this time, if you asked me what my favorite part of
            life is, I’d still say you.
          </p>
        </div>

        <div className="mb-8 rounded-[28px] border border-white/20 bg-white/10 p-5 text-center shadow-xl backdrop-blur-md">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Time left for our anniversary ⏳
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/15 p-3">
              <p className="text-2xl font-bold text-white">{countdown.days}</p>
              <p className="text-xs text-white/70">Days</p>
            </div>

            <div className="rounded-2xl bg-white/15 p-3">
              <p className="text-2xl font-bold text-white">{countdown.hours}</p>
              <p className="text-xs text-white/70">Hours</p>
            </div>

            <div className="rounded-2xl bg-white/15 p-3">
              <p className="text-2xl font-bold text-white">{countdown.minutes}</p>
              <p className="text-xs text-white/70">Minutes</p>
            </div>

            <div className="rounded-2xl bg-white/15 p-3">
              <p className="text-2xl font-bold text-white">{countdown.seconds}</p>
              <p className="text-xs text-white/70">Seconds</p>
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4">
          <div className="overflow-hidden rounded-[26px] border border-white/20 bg-white/10 p-2 shadow-xl backdrop-blur-md">
            <img
              src="/images/final/final1.jpeg"
              alt="Final memory 1"
              className="h-64 w-full rounded-[18px] object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[24px] border border-white/20 bg-white/10 p-2 shadow-xl backdrop-blur-md">
              <img
                src="/images/final/final2.jpeg"
                alt="Final memory 2"
                className="h-44 w-full rounded-[16px] object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/20 bg-white/10 p-2 shadow-xl backdrop-blur-md">
              <img
                src="/images/final/final3.jpeg"
                alt="Final memory 3"
                className="h-44 w-full rounded-[16px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/20 bg-white/10 p-6 text-center shadow-xl backdrop-blur-md">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            One last little surprise
          </h2>

          <p className="mb-6 text-sm leading-7 text-white/80">
            Tap the heart and let me tell you one more thing I want you to know.
          </p>

          <button
            type="button"
            onClick={revealMessage}
            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-rose-500 text-3xl text-white shadow-lg shadow-rose-300 transition hover:scale-110 hover:bg-rose-600"
          >
            ❤
          </button>

          <div className="min-h-[120px] rounded-[22px] bg-white/15 px-5 py-5 backdrop-blur-sm">
           {message ? (
  <p className="text-sm leading-7 text-rose-900">{message}</p>
) : (
  <p className="text-sm leading-7 text-rose-800/70">
    Your surprise message will appear here, my love ✨
  </p>
)}
          </div>
        </div>

        <div className="mt-8 rounded-[28px] border border-white/20 bg-white/10 p-6 text-center shadow-xl backdrop-blur-md">
          <p className="text-[15px] leading-8 text-white/85">
            Thank you for these beautiful years.
            <br />
            Thank you for your love, your patience, your care, your softness,
            and every memory we’ve made together.
            <br />
            <br />
            You will always be one of the most precious parts of my heart.
            <br />
            And no matter how many anniversaries come, I know one thing for
            sure —
            <br />
            I will always love you.
          </p>

          <p className="mt-5 text-lg font-semibold text-rose-100">
            Forever yours, always. 💕
          </p>
        </div>

        <div className="mt-10 flex justify-between gap-3">
          <Link
            to="/letter"
            className="flex-1 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Back 💌
          </Link>

          <Link
            to="/"
            className="flex-1 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-rose-600 shadow-lg transition hover:scale-105"
          >
            Start Again ✨
          </Link>
        </div>
      </section>
    </main>
  );
}
