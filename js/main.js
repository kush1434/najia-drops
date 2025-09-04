// Accessibility: focus ring helper via CSS only
// Header year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Example: dynamically compute "To Next Well" if you track progress in JS
// (You can wire this to a real API later.)
(function updateToNextWell(){
const el = document.getElementById('to-next-well');
if (!el) return;
// Suppose goal per well is $10,000 and raised for current is $5,800
const goal = 10000, raised = 5800;
const remaining = Math.max(0, goal - raised);
el.textContent = `$${remaining.toLocaleString()}`;
})();