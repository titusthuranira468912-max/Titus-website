let currentBook = '';
let currentChapter = 1;

const bookInput = document.getElementById('book');
const chapterInput = document.getElementById('chapter');
const verseInput = document.getElementById('verse');
const display = document.getElementById('verse-display');
const favoritesList = document.getElementById('favorites-list');

document.getElementById('get-verse').addEventListener('click', () => {
  currentBook = bookInput.value.trim();
  currentChapter = parseInt(chapterInput.value.trim());
  loadVerse(currentBook, currentChapter, verseInput.value.trim());
});

document.getElementById('prev-chapter').addEventListener('click', () => {
  if(currentChapter > 1){
    currentChapter--;
    chapterInput.value = currentChapter;
    loadVerse(currentBook, currentChapter);
  }
});

document.getElementById('next-chapter').addEventListener('click', () => {
  currentChapter++;
  chapterInput.value = currentChapter;
  loadVerse(currentBook, currentChapter);
});

function addFavorite(book, chapter, verseText){
  let favorites = JSON.parse(localStorage.getItem('favorites') || "[]");
  favorites.push({book, chapter, verseText});
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderFavorites();
}

function renderFavorites(){
  const favorites = JSON.parse(localStorage.getItem('favorites') || "[]");
  favoritesList.innerHTML = '';
  favorites.forEach((fav, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${fav.book} ${fav.chapter}</strong>: ${fav.verseText}`;
    li.style.cursor = "pointer";
    li.addEventListener('click', () => alert(`Favorite: ${fav.book} ${fav.chapter}\n${fav.verseText}`));
    favoritesList.appendChild(li);
  });
}

async function loadVerse(book, chapter, verse=''){
  if(!book || !chapter){ 
    display.innerText = 'Enter book and chapter.'; 
    return; 
  }

  try{
    let url = `https://bible-api.com/${book}+${chapter}`;
    if(verse) url += `:${verse}`;

    const res = await fetch(url);
    const data = await res.json();

    if(data.text){
      display.innerHTML = `<strong>${book} ${chapter}${verse ? ':'+verse : ''}</strong><br><span id="verse-text">${data.text.replace(/\n/g,'<br>')}</span>`;
      
      // Click to highlight/save
      const verseSpan = document.getElementById('verse-text');
      verseSpan.style.cursor = "pointer";
      verseSpan.addEventListener('click', () => {
        verseSpan.style.background = "#ffff99"; // highlight
        addFavorite(book, chapter, data.text);
      });
      
    } else {
      display.innerText = 'Verse not found. Check spelling and numbers.';
    }
  } catch(err){
    console.error(err);
    display.innerText = 'Error loading verse. Check your internet.';
  }
}

// Load saved favorites on page load
document.addEventListener('DOMContentLoaded', renderFavorites);
