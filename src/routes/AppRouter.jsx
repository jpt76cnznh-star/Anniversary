import { Routes, Route } from "react-router";
import WelcomePage from "../pages/WelcomePage";
import OurStoryPage from "../pages/OurStoryPage";
import MemoryPage from "../pages/MemoryPage";
import ReasonsILoveYouPage from "../pages/ReasonsILoveYouPage";
import LoveLetterPage from "../pages/LoveLetterPage";
import FinalSurprisePage from "../pages/FinalSurprisePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/our-story" element={<OurStoryPage />} />
      <Route path="/memories" element={<MemoryPage />} />
      <Route path="/reasons" element={<ReasonsILoveYouPage />} />
      <Route path="/letter" element={<LoveLetterPage />} />
      <Route path="/final-surprise" element={<FinalSurprisePage />} />
    </Routes>
  );
}