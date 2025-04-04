import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("April 16, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update countdown immediately
    updateCountdown();

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 md:py-12 bg-quiz-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-display font-bold mb-1 md:mb-2">Registration Deadline</h2>
          <p className="text-sm md:text-base text-gray-300">April 16, 2025</p>
        </div>
        
        <div className="grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="relative bg-quiz-accent/20 backdrop-blur-sm border border-quiz-accent/30 rounded-lg p-3 md:p-6 w-full sm:min-w-[80px] md:min-w-[100px] shadow-[0_0_15px_rgba(var(--quiz-accent-rgb),0.5)] animate-pulse-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-quiz-accent/20 to-transparent rounded-lg"></div>
              <span className="relative text-xl md:text-3xl font-bold text-quiz-accent">{timeLeft.days}</span>
            </div>
            <span className="text-xs md:text-base text-gray-300 mt-1 md:mt-2">Days</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative bg-quiz-accent/20 backdrop-blur-sm border border-quiz-accent/30 rounded-lg p-3 md:p-6 w-full sm:min-w-[80px] md:min-w-[100px] shadow-[0_0_15px_rgba(var(--quiz-accent-rgb),0.5)] animate-pulse-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-quiz-accent/20 to-transparent rounded-lg"></div>
              <span className="relative text-xl md:text-3xl font-bold text-quiz-accent">{timeLeft.hours}</span>
            </div>
            <span className="text-xs md:text-base text-gray-300 mt-1 md:mt-2">Hours</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative bg-quiz-accent/20 backdrop-blur-sm border border-quiz-accent/30 rounded-lg p-3 md:p-6 w-full sm:min-w-[80px] md:min-w-[100px] shadow-[0_0_15px_rgba(var(--quiz-accent-rgb),0.5)] animate-pulse-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-quiz-accent/20 to-transparent rounded-lg"></div>
              <span className="relative text-xl md:text-3xl font-bold text-quiz-accent">{timeLeft.minutes}</span>
            </div>
            <span className="text-xs md:text-base text-gray-300 mt-1 md:mt-2">Minutes</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative bg-quiz-accent/20 backdrop-blur-sm border border-quiz-accent/30 rounded-lg p-3 md:p-6 w-full sm:min-w-[80px] md:min-w-[100px] shadow-[0_0_15px_rgba(var(--quiz-accent-rgb),0.5)] animate-pulse-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-quiz-accent/20 to-transparent rounded-lg"></div>
              <span className="relative text-xl md:text-3xl font-bold text-quiz-accent">{timeLeft.seconds}</span>
            </div>
            <span className="text-xs md:text-base text-gray-300 mt-1 md:mt-2">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown; 