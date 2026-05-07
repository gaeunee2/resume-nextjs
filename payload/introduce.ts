import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '문제의 원인을 끝까지 추적하고, 안정적으로 동작하는 시스템을 만드는 것을 중요하게 생각하는 백엔드 개발자 김가은입니다.',
    'Java/Spring Boot 기반으로 REST API 설계, 인증 시스템 구축, 데이터베이스 설계 및 AWS 인프라 배포를 경험했으며, PostgreSQL·Redis·JPA·Flyway 등을 활용해 실제 서비스 개발과 운영 환경을 구축해왔습니다.',
    'GitHub Actions 기반 CI/CD 자동화, EC2·RDS·S3 환경 구성 등 DevOps 영역에도 적극적으로 참여하며 서비스 아키텍처를 직접 설계하고 개선해왔습니다.',
    '또한 React(TypeScript)와 Kotlin(Android) 개발 경험을 바탕으로 프론트엔드와 클라이언트 흐름까지 함께 고려하며 협업할 수 있습니다.',
    '팀 프로젝트에서 팀장 및 백엔드 개발 역할을 맡아 기획·개발·배포·협업 구조 설계까지 주도적으로 수행했으며, 단순 기능 구현을 넘어 유지보수성과 확장성을 고려한 개발을 지향합니다.',
    '새로운 기술을 빠르게 학습하고 실제 프로젝트에 적용하는 과정을 즐기며, 사용자에게 신뢰할 수 있는 서비스를 제공하는 개발자로 성장하고자 합니다.',
  ],
  sign: 'KimGaEun',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
