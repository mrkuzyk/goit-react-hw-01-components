import PropTypes from 'prop-types';
import s from './Statistics.module.css'

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            <div className={s.div}>
                {title && <h2 className={s.title}>{title}</h2>}

                <ul  className={s.statList}>
                    {stats.map(el =>
                        <li key={el.id} className={s.item}>
                            <span className={s.label}>{el.label}</span>
                            <span className={s.percentage}>{el.percentage}%</span>
                        </li>
                )}
                </ul>
            </div>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
};