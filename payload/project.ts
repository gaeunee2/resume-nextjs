import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '인터랙티브 캠퍼스 홍보 웹서비스, "럭키솜(LuckySom)" 프론트엔드',
      startedAt: '2025-06',
      endedAt: '2025-07',
      where: '가비아CNS 웹사이트 공모전 (최우수상(2등상) 수상)',
      descriptions: [
        {
          content: 'React 기반 인터랙티브 캠퍼스 홍보 웹서비스 기획·풀스택 개발 총괄',
        },
        {
          content:
            '완전 이진트리 기반 MBTI 질문 흐름·결과 자동 매핑 로직을 설계해 분기 처리 복잡도 해소',
        },
        {
          content: 'SNS·에브리타임 홍보 전략 실행으로 누적 방문자 11,000+ 달성',
        },
        {
          content: '서비스 URL',
          href: 'https://luckysom.clickn.co.kr/',
        },
        {
          content: 'Github Repository',
          href: 'https://github.com/gaeunee2/somragodong',
        },
      ],
    },
    {
      title: '색 기반 걷기 루틴 생성 웹 서비스, "HueStep" PM&프론트엔드',
      startedAt: '2025-10',
      endedAt: '2025-11',
      where: '동덕여자대학교 소프트웨어경진대회 (우수상 수상)',
      descriptions: [
        {
          content: 'React(TypeScript) 기반 색상 기록·시각화 웹 서비스 기획·프론트엔드 개발 총괄',
        },
        {
          content:
            '화면마다 흩어져 있던 상태 관리 로직을 Context API + Service Layer로 일원화해 컴포넌트 재사용성 확보',
        },
        {
          content: 'Firebase 인증·Firestore 연동 및 Recharts 통계·결과 공유 이미지 생성 기능 구현',
        },
        {
          content: '서비스 URL',
          href: 'https://huesteppori.github.io/HueStep-mobile/',
        },
        {
          content: 'Github Repository',
          href: 'https://github.com/HueStepPori/HueStep-mobile',
        },
      ],
    },
    {
      title: '게이미피케이션 기반 AI 투자 교육 플랫폼, BRIFO PM&백엔드',
      startedAt: '2026-03',
      endedAt: '2026-08',
      where: '10th UMC DEMO DAY (우수상 수상)',
      descriptions: [
        {
          content:
            'PM 및 백엔드 개발 총괄 — 기획서·기능명세서 작성, 뉴스·시세 수집 및 예측 정산 Spring Batch 파이프라인 설계',
        },
        {
          content:
            '다중 인스턴스 환경에서 KIS 토큰 발급 제한 초과 오류 발생 → Valkey 캐싱 + TTL 락 적용으로 해결',
        },
        {
          content:
            '종목 1건 실패로 종가 배치 전체가 롤백되는 문제 → 외부 API 호출을 트랜잭션 밖으로 분리하고 호출 간 스로틀링 적용으로 해결',
        },
        {
          content:
            '한국투자증권(KIS) Open API·네이버 뉴스검색 API 연동 및 QueryDSL 조회 쿼리 최적화',
        },
        {
          content: 'Github Repository',
          href: 'https://github.com/Team-BRIFO',
        },
      ],
    },
    {
      title: '이공계 대학생을 위한 AI 튜터 서비스, "Proovy" 개발',
      startedAt: '2026-01',
      endedAt: '2026-02',
      where: '9th UMC 최종 프로젝트',
      descriptions: [
        {
          content:
            'Spring Boot 기반 AI 튜터 백엔드 개발 — OAuth2 소셜 로그인 3종 + JWT/Refresh Token 인증 시스템 구현',
        },
        {
          content:
            'AI 응답 대기 시간 동안 체감 지연이 컸던 문제 → pgvector·Redis Queue 기반 임베딩 저장·검색 및 SSE 스트리밍 응답으로 개선',
        },
        {
          content:
            'GitHub Actions CI/CD 파이프라인 + Flyway 마이그레이션 구축으로 배포 자동화 및 스키마 정합성 확보',
        },
        {
          content: 'Github Repository',
          href: 'https://github.com/Team-Proovy/Proovy-server',
        },
      ],
    },
  ],
};

export default project;
