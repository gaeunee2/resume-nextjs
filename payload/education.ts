import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '동덕여자대학교',
      subTitle: '컴퓨터학과 학사 과정 (3학년 2학기 재학 중), 학점 4.11/4.5',
      descriptions: [
        '자료구조, 알고리즘, 소프트웨어 공학 등 컴퓨터공학 핵심 이론 학습 및 프로그래밍 과제, 프로젝트 실습',
        "'네트워크' 강의 학습 멘토로 활동 및 학생 실습 지도, 과제 질의응답 및 학습 지원",
      ],
      startedAt: '2022-03',
      // endedAt: '2010-02',
    },
  ],
};

export default education;
