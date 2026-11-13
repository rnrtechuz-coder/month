const reasons = [
  'Ты умеешь делать даже обычные дни особенными.',
  'Твоя улыбка делает моё сердце счастливее.',
  'Ты даришь мне чувство спокойствия и тепла.',
  'С тобой я становлюсь настоящим.',
  'Ты понимаешь меня без лишних слов.',
  'В твоём присутствии всё становится светлее.',
  'Ты умеешь замечать важные мелочи.',
  'Я очень рад, что встретил именно тебя.',
  'Ты вдохновляешь меня быть лучше.',
  'Ты делаешь мою жизнь красивее.',
  'Мне нравится твой смех и твоя искренность.',
  'Ты превращаешь обыденность в маленькие чудеса.',
  'С тобой мне хочется мечтать и строить планы.',
  'Ты умеешь делать мой день ярче одним взглядом.',
  'Мне нравится, как ты заботишься обо мне.',
  'Ты особенная не только для меня, но и для всех вокруг.',
  'С тобой всегда хочется быть рядом.',
  'Ты умеешь успокаивать даже в самый сложный момент.',
  'Мне нравится, как ты любишь и как ты умеешь любить.',
  'Ты стала частью самого важного в моей жизни.',
  'Твоя энергия делает мой мир добрее.',
  'С тобой даже обычные прогулки превращаются в воспоминания.',
  'Ты вдохновляешь меня на большее.',
  'Ты умеешь наполнять сердце теплом.',
  'Мне нравится, как ты смотришь на мир.',
  'Ты умеешь делать мою душу счастливой.',
  'Каждый день с тобой становится ценнее.',
  'Ты не просто важна для меня — ты особенная.',
  'Мне нравится вся ты: нежность, смех, энергия и тепло.',
  'Я очень благодарен за то, что ты есть в моей жизни.',
  'С тобой моя история становится красивее каждый день.'
];

const secretMessages = [
  'Ты делаешь мои дни немного счастливее.',
  'Я очень рад, что однажды встретил именно тебя.',
  'Мне нравится видеть твою улыбку.',
  'Ты стала особенной частью моей жизни.',
  'Я хочу создавать с тобой ещё больше воспоминаний.',
  'Спасибо, что ты есть у меня.',
  'Это маленькое послание — напоминание о том, как ты мне дорога.'
];

const quizData = [
  {
    question: 'Где мы впервые познакомились?',
    options: ['На улице.', 'На флюорографии.', 'В школе.', 'В интернете.'],
    answer: 1
  },
  {
    question: 'Кто первым предложил подписать?',
    options: ['Руслан.', 'Самишка.', 'Мы одновременно.'],
    answer: 1
  },
  {
    question: 'Что ты дала мне при знакомстве?',
    options: ['Телефон.', 'Ручку.', 'Записку.', 'Книгу.'],
    answer: 1
  },
  {
    question: 'Какого числа мы познакомились?',
    options: ['8 октября.', '14 октября.', '20 октября.', '14 ноября.'],
    answer: 0
  },
  {
    question: 'Какого числа мы начали встречаться?',
    options: ['8 октября.', '14 октября.', '20 октября.', '14 ноября.'],
    answer: 1
  },
  {
    question: 'Сколько дней прошло между знакомством и началом отношений?',
    options: ['3 дня.', '6 дней.', '10 дней.', '14 дней.'],
    answer: 1
  },
  {
    question: 'Что стало началом нашей истории?',
    options: ['Обычный разговор.', 'Та самая ручка.', 'Случайное сообщение.', 'Совместная фотография.'],
    answer: 1
  },
  {
    question: 'Какой день стал особенным для нас?',
    options: ['Только 8 октября.', 'Только 14 октября.', 'Оба дня.', '14 ноября.'],
    answer: 2
  },
  {
    question: 'Что я хочу повторить ещё много раз?',
    options: ['Наше знакомство.', 'Наши первые разговоры.', 'Наши счастливые моменты.', 'Всё это вместе.'],
    answer: 3
  },
  {
    question: 'Что для меня важнее всего в наших отношениях?',
    options: ['Доверие.', 'Подарки.', 'Красивые фотографии.', 'Романтические прогулки.'],
    answer: 0
  },
  {
    question: 'Сколько месяцев мы отмечаем 14 ноября?',
    options: ['Один месяц.', 'Два месяца.', 'Полгода.', 'Год.'],
    answer: 0
  },
  {
    question: 'Ты готова написать со мной ещё миллион таких историй?',
    options: ['Конечно!', 'Даже больше миллиона!', 'Я уже пишу нашу историю!'],
    answer: [0, 1, 2]
  }
];

