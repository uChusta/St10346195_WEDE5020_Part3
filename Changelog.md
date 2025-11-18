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

- Added comments describing all the edits in the three modified files (`Products.html`, `CSS/Style.css`, `JS/Script.js`). 

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

Notes:
- The filter is client-side only and requires no server changes. If you'd like, I can add a text search, transitions for hiding/showing cards, or persist the selected filter in localStorage.

