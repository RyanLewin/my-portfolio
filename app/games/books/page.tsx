"use client";

import AccordionCustom from "@/components/AccordionCustom";
import { ModalImage } from "@/components/ui/modalImage";
import { YouTubeEmbed } from "@next/third-parties/google";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const accordionSections = [
  {
    id: "item-1", 
    triggerText: "Building", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center md:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden md:block" />
                <p>As the player, you have the ability to spend your hard-earned money on buying 1 functional object per day, and as many decorations as you can afford. You are able to reroll for a small fee, refreshing the objects that are available. New tiles can be unlocked and walls can be customised or removed between tiles.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-2", 
    triggerText: "Colour Palette", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center md:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden md:block" />
                <p>Customise every detail of your shop, even down to the colours used. With 8 changeable colours used throughout, alter these to fit your style and make the shop your own.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-3", 
    triggerText: "Serve Customers", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center md:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden md:block" />
                <p>Customers will come in throughout the day, rummaging through the shelves before going to the counter to be served by you or your temporary hired staff, giving a number of coins.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-4", 
    triggerText: "Restock Shelves", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center md:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden md:block" />
                <p>Once the customer has taken a book, the shelf will need to be restocked. You can see taken books by the red outline and once interacted with, a quick minigame will pop up for you to complete, allowing the customer to use that shelf again.</p>
            </div>
        </div>
    )
  },
  {
    id: "item-5", 
    triggerText: "My Work", 
    contentText: (
        <div className="w-full flex flex-col gap-1">
            <div className="inline-flex items-center text-center md:text-left"><TriangleRightIcon className="flex-none w-8 h-8 mr-8 hidden md:block" />
                <p>Everything other than the player models, which were purchased as a Synty pack, was programmed, designed and animated by myself.</p>
            </div>
        </div>
    )
  },
]

const images = [
    // {
    //     src: "/books/books-2.png",
    //     alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    // },
    {
        src: "/books/books-3.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/books/books-4.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/books/books-5.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/books/books-6.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/books/books-7.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    // {
    //     src: "/books/books-8.png",
    //     alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    // },
    {
        src: "/books/books-9.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/books/books-10.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
    {
        src: "/books/books-11.png",
        alt: "An image showing the ability wheel, which allows the player to select their abilities.",
    },
]

export default function BooksPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleCloseModal = () => {
        setSelectedImage(null);
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
            <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-3 lg:px-16 bg-background sm:items-center">
                <h1 className="text-4xl font-bold mb-4 text-center">Books Upon Books</h1>
                <h2 className="text-2xl font-bold mb-2">Game Details</h2>
                <div className="mb-4 text-lg text-center flex flex-col justify-center items-center gap-0">
                    <p>Genre: Casual, Simulation, Shop Builder</p>
                    <p>Languages: C++, Blueprints</p>
                    <p>Tools: Unreal Engine 5.3, Jetbrains Rider</p>
                    <p>Platform: Steam</p>
                    <p>Released: 5 Apr, 2025</p>
                    <Link href="https://store.steampowered.com/app/2999740/Books_Upon_Books/" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 hover:underline text-center">
                        <Image
                            className="dark:invert"
                            src="/steam.svg"
                            alt="Steam logo with link to books upon books steam page."
                            width={48}
                            height={48}
                        />
                    </Link>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="text-lg max-w-[90%] flex flex-col gap-3 text-center">
                    <p className="font-bold text-3xl">Game Brief</p>
                    <p>It&apos;s time to turn the page and create the bookshop of your dreams. Customise your Layout. Customise your Colour Scheme. Build bigger and bigger. A casual, simulation game where you get to build and tend to your own bookshop. </p>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="text-lg w-full max-w-[90%] flex flex-wrap-reverse md:flex-wrap justify-center mb-8 gap-8 text-center">
                    <div className="text-lg w-full max-w-[90%] md:max-w-[55%] flex flex-col mb-8 gap-8 text-center">
                        <p className="font-bold text-3xl">About The Game</p>
                        <p>A casual, simulation game in which you get to design, build upon, and upgrade your very own bookshop, before tending to it&apos;s customers during the day!</p>
                        
                        <AccordionCustom type="multiple" items={accordionSections} className="w-full"></AccordionCustom>
                    </div>
                    <div className="w-full max-w-full md:max-w-[40%] flex flex-col gap-4 justify-start">
                        <Image
                            className="w-full aspect-video rounded-md object-cover hover:border-2 hover:border-foreground focus:border-2 focus:border-foreground active:border-foreground active:border-2"
                            src="/books/books-1.png"
                            alt=""
                            width={640}
                            height={360}
                            onClick={() => { 
                                setSelectedImage("/books/books-1.png");
                            }}
                        />
                        <Image
                            className="w-full aspect-video rounded-md object-cover hover:border-2 hover:border-foreground focus:border-2 focus:border-foreground active:border-foreground active:border-2"
                            src="/books/books-2.png"
                            alt=""
                            width={640}
                            height={360}
                            onClick={() => { 
                                setSelectedImage("/books/books-2.png");
                            }}
                        />
                    </div>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />
                  
                <div className="w-full max-h-fit aspect-video youtube-container">
                    <YouTubeEmbed videoid="aiLqJiKg0cU"/>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="flex flex-wrap w-full justify-between gap-4 lg:gap-4">
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