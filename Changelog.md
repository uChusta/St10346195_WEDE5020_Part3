18 Sept 2025:

-ST10346195_WEDE5020_PART2 repository is ceated and intialised.

-Changelog is created. (commit: create Changelog.md)

-READ ME is Created and updated. (commit: Update README)

19 Sept 2025:
Proposal is updated with feedback from part 1.

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

- Miscellaneous:
	- Added comments describing all the edits in the three modified files (`Products.html`, `CSS/Style.css`, `JS/Script.js`).

Files changed today:
- `JS/Script.js` — validation functions, sidebar active-link logic, toggle behavior, comments
- `CSS/Style.css` — products grid rules, sidebar toggle + collapsible styles, responsive media queries, comments
- `Products.html` — wrapped product cards in `.products-grid`, added `id="top"`, added sidebar toggle and `id="sidebarMenu"`, added "Back to Top" link, and inline comments

Notes:
- UI uses simple alerts for form confirmations; these can be replaced with inline messages or AJAX calls in a follow-up.
- Breakpoint (1024px) is used as the desktop/tablet cutoff; can be adjusted if you prefer different behavior.

```


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


