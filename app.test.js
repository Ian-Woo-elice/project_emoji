import { jest } from '@jest/globals';

let showCopyIndicator;
let loadEmojiData;
let emojiData;
let loadCategories;
let renderEmojis;
let filterState;

// TextEncoder / TextDecoder global 등록
beforeAll(() => {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
});

describe('showCopyIndicator', () => {
  beforeEach(() => {
    jest.useFakeTimers();
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
  const originalFetch = global.fetch; // 원본 저장

  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url === 'emoji.json') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { emoji: '🙂', description: 'smile', category: 'Smileys & Emotion' }
          ])
        });
      }
      if (url === 'special_chars.json') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { emoji: '…', description: 'ellipsis', category: '문장 부호' }
          ])
        });
      }
      if (url === 'emoticons.json') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { emoji: '(･ω･)', description: 'happy', category: '이모티콘' }
          ])
        });
      }
      return Promise.reject(new Error('unknown url'));
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    global.fetch = originalFetch; // 복원
  });

  test('includes special character category', async () => {
    ({ loadEmojiData, emojiData } = await import('./app.js'));
    await loadEmojiData();
    const categoryNames = emojiData.emojiCategories.map((c) => c.name);
    expect(categoryNames).toContain('문장 부호');
  });

  test('includes emoticon category', async () => {
    ({ loadEmojiData, emojiData } = await import('./app.js'));
    await loadEmojiData();
    const categoryNames = emojiData.emojiCategories.map((c) => c.name);
    expect(categoryNames).toContain('이모티콘');
  });
});

describe('loadCategories', () => {
  beforeEach(async () => {
    jest.resetModules();
    document.body.innerHTML = '<select id="category-select"></select>';
    ({ loadEmojiData, loadCategories, emojiData } = await import('./app.js'));
    await loadEmojiData();
  });

  test('populates category options', () => {
    loadCategories();
    const select = document.getElementById('category-select');
    expect(select.options.length).toBe(emojiData.emojiCategories.length + 1); // '전체' 포함
  });
});

describe('kaomoji grid responsiveness', () => {
  beforeEach(async () => {
    jest.resetModules();
    document.body.innerHTML = `
      <select id="category-select"></select>
      <div id="emoji-container"></div>
    `;
    global.fetch = jest.fn((url) => {
      if (url === 'emoji.json') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { emoji: '🙂', description: 'smile', category: 'Smileys & Emotion' }
          ])
        });
      }
      if (url === 'special_chars.json') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { emoji: '…', description: 'ellipsis', category: '문장 부호' }
          ])
        });
      }
      if (url === 'emoticons.json') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { emoji: '(･ω･)', description: 'happy', category: '이모티콘' }
          ])
        });
      }
      return Promise.reject(new Error('unknown url'));
    });

    ({ loadEmojiData, loadCategories, renderEmojis, filterState } = await import('./app.js'));
    await loadEmojiData();
    loadCategories();
    filterState.currentCategory = 'kaomoji';
  });

  test('adds kaomoji-grid class when emoticon category selected', () => {
    renderEmojis();
    const grid = document.querySelector('.emoji-grid');
    expect(grid.classList.contains('kaomoji-grid')).toBe(true);
  });
});