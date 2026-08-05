"use client";

import AccordionCustom from "@/components/AccordionCustom";
import { ModalImage } from "@/components/ui/modalImage";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const accordionSections = [
  {
    id: "item-1", 
    triggerText: "AI", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Worked on AI for the robot enemies, making use of the newish State Trees in Unreal to create enemies that spawn in at random sizes and health, move towards the ship and fire rockets at it from a short distance.</p>
            </div>
            <div className="w-full h-0.5 bg-background opacity-20 my-2 sm:hidden" />
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>In order to fight back against the robots, the ship has 4 turrets on the corners that I also programmed. The turrets are upgradeable, using parts spawned during the day to increase damage done and fire distance. They automatically focus on the closest enemy, firing at regular intervals.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-2", 
    triggerText: "Day/Night Cycle", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Implemented a simple day/night cycle that rotated the sun and moon to change the lighting and sent a delegate when the day changed to night and vice versa. During the night the enemies spawned intermittently and during the day resource nodes are spawned randomly around the world and in randomly generated structures.</p>
            </div>
            <div className="w-full h-0.5 bg-background opacity-20 my-2 sm:hidden" />
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>The calculations for the time of day ended up being simple after initially overcomplicating with divisions by pi when not necessary. In the end it just needed to be ` CurrentTime += DeltaSeconds/DayLength ` which, mod 2 returns a value between 0 and 2, with 1 being the start of night.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-3", 
    triggerText: "Gameplay Ability System (GAS)", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Handled adding the attributes for the ship, including health and fuel amount, including game over events when either health hit 0 or fuel was filled.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-4", 
    triggerText: "UI", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Added Simple UI with Progress Bars showing the Ships Health and Fuel Amount, and a Counter for amount of Scrap collected.</p>
            </div>
            <div className="w-full h-0.5 bg-background opacity-20 my-2 sm:hidden" />
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>In the final couple of hours we also realised that it was very easy to lose the ship if you run too far, so I was tasked with adding some kind of pointer towards the ship. At first we wanted a compass but we had locked the camera to one rotation so I ended up using a radial slider with only the handle visible, then doing some maths to set the slider value using the unit direction from the character to the ship and then dot producting with global forward and right vectors.</p>
            </div>
        </div>
    )
  },
]

const images = [
    {
        src: "/astronaught/astro-1.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/astronaught/astro-3.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
]

export default function AstroPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleCloseModal = () => {
        setSelectedImage(null);
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
            <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-3 lg:px-16 bg-background sm:items-center">
                <h1 className="text-4xl font-bold mb-4 text-center">Astronaught</h1>
                <h2 className="text-2xl font-bold mb-2">Game Details</h2>
                <div className="mb-4 text-lg text-center flex flex-col justify-center items-center gap-0">
                    <p>Genre: Survival, Resource Management</p>
                    <p>Languages: C++, Blueprints</p>
                    <p>Tools: Unreal Engine 5.2, Jetbrains Rider</p>
                    <p>Platform: Windows</p>
                    <p>Timeline: September 2023</p>
                    <p>Event: 2023 Epic MegaJam</p>
                    <Link href="https://flinnf.itch.io/astronaught" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 hover:underline text-center">
                        <Image
                            className="invert dark:invert-0 hover:opacity-80"
                            src="/svgs/itch.svg"
                            alt="Itch logo with link to astronaught itch page."
                            width={48}
                            height={48}
                        />
                    </Link>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <Image 
                    src="/astronaught/astro-2.png"
                    alt="Multiplayer Horror Game"
                    className="w-full max-w-[90%] h-auto mb-4 hover:border-2 hover:border-foreground focus:border-2 focus:border-foreground active:border-foreground active:border-2"
                    width={640}
                    height={360}
                    onClick={() => { 
                        setSelectedImage("/astronaught/astro-2.png");
                    }}
                />

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="text-lg max-w-[90%] flex flex-col gap-3 text-center">
                    <p className="font-bold text-3xl">Game Brief</p>
                    <p>What started as a routine reconnaissance of S&apos;ram quickly turned to chaos, and a critical engine failure for the Autumn.</p>
                    <p>Battle your way through the planet of S&apos;ram, a procedurally genrated planet. Upgrade the Autumn with whatever you can find, and try to escape the planet while managing the onslaught of the mysterious robots. Find resources by day, and defend the Autumn by night. Fight to survive a grueling mission against dangerous robotic foes, and escape to the safety of your fleet.</p>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="flex flex-row flex-wrap w-full max-w-[90%] justify-evenly gap-4 lg:gap-4">

                    <div className="flex flex-col flex-wrap w-full max-w-full sm:max-w-[49%] justify-start gap-4 lg:gap-4">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                className="w-full aspect-video rounded-md object-cover hover:border-2 hover:border-foreground focus:border-2 focus:border-foreground active:border-foreground active:border-2"
                                src={image.src}
                                alt={image.alt}
                                width={640}
                                height={360}
                                onClick={() => { 
                                    setSelectedImage(image.src);
                                }}
                            />
                        ))}
                    </div>

                    {/* <div className="w-full h-0.5 bg-tint-bg my-8" /> */}

                    <div className="text-lg flex flex-col mb-8 gap-8 text-center w-full sm:max-w-[49%]">
                        <p className="font-bold text-3xl">My Role</p>
                
                        <AccordionCustom type="multiple" items={accordionSections} className="w-full"></AccordionCustom>
                    </div>
                </div>

                <div>
                    {selectedImage && (
                        <ModalImage
                        selectedImage={selectedImage}
                        onClose={handleCloseModal}
                        />
                    )}
                </div>
            </main>
        </div>
    );
}