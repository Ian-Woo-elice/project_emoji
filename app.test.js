import {TextEncoder, TextDecoder} from 'util';
import {jest} from '@jest/globals';

let showCopyIndicator;

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
