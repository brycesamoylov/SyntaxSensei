import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { CheckCircleIcon, BookOpenIcon, TrophyIcon } from './Icons';

// Fix: Defined a 'FeatureProps' interface for the component's props to ensure proper type checking for the 'children' prop.
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Feature = ({ icon, title, children }: FeatureProps) => (
  <div className="bg-slate-800/50 p-6 rounded-lg">
    <div className="flex items-center gap-4 mb-3">
      {icon}
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-slate-400">{children}</p>
  </div>
);

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-500 tracking-tight">
              Master Python, One Lesson at a Time.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
              Syntax Sensei is a gamified learning platform that makes mastering Python fun and effective. Learn through bite-sized lessons, get instant feedback, and track your progress.
            </p>
            <div className="mt-10">
              <Link
                to="/signin"
                className="bg-emerald-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105"
              >
                Start Learning for Free
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-950/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Syntax Sensei?</h2>
              <p className="text-slate-400 mt-2">A better way to learn to code.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Feature icon={<CheckCircleIcon className="w-8 h-8 text-emerald-500" />} title="Instant Feedback">
                Get immediate validation on your answers to learn faster and reinforce concepts effectively. No more waiting or guessing.
              </Feature>
              <Feature icon={<BookOpenIcon className="w-8 h-8 text-sky-500" />} title="Adaptive Lessons">
                Our system adjusts the difficulty based on your performance, ensuring you're always challenged but never overwhelmed.
              </Feature>
              <Feature icon={<TrophyIcon className="w-8 h-8 text-yellow-500" />} title="Gamified Experience">
                Earn experience points (XP), build up your daily streak, and climb the leaderboard. Learning to code has never been more motivating.
              </Feature>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8">
            <div className="container mx-auto px-4 text-center text-slate-500">
                <p>&copy; {new Date().getFullYear()} Syntax Sensei. All rights reserved.</p>
            </div>
        </footer>
      </main>
    </div>
  );
};
