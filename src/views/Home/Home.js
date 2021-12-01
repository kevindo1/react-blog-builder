import React from 'react';
import { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('Title');
  const [subtitle, setSubtitle] = useState('Subtitle');
  const [font, setFont] = useState(`Architect's Daughter`);
  const [align, setAlign] = useState('');
  const [text, setText] = useState('Text');
  // add useState calls here for title, subtitle, font, align, and text

  return (
    <>
      <main className="home">
        {/* pass the state variables as props to the presentational components */}
        <Preview
          {...{
            title,
            setTitle,
            subtitle,
            setSubtitle,
            font,
            setFont,
            align,
            setAlign,
            text,
            setText,
          }}
        />
        <Editor
          {...{
            title,
            setTitle,
            subtitle,
            setSubtitle,
            font,
            setFont,
            align,
            setAlign,
            text,
            setText,
          }}
        />
      </main>
    </>
  );
}