const introScreen = document.getElementById('introScreen');
const enterStoryBtn = document.getElementById('enterStoryBtn');
const reasonsGrid = document.getElementById('reasonsGrid');
const secretGrid = document.getElementById('secretGrid');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizMessage = document.getElementById('quizMessage');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const quizCount = document.getElementById('quizCount');
const musicToggle = document.getElementById('musicToggle');
const volumeControl = document.getElementById('volumeControl');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const memoryInput = document.getElementById('memoryInput');
const memoryStatus = document.getElementById('memoryStatus');

let currentQuestion = 0;
let score = 0;
let quizFinished = false;
let isPlaying = false;
let audioEnabled = false;
let audioContext;
let audioGain;
let synthInterval;
let mp3Audio = new Audio('media/track.m4a');
mp3Audio.loop = true;
mp3Audio.preload = 'auto';
mp3Audio.volume = Number(volumeControl.value);

function createFloatingHearts() {
  const container = document.querySelector('.floating-hearts');
  for (let index = 0; index < 22; index += 1) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = '❤';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.setProperty('--drift', `${(Math.random() - 0.5) * 120}px`);
    heart.style.setProperty('--float-duration', `${10 + Math.random() * 12}s`);
    heart.style.fontSize = `${0.8 + Math.random() * 1.4}rem`;
    container.appendChild(heart);
  }
}

function createPetals() {
  const container = document.querySelector('.petals-layer');
  for (let index = 0; index < 18; index += 1) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = `${Math.random() * 100}%`;
    petal.style.setProperty('--drift', `${(Math.random() - 0.5) * 120}px`);
    petal.style.setProperty('--float-duration', `${12 + Math.random() * 12}s`);
    petal.style.opacity = `${0.3 + Math.random() * 0.6}`;
    container.appendChild(petal);
  }
}

function setupRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function initNavHighlight() {
  const sections = [...document.querySelectorAll('main section, .final-screen')];
  const navLinks = [...document.querySelectorAll('.topnav a')];

  const setActiveLink = () => {
    let currentId = 'hero';
    const midpoint = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      if (section.offsetTop <= midpoint) {
        currentId = section.id || 'hero';
      }
    });

    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', active);
    });
  };

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();
}

function initIntro() {
  enterStoryBtn.addEventListener('click', async () => {
    introScreen.classList.add('hidden');
    await startMusic();
  });
}

function buildReasons() {
  reasonsGrid.innerHTML = reasons
    .map(
      (reason, index) => `
        <div class="reason-card" tabindex="0" aria-label="Причина ${index + 1}">
          <div class="reason-inner">
            <div class="reason-face front">
              <span class="reason-number">${index + 1}</span>
              <strong>❤</strong>
              <p>Нажми, чтобы узнать</p>
            </div>
            <div class="reason-face back">
              <span class="reason-number">${index + 1}</span>
              <p>${reason}</p>
            </div>
          </div>
        </div>
      `
    )
    .join('');

  document.querySelectorAll('.reason-card').forEach((card) => {
    const flipCard = () => card.classList.toggle('active');
    card.addEventListener('click', flipCard);
    card.addEventListener('pointerdown', flipCard);
    card.addEventListener('touchstart', flipCard, { passive: true });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        flipCard();
      }
    });
  });
}

