import { cn } from "@/lib/utils";
import { Marquee } from "@/registry/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Zoey Dunkel",
    username: "@zoey",
    body: "Foster Greatness has given me hope during some of my hardest moments. The team made me feel seen, cared for, and not alone.",
    img: "https://avatar.vercel.sh/zoey",
  },
  {
    name: "Majd Abdallah",
    username: "@majd",
    body: "A centralized platform like Foster Greatness has been missing for foster kids and under resource people for so long. Y'all are seriously trailblazing and doing great work!",
    img: "https://avatar.vercel.sh/majd",
  },
  {
    name: "Michael Davis-Thomas",
    username: "@michael",
    body: "Through Foster Greatness, I discovered a renewed sense of purpose, which has fueled personal growth and even boosted my professional confidence.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Taylor Rockhold",
    username: "@taylor",
    body: "This community doesn't just support individuals—it uplifts entire families.",
    img: "https://avatar.vercel.sh/taylor",
  },
  {
    name: "Eugenia Doreen",
    username: "@eugenia",
    body: "Foster Greatness is more than an organization—it's a movement rooted in innovation, transformation, and joy.",
    img: "https://avatar.vercel.sh/eugenia",
  },
  {
    name: "Julie Ong",
    username: "@julie",
    body: "As I enter CSU for the fall semester, I know I can count on Foster Greatness for their continued support and helpful resources!",
    img: "https://avatar.vercel.sh/julie",
  },
  {
    name: "Jessica Patino",
    username: "@jessica",
    body: "Because of their consistent support, I feel stronger, connected, and equipped to build a brighter future, not just for me but for my family too.",
    img: "https://avatar.vercel.sh/jessica",
  },
  {
    name: "Emmerald Evans",
    username: "@emmerald",
    body: "They didn't just ask me to share my story—they gave me the tools to shape it, own it, and use it to make an impact.",
    img: "https://avatar.vercel.sh/emmerald",
  },
  {
    name: "Chyenne Santini",
    username: "@chyenne",
    body: "Having the opportunity to be part of the very first cohort of the Storyteller Collective ignited a fire of inspiration within me.",
    img: "https://avatar.vercel.sh/chyenne",
  },
  {
    name: "Stormy Lukasavage",
    username: "@stormy",
    body: "Foster Greatness not only pioneers the concept of involved participation but takes it to the next level by making it both accessible and open to those with tiered levels of experience.",
    img: "https://avatar.vercel.sh/stormy",
  },
  {
    name: "Zoey Dunkel",
    username: "@zoey2",
    body: "Thank you for believing in people like me—you're truly making a difference.",
    img: "https://avatar.vercel.sh/zoey2",
  },
  {
    name: "Carloe Moser",
    username: "@carloe",
    body: "Their commitment to connecting foster care alumni and providing resources is unmatched! They've truly built a web of support and community nationwide.",
    img: "https://avatar.vercel.sh/carloe",
  },
  {
    name: "Alejandro Rocha",
    username: "@alejandro",
    body: "Foster Greatness is not only a space where you can get assistance but a place where I was able to express the feelings I had and feel heard as a person.",
    img: "https://avatar.vercel.sh/alejandro",
  },
  {
    name: "Faith Sharp",
    username: "@faith",
    body: "Foster Greatness has taken it a step further by partnering with lived experience in the creation of the process... True partnership is what Foster Greatness is all about.",
    img: "https://avatar.vercel.sh/faith",
  },
  {
    name: "Faith Sharp",
    username: "@faith2",
    body: "I wasn't just invited and told what to say, but a part of the creation of the story we told together.",
    img: "https://avatar.vercel.sh/faith2",
  },
  {
    name: "Eryka Moyer",
    username: "@eryka",
    body: "This resource helped me receive an iPad and pencil for school to help me succeed in my classes... I would not be able to afford this on my own.",
    img: "https://avatar.vercel.sh/eryka",
  },
  {
    name: "Lauryn Treadwell",
    username: "@lauryn",
    body: "To anyone out there who's ever felt alone or like they had to fight every battle by themselves know that there are people who care, and Foster Greatness is living proof of that.",
    img: "https://avatar.vercel.sh/lauryn",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300"
      style={{
        backgroundColor: '#ffffff',
        borderColor: '#03b2a3',
        borderWidth: '2px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#def3fd';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(3, 178, 163, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#ffffff';
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium" style={{ color: '#253353' }}>
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm" style={{ color: '#0067a2' }}>{body}</blockquote>
    </figure>
  );
};

function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4"
        style={{ background: 'linear-gradient(to right, #def3fd, transparent)' }}
      ></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4"
        style={{ background: 'linear-gradient(to left, #def3fd, transparent)' }}
      ></div>
    </div>
  );
}

export default function Widget() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #def3fd 0%, #ffffff 50%, #def3fd 100%)' }}>
      <div className="py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#253353' }}>Foster Greatness Testimonials</h1>
          <p className="text-lg" style={{ color: '#0067a2' }}>Real stories from our community members</p>
        </div>
        <MarqueeDemo />
      </div>
    </div>
  );
}
