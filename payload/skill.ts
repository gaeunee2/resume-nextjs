import { ISkill } from '../component/skill/ISkill';

const language: ISkill.Skill = {
  category: 'Language & Framework',
  items: [
    {
      title: 'Java & Spring Boot',
      level: 3,
    },
    {
      title: 'Kotlin (Android)',
      level: 3,
    },
    {
      title: 'C / C#',
      level: 3,
    },
    {
      title: 'React & TypeScript',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database & Cache',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Firebase Firestore',
      level: 2,
    },
    {
      title: 'AWS RDS',
      level: 1,
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & DevOps',
  items: [
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'Linux',
      level: 2,
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & Others',
  items: [
    {
      title: 'Git',
      level: 3,
    },
    {
      title: 'Notion',
      level: 3,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [language, database, infrastructure, tools],
  tooltip:
    '1: 기초 수준,\n2: 인터넷 튜토리얼나 공식 문서 등을 참고해 문제를 해결하는 수준,\n3: 직접 코드 분석을 통해 문제 해결을 시도하는 수준',
};

export default skill;
