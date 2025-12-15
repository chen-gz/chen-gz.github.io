from playwright.sync_api import sync_playwright

def verify_codeforces(page):
    # Go to the homepage
    page.goto("http://localhost:4321/")

    # Check for the Codeforces link in the header
    header_link = page.get_by_role("link", name="Codeforces").first
    header_link.click()

    # Wait for the Codeforces page to load
    page.wait_for_selector("h1")

    # Take a screenshot of the Codeforces listing page
    page.screenshot(path="verification/codeforces_listing.png")

    # Get all cells with text "A. Beautiful Average"
    # We want to ensure we don't see duplicate entries for the same problem.
    # In the screenshot previously, we saw duplicates for everything.
    # We can just check the count of a specific problem row.

    count = page.get_by_text("A. Beautiful Average").count()
    print(f"Count of 'A. Beautiful Average': {count}")
    # Note: count might be 2 if one is mobile and one is desktop, or if the structure uses it twice?
    # But in the table, it should appear once per row.
    # Actually, in the previous error "resolved to 2 elements", one was a cell and one was a row?
    # "1) <td ...>...</td>" and "2) <td ...>...</td>".
    # Wait, the error said:
    # 1) <td ...> A. Beautiful Average </td>
    # 2) <td ...> A. Beautiful Average </td> aka get_by_role("row", ...).get_by_role("cell")
    # This implies there were indeed duplicates or the locator was matching the same element in different ways?
    # No, strictly speaking "resolved to 2 elements" means 2 DOM elements.

    # Let's take the screenshot and manually inspect for this verification step.

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    try:
        verify_codeforces(page)
    except Exception as e:
        print(f"Error: {e}")
        page.screenshot(path="verification/error.png")
    finally:
        browser.close()
