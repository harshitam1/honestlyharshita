import type { BlogPost, Category } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '7',
    title: 'the hardest five weeks of my life',
    content: `For five weeks, my world shrank to the size of a classroom at West Coast EMT. Class at 7:45, home at 6:00, study, sleep. Rinse, repeat. It was the most challenging five weeks of my life, and if I'm being honest, I spent most of it complaining. I complained about my body aching from constantly sitting. I complained about my brain feeling like mush from the ten hour days filled with lectures, tests, and skills. I missed my slow mornings, my free time, my friends. I missed being able to breathe without a deadline hanging over my head. It was so easy to get lost in the hard moments as we scarfed down our lunch just so we'd have enough time to cram for our next quiz.

What I failed to realize in those moments of exhaustion and frustration was that I was beginning something bigger than EMT school. I was taking the first step towards my dream career and committing to my future. I learned far more than just medical procedures and BLS. I learned what it means to show up for people at their most vulnerable moments. I learned what sacrifice looks like. I learned how to keep going when every part of me wanted to quit. I was proving to myself that I was capable of more than I imagined.

Somewhere in the middle of it all, I found people. Six strangers that became my lifeline through those weeks. We sat shoulder to shoulder in the same plastic chairs day after day, breathing in the same stale air, learning the same hard things. We whispered jokes and muffled laughter when lectures dragged on too long. We quizzed each other on signs and symptoms. We shared candy and gum and exhaustion. The harsh truth is that I'll probably only see most of them a handful of times ever again. Maybe we will cross paths in a hospital one day, or maybe we'll meet for smores once more. But the daily intimacy of our shared experience is over. Our paths had crossed for a moment in time, and diverged as quickly as we met.

The morning after our last day, I woke up early out of habit. I didn't have to jump out of bed to start getting ready. I didn't have to pack my lunch or review notes while doing my makeup. So, there it was. That funny feeling. The bittersweetnes of finishing something that demanded everything. I spent so long wishing it was over but in the end I was left with emptiness where all that intensity used to live. I thought I'd feel relief, but instead I was met with a familiar sting. The impermanence of it all.

It seems all phases of life work this way. The job you think will last forever, the friend group that feels permanent, the routine that becomes so familiar you forget it's temporary. Everything is just a chapter, and every chapter must come to an end for the next one to begin. We build these little worlds, these brief ecosystems of relationships and rituals, and then we outgrow them. Or they dissolve. Or life simply moves on.

It's terrifying. And beautiful. Nothing, no matter how meaningful, is gauranteed to last. Yet impermanence is what gives weight to our experiences. If I knew those five weeks were going to last forever, would they have meant as much? If I knew I'd see my classmates every day for the next decade, would the conversations we had carry the same weight? The ticking clock makes everything more vivid, more urgent, more real. No matter how much I complained, I knew this particular version of hard was temporary. And maybe that's exactly what made me notice the small moments of connecion in all the chaos.

Now, it's time for the next chapter in my story.`,
    excerpt: "What EMT school taught me, besides Basic Life Support.",
    date: '2025-08-02',
    categories: ["Things I'm Learning", 'Personal'],
    readTime: 4
  },
  {
    id: '6',
    title: 'new beginnings',
    content: `New beginnings are scary, arent they? That's kind of why I started this blog. \n\nI'm someone who overthinks everything. As I stand on the edge of so many new chapters I figured I'd create a space to process it all out loud. College starts in a few short months. New city, new people, new everything. It's a lot. \n\nSometimes, I feel excited. Like really, genuinely hopeful. And then, bam, my thoughts knock me back. What if people dont like me? What if I dont make any friends? What if I struggle in my classes? What if, what if, what if…\n\n Instead of letting my thoughts spin endlessly in my head, I'm putting them here. On a page where they can exist outside of me. \n\nBut this isn't a space for every anxious thought in my head. I want this blog to be a way for me to document my life. I want to be able to look back and see how far I've come. I want to be able to capture all the in between and figuring it out.\n\nWelcome. I hope you'll stick around.`,
    excerpt: "Here's why I finally decided to start sharing my thoughts.",
    date: '2025-06-04',
    categories: ['Personal'],
    readTime: 4
  }
];

// Sort posts: pinned first, then by date (newest first)
blogPosts.sort((a, b) => {
  // If 'a' is pinned and 'b' is not, 'a' comes first.
  if (a.pinned && !b.pinned) return -1;
  // If 'b' is pinned and 'a' is not, 'b' comes first.
  if (!a.pinned && b.pinned) return 1;
  // Otherwise (both pinned or both not pinned), sort by date (newest first).
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

// Define base categories without counts
const baseCategories: Omit<Category, 'count'>[] = [
  {
    name: 'Health + Science',
    description: 'Volunteering, patient care, research, and reflections on my journey through healthcare and biology',
    color: 'bg-blue-50 text-blue-900 border-blue-200'
  },
  {
    name: 'Personal',
    description: 'Life reflections, personal growth, and navigating the messy process of figuring it all out',
    color: 'bg-purple-50 text-purple-900 border-purple-200'
  },
  {
    name: "Things I'm Learning",
    description: 'Current projects and skills — from EMT training to coding this website and everything in between',
    color: 'bg-amber-50 text-amber-900 border-amber-200'
  }
];

// Function to calculate counts and create the final categories array
const getCategoriesWithCounts = (posts: BlogPost[], baseCats: Omit<Category, 'count'>[]): Category[] => {
  return baseCats.map(baseCat => {
    const count = posts.filter(post => post.categories.includes(baseCat.name)).length;
    return {
      ...baseCat,
      count
    };
  });
};

// Export the categories with dynamically calculated counts
export const categories: Category[] = getCategoriesWithCounts(blogPosts, baseCategories);