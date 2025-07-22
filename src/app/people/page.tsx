import Image from 'next/image';


const peopleData = [
  { name: '이후딱', title: '대표', imageUrl: '/face.jpg' },
  { name: '이우유', title: '대표', imageUrl: '/face.jpg' },
  { name: '박두철', title: '대표', imageUrl: '/face.jpg' },
  { name: '김인돌', title: '대표', imageUrl: '/face.jpg' },
  { name: '김훈훈', title: '이사', imageUrl: '/face.jpg' },
];

const partnerData = [
  { name: 'ReframePoint', imageUrl: '/logos/reframe.png' },
  { name: 'I am', imageUrl: '/logos/iam.png' },
  { name: '나무심는사람', imageUrl: '/logos/tree.png' },
];

// --- 컴포넌트 정의 ---

const ProfileCard = ({ name, title, imageUrl }: { name: string; title: string; imageUrl: string }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden">
        <Image src={imageUrl} alt={`${name} ${title} 프로필 사진`} width={224} height={224} className="object-cover w-full h-full" priority />
      </div>
      <div className="text-center">
        <p className="text-xl md:text-2xl">
          <span className="font-semibold">{name}</span>
          {' '}
          <span>{title}</span>
        </p>
      </div>
    </div>
  );
};

const PartnerCard = ({ name, imageUrl }: { name: string; imageUrl: string }) => {
  return (
    <div className="bg-gray-100/80 rounded-2xl aspect-square w-full sm:w-30 md:w-30 flex items-center justify-center p-8">
      <Image
        src={imageUrl}
        alt={`${name} 로고`}
        width={100}
        height={150}
        className="object-contain"
      />
    </div>
  );
};

export default function PeoplePage() {
  return (
    <div className="pt-[80px]">
      <div className="w-full bg-brand-navy text-white">
        <section className="min-h-screen flex items-center justify-center py-24 px-4">
          <div className="flex flex-col items-center gap-12 md:gap-20">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wider text-center">
              #HASHTAG
              <br />
              PEOPLE
            </h1>
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                {peopleData.slice(0, 3).map((person) => (
                  <ProfileCard key={person.name} name={person.name} title={person.title} imageUrl={person.imageUrl} />
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                {peopleData.slice(3, 5).map((person) => (
                  <ProfileCard key={person.name} name={person.name} title={person.title} imageUrl={person.imageUrl} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-12 py-32 px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight"><span className="text-orange-500">다수의 실력 코치들</span>과</h2>
            <h2 className="mt-5 text-5xl md:text-6xl font-bold leading-tight">함께 하는</h2>
            <h2 className="mt-5 text-5xl md:text-6xl font-bold leading-tight">나를 발견하는 시간</h2>
          </div>
        </section>
      </div>

      <section className="w-full bg-white py-24 px-4 sm:py-32">
        <div className="flex flex-col items-center gap-12 md:gap-20">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wider text-center text-brand-navy">
            #HASHTAG
            <br />
            PARTNER
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {partnerData.map((partner) => (
              <PartnerCard key={partner.name} name={partner.name} imageUrl={partner.imageUrl} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}