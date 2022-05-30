import PropTypes from 'prop-types';
import s from './Profile.module.css';
// console.log(user);

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
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    statsFollowers: PropTypes.number,
    statsViews: PropTypes.number,
    statsLikes: PropTypes.number
}