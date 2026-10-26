// The address is stored reversed and in pieces so it never appears as a plain string in
// the HTML or the JS bundle — that's enough to defeat the simple scrapers behind most spam.
// It's only assembled in the browser, when it's shown or a mail link is opened.
const user = 'ved.enoelro';
const domain = 'moc.liamg';

const unreverse = (s: string) => s.split('').reverse().join('');

export const contactEmail = () => `${unreverse(user)}@${unreverse(domain)}`;

/** Opens the visitor's mail app, optionally with a subject and body ready to send. */
export const openMail = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  const query = params.toString().replace(/\+/g, '%20');
  window.location.href = `mailto:${contactEmail()}${query ? `?${query}` : ''}`;
};
