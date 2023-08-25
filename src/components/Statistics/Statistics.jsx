import PropTypes from 'prop-types';
import { capitalCase } from 'capital-case';
import css from './Statistics.module.css';

export function Statistics({ entries, total, positivePercentage }) {
  const variant = parseInt(positivePercentage) > 50 ? 'bgGood' : 'bgBad';
  return (
    <div className={css[variant]}>
      <h2>Statistics</h2>
      <div className={css.feedWrap}>
        {entries.map(i => (
          <p key={i[0]} className={css.feed}>
            {capitalCase(i[0])}:<span className={css.span}>{i[1]}</span>
          </p>
        ))}
      </div>
      <div className={css.statWrap}>
        <p className={css.total}>
          Total feedbacks: <span className={css.span}>{total}</span>
        </p>
        <p className={css.positive}>
          Positive feedback:
          <span className={css.span}>{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
