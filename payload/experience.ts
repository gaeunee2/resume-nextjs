import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: true,
  disableTotalPeriod: false,
  list: [
    {
      title: 'EXEM',
      positions: [
        {
          title: '백엔드 개발자 (Backend Lead 역할 수행)',
          startedAt: '2023-06',
          descriptions: [
            'DPM, APM 통합 관리 시스템 인터맥스 설계 및 구현',
            'Kafka, ClickHouse, gRPC 기반 분산 데이터 파이프라인 구축',
            '10만 TPS 고부하 환경 대응 Kafka KRaft 클러스터 구축 및 토픽별 파티션 분할 스케일아웃 아키텍처 설계',
            'ClickHouse 클러스터링 및 레플리카 구성을 통한 고가용성(HA) 지원 및 무중단 서비스 운영 시스템 구현',
          ],
          skillKeywords: [
            'Java',
            'Protobuf',
            'gRPC',
            'ClickHouse',
            'PostgreSQL',
            'Kafka',
            'Redis',
            'Spring Boot',
          ],
        },
      ],
    },
    {
      title: '코그콤',
      positions: [
        {
          title: '데이터 엔지니어(학부 인턴)',
          startedAt: '2021-07',
          endedAt: '2021-09',
          descriptions: [
            '데이터 클러스터링 분석 기반 이커머스 데이터 비동기 수집 및 전처리 구현',
            'Crontab 기반 자동 데이터 갱신 시스템 구축 및 MongoDB-RDBMS 통합 데이터 포맷 관리',
            '데이터베이스 연동 및 DB 서버 운영 관리',
          ],
          skillKeywords: ['Linux', 'Python', 'PostgreSQL', 'Django', 'mongoDB', 'AWS'],
        },
      ],
    },
  ],
};

export default experience;
