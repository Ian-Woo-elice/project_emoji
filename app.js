// 이모지 데이터
const emojiData = {
  "emojiCategories": [
    {
      "id": "smileys",
      "name": "표정 및 감정",
      "emojis": [
        {
          "emoji": "😀",
          "name": "웃는 얼굴",
          "unicode": "U+1F600",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "😃",
          "name": "눈이 큰 웃는 얼굴",
          "unicode": "U+1F603",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "😄",
          "name": "웃는 눈의 웃는 얼굴",
          "unicode": "U+1F604",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "❤️",
          "name": "빨간 하트",
          "unicode": "U+2764 U+FE0F",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "❤️‍🔥",
          "name": "불타는 하트",
          "unicode": "U+2764 U+FE0F U+200D U+1F525",
          "version": "13.1",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": false,
            "macOS": true
          }
        }
      ]
    },
    {
      "id": "people",
      "name": "사람 및 신체",
      "emojis": [
        {
          "emoji": "👍",
          "name": "엄지 위로",
          "unicode": "U+1F44D",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "👎",
          "name": "엄지 아래로",
          "unicode": "U+1F44E",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "👋",
          "name": "흔드는 손",
          "unicode": "U+1F44B",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        }
      ]
    },
    {
      "id": "animals",
      "name": "동물 및 자연",
      "emojis": [
        {
          "emoji": "🐶",
          "name": "강아지 얼굴",
          "unicode": "U+1F436",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "🐱",
          "name": "고양이 얼굴",
          "unicode": "U+1F431",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "🌹",
          "name": "장미",
          "unicode": "U+1F339",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        }
      ]
    },
    {
      "id": "food",
      "name": "음식 및 음료",
      "emojis": [
        {
          "emoji": "🍎",
          "name": "빨간 사과",
          "unicode": "U+1F34E",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "🍊",
          "name": "귤",
          "unicode": "U+1F34A",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "🍋‍🟩",
          "name": "라임",
          "unicode": "U+1F34B U+200D U+1F7E9",
          "version": "15.1",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": false,
            "macOS": true
          }
        }
      ]
    },
    {
      "id": "activities",
      "name": "활동",
      "emojis": [
        {
          "emoji": "⚽",
          "name": "축구공",
          "unicode": "U+26BD",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "🏀",
          "name": "농구공",
          "unicode": "U+1F3C0",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "🎮",
          "name": "비디오 게임",
          "unicode": "U+1F3AE",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        }
      ]
    },
    {
      "id": "travel",
      "name": "여행 및 장소",
      "emojis": [
        {
          "emoji": "🚗",
          "name": "자동차",
          "unicode": "U+1F697",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "✈️",
          "name": "비행기",
          "unicode": "U+2708 U+FE0F",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "🏠",
          "name": "집",
          "unicode": "U+1F3E0",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        }
      ]
    },
    {
      "id": "objects",
      "name": "물건",
      "emojis": [
        {
          "emoji": "💡",
          "name": "전구",
          "unicode": "U+1F4A1",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "📱",
          "name": "휴대폰",
          "unicode": "U+1F4F1",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "⌚",
          "name": "시계",
          "unicode": "U+231A",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        }
      ]
    },
    {
      "id": "symbols",
      "name": "기호",
      "emojis": [
        {
          "emoji": "🔥",
          "name": "불",
          "unicode": "U+1F525",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "✨",
          "name": "반짝이",
          "unicode": "U+2728",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "⛓️💥",
          "name": "끊어진 사슬",
          "unicode": "U+26D3 U+FE0F U+1F4A5",
          "version": "15.1",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": false,
            "macOS": true
          }
        }
      ]
    },
    {
      "id": "flags",
      "name": "국기",
      "emojis": [
        {
          "emoji": "🏁",
          "name": "체크무늬 깃발",
          "unicode": "U+1F3C1",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "🇰🇷",
          "name": "한국 국기",
          "unicode": "U+1F1F0 U+1F1F7",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        },
        {
          "emoji": "🇺🇸",
          "name": "미국 국기",
          "unicode": "U+1F1FA U+1F1F8",
          "version": "1.0",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": true,
            "macOS": true
          }
        }
      ]
    },
    {
      "id": "new",
      "name": "최신 이모지",
      "emojis": [
        {
          "emoji": "🙂↔️",
          "name": "좌우로 흔드는 머리",
          "unicode": "U+1F642 U+2194 U+FE0F",
          "version": "15.1",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": false,
            "macOS": true
          }
        },
        {
          "emoji": "🙂↕️",
          "name": "상하로 흔드는 머리",
          "unicode": "U+1F642 U+2195 U+FE0F",
          "version": "15.1",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": false,
            "macOS": true
          }
        },
        {
          "emoji": "🐦‍🔥",
          "name": "불사조",
          "unicode": "U+1F426 U+200D U+1F525",
          "version": "15.1",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": false,
            "macOS": true
          }
        },
        {
          "emoji": "🍄🟫",
          "name": "갈색 버섯",
          "unicode": "U+1F344 U+1F7EB",
          "version": "15.1",
          "support": {
            "Android": true,
            "iOS": true,
            "Windows": false,
            "macOS": true
          }
        }
      ]
    }
  ]
};

