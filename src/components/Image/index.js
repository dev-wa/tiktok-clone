import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import images from '@/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, className, fallback: isFallback = images.noImage, alt, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(isFallback);
  };

  return (
    <img
      className={cx('wrapper', className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
