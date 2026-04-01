import BannerImage from "../assets/banner.png";

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden px-12">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-700 text-sm font-medium px-5 py-2 rounded-full">
                        <img src="/Group-5.png" alt="" /> New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter ">
                        Supercharge Your Digital Workflow
                        <br />

                    </h1>

                    <p className="text-lg text-zinc-500 max-w-lg font-bold">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-gradient-to-r from-purple-700 to-purple-400  px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-purple-500/30 flex items-center gap-3 group text-white">
                            Explore Products
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </button>

                        <a
                            className="inline-flex justify-center items-center px-6 py-3 font-semibold text-purple-600 rounded-2xl
             border-2 border-purple-600
             bg-transparent
             hover:bg-purple-600 hover:text-white
             shadow hover:shadow-lg
             transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Get in Touch
                        </a>
                    </div>


                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative transition duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-md hover:shadow-xl ">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;