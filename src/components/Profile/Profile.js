import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png", username, tag, location, statsFollowers, statsViews, statsLikes}) {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={s.avatar}
                />
                <p className={s.name}>{username}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{statsFollowers}</span>
                </li>
                <li>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{statsViews}</span>
                </li>
                <li>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{statsLikes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    statsFollowers: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
    statsLikes: PropTypes.number.isRequired
}