import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero pb-20 pt-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 top-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-2">
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse-soft" />
              <span className="text-sm font-medium text-accent-foreground">
                1,200+ Expert Tutors Online Now
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Connect with Expert Tutors,{' '}
                <span className="text-gradient-primary">Learn Anything</span>
              </h1>
              <p className="max-w-lg text-lg text-muted-foreground">
                Discover personalized learning experiences with top-rated tutors
                across 100+ subjects. Book sessions that fit your schedule and
                accelerate your growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild>
                <Link href="/tutors">
                  Find a Tutor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/register">
                  <Play className="mr-2 h-5 w-5" />
                  Become a Tutor
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <Users className="h-6 w-6 text-primary " />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    50K+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Active Students
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <Star className="h-6 w-6 text-chart-4" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    4.9
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Average Rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <Image
                src={heroIllustration}
                alt="Learning illustration"
                className="w-full h-auto object-cover animate-float"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-4 bottom-24 animate-fade-up rounded-2xl border border-border bg-card p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Session Booked!</p>
                  <p className="text-sm text-muted-foreground">
                    Math with Dr. Smith
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-4 top-24 animate-fade-up rounded-2xl border border-border bg-card p-4 shadow-lg"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-secondary text-chart-4"
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Amazing tutor!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
