import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/crop_me.png';
import tistoryLogo from '../asset/tistory.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김가은',
    // small: '(Tux)',
  },
  contact: [
    {
      title: 'kaeune3@gmail.com',
      link: 'mailto:kaeune3@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/gaeunee2',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/gaeunee2',
      icon: faLinkedin,
    },
    {
      link: 'https://gaeunee.tistory.com/',
      image: tistoryLogo,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  notice: {
    title: '',
  },
};

export default profile;
