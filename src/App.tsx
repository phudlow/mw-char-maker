import { isMobileViewWidth } from "./utils/isMobileViewWidth";

function App() {
  return (
    <>
      <div>Morrowind Character Creation Tool</div>
      <div>Is Mobile?:{isMobileViewWidth() ? "mobile" : "desktop"}</div>
    </>
  );
}

export default App;
