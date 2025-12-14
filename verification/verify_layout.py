from playwright.sync_api import sync_playwright

def verify_layout():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        # Navigate to a blog post or the blog index
        # Assuming there is some content. I'll check what content exists first.
        # But first let's try to hit the root and see if we can find a blog link.
        page.goto("http://localhost:4321/")

        # Take a screenshot of the home page
        page.screenshot(path="verification/home.png")

        # Try to navigate to a blog post if possible, or just check the layout of the home page if it uses PostLayout
        # Looking at Layout.astro, it seems it is the base. PostLayout uses Layout.
        # I need to find a page that uses PostLayout.
        # Usually pages/blog/[...slug].astro would use it.

        # Let's list the routes to be sure or just try to find a link on the homepage.
        # I'll just screenshot the home page for now to see the general width.

        browser.close()

if __name__ == "__main__":
    verify_layout()
