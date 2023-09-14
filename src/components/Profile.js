import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import PopupModal from './PopupModal';

import classNames from 'classnames/bind';
import style from '../css/Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const Profile = () => {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
      setModal(!modal)
  }

  return (
    <div>
      <Header header={"Profile"} onClick={toggleModal} />
      <div className={cx('content')}>
        <img src={require('../images/avt.jpg')} alt="avatar" 
            className={cx("rounded-circle")}  
            width={100}
        /> 
        <p className={cx("card-name")}>Nguyễn Mạnh Tiến</p>

        <div className={cx("contact")}>
          <div>
            <FontAwesomeIcon icon={faEnvelope} /> 
            <p>tiennguyenmanh131202@gmail.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <p>0378057198</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Hà Nội</p>
          </div>
        </div>

        <div className={cx("social-media")}>
          <Link to={"https://www.facebook.com/profile.php?id=100013382346108"}>
            <div className={"rounded-circle"}><FontAwesomeIcon icon={faFacebook} /></div>
          </Link>
          <Link to={"https://www.instagram.com/nmtien_1312/"}>
            <div className={cx("rounded-circle")}><FontAwesomeIcon icon={faInstagram} /></div>
          </Link>
          <Link to={"https://twitter.com/NMT1312"}>
            <div className={cx("rounded-circle")}><FontAwesomeIcon icon={faTwitter} /></div>
          </Link>
          <Link to={"https://github.com/manhtien1312"}>
            <div className={cx("rounded-circle")}><FontAwesomeIcon icon={faGithub} /></div>
          </Link>
        </div>

      </div>

      {
        modal &&
        <PopupModal content={<SideBar />} onClick={toggleModal} />
      }
    </div>
  );
};

export default Profile;