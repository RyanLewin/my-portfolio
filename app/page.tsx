import Image from "next/image";
import "./globals.css";
import AccordionCustom from "@/components/AccordionCustom";

const accordionSections = [
  {
    id: "about-me", 
    triggerText: "About Me", 
    contentText: (
      <div>
        <p className="mb-2">Computer Games Programming BSc graduate attaining an upper 2nd class honours looking for a programming position. I have lots of experience in C# and C++ with an ability to quickly pick up new languages and skills when necessary.</p> 
        <p className="mb-2">After graduating I had a bit of time off to spend with family and worked on personal projects, trying to add to my portfolio a bit more, whilst looking out for any jobs that spark my interest. Then lockdown occurred and I got approached for a remote contract job at Poly Fruit Studios, formerly Pineapple Studios, as a Games Programmer, working for equity and then moving onto the Government Kickstarter scheme from February to August 2021. We had a lot of issues due to being an inexperienced team, but we successfully released a number of games and it taught me a lot about programming, source control and teamwork.</p> 
        <p className="mb-2">I then did a few months of temporary work inputting data, before joining PsychoHound as a Games Programmer. Working on the official AUDL video game and our own IPs, Ruff ‘N’ Tumble and ‘FB’. The first two games are developed using UE4, and the latter using UE5 along with experience using Gameplay Ability Systems and PlayFab.</p> 
        <p className="mb-2">Most recently, I have gained experience as a trainee computer science teacher, studying for my PGCE at the University of Huddersfield. However, I decided that it wasn’t what I wanted to do in life and so I’m now looking for work in a more programming/engineering role again whilst development personal projects in my free time.</p>
      </div>
    )
  },
  {
    id: "past-experiences",
    triggerText: "Past Experiences",
    contentText: (
      <div>
        <p className="text-2xl">University of Huddersfield - Trainee Teacher</p>
        <p><i>(Sep 2024 - Mar 2025)</i></p>
        <p>I enrolled onto the Initial Teacher Training Course for the summer of 2024 specialising in Computer Science for Secondary school. However, after much deliberation and despite tutors and mentors telling me I had promise, I decided that teaching wasn’t a passion of mine and it was taking a toll on my mental health and so withdrew from the course.</p>
      </div>
    )
  }
]

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-3 lg:px-16 bg-background sm:items-center">
        <div className="flex flex-col xl:flex-row  self-center items-center gap-8 mb-8">
          <Image
            className="h-48 w-48 object-[0%_40%] object-cover rounded-full  border-4 border-foreground"
            src="/GraduationPhoto.jpg"
            alt="A photo of me at my graduation ceremony, with hat and gown and hair that is long gone."
            width={192}
            height={192}
            priority
          />
          <div className="flex flex-col">
            <p className="text-7xl text-center xl:text-left">Ryan Lewin</p>
            <p className="text-5xl text-center xl:text-left">Programmer</p>
          </div>
        </div>
        <AccordionCustom items={accordionSections} className="w-full mb-8"></AccordionCustom>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-foreground dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-text-tint dark:text-tint">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-tint hover:text-foreground"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-tint hover:text-foreground"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex w-full h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
