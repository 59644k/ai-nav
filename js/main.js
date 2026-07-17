const categories = [
    { key:'chat',    name:'对话助手', code:'CH' },
    { key:'image',   name:'图像生成', code:'IM' },
    { key:'video',   name:'视频生成', code:'VD' },
    { key:'audio',   name:'音频音乐', code:'AU' },
    { key:'code',    name:'编程开发', code:'CO' },
    { key:'write',   name:'写作文案', code:'WR' },
    { key:'design',  name:'设计创意', code:'DS' },
    { key:'office',  name:'效率办公', code:'OF' },
    { key:'search',  name:'搜索研究', code:'SR' },
    { key:'agent',   name:'自动化 · Agent', code:'AG' },
  ];

  const tools = [
    // 对话助手
    { cat:'chat', name:'ChatGPT', org:'OpenAI', desc:'综合型对话与创作助手，支持插件、联网检索与自定义 GPT。' },
    { cat:'chat', name:'Claude', org:'Anthropic', desc:'擅长长文写作与代码理解，注重安全性与可控输出。' },
    { cat:'chat', name:'Gemini', org:'Google', desc:'深度集成谷歌生态，具备较强的多模态理解能力。' },
    { cat:'chat', name:'文心一言', org:'百度', desc:'面向中文语境优化的对话与内容生成模型。' },
    { cat:'chat', name:'通义千问', org:'阿里云', desc:'与阿里云生态深度整合的对话与开发平台。' },
    { cat:'chat', name:'Kimi', org:'月之暗面', desc:'支持超长上下文，适合长文档阅读与总结。' },
    { cat:'chat', name:'豆包', org:'字节跳动', desc:'与字节系产品联动紧密的日常对话助手。' },
    { cat:'chat', name:'DeepSeek', org:'深度求索', desc:'推理与代码能力突出的开源系大模型。' },
    { cat:'chat', name:'讯飞星火', org:'科大讯飞', desc:'语音交互见长的国产多模态大模型。' },
    { cat:'chat', name:'智谱清言', org:'智谱 AI', desc:'支持多模态输入的国产对话助手。' },

    // 图像生成
    { cat:'image', name:'Midjourney', org:'Midjourney', desc:'以艺术质感与氛围渲染见长的图像生成工具。' },
    { cat:'image', name:'Stable Diffusion', org:'Stability AI', desc:'开源、可本地部署、生态插件丰富的图像模型。' },
    { cat:'image', name:'DALL·E 3', org:'OpenAI', desc:'与 ChatGPT 深度结合，支持对话式修图。' },
    { cat:'image', name:'Adobe Firefly', org:'Adobe', desc:'与 Adobe 全家桶无缝衔接，商用授权路径清晰。' },
    { cat:'image', name:'Leonardo AI', org:'Leonardo', desc:'面向游戏美术与概念设计的图像生成平台。' },
    { cat:'image', name:'Ideogram', org:'Ideogram', desc:'在图像中生成清晰可读文字的排版能力突出。' },
    { cat:'image', name:'Playground', org:'Playground AI', desc:'轻量易用的图像生成与在线编辑平台。' },
    { cat:'image', name:'可灵图像', org:'快手', desc:'国产图像与视频一体化生成工具。' },
    { cat:'image', name:'即梦 AI', org:'字节跳动', desc:'剪映团队出品的图像与视频生成应用。' },

    // 视频生成
    { cat:'video', name:'Runway', org:'Runway', desc:'具备影视级效果的 AI 视频生成与编辑工具。' },
    { cat:'video', name:'Pika', org:'Pika Labs', desc:'专注短视频生成与运镜特效的轻量工具。' },
    { cat:'video', name:'Luma Dream Machine', org:'Luma AI', desc:'电影质感强烈的文本转视频生成器。' },
    { cat:'video', name:'Sora', org:'OpenAI', desc:'支持较长时长与高一致性的视频生成模型。' },
    { cat:'video', name:'HeyGen', org:'HeyGen', desc:'一键生成数字人讲解与配音视频。' },
    { cat:'video', name:'Synthesia', org:'Synthesia', desc:'面向企业培训与营销的数字人视频平台。' },
    { cat:'video', name:'可灵视频', org:'快手', desc:'支持长时长、高一致性的国产视频生成模型。' },

    // 音频音乐
    { cat:'audio', name:'Suno', org:'Suno', desc:'输入一句描述即可生成完整歌曲的音乐工具。' },
    { cat:'audio', name:'Udio', org:'Udio', desc:'注重音质与编曲细节的 AI 音乐创作平台。' },
    { cat:'audio', name:'ElevenLabs', org:'ElevenLabs', desc:'高逼真度的语音合成与声音克隆工具。' },
    { cat:'audio', name:'Murf AI', org:'Murf', desc:'面向配音与旁白场景的语音生成平台。' },
    { cat:'audio', name:'Descript', org:'Descript', desc:'像编辑文档一样剪辑音频与视频内容。' },

    // 编程开发
    { cat:'code', name:'GitHub Copilot', org:'GitHub', desc:'嵌入主流编辑器的智能代码补全助手。' },
    { cat:'code', name:'Cursor', org:'Anysphere', desc:'围绕 AI 协作重新设计的代码编辑器。' },
    { cat:'code', name:'Claude Code', org:'Anthropic', desc:'命令行原生的智能体式编程助手。' },
    { cat:'code', name:'Replit', org:'Replit', desc:'云端一体化的 AI 辅助开发与部署平台。' },
    { cat:'code', name:'Windsurf', org:'Codeium', desc:'面向智能体协作设计的 AI 原生 IDE。' },
    { cat:'code', name:'v0', org:'Vercel', desc:'根据文字描述直接生成前端界面代码。' },
    { cat:'code', name:'Tabnine', org:'Tabnine', desc:'支持私有化部署、注重代码隐私的补全工具。' },

    // 写作文案
    { cat:'write', name:'Jasper', org:'Jasper', desc:'面向营销团队的批量文案生成平台。' },
    { cat:'write', name:'Copy.ai', org:'Copy.ai', desc:'快速产出广告与社媒文案的写作工具。' },
    { cat:'write', name:'秘塔写作猫', org:'秘塔', desc:'中文写作校对、润色与降重工具。' },
    { cat:'write', name:'Notion AI', org:'Notion', desc:'内嵌在笔记与文档流程中的写作助手。' },
    { cat:'write', name:'Grammarly', org:'Grammarly', desc:'英文语法检查与写作风格建议工具。' },

    // 设计创意
    { cat:'design', name:'Canva Magic Studio', org:'Canva', desc:'集成多种生成能力的一站式设计套件。' },
    { cat:'design', name:'Figma AI', org:'Figma', desc:'内建于 Figma 设计流程中的智能辅助功能。' },
    { cat:'design', name:'Framer AI', org:'Framer', desc:'依据描述直接生成可发布的网站页面。' },
    { cat:'design', name:'Gamma', org:'Gamma', desc:'用文字快速生成排版精美的演示文稿。' },
    { cat:'design', name:'Beautiful.ai', org:'Beautiful.ai', desc:'自动处理排版规则的智能演示文稿工具。' },

    // 效率办公
    { cat:'office', name:'Notion', org:'Notion', desc:'融合笔记、文档与数据库的 AI 效率工具。' },
    { cat:'office', name:'飞书智能伙伴', org:'飞书', desc:'内置于飞书办公套件中的智能助手。' },
    { cat:'office', name:'Microsoft Copilot', org:'Microsoft', desc:'融入 Office 全家桶的办公场景助手。' },
    { cat:'office', name:'Otter.ai', org:'Otter.ai', desc:'会议实时转写、摘要与待办提取工具。' },
    { cat:'office', name:'讯飞听见', org:'科大讯飞', desc:'面向中文场景的会议记录与转写工具。' },

    // 搜索研究
    { cat:'search', name:'Perplexity', org:'Perplexity', desc:'检索结果附带引用来源的 AI 搜索引擎。' },
    { cat:'search', name:'You.com', org:'You.com', desc:'支持多种自定义模式的 AI 搜索平台。' },
    { cat:'search', name:'Elicit', org:'Elicit', desc:'面向学术文献检索与梳理的研究助手。' },
    { cat:'search', name:'Consensus', org:'Consensus', desc:'从论文集合中提炼科学共识的搜索工具。' },
    { cat:'search', name:'秘塔搜索', org:'秘塔', desc:'面向中文语境优化的 AI 搜索工具。' },

    // 自动化 Agent
    { cat:'agent', name:'Dify', org:'Dify', desc:'低代码构建 AI 应用与工作流的平台。' },
    { cat:'agent', name:'扣子 Coze', org:'字节跳动', desc:'面向中文用户的智能体搭建与发布平台。' },
    { cat:'agent', name:'Zapier AI', org:'Zapier', desc:'连接数千应用、按规则自动执行任务的平台。' },
    { cat:'agent', name:'Make', org:'Make', desc:'以可视化流程搭建自动化场景的工具。' },
    { cat:'agent', name:'AutoGPT', org:'Significant Gravitas', desc:'早期具备自主任务拆解能力的智能体框架。' },
  ];

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
