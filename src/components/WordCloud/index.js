import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import words from './words';

class WordCloud extends React.Component {
  render() {
    return (
        <div style={{height: 700, width: 1000}}>
            <ReactWordcloud words={words} />
        </div>
    );
  }
}

export default WordCloud