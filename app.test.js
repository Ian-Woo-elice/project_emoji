import { TextEncoder, TextDecoder } from 'util';
import { jest } from '@jest/globals';

let showCopyIndicator;
let loadEmojiData;
let emojiData;

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

describe('showCopyIndicator', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  beforeAll(() => {
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
  });

  test('creates and removes indicator', async () => {
    document.body.innerHTML = '<div class="emoji-item"></div>';
    ({ showCopyIndicator } = await import('./app.js'));
    const emojiItem = document.querySelector('.emoji-item');
    showCopyIndicator(emojiItem);
    const indicator = emojiItem.querySelector('.copy-indicator');
    expect(indicator).not.toBeNull();
    expect(indicator.textContent).toBe('복사 완료');

    jest.advanceTimersByTime(2000);
    expect(emojiItem.querySelector('.copy-indicator')).toBeNull();
  });
});

describe('loadEmojiData', () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url === 'emoji.json') {
        return Promise.resolve({
          json: () => Promise.resolve([
            { emoji: '🙂', description: 'smile', category: 'Smileys & Emotion' }
          ])
        });
      }
      if (url === 'special_chars.json') {
        return Promise.resolve({
          json: () => Promise.resolve([
            { emoji: '…', description: 'ellipsis', category: '문장 부호' }
          ])
        });
      }
      return Promise.reject(new Error('unknown url'));
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('includes special character category', async () => {
    ({ loadEmojiData, emojiData } = await import('./app.js'));
    await loadEmojiData();
    const categoryNames = emojiData.emojiCategories.map((c) => c.name);
    expect(categoryNames).toContain('문장 부호');
  });
});
