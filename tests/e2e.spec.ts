import { test, expect } from '@playwright/test';

test.describe('Homepage Animations', () => {
  test('should show sections on scroll', async ({ page }) => {
    // Start from the index page
    await page.goto('http://localhost:5173/');

    // Wait for the main hero section to be loaded and visible
    const heroSection = page.locator('#home');
    await expect(heroSection).toBeVisible({ timeout: 10000 });

    // Find the heading for a section that is initially off-screen
    const processSectionHeading = page.getByRole('heading', { name: 'My Development Process' });

    // Scroll to this section to trigger the intersection observer
    await processSectionHeading.scrollIntoViewIfNeeded();

    // After scrolling, the animation should trigger. Let's find one of the cards
    // that should have animated in.
    const firstProcessCard = page.getByText('1. Discovery & Strategy');

    // Assert that the card is now visible
    // We give it a generous timeout to allow for the animation to complete.
    await expect(firstProcessCard).toBeVisible({ timeout: 2000 });

    // As a further check, let's find another section and see if it's also visible
    const techStackHeading = page.getByRole('heading', { name: 'My Go-To Technologies' });
    await techStackHeading.scrollIntoViewIfNeeded();
    const reactIcon = page.locator('#tech-stack').getByText('React');
    await expect(reactIcon).toBeVisible({ timeout: 2000 });
  });
});
