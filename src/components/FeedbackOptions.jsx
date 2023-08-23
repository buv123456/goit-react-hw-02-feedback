import PropTypes from 'prop-types';
import { capitalCase } from 'capital-case';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <section className={css.wrap}>
      <h1>What do you think about our "EXpresso"?</h1>
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
    </section>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
