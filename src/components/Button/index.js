import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Button = ({
  to,
  primary = false,
  small = false,
  large = false,
  outline = false,
  text = false,
  disabled = false,
  rounded = false,
  href,
  className,
  leftIcon,
  rightIcon,
  onClick,
  children,
  ...passProps
}) => {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when btn click
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

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};
export default Button;
