import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ id, isOnline, avatar, name }) {
    return (
        <li key={id} className={s.item}>
            <span className={isOnline ? s.statusOnline : s.statusNotOnline}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
}