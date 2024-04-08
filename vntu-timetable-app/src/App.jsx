import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroupPage from "./pages/GroupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exec element={<h1>There it goes!</h1>} />
        <Route path="/group/:groupId" element={<GroupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
