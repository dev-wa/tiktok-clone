//
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Image from '@/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';

const cx = classNames.bind(styles);
function AccountPreview({ item: data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('name')}>
          <span>{data.first_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <p className={cx('username')}>{data.nickname}</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>2.4M </strong>
          <span className={cx('label')}>Follow</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
