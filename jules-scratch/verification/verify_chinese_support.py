from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    try:
        page.goto("http://localhost:1313/")
        page.wait_for_load_state("networkidle") # Wait for network to be idle

        # Target the language switcher button specifically within the footer to avoid ambiguity.
        footer_switcher = page.locator("footer").get_by_role("button", name="Change language")
        expect(footer_switcher).to_be_visible() # Add an explicit wait
        footer_switcher.click()

        # After clicking, the language options menu appears.
        # Target the "简体中文" link within the footer's language menu.
        footer_options = page.locator("footer .hextra-language-options")
        chinese_option = footer_options.get_by_role("link", name="简体中文")

        # Wait for the link to be visible before clicking to handle any animations.
        expect(chinese_option).to_be_visible()
        chinese_option.click()

        # Wait for the URL to change to the Chinese version of the site.
        page.wait_for_url("http://localhost:1313/zh-cn/")

        # Assert that the title is correct for the Chinese homepage.
        expect(page).to_have_title("关于")

        # Take a screenshot for visual confirmation.
        page.screenshot(path="jules-scratch/verification/verification.png")
        print("Screenshot taken successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)