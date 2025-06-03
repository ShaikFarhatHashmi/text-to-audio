import React, { useState } from 'react';

export default function TextToSpeechApp() {
  const [text, setText] = useState('');

  const handleSpeak = () => {
    if (text.trim() === '') {
      alert("Please enter some text!");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1> Text to Speech</h1>
      <textarea
        placeholder="Type something here..."
        rows="5"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '1rem', fontSize: '1rem', marginBottom: '1rem' }}
      />
      <br />
      <button onClick={handleSpeak} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
        Read
      </button>
    </div>
  );
}
