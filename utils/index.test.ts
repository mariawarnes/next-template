import {
  deleteSearchParams,
  getMonthName,
  isExternalLink,
  slugify,
  toCustomDateString,
  updateSearchParams,
} from '.';

describe('isExternalLink', () => {
  test('should return true for valid http external link', () => {
    expect(isExternalLink('http://example.com')).toBeTruthy();
  });

  test('should return true for valid https external link', () => {
    expect(isExternalLink('https://example.com')).toBeTruthy();
  });

  test('should return false for internal links', () => {
    expect(isExternalLink('/internal-link')).toBeFalsy();
  });

  test('should return false for malformed URLs', () => {
    expect(isExternalLink('htt://example.com')).toBeFalsy();
  });
});

describe('slugify', () => {
  test('converts space to dash and lowercases', () => {
    expect(slugify('Test Slug')).toBe('test-slug');
  });

  test('removes special characters', () => {
    expect(slugify('Test @ Slug!')).toBe('test-slug');
  });
});

describe('updateSearchParams', () => {
  let windowSpy: jest.SpyInstance;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('updates search params correctly for single value', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: '/test',
        search: '?existing=param',
      },
    }));

    const newPathname = updateSearchParams('test', 'newValue');
    expect(newPathname).toBe('/test?existing=param&test=newvalue');
  });

  it('updates search params correctly for array of values', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: '/test',
        search: '',
      },
    }));

    const newPathname = updateSearchParams('arrayTest', ['value1', 'Value2']);
    expect(newPathname).toBe('/test?arrayTest=value1+value2');
  });
});

describe('deleteSearchParams', () => {
  let windowSpy: jest.SpyInstance;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('deletes specified search param', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: '/test',
        search: '?param1=value1&param2=value2',
      },
    }));

    const newPathname = deleteSearchParams('param1');
    expect(newPathname).toBe('/test?param2=value2');
  });

  it('deletes multiple specified search params', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: '/test',
        search: '?param1=value1&param2=value2&param3=value3',
      },
    }));

    const newPathname = deleteSearchParams(['param1', 'param3']);
    expect(newPathname).toBe('/test?param2=value2');
  });
});

describe('toCustomDateString', () => {
  test('formats date correctly', () => {
    const date = new Date('2024-03-01');
    expect(toCustomDateString(date)).toBe('Fri, 1 Mar');
  });
});

describe('getMonthName', () => {
  test('returns correct month name for index', () => {
    expect(getMonthName(0)).toBe('January');
    expect(getMonthName(11)).toBe('December');
  });
});