// 필터 상태 관리
const filterState = {
  searchText: '',
  platforms: {
    Android: true,
    iOS: true,
    Windows: true,
    macOS: true
  },
  currentCategory: 'all'
};

// DOM 요소
const elements = {
  emojiContainer: document.getElementById('emoji-container'),
  categoriesList: document.getElementById('categories-list'),
  searchInput: document.getElementById('emoji-search'),
  platformFilters: {
    Android: document.getElementById('android-filter'),
    iOS: document.getElementById('ios-filter'),
    Windows: document.getElementById('windows-filter'),
    macOS: document.getElementById('macos-filter')
  },
  modal: {
    container: document.getElementById('emoji-modal'),
    emoji: document.getElementById('modal-emoji'),
    title: document.getElementById('modal-title'),
    unicode: document.getElementById('modal-unicode'),
    version: document.getElementById('modal-version'),
    platforms: document.getElementById('modal-platforms'),
    close: document.getElementById('modal-close'),
    copyEmoji: document.getElementById('copy-emoji'),
    copyUnicode: document.getElementById('copy-unicode')
  },
  toast: {
    container: document.getElementById('toast'),
    message: document.getElementById('toast-message')
  },
  themeToggle: document.getElementById('theme-toggle')
};

// 초기화 함수
function init() {
  loadCategories();
  renderEmojis();
  setupEventListeners();
  loadThemePreference();
}

// 카테고리 로드
function loadCategories() {
  // '전체' 카테고리 추가
  const allCategoryItem = document.createElement('li');
  allCategoryItem.className = 'category-item';
  allCategoryItem.innerHTML = `<button class="category-btn active" data-category="all">전체</button>`;
  elements.categoriesList.appendChild(allCategoryItem);

  // 데이터에서 카테고리 추가
  emojiData.emojiCategories.forEach(category => {
    const categoryItem = document.createElement('li');
    categoryItem.className = 'category-item';
    categoryItem.innerHTML = `<button class="category-btn" data-category="${category.id}">${category.name}</button>`;
    elements.categoriesList.appendChild(categoryItem);
  });
}

// 이모지 렌더링
function renderEmojis() {
  elements.emojiContainer.innerHTML = '';

  // 필터링된 이모지 가져오기
  const filteredCategories = getFilteredCategories();

  if (filteredCategories.length === 0 || filteredCategories.every(cat => cat.emojis.length === 0)) {
    elements.emojiContainer.innerHTML = `
      <div class="no-results">
        <p>검색 결과가 없습니다.</p>
      </div>
    `;
    return;
  }

  // 카테고리별로 이모지 렌더링
  filteredCategories.forEach(category => {
    if (category.emojis.length > 0) {
      const section = document.createElement('div');
      section.className = 'emoji-section';
      section.innerHTML = `
        <h2 class="emoji-section-title">${category.name}</h2>
        <div class="emoji-grid"></div>
      `;
      elements.emojiContainer.appendChild(section);

      const gridElement = section.querySelector('.emoji-grid');
      
      // 이모지 아이템 추가
      category.emojis.forEach(emoji => {
        const isNew = parseFloat(emoji.version) >= 15.0;
        const emojiItem = document.createElement('div');
        emojiItem.className = 'emoji-item';
        emojiItem.setAttribute('data-emoji', JSON.stringify(emoji));
        emojiItem.innerHTML = `
          <span class="emoji-char">${emoji.emoji}</span>
          ${isNew ? '<span class="new-badge">New</span>' : ''}
          <i class="fas fa-info-circle emoji-info" aria-hidden="true"></i>
        `;
        gridElement.appendChild(emojiItem);
      });
    }
  });
}

// 필터링된 카테고리 가져오기
function getFilteredCategories() {
  let categories = emojiData.emojiCategories;
  
  // 특정 카테고리만 필터링
  if (filterState.currentCategory !== 'all') {
    categories = categories.filter(cat => cat.id === filterState.currentCategory);
  }

  // 카테고리와 이모지 필터링
  return categories.map(category => {
    const filteredEmojis = category.emojis.filter(emoji => {
      // 플랫폼 필터링 - 선택한 모든 플랫폼에서 지원하는 이모지만 표시
      const selectedPlatforms = Object.keys(filterState.platforms)
        .filter(platform => filterState.platforms[platform]);
      const platformMatch =
        selectedPlatforms.length === 0 ||
        selectedPlatforms.every(platform => emoji.support[platform]);
      
      // 검색어 필터링 - 대소문자 구분 없이 검색
      const searchText = filterState.searchText.toLowerCase().trim();
      const searchMatch = searchText === '' || 
        emoji.name.toLowerCase().includes(searchText) ||
        emoji.unicode.toLowerCase().includes(searchText) ||
        emoji.emoji.includes(filterState.searchText);
      
      return platformMatch && searchMatch;
    });

    return {
      ...category,
      emojis: filteredEmojis
    };
  }).filter(category => category.emojis.length > 0);
}

