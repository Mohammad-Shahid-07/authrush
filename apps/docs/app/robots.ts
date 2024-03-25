import type { MetadataRoute } from 'next';

// Define the robots function to generate the robots.txt file dynamically
const robots = (): MetadataRoute.Robots => ({
  // Define the rules for the robots.txt file
  rules: [
    {
      userAgent: '*', // Apply rules to all user-agents
      allow: '/', // Allow crawling of all directories
    },
  ],
});

// Export the robots function
export default robots;

// Enforce that this route is used as static rendering
export const dynamic = 'error';
