import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                {/* Logo and Brand */}
                <div className="flex items-center gap-1">
                    <Image
                        src="/images/paygrid_icon_transparent.png"
                        alt="PayGrid Logo"
                        width={38}
                        height={38}
                        className="w-10 h-10"
                    />
                    <span className="text-xl font-bold text-white">PayGrid</span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a href="https://x.com/paygrid_sol"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        aria-label="X (Twitter)"
                    >
                        <Image
                            src="/images/twitter.png"
                            alt="X (Twitter)"
                            width={20}
                            height={20}
                            className="w-5 h-5 dark:invert"
                        />
                    </a>

                    <a
                        href="https://t.me"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-80  transition-opacity"
                        aria-label="Telegram"
                    >
                        <Image
                            src="/images/telegram.png"
                            alt="Telegram"
                            width={20}
                            height={20}
                            className="w-5 h-5 dark:invert"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
}
