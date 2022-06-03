import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({friends}) {
    return (
        <div className={s.container}>
            <ul className={s.friendList}>
                {friends.map(friend =>
                    <FriendListItem
                        id={friend.id}
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                    />
                )}
            </ul>
        </div>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array
}