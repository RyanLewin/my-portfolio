"use client";

import { useState } from "react";
import "../globals.css";
import "@/app/styles/filters.css"
import { cn } from "@/components/ui/utils";
import { Toggle } from "radix-ui";
import { CustomLink, FilteredLink, filters } from "../filteredLinks";

// const filterStyles = {unreal: "#9dfdff", cplus: "#85ffb4", bp: "#85ff8b"}

const links : CustomLink[] = [
    {
        id:"books", 
        href:"/games/books", 
        img:"/books/Books_300.png", 
        alt:"Icon for the game books upon books, showing books stacked on top of books", 
        title:"Books Upon Books", 
        contribution:"Self-designed and published game.", 
        usedFilters:[filters.unreal, filters.cplus, filters.bp, filters.steam], 
        timeline:"January 2024 - March 2025",
        imgClass:"",
    },
    {
        id:"astro", 
        href:"/games/astro", 
        img:"/astronaught/astro_icon.png", 
        alt:"Icon for the game astronaught, showing an open doorway into a wasteland tinted heavily red", 
        title:"Astronaught", 
        contribution:"AI for the robot enemies, making use of State Tree's in Unreal to spawn enemies and fight the player. Programmed the ship's turrets and upgradables, which auto fire on the enemies. Implemented day/night cycle that rotated the sun and moon and controlled spawning. UI implementation with compass towards the ship.", 
        usedFilters:[filters.unreal, filters.cplus, filters.bp, filters.itch], 
        timeline:"September 2023", 
        imgClass:"object-[50%_40%]"
    },
    {
        id:"ruff-n-tumble", 
        href:"/games/ruff-n-tumble", 
        img:"/ruff_n_tumble/ruffntumble.jpg", 
        alt:"Icon for the game Ruff and Tumble, showing the title of the game and a bunch of chaotic animals and bean guys fighting", 
        title:"Ruff 'N' Tumble", 
        contribution:"Implemented the mall and lobby systems, allowing for waiting for and joining games. Added gamemodes, 'King of the Hill', 'Slushy', 'Diner Dash' and 'Racing'. Also UI and bug fixing based on work from before I joined.", 
        usedFilters:[filters.unreal, filters.cplus, filters.bp], 
        timeline:"January 2022 - August 2023", 
        imgClass:"object-[50%_40%]"
    },
    {
        id:"horror", 
        href:"/games/horror", 
        img:"/horror/multiplayer-horror.png", 
        alt:"Image showing the back of a worker looking out of a large doorway with a creature looming over him with tentacles growing out of it's face.", 
        title:"Multiplayer Horror", 
        contribution:"Implemented voice chat with switching of channels. Added character mechanics for alien abilities, popups components for pickup items and doors. In charge of UI, game modes and minigames.", 
        usedFilters:[filters.unreal, filters.cplus, filters.bp, filters.windows], 
        timeline:"January 2023 - August 2023", 
        imgClass:"object-[50%_40%]"
    },
    {
        id:"audl", 
        href:"/games/audl", 
        img:"/audl/AUDL.png", 
        alt:"Icon for the game AUDL, showing a badge with a frisbee and with the letters AUDL inside", 
        title:"Ultimate Frisbee", 
        contribution:"Implemented networking for joining games and player synchronisation, general gameplay loop and UI, audio programming for commentary.", 
        usedFilters:[filters.unreal, filters.cplus, filters.bp, filters.windows], 
        timeline:"January 2022 - December 2022", 
        imgClass:"object-[50%_40%]"
    },
]

// let shownLinks = [];

// function Filter(tagList) {
//     tagList.forEach(tag => {
//         if (tag.selected === false)
//         {

//         }
//     });
// }

export default function Games() {
    const [activeFilters, setActiveFilters] = useState<string[]>(
        Object.values(filters).map(f => f.text) 
    );

    const handleToggle = (filterText: string, isPressed: boolean) => {
        setActiveFilters(prev => 
            isPressed 
                ? [...prev, filterText] 
                : prev.filter(t => t !== filterText)
        );
    };
    
    const visibleLinks = links.filter(link => {
        // Show the game if it has AT LEAST ONE tag that is currently active.
        return link.usedFilters.some(filter => activeFilters.includes(filter.text));
    });

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
        <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-3 lg:px-16 bg-background sm:items-center">
            <p className="text-3xl mb-8">Games</p>
            <div className="w-full flex flex-wrap gap-2 mb-16 align-middle items-center justify-center">
                <p className="mr-4">Filter:</p>
                {Object.values(filters).map((filter) => {
                    const isPressed = activeFilters.includes(filter.text);
                    return(
                            <Toggle.Root 
                                key={filter.text} 
                                onPressedChange={(state) => handleToggle(filter.text, state)}
                                defaultPressed={isPressed} className={cn("py-0.5 px-2.5 rounded-4xl border-tint-bg text-slate-950 text-lg align-baseline data-[state=off]:bg-tint-bg ", filter.color)}>
                                <p>{filter.text}</p>
                            </Toggle.Root>
                    );
                })}
            </div>

            <div className="flex flex-wrap gap-8 w-full justify-evenly">
                {visibleLinks.map(link => (
                    <FilteredLink 
                        key={link.id} 
                        link={link} 
                        activeFilters={activeFilters} // Pass active state down so cards can gray out tags
                    />
                ))}
            </div>
        </main>
        </div>
    );
}