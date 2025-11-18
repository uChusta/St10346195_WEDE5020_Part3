18 Sept 2025:

-ST10346195_WEDE5020_PART2 repository is ceated and intialised.

-Changelog is created. (commit: create Changelog.md)

-READ ME is Created and updated. (commit: Update README)

19 Sept 2025:
-HTML project files from Part 1 are added to repository.
-CSS folder added and external CSS Style sheet is created and linked to to all pages.

23 Sept 2025: (Commit: new nav)

-Navigation bar layout is updatedslong with website layout.
-Footer is created with working links and styled to look like navigatio bar.
-Styling for body and font-type for website is added.
-Product cards styling s added.
-buttons styled with colour and responsiveness.
-Responsiveness is added and tested.

-forms are updated and styled
-added font size for paragraphs and headings is updated

25 Sept 2025:
-Favicon is added. (commit: favicon and hero image)
-Hero image is added and styled. (commit: favicon and hero image)

-READ ME is update with screenshots. (commit: Update README.md)
-Proposal is updated with feedback from part 1.

27 Oct 2025:

-Intitated St10346195_WEDE5020_Part3 repository and uploaded files from Part 2.
-Added Javscript folder and file  then linked to all the pages.
-implemented an interactive map on the Contact.html page along with adding commnets.
-Created `validateForm` functions for Repair and Contact form (in `JS/Script.js`).

12 Nov 2025:

- Fixed duplicate `validateForm` functions and split them into two clear handlers:
	- `validateContactForm` for the contact form (in `JS/Script.js`).
	- `validateRepairForm` for the repair form (in `JS/Script.js`).
	- Form handlers now use form-scoped selectors to avoid ID/name collisions.

- Converted product listings into a responsive grid layout:
	- Added `.products-grid` container classes in `Products.html` and CSS rules in `CSS/Style.css`.
	- Cards now adapt automatically (auto-fit columns with minmax).

- Sidebar improvements and responsiveness:
	- Added an active-link highlight behavior (JS) so clicked sidebar links show active state (`JS/Script.js`, `CSS/Style.css`).
	- Added a "Back to Top" sidebar link and `id="top"` anchor on the page (`Products.html`).
	- Implemented a hamburger toggle for tablets/phones: button, ARIA attributes, collapsible menu CSS and toggle logic in `JS/Script.js` and `CSS/Style.css`.
	- Sidebar stays open by default on desktop (width >1024px) and collapses on smaller screens; closes when clicking outside or after selecting a link.
	
Files updated:
- `JS/Script.js` — validation functions, sidebar active-link logic, toggle behavior, comments
- `CSS/Style.css` — products grid rules, sidebar toggle + collapsible styles, responsive media queries, comments
- `Products.html` — wrapped product cards in `.products-grid`, added `id="top"`, added sidebar toggle and `id="sidebarMenu"`, added "Back to Top" link, and inline comments


17 Nov 2025:

- Updated site background and hero behavior:
	- Set `body` background image to `../images/gaming1.png` and enabled `background-repeat: repeat` so the image tiles across the page.
	- Replaced the previous `background: #000` shorthand with explicit `background-image` and `background-color: #000` fallback so the image displays correctly and the color remains a fallback.
	- Added `filter: brightness(50%)` on the `body` in `CSS/Style.css` to subtly dim the background for better foreground readability.
	- Left `.hero-image` as a dedicated hero area to preserve the large visual header (hero kept as separate styling).

- CSS cleanup and misc fixes:
	- Removed a stray character and fixed several typos (`v`, `psuedoclass`, `syling`) and simplified verbose properties (e.g. `background: none repeat ...` → `background: transparent`).
	- Consolidated and removed duplicate rules and comments to improve maintainability.
	- Increased top navigation font size by 20% (`.navLinks a { font-size: 1.2em; }`) to improve readability.
	- Small responsive tweaks to navigation/footer and better consistency in spacing and indentation.

Files updated:
- `CSS/Style.css` — background image + repeat, brightness filter, nav font-size change, cleanup and formatting fixes.

18 Nov 2025:

- Added a client-side product filter and moved the control into the sidebar:
	- Moved the filter select into the sidebar menu (accessible label, inline styling for sidebar layout).
	- Added `data-category` attributes to each product `.card` in `Products.html` so products can be matched by category.
	- Implemented `filterProducts(category)` in `JS/Script.js` and a robust initializer that attaches to `#productFilter` whether the script runs before or after DOMContentLoaded.
	- Fixed a bug where the filter code was accidentally nested inside the sidebar hash-handling block (it only ran when a hash existed); the filter code now runs reliably.

Files updated:
- `Products.html` — moved filter into sidebar and added `data-category` attributes to product cards.
- `JS/Script.js` — added `filterProducts` and initialization logic; removed incorrectly nested filter code.

How to test:
- Open `Products.html` in a browser and use the "Filter" select in the sidebar to show only the selected category (All / Processors / Cases / Power Supplies).
- If the sidebar is collapsed on smaller screens open the hamburger (☰) to access the filter.

Additional 18 Nov 2025 updates:

- Accessibility and content improvements:
	- Updated `alt` attributes for all product images in `Products.html` to descriptive, accessible phrases (e.g. `Intel Core i3 processor logo`, `Bitfenix Aegis Tower PC case - yellow`, etc.).
	- Improved the About page image alt to `Assorted PC components and peripherals`.

- Forms and JavaScript processing:
	- Fixed malformed contact form markup in `Contact.html` (corrected `type="email"`, added `id="contactForm"`, removed duplicate `action` and inline `onclick`).
	- Added an `id="repairFormForm"` to the repair form in `Repairs.html` and removed inline onclick handlers.
	- Updated `JS/Script.js` to return boolean from validation functions and to attach submit handlers that prevent default submission, validate, show success messages, and reset forms. This makes client-side processing reliable and avoids accidental page reloads.

- SEO and crawling files:
	- Added `robots.txt` to the repository root and enabled a `Sitemap` entry pointing to the repository GitHub Pages sitemap.
	- Created `sitemap.xml` in the repository root with all main pages listed and replaced placeholder `example.com` entries with the GitHub Pages URL `https://uChusta.github.io/St10346195_WEDE5020_Part3/`.

- Commits made today:
	- "Accessibility: improve image alt text for products and about page" — updated alt attributes.
	- "Changelog: document background and CSS cleanup (17 Nov 2025); Add product filter and JS fix (18 Nov 2025)" — documented recent CSS and filter changes.
	- "SEO: set sitemap and robots to GitHub Pages URL" — added/updated `sitemap.xml` and `robots.txt`.
- "Forms: fix markup and add JS submit handlers for contact and repair forms" — fixed form markup and added JS handlers.
- "SEO Improvements and Copyright Update" — updated copyright in About.html to "CloudTech Inc." for consistency and added SEO enhancements in CSS/Style.css.

Files updated (summary):
- `Products.html` — filter moved to sidebar; `data-category` attributes added; alt text updated for product images.
- `JS/Script.js` — product filter, filter initializer, validation fixes, and form submit handlers.
- `CSS/Style.css` — background-image, repeat, brightness filter, nav font-size, cleanup; SEO improvements.
- `Contact.html` — corrected email input, added form id, removed inline onclick.
- `Repairs.html` — added form id, removed inline onclick.
- `About.html` — updated image alt; copyright updated to "CloudTech Inc.".
- `robots.txt`, `sitemap.xml` — created and set to GitHub Pages URLs.
