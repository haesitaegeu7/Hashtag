import Image from 'next/image';
import React from 'react';

interface MotoCardProps {
  iconSrc: string;
  title: string;
  description: string;
  color: 'orange' | 'navy';
}

function MotoCard({ iconSrc, title, description, color }: MotoCardProps) {
  const bgColor = color === 'orange' ? 'bg-brand-orange bg-opacity-80' : 'bg-brand-navy bg-opacity-85';
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg text-left shadow-lg">
      <div className={`${bgColor} flex items-center gap-x-4 p-6`}>
        <div className="p-3">
          <Image src={iconSrc} alt={`${title} icon`} width={60} height={60} />
        </div>
        <div className="rounded-md px-4 py-2">
          <span
            className='whitespace-nowrap text-2xl font-bold text-white'>
            {title}
          </span>
        </div>
      </div>
      <div className="flex-grow bg-white p-6">
        <p className="leading-relaxed text-gray-700">{description}</p>
      </div>
    </div>
  );
}

const keywordsData: {
  text: string;
  angle: number;
  distance: number;
  align: 'left' | 'right';
}[] = [
  { text: 'seminar', angle: -50, distance: 38, align: 'right' },
  { text: 'class', angle: -5, distance: 32, align: 'right' },
  { text: 'cooperation', angle: 35, distance: 38, align: 'right' },
  { text: 'partner', angle: 115, distance: 36, align: 'right' },
  { text: 'acquaintance', angle: 160, distance: 38, align: 'right' },
  { text: 'talk', angle: 190, distance: 32, align: 'right' },
  { text: 'club', angle: 225, distance: 38, align: 'right' },
];
const LOGO_BOUNDARY_RADIUS = 16;

const historyData = [
  { year: '2018.02', events: ['조직 설립'] },
  { year: '2018', events: ['청춘멘토스쿨 멘토 양성 프로그램 출범'] },
  { year: '2019', events: ['주도적 활동 확대를 위한', '청춘멘토스쿨 사업팀 구성'] },
  { year: '2020', events: ['성찰적 마음건강 프로그램', "'마음사용설명서' 기획 및 진행"] },
  {
    year: '2021',
    events: ['지속가능한 자기 성장에 초점을 맞춘 소그룹 커뮤니티', '및 동아리 개설(예: 슬로우 조깅, 북스토리)'],
  },
  { year: '2022', events: ['창의력 및 기술 개발 워크숍을', '제공하는 원데이 클래스 도입'] },
  {
    year: '2023',
    events: ['파트너 조직 및 전문가와의 협업 확대', '(예: 아이엠클래스, 텍스트립, 프리드로잉 코칭)'],
  },
  { year: '2024', events: ['모든 콘텐츠 유형에 대한 공식 분류', ': 강의, 원데이 클래스, 클럽 및 파트너사'] },
  { year: '2025', events: ['첫 공식 강연 CHERISH 론칭', '(6월 14일, 사가정 하늘숲 카페)'] },
];

const motoData = [
  {
    iconSrc: '/icons/magnifier-icon.png',
    title: '참여형 기획',
    description: '누군가가 만들어주는 것이 아닌, 나의 선택과 경험을 통해 스스로 채워가는 프로그램을 추구합니다.',
    color: 'orange' as const,
  },
  {
    iconSrc: '/icons/magnifier-icon.png',
    title: '자기개발&계발',
    description: '내면의 성장과 자기 인식을 우선시하며, 감정적 회복력과 삶의 목적에 대한 명확성을 기릅니다. 동시에 일상에서 스스로를 더욱 주체적으로 만들 수 있도록 실질적인 기술과 지식 습득도 함께 지원합니다.',
    color: 'navy' as const,
  },
  {
    iconSrc: '/icons/magnifier-icon.png',
    title: '더 나은 내일',
    description: "지금보다 한 발 더 나아간 나를 위한 여정, 각자가 꿈꾸는 '더 나은 내일'을 함께 설계합니다.",
    color: 'orange' as const,
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative mt-20 h-[calc(100vh-5rem)] w-full overflow-hidden bg-gray-100">
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <Image src="/logos/mainLogo.png" alt="Main Logo" width={250} height={70} priority />
        </div>
        <div className="absolute left-1/2 top-1/2">
          {keywordsData.map((keyword) => (
            <div
              key={keyword.text}
              className="absolute origin-top-left"
              style={{ transform: `rotate(${keyword.angle}deg)` }}
            >
              <div
                className="relative flex items-center"
                style={{ transform: `translateX(${LOGO_BOUNDARY_RADIUS}vh)` }}
              >
                <div
                  className="h-px bg-brand-navy"
                  style={{ width: `${keyword.distance - LOGO_BOUNDARY_RADIUS}vh` }}
                />
                <div
                  className="absolute left-full top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand-navy"
                >
                  <div
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${-keyword.angle}deg)`,
                      ...(keyword.align === 'left'
                        ? { right: `calc(100% + 8px)` }
                        : { left: `calc(100% + 8px)` }),
                    }}
                  >
                    <span className="whitespace-nowrap text-xl font-bold tracking-wider text-brand-navy">
                      {keyword.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-brand-navy">
          <div className="container mx-auto flex items-start justify-between px-4 py-24">
            <h2 className="text-6xl font-extrabold tracking-wider text-brand-orange">MOTO</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-white">
              스스로 삶의 방향을 설계하고 주체적인 나로 성장해갈 수 있도록 돕는 다양한 체험과 콘텐츠를 제공하는 것을
              목적으로 합니다. 강연, 클래스, 동아리 활동, 파트너 협업 프로그램 등을 통해 ‘나 자신’을 발견하고 확장하는
              기회를 만듭니다.
            </p>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {motoData.map((card, index) => (
                <MotoCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="container mx-auto px-4">
          <h2 className="mb-24 text-5xl font-extrabold tracking-wider text-brand-navy">HISTORY</h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-300"></div>
            <div className="space-y-16">
              {historyData.map((item, index) => (
                <div key={index} className="relative grid grid-cols-2 items-start gap-x-8">
                  <div className="text-right">
                    <p className="text-3xl font-semibold text-brand-navy">{item.year}</p>
                  </div>
                  <div>
                    {item.events.map((eventLine, lineIndex) => (
                      <p key={lineIndex} className="text-lg leading-relaxed text-brand-navy">
                        {eventLine}
                      </p>
                    ))}
                  </div>
                  <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-navy outline outline-2 outline-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}