import React, { useState, useEffect } from "react";
import { ChevronDown, Heart, Sparkles, Gift, Music, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// 51 Reasons why Omolara is loved and appreciated
const reasons = [
  "Your unconditional love and support",
  "The way you light up every room",
  "Your incredible strength and resilience",
  "How you always know what to say",
  "Your warm hugs that heal everything",
  "The sacrifices you've made for us",
  "Your infectious laugh and joy",
  "How you inspire us to be better",
  "Your wisdom and life lessons",
  "The way you listen without judgment",
  "Your beautiful heart and kindness",
  "How you make everyone feel special",
  "Your dedication to family",
  "The love you pour into everything",
  "Your grace under pressure",
  "How you celebrate our victories",
  "Your strength when we need you most",
  "The way you forgive so easily",
  "Your endless patience and understanding",
  "How you lead by example",
  "Your genuine interest in our lives",
  "The comfort of your presence",
  "Your ability to find joy in simple things",
  "How you encourage our dreams",
  "Your unwavering faith and hope",
  "The way you make a house a home",
  "Your creative spirit and talents",
  "How you bring people together",
  "Your selfless nature and generosity",
  "The pride you have in your children",
  "Your beautiful spirit and soul",
  "How you handle challenges with grace",
  "Your infectious optimism",
  "The way you love unconditionally",
  "Your strength as a woman",
  "How you've shaped who we are",
  "Your incredible work ethic",
  "The way you make memories special",
  "Your compassion for others",
  "How you've taught us about love",
  "Your ability to make us laugh",
  "The way you protect and care",
  "Your beautiful wisdom",
  "How you inspire confidence in us",
  "Your loyal and true heart",
  "The way you celebrate life",
  "Your role as our greatest teacher",
  "How you make us feel safe and loved",
  "Your amazing sense of humor",
  "The way you lead with love",
  "Because you are simply the best mom ever"
];

// Family messages
const familyMessages = [
  {
    name: "From Your Loving Family",
    message: "Happy 51st Birthday, Omolara! You are loved beyond measure.",
    relation: "With all our hearts"
  }
];

// Photo URLs - all 6 photos from the original project
const photoUrls = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663524411578/EgMGrCMTGSAVN7VtKArpU7/WhatsAppImage2026-04-15at10.59.47(1)_8febb041.jpeg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663524411578/EgMGrCMTGSAVN7VtKArpU7/WhatsAppImage2026-04-15at10.59.47_e6dae2ff.jpeg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663524411578/EgMGrCMTGSAVN7VtKArpU7/WhatsAppImage2026-04-15at10.59.48(1)_b7087031.jpeg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663524411578/EgMGrCMTGSAVN7VtKArpU7/WhatsAppImage2026-04-15at10.59.48(2)_f0473ef3.jpeg",
  "/images/photo5.jpeg",
  "/images/photo6.jpeg"
];

const gradients = [
  "from-[#FF6B6B] to-[#FFD700]",
  "from-[#FFD700] to-[#FF8C42]",
  "from-[#2ECC71] to-[#00D9FF]",
  "from-[#00D9FF] to-[#3498DB]",
  "from-[#FF6B6B] to-[#FF69B4]",
  "from-[#FFD700] to-[#2ECC71]",
  "from-[#FF8C42] to-[#FF6B6B]",
  "from-[#3498DB] to-[#2ECC71]",
];

