import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'GaEun - Backend Developer';
const description = 'Java/Spring Boot 기반 백엔드 개발자.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'GaEun Backend Developer Resume',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'GaEun',
        lastName: 'Kim',
        username: 'gaeun',
        gender: 'female',
      },
    },
  },
};
