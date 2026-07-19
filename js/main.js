// 数据由 layouts/index.html 通过内联脚本注入（来源于 data/categories.yaml、data/tools.yaml）
// 这样工具/分区可以直接在 Hugo 数据文件中维护，无需改动本文件
const categories = window.SITE_CATEGORIES || [];
const tools = window.SITE_TOOLS || [];

// ---------- render ----------
const gridEl = document.getElementById('grid');
const filterBar = document.getElementById('filterBar');
const filterCount = document.getElementById('filterCount');
const searchInput = document.getElementById('searchInput');
const compassLabel = document.getElementById('compassLabel');
const compassSub = document.getElementById('compassSub');
const compassNeedle = document.getElementById('compassNeedle');

document.getElementById('stat-total').textContent = String(tools.length).padStart(3,'0');
document.getElementById('stat-sectors').textContent = categories.length;

let activeCat = 'all';
let query = '';

// build filter pills
const pillAll = document.createElement('button');
pillAll.className = 'pill active';
pillAll.textContent = '全部';
pillAll.dataset.key = 'all';
filterBar.insertBefore(pillAll, filterCount);

categories.forEach(c => {
  const p = document.createElement('button');
  p.className = 'pill';
  p.textContent = c.name;
  p.dataset.key = c.key;
  filterBar.insertBefore(p, filterCount);
});

filterBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if(!btn) return;
  activeCat = btn.dataset.key;
  updatePills();
  updateCompass();
  render();
});

function updatePills(){
  filterBar.querySelectorAll('.pill').forEach(p => {
    p.classList.toggle('active', p.dataset.key === activeCat);
  });
}

searchInput.addEventListener('input', (e) => {
  query = e.target.value.trim().toLowerCase();
  render();
});

function initials(name){
  const clean = name.replace(/[^\p{L}\p{N}]/gu,'');
  return clean.slice(0,1).toUpperCase();
}

function render(){
  const filtered = tools.filter(t => {
    const matchCat = activeCat === 'all' || t.cat === activeCat;
    const hay = (t.name + ' ' + t.org + ' ' + t.desc).toLowerCase();
    const matchQuery = !query || hay.includes(query);
    return matchCat && matchQuery;
  });

  filterCount.textContent = `${String(filtered.length).padStart(3,'0')} / ${tools.length} 项`;

  if(filtered.length === 0){
    gridEl.innerHTML = `<div class="empty-state">
      <div class="mono">SRCH·404</div>
      <p>坐标之外，暂无匹配的工具。换一个关键词，或切换分区试试。</p>
    </div>`;
    return;
  }

  gridEl.innerHTML = filtered.map((t, i) => {
    const cat = categories.find(c => c.key === t.cat);
    const id = `${cat.code}·${String(i+1).padStart(3,'0')}`;
    return `
      <div class="card" style="animation-delay:${Math.min(i*22,300)}ms">
        <div class="card-top">
          <div class="card-id-row">
            <div class="avatar">${initials(t.name)}</div>
            <div>
              <div class="card-name">${t.name}</div>
              <div class="card-org">${t.org}</div>
            </div>
          </div>
          <div class="card-arrow">↗</div>
        </div>
        <div class="card-desc">${t.desc}</div>
        <div class="card-foot">
          <span class="card-tag mono">${cat.name}</span>
          <span class="card-id mono">${id}</span>
        </div>
      </div>`;
  }).join('');
}

// ---------- compass ----------
const ticksG = document.getElementById('compassTicks');
const R_outer = 150, R_inner = 96, R_label = 172, R_dot = 132;

categories.forEach((c, i) => {
  const angle = (360 / categories.length) * i - 90; // start at top
  const rad = angle * Math.PI / 180;
  const x1 = 200 + R_inner * Math.cos(rad);
  const y1 = 200 + R_inner * Math.sin(rad);
  const x2 = 200 + R_outer * Math.cos(rad);
  const y2 = 200 + R_outer * Math.sin(rad);
  const dx = 200 + R_dot * Math.cos(rad);
  const dy = 200 + R_dot * Math.sin(rad);
  const lx = 200 + R_label * Math.cos(rad);
  const ly = 200 + R_label * Math.sin(rad);

  const g = document.createElementNS('http://www.w3.org/2000/svg','g');
  g.setAttribute('class','compass-tick');
  g.dataset.key = c.key;
  g.dataset.angle = angle;
  g.innerHTML = `
    <line class="tick-line" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"></line>
    <circle class="tick-dot" cx="${dx}" cy="${dy}" r="9"></circle>
    <text class="tick-label" x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle">${c.code}</text>
  `;
  g.addEventListener('click', () => {
    activeCat = activeCat === c.key ? 'all' : c.key;
    updatePills();
    updateCompass();
    render();
  });
  ticksG.appendChild(g);
});

function updateCompass(){
  document.querySelectorAll('.compass-tick').forEach(t => {
    t.classList.toggle('active', t.dataset.key === activeCat);
  });
  if(activeCat === 'all'){
    compassNeedle.style.transform = 'rotate(0deg)';
    compassLabel.textContent = '全部分区';
    compassSub.textContent = `${String(tools.length).padStart(3,'0')} ITEMS`;
  } else {
    const cat = categories.find(c => c.key === activeCat);
    const tickEl = document.querySelector(`.compass-tick[data-key="${activeCat}"]`);
    const angle = parseFloat(tickEl.dataset.angle) + 90; // relative to needle's default "up" orientation
    compassNeedle.style.transform = `rotate(${angle}deg)`;
    compassLabel.textContent = cat.name;
    const count = tools.filter(t => t.cat === activeCat).length;
    compassSub.textContent = `${String(count).padStart(3,'0')} ITEMS`;
  }
}

updateCompass();
render();