function buildSecrets() {
  secretGrid.innerHTML = secretMessages
    .map(
      (message, index) => `
        <div class="secret-card" data-index="${index}">
          <button type="button" aria-label="Открыть секрет ${index + 1}" aria-expanded="false">Открыть секрет ${index + 1}</button>
          <div class="secret-content" aria-live="polite">${message}</div>
        </div>
      `
    )
    .join('');

  document.querySelectorAll('.secret-card button').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.secret-card');
      const isOpen = card.classList.toggle('open');
      const label = isOpen
        ? `Скрыть секрет ${Number(card.dataset.index) + 1}`
        : `Открыть секрет ${Number(card.dataset.index) + 1}`;
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', label);
      button.textContent = label;
    });
  });
}

function toggleMemoryNote(forceVisible = false) {
  const note = document.querySelector('.memory-note');
  if (!note) return;
  const shouldShow = forceVisible || quizFinished;
  note.classList.toggle('hidden', !shouldShow);
}

function renderQuiz() {
  if (quizFinished) {
    return;
  }

  toggleMemoryNote(false);
  const question = quizData[currentQuestion];
  quizCount.textContent = `${currentQuestion + 1} / ${quizData.length}`;
  quizQuestion.textContent = question.question;
  quizOptions.innerHTML = question.options
    .map(
      (option, index) => `
        <button class="quiz-option" data-index="${index}" type="button">${option}</button>
      `
    )
    .join('');

  quizMessage.textContent = '';
  nextQuestionBtn.classList.add('hidden');

  const buttons = [...quizOptions.querySelectorAll('.quiz-option')];
  buttons.forEach((button) => {
    button.addEventListener('click', () => handleAnswer(button, Number(button.dataset.index), question));
  });
}

function handleAnswer(button, selectedIndex, question) {
  if (quizFinished) {
    return;
  }

  const isCorrect = Array.isArray(question.answer)
    ? question.answer.includes(selectedIndex)
    : question.answer === selectedIndex;

  if (isCorrect) {
    score += 1;
    quizMessage.textContent = 'Умничка, Самишка! ❤️';
  } else {
    quizMessage.textContent = 'Ничего страшного, любимая, я тебе напомню ❤️';
  }

  const optionButtons = [...quizOptions.querySelectorAll('.quiz-option')];
  optionButtons.forEach((optionButton) => {
    const idx = Number(optionButton.dataset.index);
    const shouldHighlight = Array.isArray(question.answer)
      ? question.answer.includes(idx)
      : question.answer === idx;
    optionButton.classList.toggle('correct', shouldHighlight);
    if (idx === selectedIndex && !shouldHighlight) {
      optionButton.classList.add('wrong');
    }
    optionButton.disabled = true;
  });

  nextQuestionBtn.textContent = currentQuestion === quizData.length - 1 ? 'Обнять Руслана ❤️' : 'Следующий вопрос';
  nextQuestionBtn.classList.remove('hidden');

  nextQuestionBtn.onclick = () => {
    if (currentQuestion < quizData.length - 1) {
      currentQuestion += 1;
      renderQuiz();
      return;
    }

    quizFinished = true;
    quizQuestion.textContent = 'Ты прошла наше маленькое путешествие по воспоминаниям!';
    quizOptions.innerHTML = '';
    quizMessage.textContent = `Ты ответила правильно на ${score} из ${quizData.length} вопросов.`;
    nextQuestionBtn.textContent = 'Обнять Руслана ❤️';
    nextQuestionBtn.classList.remove('hidden');
    toggleMemoryNote(true);
    nextQuestionBtn.onclick = () => {
      document.getElementById('final').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  };
}

function initCounter() {
  const startDate = new Date(2026, 9, 14, 0, 0, 0);
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const updateTime = () => {
    const now = Date.now();
    const elapsed = now - startDate.getTime();

    const totalSeconds = Math.max(0, Math.floor(elapsed / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  };

  updateTime();
  setInterval(updateTime, 1000);
}

function initEnvelope() {
  const envelope = document.querySelector('.envelope');
  const letter = document.getElementById('letterCard');

  envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
    letter.classList.toggle('visible');
  });
}

function initGift() {
  const giftBox = document.getElementById('giftBoxBtn');
  const giftMessage = document.getElementById('giftMessage');

  giftBox.addEventListener('click', () => {
    giftBox.classList.toggle('open');
    giftMessage.classList.toggle('visible');
  });
}

function initScrollButtons() {
  const onScroll = () => {
    if (window.scrollY > 420) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initMemoryField() {
  if (!memoryInput) {
    return;
  }

  const savedValue = localStorage.getItem('love-story-memory');
  if (savedValue) {
    memoryInput.value = savedValue;
    memoryStatus.textContent = 'Твой ответ уже сохранён на этом устройстве.';
  }

  memoryInput.addEventListener('input', () => {
    localStorage.setItem('love-story-memory', memoryInput.value.trim());
    memoryStatus.textContent = 'Ответ сохранён. Ты сможешь посмотреть его снова позже.';
  });
}

function ensureAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      return null;
    }
    audioContext = new AudioCtx();
    audioGain = audioContext.createGain();
    audioGain.gain.value = Number(volumeControl.value);
    audioGain.connect(audioContext.destination);
  }
  return audioContext;
}

