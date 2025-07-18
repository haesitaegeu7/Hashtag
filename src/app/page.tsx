import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

interface PosterCardProps {
  imgSrc: string;
  title: string;
  date: string;
  altText: string;
}

interface ReviewCardProps {
  rating: number;
  text: string;
  name: string;
}

function PosterCard({ imgSrc, title, date, altText }: PosterCardProps) {
  return (
    <div className="group relative w-[350px] aspect-[2/3] cursor-pointer overflow-hidden rounded-lg shadow-lg">
      <Image
        src={imgSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-between p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-left">
          <h4 className="text-white text-3xl font-bold">{title}</h4>
          <p className="text-brand-orange text-xl font-semibold mt-2">{date}</p>
        </div>
        <IoChevronForward className="text-white text-5xl" />
      </div>
    </div>
  );
}

function ReviewCard({ rating, text, name }: ReviewCardProps) {
  return (
    <div className="flex flex-col text-left">
      <div className="flex text-brand-navy mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-brand-navy" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6 flex-grow">{text}</p>
      <p className="font-bold text-gray-800">{name}</p>
    </div>
  );
}

export default function HomePage() {
  const posters = [
    { imgSrc: "/imagemaking.jpg", title: "이미지 메이킹", date: "6.28(토) 14:00", altText: "Image Making Poster" },
    { imgSrc: "/cherish.jpg", title: "체리쉬", date: "6.14(SAT)", altText: "Cherish Poster" },
    { imgSrc: "/iam.jpg", title: "IAM CLASS", date: "SCHEDULE", altText: "IAM Class Poster" },
  ];

  const reviews = [
    { rating: 5, text: "해시태그랑 함께 해온지 어엿 1년이 넘어갑니다. 해시태그에서 주는 영향력은 많은 청년들에게 꿈과...", name: "박*연" },
    { rating: 4, text: "해시태그랑 함께 해온지 어엿 1년이 넘어갑니다. 해시태그에서 주는 영향력은 많은 청년들에게 꿈과...", name: "이*진" },
    { rating: 5, text: "해시태그랑 함께 해온지 어엿 1년이 넘어갑니다. 해시태그에서 주는 영향력은 많은 청년들에게 꿈과...", name: "문*빈" },
  ];

  return (
    <div>
      <section
        className="h-screen w-full bg-cover bg-center flex items-end pb-20"
        style={{ backgroundImage: "url('/cutedog.jpg')" }}
      >
        <div className="container mx-auto flex items-end justify-between px-4">
          <div className="text-left">
            <p className="text-2xl font-medium text-gray-300 mb-4">
              나를 발견하는 순간
            </p>
            <h1 className="text-6xl font-bold text-white leading-tight">
              해시태그와 함께
              <br />
              시각의 관점을 넓히다
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-gray-200 leading-relaxed">
              스스로 삶의 방향을 설계하고 주체적인 나로 성장해갈 수 있도록 돕는
              다양한 체험과 콘텐츠를 제공하는 것을 목적으로 합니다. 강연, 클래스,
              동아리 활동, 파트너 협업 프로그램 등을 통해 ‘나 자신’을 발견하고
              확장하는 기회를 만듭니다.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-5rem)]">
          <div className="relative flex flex-col items-center justify-center p-8 text-center">
            <Image src="/b1.jpg" layout="fill" objectFit="cover" alt="Participate Background" className="-z-10" />
            <Image src="/icons/magnifier-icon.png" width={64} height={64} alt="Participate Icon" className="mb-6" />
            <h3 className="mb-2 text-2xl font-bold tracking-widest text-white">PARTICIPATE</h3>
            <p className="text-lg font-medium text-white">참여형 기획</p>
          </div>
          <div className="relative flex flex-col items-center justify-center p-8 text-center">
            <Image src="/b2.jpg" layout="fill" objectFit="cover" alt="Development Background" className="-z-10" />
            <Image src="/icons/book-icon.png" width={64} height={64} alt="Development Icon" className="mb-6" />
            <h3 className="mb-2 text-2xl font-bold tracking-widest text-white">DEVELOPMENT</h3>
            <p className="text-lg font-medium text-white">자기개발&계발</p>
          </div>
          <div className="relative flex flex-col items-center justify-center p-8 text-center">
            <Image src="/b3.jpg" layout="fill" objectFit="cover" alt="Growth Background" className="-z-10" />
            <Image src="/icons/arrow-icon.png" width={64} height={64} alt="Growth Icon" className="mb-6" />
            <h3 className="mb-2 text-2xl font-bold tracking-widest text-white">GROWTH</h3>
            <p className="text-lg font-medium text-white">더 나은 내일</p>
          </div>
        </div>
      </section>

      <section className="bg-white h-screen">
        <div className="container mx-auto px-4 h-full flex flex-col pt-32 pb-20">
          <h2 className="text-5xl font-extrabold tracking-wider text-black mb-16">
            HASHTAG
          </h2>
          <div className="flex-1 flex justify-between items-center min-h-0">
            {posters.map((poster) => (
              <PosterCard key={poster.altText} {...poster} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold tracking-wider text-brand-navy mb-16">
            WITH PEOPLE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}