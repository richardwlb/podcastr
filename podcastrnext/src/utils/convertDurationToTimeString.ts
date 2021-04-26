export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  // Coloca um zero na frente se estiver por exemplo apenas 1 como número.
  const timeString = [hours, minutes, seconds]
  .map(unit => String(unit).padStart(2, '0'))
  .join(':');

  return timeString;
}
