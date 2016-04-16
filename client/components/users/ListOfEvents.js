import React from 'react';
import { Link } from 'react-router';
import Event from './Event.js';

require('./../../styles/styles.css');

export default class ListOfEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      events
    } = this.props;
    return (
      <div className="list-events">
        <h2 className="events-title">My Events</h2>
        <Link to='/events/abc' onClick={$(".button-collapse").sideNav('hide')} className="list-item">Test</Link>
        { events.map((event, index) => <Event key={index} event={event} />) }
      </div>
    )
  }
};