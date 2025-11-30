import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '끊임없는 배움과 개선을 통해 성장하는 개발자, 김가은입니다.',
    '실패와 시행착오를 가장 값진 배움의 과정으로 여기며, 완벽보다 개선을 중시하는 문제 해결 방식을 가지고 있습니다.',
    'Java·Spring Boot·Kotlin·MySQL·AWS 기반의 서버 개발 경험과 React·Firebase를 활용한 프론트엔드 개발 경험을 바탕으로, 기획부터 구현까지 전체 흐름을 이해하는 개발자로 성장하고 있습니다.',
    '팀 프로젝트에서는 기획과 기술 리딩을 맡아 협업 구조를 설계하고, 어려운 기술도 끝까지 파고들어 해결하는 집요함을 강점으로 합니다.',
    '데이터 흐름을 이해하는 백엔드 개발자로서, 핵심 시스템을 안정적이고 신뢰성 있게 구축하는 개발자를 목표로 하고 있습니다.',
  ],
  sign: 'GaEun',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
