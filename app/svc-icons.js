/* Service icons: flat tiles in the style of the Tulpar app icon, one colour with a slight top-to-bottom gradient and a
   white glyph. Each entry is [top colour, bottom colour, glyph]; glyphs are drawn on a 24-unit grid. */
const S = 'fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const F = 'fill="#fff"';
export const ICONS = {
  // pay and order
  bazar: ["#ffb347", "#f06a0a", `<path ${F} d="M5 8.5h14l-1.1 11.2a1.5 1.5 0 0 1-1.5 1.3H7.6a1.5 1.5 0 0 1-1.5-1.3z"/><path ${S} d="M9 10V7a3 3 0 0 1 6 0v3"/>`],
  topup: ["#5be07a", "#1f9e3c", `<rect ${S} x="7" y="2.5" width="10" height="19" rx="2.5"/><path ${S} d="M12 8.5v6M9 11.5h6"/><path ${S} d="M11 18.5h2"/>`],
  utilities: ["#ffd84a", "#f09a00", `<path ${F} d="M12 2.5a6.5 6.5 0 0 0-3.8 11.8c.5.4.8 1 .8 1.6V17h6v-1.1c0-.6.3-1.2.8-1.6A6.5 6.5 0 0 0 12 2.5z"/><path ${S} d="M9.5 19.5h5M10.5 21.8h3"/>`],
  taxi: ["#656b78", "#2a2e37", `<path ${F} d="M10 3.5h4l.5 2h-5z"/><path ${F} fill-rule="evenodd" d="M6.6 7.5h10.8l2.1 5.2c.9.4 1.5 1.3 1.5 2.3v3a1 1 0 0 1-1 1h-1v1.2a1.3 1.3 0 0 1-2.6 0V19H7.6v1.2a1.3 1.3 0 0 1-2.6 0V19H4a1 1 0 0 1-1-1v-3c0-1 .6-1.9 1.5-2.3zm1.3 2-1.3 3.2h10.8l-1.3-3.2zM6.5 14.3a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm11 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"/>`],
  food: ["#ff7b6b", "#d93025", `<path ${F} d="M3 12.5h18a9 9 0 0 1-5 7.6V21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.9a9 9 0 0 1-5-7.6z"/><path ${S} d="M8.5 9.5c-.9-1 .9-2 0-3.2M12 9.5c-.9-1.3.9-2.5 0-4.2M15.5 9.5c-.9-1 .9-2 0-3.2"/>`],
  installments: ["#a98cff", "#5f3fe0", `<circle ${S} cx="12" cy="12" r="8.5"/><path ${F} d="M12 12V3.5A8.5 8.5 0 0 1 20.5 12z"/><path ${S} d="M12 12 6 18"/>`],
  abroad: ["#7b93ff", "#3346d6", `<path ${F} d="M21.3 2.7 2.8 10.2c-.8.3-.8 1.4 0 1.7l6.2 2.6 9.3-8-7.2 9.4.2 5.5c0 .9 1.2 1.2 1.7.4l2.9-4.4 4.4 2.3c.6.3 1.3 0 1.4-.7l2.2-15.5c.1-.6-.5-1-1.1-.8z"/>`],
  gov: ["#e5566a", "#9c1b33", `<path ${F} d="M12 2.5 3 7.2V9h18V7.2z"/><path ${S} d="M6 11.5v6M10 11.5v6M14 11.5v6M18 11.5v6"/><path ${F} d="M3 19h18v2.5H3z"/>`],
  // information
  weather: ["#5fbfff", "#1a6fe0", `<circle ${F} cx="9" cy="8.5" r="3.6"/><path ${S} d="M9 1.8v1.2M3.2 4l.9.9M2.3 9.2h1.2M14.8 4l-.9.9"/><path ${F} stroke="#2a86f0" stroke-width="1.6" d="M8.5 20.5a4 4 0 0 1-.4-8 5.5 5.5 0 0 1 10.6 1.5 3.3 3.3 0 0 1-.4 6.5z"/>`],
  rates: ["#3ad6a6", "#0e8a6a", `<path ${S} d="M4 8.5h14.5M15 5l3.5 3.5L15 12M20 15.5H5.5M9 12l-3.5 3.5L9 19"/>`],
  air: ["#a6dc52", "#4e9414", `<path ${S} d="M3 8.5h10.5a3 3 0 1 0-3-3M3 12.5h15.5a3 3 0 1 1-3 3M3 16.5h7"/>`],
  prices: ["#ff7eb6", "#d02e74", `<path ${F} fill-rule="evenodd" d="M3 4.5v6.3c0 .5.2 1 .6 1.4l8.7 8.7c.8.8 2 .8 2.8 0l5.8-5.8c.8-.8.8-2 0-2.8l-8.7-8.7c-.4-.4-.9-.6-1.4-.6H5a2 2 0 0 0-2 2zm4.5 1.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z"/>`],
  buses: ["#8f9bb3", "#4b5670", `<path ${F} fill-rule="evenodd" d="M7 2.5h10a3 3 0 0 1 3 3V18a1 1 0 0 1-1 1h-.5v1.5a1.3 1.3 0 0 1-2.6 0V19H8.1v1.5a1.3 1.3 0 0 1-2.6 0V19H5a1 1 0 0 1-1-1V5.5a3 3 0 0 1 3-3zM6.5 6v5.5h11V6zm1.2 8.3a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm8.6 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"/>`],
  trains: ["#52c47a", "#16773c", `<path ${F} fill-rule="evenodd" d="M8 2h8a4 4 0 0 1 4 4v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a4 4 0 0 1 4-4zM7 6.5v4.5h10V6.5zm1.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/><path ${S} d="m7.5 19-2 3M16.5 19l2 3"/>`],
  flights: ["#4fc8ff", "#0a7fd0", `<path ${F} d="M21.5 3.3c-.7-.7-2-.6-2.9.3l-4 4L5.3 5 3.5 6.8l7.6 4.4-3.7 3.9-2.8-.4L3 16.2l3.7 1.6L8.3 21.5l1.5-1.5-.4-2.8 3.9-3.7 4.4 7.6 1.8-1.8-2.6-9.3 4-4c.9-.9 1-2.2.3-2.9z"/>`],
  maps: ["#ff8459", "#d9421a", `<path ${F} fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7c0 5 6 11.5 6.3 11.8.4.4 1 .4 1.4 0C13 20.5 19 14 19 9a7 7 0 0 0-7-7zm0 4.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4z"/>`],
  lottery: ["#c97cf2", "#8a2cc0", `<path ${F} fill-rule="evenodd" d="M3 6.5a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 6.5V9a3 3 0 0 0 0 6v2.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5V15a3 3 0 0 0 0-6zM12 8.2l1.1 2.3 2.5.3-1.8 1.7.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.7 2.5-.3z"/>`],
  church: ["#5d7fd6", "#26398a", `<path ${F} d="M10.6 2h2.8v5.2h5.1V10h-5.1v12h-2.8V10H5.5V7.2h5.1z"/>`],
  sport: ["#ffc93d", "#e08900", `<path ${F} d="M7 3h10v6.5a5 5 0 0 1-10 0z"/><path ${S} d="M7 5H4.5v1.5A3 3 0 0 0 7.5 9.5M17 5h2.5v1.5a3 3 0 0 1-3 3M12 14.5V18M8 21h8M9.5 18h5"/>`],
  // government links
  passport: ["#5d7fd6", "#26398a", `<rect ${F} x="5" y="2.5" width="14" height="19" rx="2"/><circle cx="12" cy="10.5" r="3.4" fill="none" stroke="#3352a8" stroke-width="1.6"/><path stroke="#3352a8" stroke-width="1.6" stroke-linecap="round" d="M9 17h6"/>`],
  fines: ["#656b78", "#2a2e37", `<path ${F} d="M6 2.5h12a1 1 0 0 1 1 1v17.2l-2.3-1.5-2.4 1.5-2.3-1.5-2.3 1.5-2.4-1.5L5 20.7V3.5a1 1 0 0 1 1-1z"/><path stroke="#3d424d" stroke-width="1.8" stroke-linecap="round" d="M8.5 7.5h7M8.5 11h7M8.5 14.5h4"/>`],
  vote: ["#e5566a", "#9c1b33", `<path ${F} d="M3.5 12h17v8.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z"/><path ${F} d="M8 3.5h8v9H8z"/><path stroke="#c23048" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" d="m10 8 1.5 1.5L14.3 6.5M7 14.5h10"/>`],
  tests: ["#3ad6a6", "#0e8a6a", `<path ${F} d="M12 3.5 1.5 8.5 12 13.5l10.5-5z"/><path ${S} d="M6 11v4.5c0 1.5 2.7 3 6 3s6-1.5 6-3V11M21 9v6"/>`],
  appeals: ["#7b93ff", "#3346d6", `<rect ${F} x="2.5" y="5" width="19" height="14" rx="2"/><path stroke="#4a5ee8" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round" d="m3.5 6.5 8.5 6.5 8.5-6.5"/>`],
  parcel: ["#d9a066", "#9a5b22", `<path ${F} d="M12 2 3 6.5v11L12 22l9-4.5v-11z"/><path stroke="#b07335" stroke-width="1.6" fill="none" stroke-linejoin="round" d="M3.5 6.8 12 11l8.5-4.2M12 11v10.5M7.5 4.3l8.6 4.4"/>`],
  court: ["#ffc93d", "#e08900", `<path ${S} d="M12 3v17.5M8 20.5h8M5 6.5h14"/><path ${F} d="M5 7.5 2.2 13.5h5.6zM19 7.5l-2.8 6h5.6z"/><path ${F} d="M2 13.5a3 3 0 0 0 6 0zM16 13.5a3 3 0 0 0 6 0z"/>`],
  forms: ["#a98cff", "#5f3fe0", `<path ${F} d="M6 2.5h8.5L19 7v13.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1z"/><path stroke="#7154e8" stroke-width="1.7" stroke-linecap="round" d="M8.5 11.5h7M8.5 15h7M8.5 18h4"/>`]
};
/* one icon as HTML: a tile of `size` px */
export function icon(id, size) {
  const i = ICONS[id];
  if (!i) return "";
  return `<span class="svc-ico" style="--a:${i[0]};--b:${i[1]}${size ? `;--s:${size}px` : ""}" aria-hidden="true"><svg viewBox="0 0 24 24">${i[2]}</svg></span>`;
}
