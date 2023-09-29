import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://avatars.githubusercontent.com/u/21592?s=64&v=4" alt="Name" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Van A Nguyen</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>vananguyen</span>
      </div>
    </div>
  );
}

export default AccountItem;
