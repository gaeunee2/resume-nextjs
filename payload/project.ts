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
            'React(TypeScript) 기반의 색상 기록·시각화 웹 서비스 기획 및 프론트엔드 구현 (팀장)',
        },
        {
          content: 'Firebase Authentication을 활용한 이메일/비밀번호·Google 소셜 로그인 기능 구현',
        },
        {
          content:
            'Firestore 기반 사용자별 색상 기록·걸음수 기록·팔레트 데이터 구조 설계 및 연동 로직 구현',
        },
        {
          content:
            'Radix UI·Tailwind·Recharts를 활용한 UI 컴포넌트·데이터 시각화 및 캘린더/통계 페이지 개발',
        },
        {
          content: 'html2canvas 기반 결과 공유 이미지 생성 기능 개발(컬러 팔레트·문구 자동 생성)',
        },
        {
          content:
            '프로젝트 구조 설계(Context API + Service Layer) 및 팀 협업 리딩, GitHub 기반 일정 관리 담당',
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
          content:
            'React 기반 인터랙티브 캠퍼스 홍보 웹사이트 기획 및 full-stack 개발, 배포 담당 (팀장)',
        },
        {
          content:
            '클릭엔(Clicken) 툴 제약 내에서 2개의 독립 프로젝트를 구성하여 기능별 서비스 모듈화 후 통합 운영',
        },
        {
          content:
            'MBTI 검사 기능을 DB 없이 구현하기 위해 완전 이진 트리 기반 질문 흐름 구조 설계 및 16가지 결과 페이지 자동 매핑 구조 구현',
        },
        {
          content:
            '운세뽑기(솜라고동) 기능 UI를 TypeScript로 커스텀 구성하고 다양한 확률 요소를 고려한 랜덤 로직 설계',
        },
        {
          content: 'Render 기반 간단한 백엔드 구성 후 배포 파이프라인 구축 (프론트·서버 분리 배포)',
        },
        {
          content: 'SNS·에브리타임·지인 공유를 통한 홍보를 진행하여 총 방문자 수 11,000+ 기록',
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
      title: 'AI 트레이너가 함께 러닝을 도와주는 헬스케어 서비스, "푸동푸동" 개발',
      startedAt: '2025-07',
      endedAt: '2025-08',
      where: 'K-html 해커톤 (본선 진출)',
      descriptions: [
        {
          content: '서비스 기획, 전체 UX 흐름 설계, 프론트엔드 개발 담당 (팀장)',
        },
        {
          content:
            'React 기반 웹 프론트엔드 개발 담당 — QR 스캔, 러닝 세션 설정·진행 UI, 운동 결과·캘린더·컬렉션 페이지 구현',
        },
        {
          content: 'Firebase Authentication을 이용한 Google, Kakao 소셜 로그인 기능 구현',
        },
        {
          content: 'GPS 기반 이동 거리·페이스 측정 및 SpringBoot API 연동 로직 개발',
        },
        {
          content: 'Clova STT/TTS API 연동을 통한 음성 기반 AI 러닝 코칭 기능 UI 구축',
        },
        {
          content: '러닝 기록 기반 AI 영상 생성 기능 UI 구현 및 백엔드 API 연동',
        },
        {
          content: 'Github Repository',
          href: 'https://github.com/orgs/Pureureum/repositories',
        },
      ],
    },
    {
      title:
        '해외 사례 기반 교육 효과 검증을 통한 VR 기업의 교육 분야 진출을 위한 차별화 전략 수립',
      startedAt: '2024-12',
      endedAt: '2025-02',
      where: '동아리 프로젝트 및 공모전 (우수상 수상)',
      descriptions: [
        {
          content:
            '프로젝트 주제 제안 및 전체 연구 방향 설정 — VR 교육 효과 해외 사례 기반 데이터 분석 기획',
        },
        {
          content: '해외 연구·논문 기반 데이터셋 구성 및 Python을 활용한 데이터 전처리 수행',
        },
        {
          content: 'Histogram/KDE 분석을 통한 VR 교육 점수별 미래 관심도 분포 분석',
        },
        {
          content:
            '피어슨 상관분석(Pearson Correlation)을 활용해 이용 의도·이용 빈도 간 상관관계 탐색',
        },
        {
          content: 'K-means Clustering을 이용하여 VR 기기 보유자 특성 및 군집 패턴 분석',
        },
        {
          content: '분석 결과 기반 핵심 인사이트 도출 및 VR 기업 교육 시장 진출 전략 제시',
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
          content:
            '서울시 시니어 대상 정서·건강 관리를 위한 Kotlin 기반 안드로이드 앱 기획 및 개발 (팀장)',
        },
        {
          content:
            '날씨 API, Clova Voice API를 연동하여 시니어 친화형 음성 안내·정서 케어 기능 구현',
        },
        {
          content: 'Firebase Authentication 기반 소셜 로그인 및 사용자 상태 관리 로직 구현',
        },
        {
          content:
            'Kotlin DSL 기반 Gradle 설정 및 앱 전반 UI 화면 설계(홈/시 낭송/운동·건강/날씨 알림)',
        },
        {
          content:
            '팀 협업 구조 설계 및 GitHub·Notion 기반 작업 관리(환경 세팅 가이드·코드 리뷰·회의 운영)',
        },
        {
          content: 'Clova Voice API의 톤 조절 및 낭독 품질 개선을 위한 파라미터 튜닝 수행',
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
