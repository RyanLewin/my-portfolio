"use client";

import { cn } from "@/components/ui/utils";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

interface Filter {
    text: string,
    color: string,
}

const filters = {
    unreal: {text: "Unreal", color: "bg-blue-200"}, 
    cplus: {text: "C++", color:"bg-lime-200"}, 
    bp: {text: "Blueprints", color:"bg-green-200"}, 
    csharp: {text: "C#", color:"bg-red-200"}, 
    unity: {text: "Unity", color:"bg-orange-200"}, 
    steam: {text: "Steam", color:"bg-slate-400"}, 
    windows: {text: "Windows", color:"bg-fuchsia-200"}, 
    itch:{text: "itch.io", color:"bg-olive-400"}
}

interface CustomLink {
    id: string, 
    href: string, 
    img: string, 
    alt: string, 
    title: string, 
    contribution: string, 
    usedFilters: Array<Filter>, 
    timeline: string,
    imgClass: string,
}

function FilteredLink({ link, activeFilters }: { link: CustomLink, activeFilters: string[] }) {
    return (
        <Link key={link.id} href={link.href} className="max-w-[30%]">
                            <Image
                                className={cn("circular-image aspect-square self-center", link.imgClass)}
                                src={link.img}
                                alt={link.alt}
                                height={320}
                                width={320}
                            />
                            <p className="text-center text-2xl font-bold mb-4">{link.title}</p>
                            <p className="w-full text-justify mb-4">Contribution: {link.contribution}</p>
                            <div className="flex flex-wrap justify-start gap-2 w-full">
                                {Object.values(link.usedFilters).map((filter: Filter) => {
                                    const isSelected = activeFilters.includes(filter.text);
                                    return (
                                        <div 
                                            key={filter.text} 
                                            aria-disabled={!isSelected} 
                                            className={cn(
                                                "py-0.5 px-2.5 rounded-4xl border-2 border-slate-600 text-slate-950 text-lg align-baseline", 
                                                filter.color,
                                                !isSelected && "opacity-50" // Visually dim disabled tags
                                            )}>
                                            <p>{filter.text}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-center mt-4">{link.timeline}</p>
                        </Link>
    )
}

export { FilteredLink, filters };
export type { CustomLink };