export const regex = {
  // Only alphanumeric characters (letters A-Z, a-z, and digits 0-9). Minimum length of 5 characters.
  bondNo: /^[a-zA-Z0-9]{5,}$/,
  // Email addresses according to RFC 5322 standard
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([a-zA-Z0-9-]+\.)*[a-zA-Z]{2,})$/,
  // UK postcodes including UK overseas territories (will accept non-existent postcodes that are pattern compliant, e.g. 'AA11 1AA') https://webarchive.nationalarchives.gov.uk/ukgwa/+/http://www.cabinetoffice.gov.uk/media/291370/bs7666-v2-0-xsd-PostCodeType.htm
  postcode:
    /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/,
  // Only letters, hyphens, and apostrophes. No minimum or maximum.
  name: /^[A-Za-z\-']+$/,
  // Only numbers with optional leading '+' sign (country code), and with hyphens or spaces. Minimum length of 6, maximum length of 20.
  phone: /^\+?[0-9\- ]{6,20}$/,
  // https://community.zscaler.com/zenith/s/question/0D54u00009jZpJGCA0/international-passport-numbers-regex
  // Only alphanumeric characters (letters A-Z, a-z, and digits 0-9). Minimum length of 7, maximum length of 10.
  passportNo: /^[A-Za-z0-9]{7,10}$/,
  // Alphanumeric characters (letters A-Z, a-z, and digits 0-9) and symbols !, @, #, $, %, *, (, ), _, +, ^ or &. Minimum length of 4, maximum length of 64.
  password: /^[0-9a-zA-Z!@#$%*()_+^&]{4,64}$/,
  // Numbers only
  number: /^[0-9]*$/,
};
export const validationMessage = {

  email: {
    invalid:
      "Your email address should contain an '@'. For example, name@domain.co.uk.",
  },
  postcode: {
    invalid:
      'Please enter a valid UK postcode. For example, NR9 4DD or CT18 8HB',
  },
  name: {
    invalid: 'Please only enter letters, hyphens, and/or apostrophes.',
  },
  phone: {
    invalid:
      "Please enter a valid phone number. You can can include the country code with a '+' sign, and use hyphens and/or spaces.",
  },
  passportNo: {
    invalid:
      'Your passport number should contain 7 to 10 letters and/or numbers. For example, C01X00T47 or 107182890',
    required:
      'Please enter your passport number. You can find your passport number on the photo page of your passport.',
  },
  password: {
    invalid:
      "Password must be between 4 and 64 characters long. It can contain letters, numbers, and any of the following symbols: '!', '@', '#', '$', '%', '*', '(', ')', '_', '+', '^', or '.'",
  },
};
