"use client";

import AccordionCustom from "@/components/AccordionCustom";
import { ModalImage } from "@/components/ui/modalImage";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";

const accordionSections = [
  {
    id: "item-1", 
    triggerText: "VOIP Plugin", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Created a plugin, making use of the VOIPTalker component to easily add voice chat to the game, allowing switching of channels based on the players current character by making use of Audio Components source bus.</p>
            </div>
            <div className="w-full h-0.5 bg-background opacity-20 my-2 sm:hidden" />
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Added options that allow users to change the volume of specific players.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-2", 
    triggerText: "Character Mechanics", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Charged with working on the alien abilities which were repeatedly changing and being redesigned, abilities included things such as, close attacks that ragdolled characters, throwing objects at targeted players, applying a buff to all lifeforms, etc.</p>
            </div>
            <div className="w-full h-0.5 bg-background opacity-20 my-2 sm:hidden" />
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Abilities were selectable by using a scrollable bar at first before being changed to an ability wheel, which was adapted from a UE Marketplace plugin, where I had to modify how the items were displayed and selected, with requirements to display cooldowns and ability descriptions.</p>
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
                <p>This is the first project I&apos;ve worked on using GAS, with a bit of a learning curve on how Gameplay Effects and Abilities work and the best practices, but they proved very useful for keeping track of data, especially over network, and with cooldowns and usage of abilities.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-4", 
    triggerText: "Popup Manager", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Implemented a system using gameplay cues that allowed for easy adding of popups to various items around the map, whether it be pickups, doors or other players. All the designer had to do was add to an array with the the interacting player type and then give it a name and if it has a corresponding key. There were ways to add other requirements as well, such as blocking if the player or the item had or didn&apos;t have a specified tag.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-5", 
    triggerText: "Game Modes", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>In charge of the game mode which handles where each player spawns keeps track of which player is on what team and when the game should end.</p>
            </div>
            <div className="w-full h-0.5 bg-background opacity-20 my-2 sm:hidden" />
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Also worked on a side game mode where the players can play hide and seek, where the hiders play as the Offsprings whilst the seeker is the survivor and must shine his torch on the hiders to kill them.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-6", 
    triggerText: "Minigames", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Added a minigame to replace button mashing which wasn&apos;t exactly even or foolproof in a multiplayer game. My new design was essentially a rythm game, pressing a given key in a time frame, and if failed called a delegate which could be used to decide if the game should end on failure or reduce points.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-7", 
    triggerText: "Bug Fixing", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center sm:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden sm:block" />
                <p>Known as cheif bugfixer, I knew the project inside out and often if a bug was found by QA, I would have it fixed before they could finish describing it.</p>
            </div>
        </div>
    )
  },
]

const images = [
    {
        src: "/horror/UnrealEditor_6XEbHBEPzq.jpg",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/horror/UnrealEditor_63pj9gMj7I.jpg",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/horror/UnrealEditor_jnTdPvdAXH.jpg",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/horror/UnrealEditor_LpBncUhyKL.jpg",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/horror/UnrealEditor_le8LTRqd4R.jpg",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/horror/UnrealEditor_taMzIGOeeq.jpg",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/horror/UnrealEditor_TBVBcAQuRF.jpg",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/horror/UnrealEditor_ffupq38pcI.jpg",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/horror/UnrealEditor_xyV6m5ARQR.jpg",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/horror/UnrealEditor_vj4Qv2np4k.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
]

export default function HorrorPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleCloseModal = () => {
        setSelectedImage(null);
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
            <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-3 sm:px-16 bg-background sm:items-center">
                <h1 className="text-4xl font-bold mb-4 text-center">Multiplayer Horror Game - FB</h1>
                <h2 className="text-2xl font-bold mb-2">Game Details</h2>
                <div className="mb-4 text-lg text-center">
                    <p>Genre: Horror, Social Deduction</p>
                    <p>Languages: C++, Blueprints</p>
                    <p>Tools: Unreal Engine 5.1, Jetbrains Rider</p>
                    <p>Platform: Windows</p>
                    <p>Studio: PsychoHound</p>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <Image 
                    src="/horror/multiplayer-horror.png"
                    alt="Multiplayer Horror Game"
                    className="w-full max-w-[90%] h-auto mb-4 hover:border-2 hover:border-foreground focus:border-2 focus:border-foreground active:border-foreground active:border-2"
                    width={640}
                    height={360}
                    onClick={() => { 
                        setSelectedImage("/horror/multiplayer-horror.png");
                    }}
                />

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="text-lg max-w-[90%] flex flex-col gap-3 text-center">
                    <p className="font-bold text-3xl">Game Brief</p>
                    <p>FB was a Multiplayer Horror-Social Deduction game of Psycho Hound’s IP, taking inspiration from the movie The Thing, and games such as Dead by Daylight and Dead Space 3.</p>
                    <p>7 survivors found themselves trapped in a remote tundra base with one killer Mutant.</p>
                    <p>As the game began, one player is chosen to start out as the mutant. They are a tall, grotesque alien with different abilities, ranging from a burst of sprinting, to hurling rubble down a corridor at survivors, to shrieking and turning off all the fuse boxes, bringing the base into almost complete darkness. Their primary role was to down and infect all the other survivors and prevent anyone from escaping.</p>
                    <p>The survivors had to try and fix the power, collect the data and then escape without being taken over by the Mutant.</p>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="text-lg w-full max-w-[90%] flex flex-col mb-8 gap-8 text-center">
                    <p className="font-bold text-3xl">My Role</p>
            
                    <AccordionCustom type="multiple" items={accordionSections} className="w-full"></AccordionCustom>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="flex flex-wrap w-full max-w-[90%] justify-between gap-4 sm:gap-4">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            className="w-full sm:w-[49%] aspect-video rounded-md object-cover hover:border-2 hover:border-foreground focus:border-2 focus:border-foreground active:border-foreground active:border-2"
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