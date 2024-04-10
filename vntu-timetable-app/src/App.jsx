import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroupPage from "./pages/GroupPage";
import RootPage from "./pages/RootPage";

function App() {
  return (
    <BrowserRouter basename="/VntuTimetableSite">
      <Routes>
        <Route path="/" exec element={<RootPage />} />
        <Route path="/:facultyId/:groupId" element={<GroupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
