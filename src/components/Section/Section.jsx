import css from '../Section/Section.module.css';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section className={css.wrapper}>
      <div className={css.wrapFeedbackOption}>
        <h1>{title}</h1>
        {children[0]}
      </div>
      {children[1]}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
