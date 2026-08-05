import { YouTubeEmbed } from "@next/third-parties/google";

export default function AUDLPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
            <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-3 sm:px-16 bg-background sm:items-center">
                <h1 className="text-4xl font-bold mb-4 text-center">Ultimate Frisbee Game</h1>
                <h2 className="text-2xl font-bold mb-2">Game Details</h2>
                <div className="mb-4 text-lg text-center">
                    <p>Genre: Sports</p>
                    <p>Languages: C++, Blueprints</p>
                    <p>Tools: Unreal Engine 4.26, Jetbrains Rider</p>
                    <p>Platform: Windows</p>
                    <p>Studio: PsychoHound</p>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="text-lg max-w-[90%] flex flex-col gap-3 text-center">
                    <p className="font-bold text-3xl">Game Brief</p>
                    <p>This frisbee game featured single player and multiplayer functionality, where the player could play a full game of Ultimate Frisbee, with full career mode campaigns and games with all 4 quarters, overtime and sudden death.</p>
                    <p>Unfortunately funding was pulled for the project due to monetary reasons and complications in discussions between the funders and directors, meaning the game was never finished or released despite being so close to beta testing.</p>
                    <p>Originally, the game was only designed with the single player game loop in mind, but eventually had to go through a refactor to enable all the gameplay to network.</p>
                </div>

                <div className="w-full h-0.5 bg-tint-bg my-8" />

                <div className="text-lg w-full max-w-[90%] flex flex-col mb-8 gap-8 text-center">
                    <p className="font-bold text-3xl">My Role</p>
                    <p>My role in this game was very spread out, working on Networking to allow server and client players to play through the game, to gameplay for the general game loop, and UI to keep track of and show the correct scores and team/player stats. Also I worked on the Audio programming, having to design a system to concatenate commentary and play the lines at the relevant points of gameplay.</p>

                
                    <div className="w-full max-h-fit aspect-video youtube-container">
                        <YouTubeEmbed videoid="6o-z0nubxZI"/>
                    </div>
                </div>
            </main>
        </div>
    );
}