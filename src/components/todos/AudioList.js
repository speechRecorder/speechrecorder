import React from 'react';
import AudioSummary from './AudioSummary';


export default function AudioList() {
  return (
    <div className="audio-list section">
      <AudioSummary />
      <AudioSummary />
      <AudioSummary />
    </div>
  );
}
