"use client";

import { useEffect, useState } from "react";
import "../globals.css";
import "@/app/styles/filters.css"
import { cn } from "@/components/ui/utils";
import { Toggle } from "radix-ui";
import { CustomLink, FilteredLink, filters } from "../../components/ui/filteredLinks";

// const filterStyles = {unreal: "#9dfdff", cplus: "#85ffb4", bp: "#85ff8b"}

const links : CustomLink[] = [
    {
        id:"books", 
        href:"/games/books", 
        img:"/books/Books_300.png", 
        alt:"Icon for the game books upon books, showing books stacked on top of books", 
        title:"Books Upon Books", 
        contribution:"It’s time to turn the page and create the bookshop of your dreams. Customise your Layout. Customise your Colour Scheme. Build bigger and bigger. A casual, simulation game where you get to build and tend to your own bookshop. ", 
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
        contribution:"What started as a routine reconnaissance of S'ram quickly turned to chaos, and a critical engine failure for the Autumn. Battle your way through the planet of S'ram, a procedurally genrated planet. Upgrade the Autumn with whatever you can find, and try to escape the planet while managing the onslaught of the mysterious robots. Find resources by day, and defend the Autumn by night. Fight to survive a grueling mission against dangerous robotic foes, and escape to the safety of your fleet.", 
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
        contribution:"A multiplayer beat 'em up party game, where you run around various maps and arenas, picking up weapons such as the freeze gun, getting power ups to supersize or minify your character, and riding vehicles like trams, wheelbarrows and horses all with their own advantages and disadvantages. The game had a variety of game modes such as King of the Hill, Capture the Flag, Racing, etc.", 
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
        contribution:"FB was a Multiplayer Horror-Social Deduction game of Psycho Hound's IP, taking inspiration from the movie The Thing, and games such as Dead by Daylight and Dead Space 3. 7 survivors found themselves trapped in a remote tundra base with one killer Mutant. As the game began, one player is chosen to start out as the mutant. They are a tall, grotesque alien with different abilities, ranging from a burst of sprinting, to hurling rubble down a corridor at survivors, to shrieking and turning off all the fuse boxes, bringing the base into almost complete darkness. Their primary role was to down and infect all the other survivors and prevent anyone from escaping. The survivors had to try and fix the power, collect the data and then escape without being taken over by the Mutant.", 
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
        contribution:"This frisbee game featured single player and multiplayer functionality, where the player could play a full game of Ultimate Frisbee, with full career mode campaigns and games with all 4 quarters, overtime and sudden death. Unfortunately funding was pulled for the project due to monetary reasons and complications in discussions between the funders and directors, meaning the game was never finished or released despite being so close to beta testing. Originally, the game was only designed with the single player game loop in mind, but eventually had to go through a refactor to enable all the gameplay to network.", 
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
    
    const allFilterNames = Object.values(filters).map(f => f.text);

    const [activeFilters, setActiveFilters] = useState<string[]>(
        Object.values(filters).map(f => f.text) 
    );

    // useEffect(() => {
    //     console.log('Active filters updated:', activeFilters);
    // }, [activeFilters]);

    const handleToggle = (filterText: string) => {
        setActiveFilters(prev => 
            prev.includes(filterText) 
                ? prev.filter(t => t !== filterText)
                : [...prev, filterText]
        );
    };
    
    const handleSelectAll = () => { setActiveFilters(allFilterNames) };
    const handleClearAll = () => { setActiveFilters([]); };
    
    const visibleLinks = links.filter(link => {
        return link.usedFilters.some(filter => activeFilters.includes(filter.text));
    });

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
            <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-3 lg:px-16 bg-background sm:items-center">
                <p className="text-3xl mb-8">Games</p>
                <div className="w-full flex flex-wrap gap-2 mb-16 align-middle items-center justify-center">
                    <p className="mr-4">Filter:</p>
                    <div className="flex mr-4 gap-1">
                        <button onClick={handleSelectAll} className="hover:bg-slate-500 bg-slate-200 text-slate-950 py-0.5 px-2.5 rounded-4xl border-tint-bg text-lg align-baseline">All</button>
                        <button onClick={handleClearAll} className="hover:bg-slate-500 bg-slate-200 text-slate-950 py-0.5 px-2.5 rounded-4xl border-tint-bg text-lg align-baseline">None</button>
                    </div>
                    
                    {Object.values(filters).map((filter) => {
                        const isPressed = activeFilters.includes(filter.text);
                        return(
                                <Toggle.Root 
                                    key={filter.text} 
                                    onPressedChange={() => handleToggle(filter.text)}
                                    defaultPressed={isPressed} 
                                    pressed={isPressed}
                                    className={cn("py-0.5 px-2.5 rounded-4xl border-tint-bg text-slate-950 text-lg align-baseline data-[state=off]:bg-tint-bg hover:opacity-80 ", 
                                        isPressed ? filter.color : "bg-tint-bg")}
                                >
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
                            activeFilters={activeFilters}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}