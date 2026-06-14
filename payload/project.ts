import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '색 기반 걷기 루틴 생성 웹 서비스, "HueStep" 개발',
      startedAt: '2025-10',
      endedAt: '2025-11',
      where: '동덕여자대학교 소프트웨어경진대회 (우수상 수상)',
      descriptions: [
        {
          content:
            'React(TypeScript) 기반 색상 기록·시각화 웹 서비스 기획·프론트엔드 개발 총괄 (팀장)',
        },
        {
          content:
            'Context API + Service Layer 구조 설계로 상태 관리 로직을 일원화하고 컴포넌트 재사용성 확보',
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
      title: '인터랙티브 캠퍼스 홍보 웹서비스, "럭키솜(LuckySom)" 개발',
      startedAt: '2025-06',
      endedAt: '2025-07',
      where: '가비아CNS 웹사이트 공모전 (최우수상(2등상) 수상)',
      descriptions: [
        {
          content: 'React 기반 인터랙티브 캠퍼스 홍보 웹서비스 기획·풀스택 개발 총괄 (팀장)',
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
      title: '이공계 대학생을 위한 AI 튜터 서비스, "Proovy" 개발',
      startedAt: '2026-01',
      endedAt: '2026-02',
      where: 'UMC 9th 최종 프로젝트',
      descriptions: [
        {
          content:
            'Spring Boot 기반 AI 튜터 백엔드 개발 — OAuth2 소셜 로그인 3종 + JWT/Refresh Token 인증 시스템 구현',
        },
        {
          content:
            'pgvector·Redis Queue 기반 AI 임베딩 저장·검색 및 SSE 스트리밍 응답 처리로 AI 응답 대기 경험 개선',
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
    {
      title: 'AI 트레이너 기반 러닝 헬스케어 서비스, "푸동푸동" 개발',
      startedAt: '2025-07',
      endedAt: '2025-08',
      where: 'K-html 해커톤 (본선 진출)',
      descriptions: [
        {
          content: '서비스 기획·UX 설계 및 React 프론트엔드 개발 총괄 (팀장)',
        },
        {
          content:
            'GPS 기반 이동거리·페이스 측정 로직과 Spring Boot API 연동으로 실시간 러닝 기록 기능 구현',
        },
        {
          content: 'Clova STT/TTS 기반 음성 AI 러닝 코칭 및 AI 영상 생성 기능 연동',
        },
        {
          content: 'Github Repository',
          href: 'https://github.com/orgs/Pureureum/repositories',
        },
      ],
    },
    {
      title: 'VR 기업의 교육 분야 진출 전략 수립을 위한 데이터 분석 프로젝트',
      startedAt: '2024-12',
      endedAt: '2025-02',
      where: '위아이티X데이터스테이션 프로젝트 (우수상 수상)',
      descriptions: [
        {
          content: 'Python 기반 데이터 전처리·시각화 및 상관분석(Pearson Correlation) 수행',
        },
        {
          content: 'K-means 클러스터링으로 VR 기기 보유자 특성·잠재 사용자층 세분화',
        },
        {
          content: '분석 결과 기반 VR 기업의 교육 시장 진출 전략 및 타겟 마케팅 방향 제안',
        },
        {
          content: 'Github Repository',
          href: 'https://github.com/gaeunee2/we_it12',
        },
      ],
    },
    {
      title: '시니어 맞춤 건강·정서 케어 앱, "할무이랑" 개발',
      startedAt: '2025-07',
      endedAt: '2025-08',
      where: '서울 우먼테크 해커톤 (본선 진출)',
      descriptions: [
        {
          content: '서울시 시니어 대상 Kotlin 기반 건강·정서 케어 앱 기획·개발 총괄 (팀장)',
        },
        {
          content:
            '시니어 친화형 UI 설계 및 날씨 API·Clova Voice 기반 음성 안내·정서 케어 기능 구현',
        },
        {
          content: 'Clova Voice 파라미터 튜닝으로 음성 안내 품질 개선',
        },
        {
          content: '시연 영상',
          href: 'https://www.youtube.com/shorts/Xe23hOafyhY',
        },
      ],
    },
  ],
};

export default project;