function startSynthMusic() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioGain) {
    return;
  }

  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  const melody = [261.63, 329.63, 392.0, 349.23, 392.0, 440.0, 392.0, 349.23];
  let pulse = 0;

  synthInterval = setInterval(() => {
    const now = ctx.currentTime;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = melody[pulse % melody.length];

    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.06, now + 0.06);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);

    oscillator.connect(gainNode);
    gainNode.connect(audioGain);
    oscillator.start(now);
    oscillator.stop(now + 0.63);
    pulse += 1;
  }, 420);

  isPlaying = true;
  musicToggle.textContent = '⏸ Пауза';
}

async function startMusic() {
  if (audioEnabled) {
    return;
  }

  audioEnabled = true;
  const musicPath = 'media/track.m4a';

  try {
    const response = await fetch(musicPath, { method: 'HEAD' });
    const lengthHeader = response.headers.get('content-length');
    const hasRealMusic = response.ok && lengthHeader && Number(lengthHeader) > 15000;

    if (hasRealMusic) {
      mp3Audio.src = musicPath;
      mp3Audio.play();
      isPlaying = true;
      musicToggle.textContent = '⏸ Пауза';
      return;
    }
  } catch (error) {
    console.info('MP3 file not found, fallback synth enabled:', error);
  }

  startSynthMusic();
}

function toggleMusic() {
  if (!audioEnabled) {
    startMusic();
    return;
  }

  if (mp3Audio && !mp3Audio.paused && mp3Audio.currentSrc) {
    mp3Audio.pause();
    isPlaying = false;
    musicToggle.textContent = '▶ Музыка';
    return;
  }

  if (audioContext && synthInterval) {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    if (!isPlaying) {
      isPlaying = true;
      musicToggle.textContent = '⏸ Пауза';
      return;
    }
    clearInterval(synthInterval);
    synthInterval = null;
    isPlaying = false;
    musicToggle.textContent = '▶ Музыка';
    return;
  }

  if (audioEnabled) {
    if (mp3Audio) {
      mp3Audio.play().catch(() => {
        startSynthMusic();
      });
      isPlaying = true;
      musicToggle.textContent = '⏸ Пауза';
    }
  }
}

volumeControl.addEventListener('input', (event) => {
  const value = Number(event.target.value);
  mp3Audio.volume = value;
  if (audioGain) {
    audioGain.gain.value = value * 0.42;
  }
});

musicToggle.addEventListener('click', () => {
  toggleMusic();
});

document.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  createPetals();
  setupRevealObserver();
  initNavHighlight();
  buildReasons();
  buildSecrets();
  renderQuiz();
  initCounter();
  initIntro();
  initEnvelope();
  initGift();
  initScrollButtons();
  initMemoryField();

  document.querySelectorAll('.section, .final-screen').forEach((section) => {
    section.classList.add('reveal');
  });

  setupRevealObserver();
});