export default function Home() {
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [celebrationActive, setCelebrationActive] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  // Auto-reveal cards on scroll
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll("[data-card-index]");
      cards.forEach((card) => {
        const index = parseInt(card.getAttribute("data-card-index") || "0");
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setRevealedCards((prev) => {
            const newSet = new Set(prev);
            if (!newSet.has(index)) {
              newSet.add(index);
              setRevealedCount(newSet.size);
            }
            return newSet;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCard = (index: number) => {
    const newSet = new Set(revealedCards);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
      setCelebrationActive(true);
      setTimeout(() => setCelebrationActive(false), 600);
    }
    setRevealedCount(newSet.size);
    setRevealedCards(newSet);
  };

  const getGradient = (index: number) => {
    return gradients[index % gradients.length];
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF6B6B] rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#2ECC71] rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#FFD700] rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Photo Carousel */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                {/* Photo Frame with Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FF6B6B] via-[#FFD700] to-[#2ECC71] rounded-2xl opacity-75 blur-lg animate-glow-pulse"></div>
                
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FF6B6B] bg-[#1A2332]">
                  <img
                    src={photoUrls[currentPhotoIndex]}
                    alt={`Omolara photo ${currentPhotoIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>

                {/* Photo Navigation */}
                <div className="flex justify-center gap-3 mt-8">
                  {photoUrls.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className="w-4 h-4 rounded-full transition-all duration-300 hover:scale-125"
                      style={{
                        backgroundColor: currentPhotoIndex === index ? "#FF6B6B" : "#FFD700",
                        opacity: currentPhotoIndex === index ? 1 : 0.5,
                        boxShadow: currentPhotoIndex === index ? "0 0 20px rgba(255, 107, 107, 0.6)" : "none"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Title and Message */}
            <div className="text-center md:text-left">
              <div className="mb-8 animate-slide-up">
                <h1 className="text-6xl md:text-7xl font-black mb-4 text-gradient-sunset">
                  Happy 51st
                </h1>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#2ECC71]">
                  Birthday
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 text-[#FFD700]" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Omolara
                </h3>
              </div>

              <p className="text-xl md:text-2xl mb-8 text-[#B0B8C8] font-light">
                51 reasons why you are loved and appreciated
              </p>

              <div className="flex justify-center md:justify-start mb-8 gap-3">
                <Heart className="w-12 h-12 animate-pulse text-[#FF6B6B]" />
                <Sparkles className="w-12 h-12 animate-bounce text-[#FFD700]" />
                <Heart className="w-12 h-12 animate-pulse text-[#2ECC71]" />
              </div>

              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById("reasons-section");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] text-[#0F1419] font-bold text-lg hover:shadow-lg hover:shadow-[#FF6B6B]/50 transition-all duration-300"
              >
                Discover the 51 Reasons
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#FF6B6B]" />
        </div>
      </section>

      {/* Progress Bar */}
      <div className="sticky top-0 z-50 h-1 bg-[#2A3F5F]">
        <div
          className="h-full bg-gradient-to-r from-[#FF6B6B] via-[#FFD700] to-[#2ECC71] transition-all duration-300"
          style={{ width: `${(revealedCount / reasons.length) * 100}%` }}
        ></div>
      </div>

      {/* 51 Reasons Section */}
      <section id="reasons-section" className="py-24 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF6B6B] rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gradient-sunset">
              51 Reasons We Love You
            </h2>
            <p className="text-xl text-[#B0B8C8] mb-4">
              Click on each card to reveal why Omolara is so special
            </p>
            <div className="flex justify-center items-center gap-3 text-[#FFD700]">
              <Gift className="w-5 h-5" />
              <span className="font-bold">{revealedCount} of {reasons.length} revealed</span>
              <Gift className="w-5 h-5" />
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                data-card-index={index}
                onClick={() => toggleCard(index)}
                className={`cursor-pointer transition-all duration-500 transform ${revealedCards.has(index) ? "animate-bounce-in" : ""}`}
              >
                <div
                  className={`relative p-6 rounded-xl min-h-40 flex items-center justify-center text-center transition-all duration-300 border-2 backdrop-blur-sm card-hover-lift overflow-hidden group`}
                  style={{
                    background: revealedCards.has(index)
                      ? `linear-gradient(135deg, ${gradients[index % gradients.length].split(" ").slice(1).join(" ")})`
                      : "#1A2332",
                    borderColor: revealedCards.has(index) ? "#FFD700" : "#2A3F5F",
                    boxShadow: revealedCards.has(index) ? `0 0 30px ${gradients[index % gradients.length].split(" ")[1]}` : "none"
                  }}
                >
                  {/* Shimmer Effect */}
                  {revealedCards.has(index) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
                  )}

                  <div className="absolute top-4 right-4 text-sm font-bold text-[#FFD700] bg-[#0F1419]/80 px-3 py-1 rounded-full">
                    #{index + 1}
                  </div>

                  {revealedCards.has(index) ? (
                    <div className="animate-in fade-in duration-300 relative z-10">
                      <p className="text-lg font-bold text-white drop-shadow-lg">
                        {reason}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-[#FF6B6B] animate-pulse" />
                      <p className="text-sm font-medium text-[#B0B8C8]">
                        Click to reveal
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Messages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2ECC71] rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gradient-emerald">
              Messages of Love
            </h2>
          </div>

          <div className="space-y-8">
            {familyMessages.map((msg, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl backdrop-blur-sm border-2 border-[#2ECC71] bg-gradient-to-r from-[#1A2332] to-[#2A3F5F] animate-slide-up card-hover-lift"
                style={{
                  animationDelay: `${index * 200}ms`,
                  boxShadow: "0 0 30px rgba(46, 204, 113, 0.3)"
                }}
              >
                <p className="text-xl mb-6 text-[#FFF8F3] font-light italic">
                  "{msg.message}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#FFD700] text-lg">
                      {msg.name}
                    </p>
                    <p className="text-sm text-[#2ECC71]">
                      {msg.relation}
                    </p>
                  </div>
                  <Heart className="w-8 h-8 text-[#FF6B6B] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-screen filter blur-3xl transform -translate-x-1/2"></div>
        </div>

        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="mb-12">
            <Sparkles className="w-16 h-16 mx-auto text-[#FFD700] animate-spin" style={{ animationDuration: "3s" }} />
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-8 text-gradient-sunset">
            Wishing You the Most Beautiful Year Ahead
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-[#B0B8C8] leading-relaxed">
            May your 51st year be filled with joy, love, endless blessings, and unforgettable moments. Thank you for being the incredible woman, mother, and inspiration that you are.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <Heart className="w-10 h-10 animate-pulse text-[#FF6B6B]" />
            <Heart className="w-10 h-10 animate-pulse text-[#FFD700]" style={{ animationDelay: "0.2s" }} />
            <Heart className="w-10 h-10 animate-pulse text-[#2ECC71]" style={{ animationDelay: "0.4s" }} />
            <Heart className="w-10 h-10 animate-pulse text-[#00D9FF]" style={{ animationDelay: "0.6s" }} />
            <Heart className="w-10 h-10 animate-pulse text-[#FF6B6B]" style={{ animationDelay: "0.8s" }} />
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-[#FF6B6B] text-[#0F1419] font-bold hover:shadow-lg hover:shadow-[#FF6B6B]/50"
              onClick={() => {
                if (audioRef.current) {
                  if (isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                  } else {
                    audioRef.current.play();
                    setIsPlaying(true);
                  }
                }
              }}
            >
              <Music className="w-5 h-5 mr-2" />
              {isPlaying ? "Stop Song" : "Play Birthday Song"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71]/10"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share the Love
            </Button>
          </div>

          {/* Audio player for birthday song */}
          <audio
            ref={audioRef}
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663535509700/e8tDwgRWTsH9HLjBo2iHJC/birthday-song_e6dc1f3c.wav"
            onEnded={() => setIsPlaying(false)}
          />

          <p className="text-lg font-bold text-[#FFD700]">
            With all our love,<br />
            <span className="text-[#2ECC71]">Your Loving Family</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#2A3F5F] bg-[#1A2332]">
        <p className="text-[#B0B8C8] text-lg font-semibold">
          🎂 Happy 51st Birthday, Omolara! 🎉
        </p>
        <p className="text-[#2A3F5F] text-sm mt-2">
          Celebrating the amazing woman you are
        </p>
      </footer>
    </div>
  );
}
