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
            'React(TypeScript) 기반 색상 기록·시각화 웹 서비스 기획 및 프론트엔드 개발 (팀장)',
        },
        {
          content: '사용자별 컬러·걸음 데이터를 시각화하여 감정 기반 걷기 경험 제공',
        },
        {
          content: 'Firebase 기반 인증 및 Firestore 데이터 구조 설계·연동 로직 구현',
        },
        {
          content: 'Recharts 기반 통계·캘린더 페이지 및 결과 공유 이미지 생성 기능 개발',
        },
        {
          content: '프로젝트 구조 설계(Context API + Service Layer) 및 GitHub 기반 협업 리딩',
        },
        {
          content: 'GitHub Actions 기반 자동 배포 구축',
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
      where: '가비아CNS 웹사이트 공모전 (우수상 수상)',
      descriptions: [
        {
          content: 'React 기반 인터랙티브 캠퍼스 홍보 웹서비스 기획 및 full-stack 개발 (팀장)',
        },
        {
          content:
            'MBTI 검사 기능을 위한 완전 이진트리 기반 질문 흐름 구조 및 결과 자동 매핑 로직 구현',
        },
        {
          content: 'TypeScript 기반 랜덤 운세 기능 및 사용자 참여형 인터랙션 UI 개발',
        },
        {
          content: 'Render 기반 프론트·백엔드 분리 배포 환경 및 서비스 운영 구조 구축',
        },
        {
          content: 'SNS·에브리타임 홍보를 통해 누적 방문자 수 11,000+ 기록',
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
          content: 'Spring Boot 기반 AI 튜터 서비스 백엔드 및 AI 기능 개발 참여',
        },
        {
          content:
            'Google·Kakao·Naver OAuth2 소셜 로그인 및 JWT 인증/Refresh Token 기반 인증 시스템 구현',
        },
        {
          content: 'PostgreSQL·Redis·JPA 연동 및 AWS RDS/EC2 기반 서버 배포 환경 구축',
        },
        {
          content: 'GitHub Actions 기반 CI/CD 자동 배포 파이프라인 구축 및 운영',
        },
        {
          content: 'Flyway 기반 DB 마이그레이션 및 스키마 정합성 관리, 운영 환경 안정화 작업 수행',
        },
        {
          content: '노트 생성·검색·대화 저장·크레딧·스토리지 관련 REST API 설계 및 구현',
        },
        {
          content: 'pgvector·Redis Queue 기반 AI 임베딩 저장 및 검색 기능 구현',
        },
        {
          content: 'SSE 기반 AI 스트리밍 응답 처리 및 AI 서버 연동 로직 개선',
        },
        {
          content: 'S3 Presigned URL·썸네일 생성·스토리지 용량 관리 등 파일 스토리지 기능 개발',
        },
        {
          content: 'Swagger/OpenAPI 기반 API 명세 문서 작성 및 팀 협업 환경 개선',
        },
        {
          content:
            '프로젝트 초기 세팅·패키지 구조 설계·배포 워크플로우 개선 등 백엔드 인프라 전반에 적극 참여',
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
          content: '서비스 기획, UX 설계 및 React 기반 프론트엔드 개발 담당 (팀장)',
        },
        {
          content: 'QR 스캔·러닝 세션·운동 결과·캘린더 등 러닝 기록 기반 UI 구현',
        },
        {
          content: 'GPS 기반 이동 거리·페이스 측정 및 Spring Boot API 연동 로직 개발',
        },
        {
          content: 'Clova STT/TTS 기반 음성 AI 러닝 코칭 및 AI 영상 생성 기능 연동',
        },
        {
          content: 'Firebase Authentication 기반 Google·Kakao 소셜 로그인 구현',
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
          content: 'VR 교육 효과 해외 사례 기반 데이터 분석 프로젝트 기획 및 발표 진행',
        },
        {
          content: 'Python 기반 데이터 전처리·시각화 및 상관분석(Pearson Correlation) 수행',
        },
        {
          content: 'Histogram/KDE 분석을 통해 VR 교육 점수별 미래 관심도 분포 분석',
        },
        {
          content: 'K-means Clustering 기반 VR 기기 보유자 특성 및 잠재 사용자층 분석',
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
          content: '서울시 시니어 대상 Kotlin 기반 건강·정서 케어 앱 기획 및 개발 (팀장)',
        },
        {
          content: '날씨 API·Clova Voice API 기반 음성 안내 및 정서 케어 기능 구현',
        },
        {
          content: '홈·시 낭송·운동·건강·날씨 알림 등 시니어 친화형 UI 설계',
        },
        {
          content: 'Firebase Authentication 기반 사용자 인증 및 상태 관리 로직 구현',
        },
        {
          content: 'GitHub·Notion 기반 협업 구조 설계 및 코드 리뷰·환경 세팅 가이드 운영',
        },
        {
          content: 'Clova Voice API 파라미터 튜닝을 통한 음성 품질 개선',
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
