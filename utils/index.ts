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


export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, encodeURI(value));

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};