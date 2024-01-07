export function getInitials(userName: string) {
  if (!userName) {
    return "";
  }
  const words = userName.split(" ");
  const initials = words
    .map((word: string) => word.charAt(0).toUpperCase())
    .join("");

  return initials.slice(0, 2);
}
