import Image from "next/image";
import "./globals.css";
import AccordionCustom from "@/components/AccordionCustom";
import Link from "next/link";

const accordionSections = [
  {
    id: "item-1", 
    triggerText: "About Me", 
    contentText: (
      <div>
        <p className="mb-2">Computer Games Programming BSc graduate, having attained an upper 2nd class honours. I have lots of experience in C# and C++ with an ability to quickly pick up new languages and skills when necessary. Such as learning HTML, CSS, Javascript, Next JS, Tailwind CSS and TypeScript for this website.</p> 
        <p className="mb-2">After graduating back in 2019, I had a close family bereavement and so spent a bit of time at home with family, trying to add to my portfolio a bit more, whilst looking out for any jobs that spark my interest. Then lockdown occurred and I got approached for a remote contract job at Poly Fruit Studios, formerly Pineapple Studios, as a Games Programmer, from February to August 2021. We had a few issues due to being an inexperienced team, but we successfully released a number of games and it taught me a lot about programming, source control and teamwork.</p> 
        <p className="mb-2">I then did a few months of temporary work inputting data in a local business, before joining PsychoHound as a Games Programmer. I worked on the official AUDL (American Ultimate Disc League) video game before it was eventually cancelled, as well as our own IPs, Ruff ‘N’ Tumble and ‘FB’. This was my first experience developing using UE4 and UE5, along with experience using plugins such as the Gameplay Ability Systems and PlayFab.</p> 
        <p className="mb-2">Then after a while of unsuccessfully looking for work, I started as a trainee computer science teacher, studying for my PGCE at the University of Huddersfield. However, I decided that it wasn’t what I wanted to do in life and got a job working in the Civil Service as a Customer Services Advisor.</p>
      </div>
    )
  },
  {
    id: "item-2",
    triggerText: "Work Experiences",
    contentText: (
      <div>
        <div className="mb-4">
          <p className="text-2xl">Civil Service - Customer Services Advisor</p>
          <p><i>(Dec 2025 - Present)</i></p>
          <p className="mb-0">After leaving teacher training, I spent a few months looking for work, both in and out of the world of game development.</p> <p>Ultimately I ended up applying for and getting a job as a Customer Services advisor in the HMRC Bereavement team.</p><p>My role includes various aspects, such as taking calls and working items of post to finalise the tax affairs of those that are recently deceased, giving advice to their bereaved family and agents to assist them in providng us with as much information as possible to close their estates.</p>
        </div>
        <div className="mb-4">
          <p className="text-2xl">University of Huddersfield - Trainee Teacher</p>
          <p><i>(Sep 2024 - Mar 2025)</i></p>
          <p>I enrolled onto the Initial Teacher Training Course for the summer of 2024 specialising in Computer Science for Secondary school.</p><p>However, after much deliberation and despite tutors and mentors telling me I had promise, I decided that teaching wasn’t a passion of mine and it was taking a toll on my mental health and so withdrew from the course.</p>
        </div>
        <div className="mb-4">
          <p className="text-2xl">Psycho Hound Ltd - Games Programmer</p>
          <p><i>(Feb 2022 - Aug 2023)</i></p>
          <p>Games programmer on a UE5 Multiplayer Horror IP titled ‘FB’, and two UE4 projects, the official Ultimate Frisbee video game, and Ruff ‘N’ Tumble, a beat ‘em up multiplayer game with a variety of game modes such as King of the Hill, Capture the Flag, Racing, etc.</p>
        </div>
        <div className="mb-4">
          <p className="text-2xl">SDC Enterprises - Data Inputting</p>
          <p><i>(Nov 2021 - Feb 2022)</i></p>
          <p>Whilst looking for more programming work, I temporarily worked doing some data inputting, copying data from PDFs to Microsoft Excel.</p>
        </div>
        <div className="mb-4">
          <p className="text-2xl">Poly Fruit Studios LTD - Games Programmer</p>
          <p><i>(Aug 2020 - Oct 2021)</i></p>
          <p>I was with Poly Fruit Studios, formerly Pineapple Studios, for just over a year, my first experience in the Games Industry which was enlightening. I worked in a couple teams, first making a more long term game which had its hurdles and then onto making quick hyper-casual mobile games, such as Sketch Roll.</p>
        </div>
        <div className="">
          <p className="text-2xl">University of Derby</p>
          <p><i>(2015 - 2019)</i></p>
          <p><b>BSc Computer Games Programming - 2:1</b></p>
          <p>Dissertation - Aiming with AI - Tested three methods of using an AI bot to fire at a still target, with varying difficulty levels, comparing the results of each for accuracy and time to fire.</p>
        </div>
      </div>
    )
  }
]

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-3 sm:px-16 sm:items-center">
        <div className="flex flex-col sm:flex-row  self-center items-center gap-8 mb-8">
          <Image
            className="h-48 w-48 object-[0%_40%] object-cover rounded-full  border-4 border-foreground"
            src="/GraduationPhoto.jpg"
            alt="A photo of me at my graduation ceremony, with hat and gown and hair that is long gone."
            width={192}
            height={192}
            priority
          />
          <div className="flex flex-col">
            <p className="text-7xl text-center sm:text-left">Ryan Lewin</p>
            <p className="text-5xl text-center sm:text-left">Programmer</p>
          </div>
        </div>
        
        <AccordionCustom items={accordionSections} className="w-full mb-8" defaultValue="item-1"></AccordionCustom>
        
        <div className="flex flex-wrap w-full justify-between gap-4 sm:gap-4">
          <Link className="w-full sm:w-[49%]" href="/games">
            <Image
              className="w-full aspect-video rounded-md object-cover hover:border-2 hover:border-foreground focus:border-2 focus:border-foreground active:border-foreground active:border-2"
              src="/MallOverview1.png"
              alt="An image showing an overview of the mall from the game Ruff 'N' Tumble, made during my time at Psychohound Ltd."
              width={640}
              height={360}
            />
            <p className="text-2xl text-center">Games</p>
          </Link>
          <Link className="w-full sm:w-[49%]" href="/book-club">
            <Image
              className="w-full aspect-video rounded-md object-cover hover:border-2 hover:border-foreground focus:border-2 focus:border-foreground active:border-foreground active:border-2"
              src="/book-club.avif"
              alt="An image showing an overview of the mall from the game Ruff 'N' Tumble, made during my time at Psychohound Ltd."
              width={640}
              height={360}
            />
            <p className="text-2xl text-center">Book Club</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
