'use strict';
const search=document.querySelector('#search');
if(search)search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();let n=0;document.querySelectorAll('.card').forEach(card=>{card.hidden=!card.dataset.search.toLowerCase().includes(q);if(!card.hidden)n++;});document.querySelector('#search-status').textContent=n?'顯示 '+n+' 篇講義':'找不到符合的講義，請試試「二進位」、「邏輯」或「搜尋」。';});