import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import AdditionalInformationForm from "./Pages/AdditionalInformationForm/AdditionalInformationForm";
import Profile from "./Pages/Profile/Profile";
import AddSubjectForm from "./Components/AddSubjectForm/AddSubjectForm";
import SubjectDetailPage from "./Pages/SubjectDetailsPage/SubjectDetailPage";
import NotesShow from "./Components/NotesShow/NotesShow";
import AssignmentsShow from "./Components/AssignmentsShow/AssignmentsShow";
import SolutionsShow from "./Components/SolutionsShow/SolutionsShow";
import OldQuestionsShow from "./Components/OldQuestionsShow/OldQuestionsShow";
import VideoNotesShow from "./Components/VideoNotesShow/VideoNotesShow";

function App() {
  const showNavBar = location.pathname !== "/Login" && location.pathname !== "/Signup";

  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.replace('/Home');
    }
  }, []);

  return (
    <>
      {showNavBar && <NavBar />}
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/AdditionalInformationForm" element={<AdditionalInformationForm />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AddSubjectForm" element={<AddSubjectForm />} />
          <Route path="/Subject/:SubjectId" element={<SubjectDetailPage />} />
          <Route path="/subject/:SubjectId/notes" element={<NotesShow />} />
          <Route path="/subject/:SubjectId/assignments" element={<AssignmentsShow />} />
          <Route path="/subject/:SubjectId/solutions" element={<SolutionsShow />} />
          <Route path="/subject/:SubjectId/old-questions" element={<OldQuestionsShow />} />
          <Route path="/subject/:SubjectId/video-notes" element={<VideoNotesShow />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;