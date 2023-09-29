import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  text = false,
  small = false,
  large = false,
  primary = false,
  outline = false,
  disabled = false,
  rounded = false,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...args
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...args,
  };
  // Remove event listen
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', { [className]: className, primary, outline, text, small, large, disabled, rounded });
  return (
    <Comp className={classes} {...props} disabled={disabled}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
