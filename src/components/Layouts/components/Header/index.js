//

import classname from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '@/assets/images';
import { faTimesCircle, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';
const cx = classname.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TópTóp" />
        </div>
        <div className={cx('search')}>
          <input placeholder="Search account and videos" spellCheck={false} />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
