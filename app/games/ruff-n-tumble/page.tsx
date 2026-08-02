"use client";

import { ModalImage } from "@/components/ui/modalImage";
import Image from "next/image";
import { useState } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import "@/app/globals.css";

const images = [
    {
        src: "/ruff_n_tumble/rnt-1.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-2.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-3.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-4.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-5.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-6.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-7.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-8.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-9.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-10.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-11.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/ruff_n_tumble/rnt-12.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
]

export default function RuffNTumblePage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleCloseModal = () => {
        setSelectedImage(null);
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
            <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-3 lg:px-16 bg-background sm:items-center">
                <h1 className="text-4xl font-bold mb-4 text-center">Ruff &apos;N&apos; Tumble : Mayhem</h1>
                <h2 className="text-2xl font-bold mb-2">Game Details</h2>
                <div className="mb-4 text-lg text-center">
                    <p>Genre: Beat &apos;em Up, Party</p>
                    <p>Languages: C++, Blueprints</p>
                    <p>Tools: Unreal Engine 4.25, Jetbrains Rider</p>
                    <p>Platform: Windows</p>
                    <p>Studio: PsychoHound</p>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />
                
                <div className="w-full max-h-fit aspect-video youtube-container">
                    <YouTubeEmbed videoid="5vYVl-_643w"/>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="text-lg max-w-[90%] flex flex-col gap-3 text-center">
                    <p className="font-bold text-3xl">Game Brief</p>
                    <p>Ruff &apos;N&apos; Tumble is a multiplayer beat &apos;em up party game, where you run around various maps and arenas, picking up weapons such as the freeze gun, getting power ups to supersize or minify your character, and riding vehicles like trams, wheelbarrows and horses all with their own advantages and disadvantages. </p>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="text-lg w-full max-w-[90%] flex flex-col mb-8 gap-8 text-center">
                    <p className="font-bold text-3xl">My Role</p>
            
                    <p>Personally, I mostly worked on the mall and lobby systems, allowing players to host or join a level for their friends and run around, playing with different vehicles such as a trike and a wheelbarrow that can pick other players up. There&apos;s also an area to swim in with fish, a tram system that travels around the map that the player can hop on at various stations.</p>
                    <p>I also made a couple of game modes, the classic King of the Hill with a few twists, like the ability to lower the centre circle into lava for a second by punching a gong that sits on the outer edges of the ring, or lowering the stepping stones leading to the gongs by climbing up the pillars.</p>
                    <p>I&apos;ve also added a slushy related game, of which the players have to get across the map past the three wrecking balls, collect a bucket of slushy and then make their way back to deposit it in their collection point whilst trying to knock each other off the balance beams.</p>
                    <p>During my final couple weeks at the company, I was tasked with quick prototyping of a couple more game modes, one a sort of team based diner dash/plate up kind of game, where you had to run to the kitchen and get peoples orders. Another a simple racing game mode, where you drive around a track and either try and get the best lap time or just win the whole race in a 5 lap course, using speed boosts and laying traps to gain an advantage.</p>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="flex flex-wrap w-full max-w-[90%] justify-between gap-4 lg:gap-4">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            className="w-full lg:w-[49%] aspect-video rounded-md object-cover hover:border-2 hover:border-foreground focus:border-2 focus:border-foreground active:border-foreground active:border-2"
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