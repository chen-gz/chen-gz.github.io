from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    try:
        # Navigate directly to the Chinese homepage
        page.goto("http://localhost:1313/zh-cn/")

        # Wait for the page to be fully loaded
        page.wait_for_load_state("networkidle")

        # Assert that the title is correct for the Chinese homepage
        # The title should be "Ggeta" as defined in content/_index.zh-cn.md
        expect(page).to_have_title("Ggeta")

        # Take a screenshot for visual confirmation
        page.screenshot(path="jules-scratch/verification/verification.png")
        print("Screenshot of Chinese homepage taken successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)