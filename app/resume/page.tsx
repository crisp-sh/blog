// /pages/resume.js
import React from 'react';

const Resume = () => {
  return (
    <iframe
      src="/resume.pdf"
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="Resume"
    />
  );
};

export default Resume;