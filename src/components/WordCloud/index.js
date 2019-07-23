import React from 'react';
import ReactWordcloud from 'react-wordcloud';

import words from './words';

class WordCloud extends React.Component {
  render() {
    return (
        <div style={{height: 400, width: 600}}>
            <ReactWordcloud words={words} />
        </div>
    );
  }
}

export default WordCloud