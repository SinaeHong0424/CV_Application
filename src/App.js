import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>CV Builder</h1>
          <p>Create and edit your professional resume</p>
        </header>
        
        <main>
          <GeneralInfo />
          <Education />
          <Experience />
        </main>
        
        <footer className="footer">
          <p>Fill out each section and click Submit to save your information</p>
        </footer>
      </div>
    </div>
  );
}

export default App;