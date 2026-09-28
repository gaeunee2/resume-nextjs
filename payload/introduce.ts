import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '문제의 원인을 끝까지 추적해 안정적으로 동작하는 시스템을 만드는 백엔드 개발자 김가은입니다.',
    'Java/Spring Boot 기반 REST API·인증 시스템 설계부터 AWS 인프라 배포, CI/CD 자동화까지 End-to-End로 경험했습니다.',
    '팀장·PM으로서 기획부터 개발·배포까지 주도한 경험을 바탕으로, 유지보수성과 확장성을 고려한 설계를 지향합니다.',
    '새로운 기술을 빠르게 학습해 실제 프로젝트에 적용하며, 신뢰할 수 있는 서비스를 만드는 개발자로 성장하고 있습니다.',
  ],
  sign: 'KimGaEun',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
