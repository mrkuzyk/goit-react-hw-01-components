import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({friends}) {
    return (
        <div className={s.container}>
            <ul className={s.friendList}>
                {friends.map(friend =>
                    <li key={friend.id} className={s.item}>
                        <span className={friend.isOnline ? s.statusOnline : s.statusNotOnline}></span>
                        <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p className={s.name}>{friend.name}</p>
                    </li>
                )}
            </ul>
        </div>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )
}