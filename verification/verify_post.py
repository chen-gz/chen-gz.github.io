from playwright.sync_api import sync_playwright

def verify_post_layout():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        # Navigate to a specific blog post
        # Based on file structure: content/blog/getting-started-with-astro/chapter-1.md
        # The slug generation depends on config, but likely it's getting-started-with-astro/chapter-1

        url = "http://localhost:4321/blog/getting-started-with-astro/chapter-1"
        response = page.goto(url)

        if response.status != 200:
             print(f"Failed to load page: {response.status}")
             # Try listing blog index to find a valid link
             page.goto("http://localhost:4321/blog")
             page.screenshot(path="verification/blog_index.png")

             # Click the first article link if available
             # This is a guess, I need to see the blog index structure or assume a link exists
             # But let's check the screenshot of blog index if the direct link fails
        else:
             page.screenshot(path="verification/post_page.png")

        browser.close()

if __name__ == "__main__":
    verify_post_layout()
