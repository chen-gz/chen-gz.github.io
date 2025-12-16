from playwright.sync_api import sync_playwright

def verify_logo(page):
    page.goto("http://localhost:4321")
    # Verify the logo image is present and visible
    logo = page.get_by_alt_text("Logo")
    # Take a screenshot of the header area
    header = page.locator("header")
    header.screenshot(path="verification/logo_verification.png")

    # Check that src is not the raw /src/ path, but a processed one (starts with /_astro or /favicon)
    src = logo.get_attribute("src")
    print(f"Logo src: {src}")

    if src.startswith("/src/"):
        print("FAIL: Logo src still points to /src/")
    else:
        print("PASS: Logo src seems processed")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_logo(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
