//

import classname from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '@/assets/images';
import {
  faEllipsisVertical,
  faEarthAsia,
  faQuestionCircle,
  faKeyboard,
  faUser,
  faCog,
  faDonate,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@/components/Popper';
import Button from '@/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '@/components/Icons';
import Image from '@/components/Image';
import Search from '../Search';

const cx = classname.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Languege',
      data: [
        {
          type: 'languege',
          code: 'en',
          title: 'English',
        },
        {
          type: 'languege',
          code: 'vi',
          title: 'Tiếng việt',
        },
        {
          type: 'languege',
          code: 'ja',
          title: 'Japan',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const currentUser = true;

  // Handle
  const handleMenuChange = (menu) => {
    switch (menu.type) {
      case 'languege':
        console.log(menu);
        break;

      default:
        console.log('default');
        break;
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '@vana',
    },
    {
      icon: <FontAwesomeIcon icon={faDonate} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faCog} />,
      title: 'Settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TópTóp" />
        </div>
        {/* Search */}
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon className={cx('action-icon')} />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon className={cx('action-icon')} />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon className={cx('action-icon')} />
                  <span className={cx('badge')}>20</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu data={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://avatars.githubusercontent.com/u/21592?s=64&v=4"
                className={cx('user-avatar')}
                alt="Nguyen"
                fallback="https://tinypng.com/images/example-orig.png"
              />
            ) : (
              <button className={cx('more-icon')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
