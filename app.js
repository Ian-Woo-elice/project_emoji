// 전체 이모지 데이터 (emoji.json)을 동적으로 불러옵니다.
let emojiData = { emojiCategories: [] };

// 이모지 카테고리 이름 매핑
const categoryMap = {
  "Smileys & Emotion": { id: "smileys", name: "표정 및 감정" },
  "People & Body": { id: "people", name: "사람 및 신체" },
  "Animals & Nature": { id: "animals", name: "동물 및 자연" },
  "Food & Drink": { id: "food", name: "음식 및 음료" },
  "Travel & Places": { id: "travel", name: "여행 및 장소" },
  "Activities": { id: "activities", name: "활동" },
  "Objects": { id: "objects", name: "물건" },
  "Symbols": { id: "symbols", name: "기호" },
  "Flags": { id: "flags", name: "국기" }
};

// 코드 포인트 문자열 생성
function toUnicodeString(emoji) {
  return Array.from(emoji)
    .map(ch => 'U+' + ch.codePointAt(0).toString(16).toUpperCase())
    .join(' ');
}

// 이모지 데이터를 로드하고 카테고리별로 그룹화
async function loadEmojiData() {
  const res = await fetch('emoji.json');
  const data = await res.json();
  const categories = {};

  data.forEach(item => {
    const map = categoryMap[item.category] || {
      id: item.category.toLowerCase().replace(/[^a-z0-9]+/gi, '-'),
      name: item.category
    };

    if (!categories[map.id]) {
      categories[map.id] = { id: map.id, name: map.name, emojis: [] };
    }

    categories[map.id].emojis.push({
      emoji: item.emoji,
      name: item.description,
      unicode: toUnicodeString(item.emoji),
      version: item.unicode_version || ''
    });
  });

  emojiData.emojiCategories = Object.values(categories);
}

// 필터 상태 관리
const filterState = {
  searchText: '',
  currentCategory: 'all'
};

// DOM 요소
const elements = {
  emojiContainer: document.getElementById('emoji-container'),
  categoriesList: document.getElementById('categories-list'),
  searchInput: document.getElementById('emoji-search'),
  modal: {
    container: document.getElementById('emoji-modal'),
    emoji: document.getElementById('modal-emoji'),
    title: document.getElementById('modal-title'),
    unicode: document.getElementById('modal-unicode'),
    version: document.getElementById('modal-version'),
    close: document.getElementById('modal-close'),
    copyEmoji: document.getElementById('copy-emoji'),
    copyUnicode: document.getElementById('copy-unicode')
  },
  themeToggle: document.getElementById('theme-toggle')
};

// 초기화 함수
async function init() {
  await loadEmojiData();
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
        const emojiItem = document.createElement('div');
        emojiItem.className = 'emoji-item';
        emojiItem.setAttribute('data-emoji', JSON.stringify(emoji));
        emojiItem.innerHTML = `
          <span class="emoji-char">${emoji.emoji}</span>
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
      // 검색어 필터링 - 대소문자 구분 없이 검색
      const searchText = filterState.searchText.toLowerCase().trim();
      const searchMatch = searchText === '' ||
        emoji.name.toLowerCase().includes(searchText) ||
        emoji.unicode.toLowerCase().includes(searchText) ||
        emoji.emoji.includes(filterState.searchText);

      return searchMatch;
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
        // 이모지 클릭 시 복사 후 표시
        copyToClipboard(emoji.emoji);
        showCopyIndicator(emojiItem);
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
    });
  }

  // 모달 내 유니코드 복사
  if (elements.modal.copyUnicode) {
    elements.modal.copyUnicode.addEventListener('click', () => {
      const unicode = elements.modal.unicode.textContent;
      copyToClipboard(unicode);
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

// 클릭한 이모지 위에 복사 완료 표시
function showCopyIndicator(emojiItem) {
  const indicator = document.createElement('div');
  indicator.className = 'copy-indicator';
  indicator.textContent = '복사 완료';
  emojiItem.appendChild(indicator);

  setTimeout(() => {
    emojiItem.removeChild(indicator);
  }, 1000);
}


// 테마 전환
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-color-scheme', newTheme);
  saveThemePreference(newTheme);
  updateThemeToggleIcon(newTheme);
}

// 테마 선호도 저장 (localStorage 대신 단순 변수 사용)
let currentTheme = 'light';

function saveThemePreference(theme) {
  currentTheme = theme;
}

// 테마 버튼 아이콘 업데이트
function updateThemeToggleIcon(theme) {
  if (!elements.themeToggle) return;
  const moon = elements.themeToggle.querySelector('.fa-moon');
  const sun = elements.themeToggle.querySelector('.fa-sun');
  if (moon && sun) {
    if (theme === 'dark') {
      moon.style.display = 'none';
      sun.style.display = 'block';
    } else {
      moon.style.display = 'block';
      sun.style.display = 'none';
    }
  }
}

// 테마 선호도 로드
function loadThemePreference() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    currentTheme = 'dark';
  } else {
    document.documentElement.setAttribute('data-color-scheme', 'light');
    currentTheme = 'light';
  }
  updateThemeToggleIcon(currentTheme);
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', init);

export { showCopyIndicator, toggleTheme, loadThemePreference };
