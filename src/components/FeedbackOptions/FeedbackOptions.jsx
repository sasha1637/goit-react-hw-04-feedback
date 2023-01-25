import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions/FeedbackOptions.styled';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button
      key={option}
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      {' '}
      {option}
    </Button>
  ));
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
