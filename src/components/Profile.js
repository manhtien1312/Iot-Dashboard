import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import PopupModal from './PopupModal';

import classNames from 'classnames/bind';
import style from '../css/Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(style);

const Profile = () => {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
      setModal(!modal)
  }

  return (
    <div>
      <Header header={"Dashboard"} onClick={toggleModal} />
      <div className={cx('content')}>
      <div class="container mt-5">
    
        <div class="row d-flex justify-content-center">
            
            <div class="col-md-7">
                
                <div class="card p-3 py-4">
                    
                    <div class="text-center">
                        <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle" />
                    </div>
                    
                    <div class="text-center mt-3">
                        <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                        <h5 class="mt-2 mb-0">Alexender Schidmt</h5>
                        <span>UI/UX Designer</span>
                        
                        <div class="px-4 mt-1">
                            <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        
                        </div>
                        
                        <ul class="social-list">
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                            <li><FontAwesomeIcon icon={faGithub} /></li>
                        </ul>
                        
                        
                    </div>
                    
                  
                    
                    
                </div>
                
            </div>
            
        </div>
        
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