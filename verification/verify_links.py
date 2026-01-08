from playwright.sync_api import Page, expect, sync_playwright
import os

def verify_glossary_links(page: Page):
    """
    Verifies that the glossary terms are links and tooltips still work.
    """
    # The build is in dist/, so we use a file:// URL to access the built HTML
    cwd = os.getcwd()
    file_path = f"file://{cwd}/dist/riemannian-geometry/chapter-0-differentiable-manifolds/02-differentiable-manifolds-tangent-space/index.html"

    print(f"Navigating to {file_path}")
    page.goto(file_path)

    # Locate a glossary term. We look for "tangent space" which should be wrapped in an <a> tag.
    # The selector '.glossary-term' should now be an 'a' tag.

    term = page.locator("a.glossary-term", has_text="tangent space").first
    expect(term).to_be_visible()

    # Check href attribute
    # It should be /glossary#tangent-space (or relative since it's static build, but Astro usually produces absolute or relative)
    # Since we are opening file://, the href might be interpreted relative to file.
    # Let's check the attribute value directly.
    href = term.get_attribute("href")
    print(f"Href found: {href}")

    # In static build, href="/glossary#tangent-space" typically.
    assert href == "/glossary#tangent-space" or href.endswith("glossary#tangent-space")

    # Hover over the term to check tooltip
    term.hover()

    # The tooltip should appear
    tooltip = page.locator("#glossary-tooltip")

    # Wait for visibility
    page.wait_for_selector("#glossary-tooltip.visible", state="visible")
    expect(tooltip).to_be_visible()

    # Check if the tooltip content is correct
    expect(tooltip).to_contain_text("tangent space")
    expect(tooltip).to_contain_text("A vector space that contains all possible directions")

    # Take a screenshot of the hover state
    page.screenshot(path="/home/jules/verification/verification_link_hover.png")
    print("Screenshot saved to /home/jules/verification/verification_link_hover.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_glossary_links(page)
        except Exception as e:
            print(f"Verification failed: {e}")
            exit(1)
        finally:
            browser.close()
