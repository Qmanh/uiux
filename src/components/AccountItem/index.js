import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { images1 } from '~/assets/images';

const cx = classNames.bind(styles);
const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src={images1.logo} alt="Hoaa" />

      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
};

export default AccountItem;
