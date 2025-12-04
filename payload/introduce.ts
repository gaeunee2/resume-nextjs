import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '끊임없는 개선과 꼼꼼한 검증을 기반으로 안정적인 서비스를 만드는 개발자 김가은입니다.',
    'Java/Spring Boot를 중심으로 MySQL, AWS, Firebase 환경에서 API 설계와 서버 구조를 구축해 왔으며, 문제 상황을 끝까지 추적해 원인을 파악하고 해결하는 과정에 강점을 가지고 있습니다.',
    '또한 Kotlin(Android)과 React 개발 경험을 통해 클라이언트 흐름을 이해하고 있어, 서비스 전반을 고려한 개발과 협업이 가능합니다.',
    '팀 프로젝트를 주도적으로 이끌며 협업을 통해 문제를 해결하는 것을 좋아하며, 단순히 동작하는 코드를 넘어 장기적으로 신뢰할 수 있는 시스템을 구축하는 것을 중요하게 생각합니다.',
    '지속 가능한 서비스 구조와 안정적인 시스템을 위해 지속적으로 학습하고 성장하는 백엔드 개발자로 나아가고자 합니다.',
  ],
  sign: 'KimGaEun',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
