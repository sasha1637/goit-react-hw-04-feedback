import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
export function App() {
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  const options = Object.keys({ bad, good, neutral });
  const onGetFeedback = value => {
    switch (value) {
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <Section title={'Please leave Feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onGetFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