// 이벤트 리스너 설정
function setupEventListeners() {
  // 카테고리 전환
  elements.categoriesList.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
      const categoryButtons = document.querySelectorAll('.category-btn');
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      
      filterState.currentCategory = e.target.dataset.category;
      renderEmojis();
    }
  });

  // 검색 입력 - 실시간 검색
  elements.searchInput.addEventListener('input', (e) => {
    filterState.searchText = e.target.value;
    renderEmojis();
  });

  // 플랫폼 필터
  Object.keys(elements.platformFilters).forEach(platform => {
    const filterElement = elements.platformFilters[platform];
    if (filterElement) {
      filterElement.addEventListener('change', (e) => {
        filterState.platforms[platform] = e.target.checked;
        renderEmojis();
      });
    }
  });

  // 이모지 클릭 (복사)
  elements.emojiContainer.addEventListener('click', (e) => {
    const emojiItem = e.target.closest('.emoji-item');
    if (emojiItem) {
      const emoji = JSON.parse(emojiItem.dataset.emoji);
      
      // 정보 아이콘 클릭 시 모달 표시
      if (e.target.classList.contains('emoji-info')) {
        e.stopPropagation();
        showEmojiModal(emoji);
      } else {
        // 이모지 클릭 시 복사
        copyToClipboard(emoji.emoji);
        showToast(`"${emoji.name}" 복사되었습니다!`);
      }
    }
  });

  // 모달 닫기
  if (elements.modal.close) {
    elements.modal.close.addEventListener('click', () => {
      hideEmojiModal();
    });
  }

  // 모달 외부 클릭 시 닫기
  if (elements.modal.container) {
    elements.modal.container.addEventListener('click', (e) => {
      if (e.target === elements.modal.container || e.target.classList.contains('modal-backdrop')) {
        hideEmojiModal();
      }
    });
  }

  // 모달 내 이모지 복사
  if (elements.modal.copyEmoji) {
    elements.modal.copyEmoji.addEventListener('click', () => {
      const emoji = elements.modal.emoji.textContent;
      copyToClipboard(emoji);
      showToast('이모지가 복사되었습니다!');
    });
  }

  // 모달 내 유니코드 복사
  if (elements.modal.copyUnicode) {
    elements.modal.copyUnicode.addEventListener('click', () => {
      const unicode = elements.modal.unicode.textContent;
      copyToClipboard(unicode);
      showToast('유니코드가 복사되었습니다!');
    });
  }

  // 테마 전환
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
  }

  // ESC 키로 모달 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modal.container && !elements.modal.container.classList.contains('hidden')) {
      hideEmojiModal();
    }
  });
}

// 이모지 모달 표시
function showEmojiModal(emoji) {
  if (!elements.modal.container) return;
  
  elements.modal.emoji.textContent = emoji.emoji;
  elements.modal.title.textContent = emoji.name;
  elements.modal.unicode.textContent = emoji.unicode;
  elements.modal.version.textContent = `Emoji ${emoji.version}`;
  
  // 플랫폼 지원 정보 표시
  elements.modal.platforms.innerHTML = '';
  Object.keys(emoji.support).forEach(platform => {
    const badge = document.createElement('span');
    badge.className = `platform-badge ${emoji.support[platform] ? 'platform-supported' : 'platform-unsupported'}`;
    badge.textContent = platform;
    elements.modal.platforms.appendChild(badge);
  });
  
  elements.modal.container.classList.remove('hidden');
}

// 이모지 모달 숨기기
function hideEmojiModal() {
  if (elements.modal.container) {
    elements.modal.container.classList.add('hidden');
  }
}

// 클립보드에 복사
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .catch(err => {
        console.error('클립보드 복사 실패:', err);
        fallbackCopy(text);
      });
  } else {
    fallbackCopy(text);
  }
}

// 대체 복사 방법
function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('대체 복사 방법 실패:', err);
  }
  
  document.body.removeChild(textArea);
}

// 토스트 메시지 표시
function showToast(message) {
  if (elements.toast.container && elements.toast.message) {
    elements.toast.message.textContent = message;
    elements.toast.container.classList.remove('hidden');
    
    setTimeout(() => {
      elements.toast.container.classList.add('hidden');
    }, 2000);
  }
}

// 테마 전환
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  saveThemePreference(newTheme);
}

// 테마 선호도 저장 (localStorage 사용)
let currentTheme = 'light';

function saveThemePreference(theme) {
  currentTheme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
    console.error('테마 선호도 저장 실패:', e);
  }
}

// 테마 선호도 로드
function loadThemePreference() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.documentElement.setAttribute('data-color-scheme', saved);
      currentTheme = saved;
      return;
    }
  } catch (e) {
    console.error('테마 선호도 로드 실패:', e);
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    currentTheme = 'dark';
  } else {
    document.documentElement.setAttribute('data-color-scheme', 'light');
    currentTheme = 'light';
  }
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', init);
