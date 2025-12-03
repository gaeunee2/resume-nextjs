import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '끊임없는 개선과 꼼꼼한 검증을 통해 안정적인 서비스를 만드는 개발자, 김가은입니다.',
    'Java/Spring Boot 기반 서버 개발을 중심으로 MySQL·AWS·Firebase 환경에서 API 설계와 데이터 흐름 구조를 설계해 왔으며, 문제를 끝까지 파고드는 집요함으로 장애 원인 분석과 성능 개선에 강점을 가지고 있습니다.',
    'React와 Kotlin(Android) 개발 경험을 통해 프론트엔드와 클라이언트 흐름까지 이해하고 있어, 전체 서비스 구조를 고려한 개발과 협업이 가능합니다.',
    '팀 프로젝트에서는 일정·요구사항 정리부터 기술 리딩까지 맡아 책임감 있게 마무리하며, “작동하는 것”보다 “지속 가능하고 관리 가능한 시스템”을 만드는 것을 목표로 합니다.',
    '데이터 흐름과 서버 안정성을 누구보다 중요하게 생각하며, 신뢰할 수 있는 백엔드 시스템을 구축하는 개발자로 성장하고 있습니다.',
  ],
  sign: 'KimGaEun',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
