import { BlogPost, Category } from '../types/blog';

export const blogPosts: BlogPost[] = [
  // Your blog posts will go here
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
  { name: 'personal', color: 'bg-coral-100 text-coral-800' },
  { name: 'thoughts', color: 'bg-blue-100 text-blue-800' },
  { name: 'life lessons', color: 'bg-green-100 text-green-800' },
  { name: 'confidence', color: 'bg-pink-100 text-pink-800' },
  { name: 'self-reflection', color: 'bg-yellow-100 text-yellow-800' }
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