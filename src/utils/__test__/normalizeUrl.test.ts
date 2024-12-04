import { normalizeUrl } from '../normalizeUrl ';

describe('normalizeUrl', () => {
  test('should remove "http://" from the beginning of a URL', () => {
    expect(normalizeUrl('http://example.com')).toBe('example.com');
  });

  test('should remove "https://" from the beginning of a URL', () => {
    expect(normalizeUrl('https://example.com')).toBe('example.com');
  });

  test('should return the URL without modification if it does not start with "http://" or "https://"', () => {
    expect(normalizeUrl('example.com')).toBe('example.com');
  });

  test('should validate a URL with a valid domain and optional path/query', () => {
    expect(normalizeUrl('http://example.com/path?query=1')).toBe(
      'example.com/path?query=1',
    );
    expect(normalizeUrl('https://sub.example.com')).toBe('sub.example.com');
    expect(normalizeUrl('example.com/path')).toBe('example.com/path');
  });

  test('should return an empty string for invalid URLs', () => {
    expect(normalizeUrl('http://')).toBe('');
    expect(normalizeUrl('https://')).toBe('');
    expect(normalizeUrl('example')).toBe('');
    expect(normalizeUrl('http://invalid_url')).toBe('');
    expect(normalizeUrl('https://example..com')).toBe('');
  });
});
