import React, { PropTypes } from 'react';

export default class NewsList extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <ul className="news-list">
        <li>新闻标题新闻标题1</li>
        <li>新闻标题新闻标题2</li>
        <li>新闻标题新闻标题3</li>
        <li>新闻标题新闻标题4</li>
        <li>新闻标题新闻标题5</li>
      </ul>
    );
  }
}
