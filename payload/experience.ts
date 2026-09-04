import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '누아 (NUUA)',
      positions: [
        {
          title: '백엔드 개발 인턴',
          startedAt: '2026-08',
          descriptions: [
            'Kotlin·Spring Boot 기반 Aggregator 서버 개발',
            'Aggregator 레거시 코드 리팩토링',
            '항공사 연동 개발',
          ],
          skillKeywords: ['Kotlin', 'Spring Boot'],
        },
      ],
    },
  ],
};

export default experience;
