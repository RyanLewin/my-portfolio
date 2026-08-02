import { Progress } from "radix-ui";
import "../globals.css";

export default function BookClubPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
            <main className="flex flex-1 gap-8 w-full flex-col items-center justify-center py-16 px-3 lg:px-16 bg-background text-center">
                <p className="text-3xl mb-8">Book Club</p>
                <div className="w-full">
                    <p className="text-2xl">Currently Reading</p>
                    <p className="mb-2 font-semibold">A Parade of Horribles: Dungeon Crawler Carl, Book 8</p>
                    <Progress.Root
                        className="relative h-6 w-full max-w-4/5 mx-auto overflow-hidden rounded-full bg-green-700/60"
                        style={{
                            // Fix overflow clipping in Safari
                            // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                            transform: "translateZ(0)",
                        }}
                        value={40}
                    >
                        <Progress.Indicator
                            className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-green-300 transition-transform duration-700"
                            style={{ transform: `translateX(-${60}%)` }}
                        />
                    </Progress.Root>

                </div>
                <div>
                    <p className="text-2xl">Previously Read</p>
                    <p className="mb-2 font-semibold">Reborn: Apocalypse, Book 4</p>
                    <p>Whilst having a few spelling and grammatical errors that grind my gears, I can&apos;t seem to stop reading this series. The pacing and action is non-stop and the concepts are well-developed, however I do feel like the emotions of the characters are a bit underdeveloped, with motivations unclear and plots a little too far-fetched in some cases.</p>
                </div>
                <p className="text-lg mb-8 text-center">This is a placeholder for the Book Club page. Content may be added here in the future.</p>
            </main>
        </div>
    );
}