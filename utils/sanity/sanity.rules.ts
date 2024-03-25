export const validateUrl = (rule: any) =>
  rule.custom((value: any) => {
    // Regular expression to match relative URLs or valid external links (http/https)
    const urlRegex = /^(\/[^\s]+|https?:\/\/[^\s]+)$/;

    if (!urlRegex.test(value)) {
      return 'Invalid URL format. It must be a relative URL ("/something") or a valid external link ("https://something" or "http://something").';
    }

    return true;
  });
