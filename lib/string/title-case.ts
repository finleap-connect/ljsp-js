function capitalizeWord(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

export function titleCase(str: string): string {
  return str.split(" ").map(capitalizeWord).join(" ");
}
