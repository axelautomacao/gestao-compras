export function createHeader({ title }) {
  const header = document.createElement("header");
  header.className = "app-header";

  const heading = document.createElement("h1");
  heading.textContent = title;

  const notificationButton = document.createElement('button');
  notificationButton.className = 'notification-button';
  notificationButton.textContent = '🔔';

  notificationButton.addEventListener('click', () => {
    const notificationCenter = document.querySelector('.notification-center');
    notificationCenter.classList.toggle('visible');
  });

  header.append(heading, notificationButton);
  return header;
}