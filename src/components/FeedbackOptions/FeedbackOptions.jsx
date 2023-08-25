import PropTypes from 'prop-types';
import { capitalCase } from 'capital-case';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.btnWrap}>
      {options.map(i => {
        const variant = 'btn' + capitalCase(i);
        return (
          <button
            key={'btn_' + i}
            type="button"
            onClick={() => onLeaveFeedback(i)}
            className={css[variant]}
          >
            {capitalCase(i)}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
