export function isExternalLink(link: string) {
  // Define regular expressions to match the desired patterns
  const httpLinkPattern = /^http:\/\/\w+/;
  const httpsLinkPattern = /^https:\/\/\w+/;
  if (httpLinkPattern.test(link) || httpsLinkPattern.test(link)) {
    return true;
  } else {
    return false;
  }
}
export function slugify(inputString: string): string {
  // Replace spaces with a single dash
  let stringWithoutSpaces = inputString.replace(/\s+/g, '-');
  // Lowercase the entire string
  stringWithoutSpaces = stringWithoutSpaces.toLowerCase();
  // Remove special characters using a regular expression
  stringWithoutSpaces = stringWithoutSpaces.replace(/[^\w-]/g, '');
  return stringWithoutSpaces;
}
