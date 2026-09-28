import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '인터랙티브 캠퍼스 홍보 웹서비스, "럭키솜(LuckySom)"',
      startedAt: '2025-06',
      endedAt: '2025-07',
      where: '가비아CNS 웹사이트 공모전 (최우수상 수상)',
      descriptions: [
        {
          content: 'React 기반 인터랙티브 캠퍼스 홍보 웹서비스 기획·풀스택 개발 총괄',
        },
        {
          content:
            '복잡한 질문 분기 처리 문제 → 완전 이진트리 기반 질문 흐름·결과 자동 매핑 로직 설계로 해결',
        },
        {
          content: '누적 방문자 13,000+명 달성',
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
      title: '게이미피케이션 기반 AI 투자 교육 플랫폼, "BRIFO"',
      startedAt: '2026-03',
      endedAt: '2026-08',
      where: 'UMC 10th DEMO DAY (우수상 수상)',
      descriptions: [
        {
          content: 'Kotlin·Spring Boot 기반 게이미피케이션 AI 투자 교육 플랫폼 기획·백엔드 개발',
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
            '뉴스·시세 수집 및 예측 정산 Spring Batch 파이프라인 설계, 한국투자증권(KIS)·네이버 뉴스검색 API 연동, QueryDSL 조회 쿼리 최적화',
        },
        {
          content: '서비스 URL',
          href: 'https://brifo.ai.kr/',
        },
        {
          content: 'Github Repository',
          href: 'https://github.com/Team-BRIFO',
        },
      ],
    },
    {
      title: '색 기반 걷기 루틴 생성 웹 서비스, "HueStep"',
      startedAt: '2025-10',
      endedAt: '2025-11',
      where: '동덕여자대학교 소프트웨어경진대회 (우수상 수상)',
      descriptions: [
        {
          content: 'React(TypeScript) 기반 색상 기록·시각화 웹서비스 기획·프론트엔드 개발 총괄',
        },
        {
          content:
            '화면마다 흩어진 상태 관리 로직 문제 → Context API + Service Layer로 일원화해 컴포넌트 재사용성 확보',
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
      title: '이공계 대학생을 위한 AI 튜터 서비스, "Proovy"',
      startedAt: '2026-01',
      endedAt: '2026-02',
      where: 'UMC 9th 최종 프로젝트',
      descriptions: [
        {
          content: 'Java·Spring Boot 기반 AI 튜터 웹서비스 백엔드 개발',
        },
        {
          content:
            'AI 응답 대기 시간 동안 체감 지연이 컸던 문제 → pgvector·Redis Queue 기반 임베딩 저장·검색 및 SSE 스트리밍 응답으로 개선',
        },
        {
          content:
            'AWS RDS·Redis·EC2 기반 인프라 아키텍처 설계 및 nginx 리버스 프록시·API 게이트웨이(/api, /ai 분기) 구성',
        },
        {
          content:
            '고정 서버 운영 구조의 비용 비효율 → Cloud Run·GCS 기반 서버리스 아키텍처로 전환해 비용 최적화',
        },
        {
          content:
            'OAuth2 소셜 로그인 3종 + JWT/Refresh Token 인증 시스템 구현, GitHub Actions 기반 자동 배포(CD) 파이프라인 및 Flyway 마이그레이션 구축',
        },
        {
          content: '서비스 URL',
          href: 'https://proovy.ai.kr/',
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
