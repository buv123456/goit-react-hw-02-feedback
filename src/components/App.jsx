import React, { Component } from 'react';
import css from './App.module.css';

import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = name => {
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((a, i) => a + i, 0);

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);

  render() {
    return (
      <div className={css.wrapper}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleOnClick}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            entries={Object.entries(this.state)}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet!" />
        )}
      </div>
    );
  }
}
