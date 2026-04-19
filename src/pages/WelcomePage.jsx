import { Link } from "react-router";
import { useEffect, useState } from "react";

function getTogetherTime() {
  const startDate = new Date(2021, 4, 24, 15, 0, 29);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffMs = now - startDate;
  const totalSeconds = Math.floor(diffMs / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;

  return { years, months, days, minutes, seconds };
}

export default function WelcomePage() {
  const [timeTogether, setTimeTogether] = useState(getTogetherTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeTogether(getTogetherTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-100 via-pink-50 to-orange-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-6 text-3xl opacity-30 animate-pulse">❤</div>
        <div className="absolute top-32 right-10 text-2xl opacity-20 animate-bounce">💗</div>
        <div className="absolute bottom-28 left-10 text-2xl opacity-20 animate-pulse">✨</div>
        <div className="absolute bottom-40 right-8 text-3xl opacity-25 animate-bounce">💖</div>
        <div className="absolute top-1/2 left-4 text-2xl opacity-20 animate-pulse">🌸</div>
        <div className="absolute top-20 right-1/4 text-2xl opacity-20 animate-bounce">💕</div>
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-5 py-10 text-center">
        <p className="mb-4 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-rose-500 shadow-sm">
          5 years of us • For my Boonoo
        </p>

        <img
          src="/gifs/hearts.gif"
          alt="Hearts gif"
          className="mb-4 h-20 w-20 object-contain"
        />

        <div className="mb-6 overflow-hidden rounded-[28px] bg-white p-2 shadow-xl shadow-rose-200/50">
          <img
            src="/images/welcome/first-meet.jpeg"
            alt="Our first meet"
            className="h-[320px] w-[260px] rounded-[22px] object-cover sm:h-[360px] sm:w-[280px]"
          />
        </div>

        <h1 className="mb-4 text-4xl font-bold leading-tight text-rose-600">
          Happy 5 Years,
          <br />
          my Boonoo ❤
        </h1>

        <p className="mb-6 max-w-sm text-base leading-7 text-rose-900/70">
          From the day we first met to every beautiful moment after that, you
          have made my life softer, warmer, and full of love.
        </p>

        <div className="mb-8 w-full rounded-[24px] bg-white/80 p-5 shadow-lg shadow-rose-200/40">
          <h2 className="mb-4 text-xl font-semibold text-rose-600">
            We have been together for ✨
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-rose-50 p-3">
              <p className="text-2xl font-bold text-rose-600">{timeTogether.years}</p>
              <p className="text-xs text-rose-500">Years</p>
            </div>

            <div className="rounded-2xl bg-rose-50 p-3">
              <p className="text-2xl font-bold text-rose-600">{timeTogether.months}</p>
              <p className="text-xs text-rose-500">Months</p>
            </div>

            <div className="rounded-2xl bg-rose-50 p-3">
              <p className="text-2xl font-bold text-rose-600">{timeTogether.days}</p>
              <p className="text-xs text-rose-500">Days</p>
            </div>

            <div className="rounded-2xl bg-rose-50 p-3">
              <p className="text-2xl font-bold text-rose-600">{timeTogether.minutes}</p>
              <p className="text-xs text-rose-500">Minutes</p>
            </div>

            <div className="col-span-2 rounded-2xl bg-rose-100 p-3">
              <p className="text-2xl font-bold text-rose-600">{timeTogether.seconds}</p>
              <p className="text-xs text-rose-500">Seconds</p>
            </div>
          </div>
        </div>

        <Link
          to="/our-story"
          className="rounded-full bg-rose-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-rose-300 transition hover:scale-105 hover:bg-rose-600"
        >
          Start Our Story ✨
        </Link>
      </section>
    </main>
  );
}
