import AppRouter from "./routes/AppRouter";
import MusicPlayer from "./components/common/MusicPlayer";

export default function App() {
  return (
    <>
      <AppRouter />
      <MusicPlayer />
    </>
  );
}