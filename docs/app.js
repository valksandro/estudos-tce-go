const syllabus = [
  {
    id: 'portugues',
    name: 'Língua Portuguesa',
    topics: [
      'Redação Oficial',
      'Ortografia e acentuação',
      'Emprego do sinal indicativo de crase',
      'Compreensão e interpretação de textos de gêneros variados',
      'Relação do texto com seu contexto histórico',
      'Denotação e conotação',
      'Discurso direto, indireto e indireto livre',
      'Intertextualidade',
      'Figuras de linguagem',
      'Morfossintaxe',
      'Elementos estruturais e processos de formação de palavras',
      'Sinonímia e antonímia',
      'Pontuação',
      'Pronomes',
      'Concordância nominal e verbal',
      'Flexão nominal e verbal',
      'Vozes do verbo',
      'Correlação de tempos e modos verbais',
      'Regência nominal e verbal',
      'Coordenação e subordinação',
      'Conectivos',
      'Redação: correção, organização, equivalência e transformação de frases, orações e períodos'
    ]
  },
  {
    id: 'matematica-logica',
    name: 'Matemática e Raciocínio Lógico',
    topics: [
      'Números inteiros e racionais: operações e potenciação',
      'Expressões numéricas',
      'Múltiplos e divisores de números naturais; problemas',
      'Frações e operações com frações',
      'Razões e proporções',
      'Divisão em partes proporcionais',
      'Regra de três simples e problemas',
      'Porcentagem, acréscimos e descontos',
      'Estruturas lógicas de relações entre pessoas, lugares, objetos ou eventos',
      'Dedução de informações e avaliação das condições de uma estrutura lógica',
      'Raciocínio verbal, matemático e sequencial',
      'Orientação espacial e temporal; formação de conceitos e discriminação de elementos',
      'Conclusões válidas a partir de hipóteses'
    ]
  },
  {
    id: 'legislacao-institucional',
    name: 'Legislação Institucional',
    topics: [
      'Constituição Federal: Administração Pública',
      'Constituição Federal: fiscalização contábil, financeira, orçamentária, operacional e patrimonial; controles interno e externo',
      'Constituição do Estado de Goiás: disposições sobre o TCE-GO',
      'Lei Orgânica do TCE-GO — Lei Estadual nº 16.168/2007',
      'Regimento Interno do TCE-GO — Resolução nº 22/2008 e alterações',
      'Plano de Cargos, Carreiras e Remuneração — Lei Estadual nº 15.122/2005',
      'Regime Jurídico dos Servidores Públicos Civis de Goiás — Lei Estadual nº 20.756/2020',
      'Código de Ética dos Servidores do TCE-GO',
      'Políticas institucionais: governança, pessoas, segurança da informação, riscos e proteção de dados',
      'Resoluções normativas relacionadas à organização, funcionamento e gestão institucional',
      'Resolução Administrativa nº 15/2024: Sistema de Planejamento e Gestão'
    ]
  },
  {
    id: 'engenharia-software',
    name: 'Engenharia de Software',
    topics: [
      'Fundamentos e ciclo de vida de software',
      'Abordagens preditiva, iterativa, incremental e adaptativa/ágil',
      'Scrum, Kanban, Lean Software Development e Extreme Programming (XP)',
      'Levantamento, especificação, análise, validação e gerenciamento de requisitos funcionais e não funcionais',
      'Histórias de usuário, casos de uso e critérios de aceite',
      'Padrões arquiteturais; arquitetura em camadas, SOA, microsserviços e orientada a eventos',
      'Princípios SOLID, DRY, KISS e YAGNI; coesão e acoplamento',
      'Modelagem de sistemas e processos com UML e BPMN',
      'Padrões de projeto criacionais, estruturais e comportamentais',
      'Qualidade: desempenho, escalabilidade, disponibilidade, confiabilidade e manutenibilidade',
      'Testes unitários, de integração, funcionais, de regressão, carga, estresse e automatizados',
      'Revisão de código, refatoração e dívida técnica'
    ]
  },
  {
    id: 'desenvolvimento-sistemas',
    name: 'Desenvolvimento de Sistemas',
    topics: [
      'Algoritmos, lógica de programação e estruturas de dados',
      'Programação orientada a objetos e funcional',
      'Programação em Java: conceitos básicos',
      'JavaScript e ambiente Node.js',
      'Desenvolvimento front-end com React',
      'Python para automação e desenvolvimento back-end',
      'APIs RESTful; conceitos de GraphQL e WebSockets',
      'Formatos JSON e XML',
      'Autenticação, identidade e autorização: OAuth 2.0, OIDC, tokens, claims e JWT',
      'HTML5, CSS3 e TypeScript',
      'Controle de versão com Git',
      'Documentação de APIs com OpenAPI/Swagger',
      'Gerenciamento de dependências, empacotamento e publicação de aplicações'
    ]
  },
  {
    id: 'ia-agentiva',
    name: 'Engenharia de Software Assistida por IA e Sistemas Agentivos',
    topics: [
      'Fundamentos de IA aplicada ao desenvolvimento de software e LLMs',
      'Programação baseada em intenção e desenvolvimento orientado a linguagem natural',
      'Engenharia de contexto e de prompts',
      'Assistentes de codificação em CLI e IDE',
      'Ciclo agentivo: descoberta de contexto, planejamento e tomada de decisão',
      'Ciclo agentivo: ações em arquivos e shell, verificação e autocorreção',
      'Geração, revisão, documentação e depuração de código assistidas por IA',
      'Geração de testes com IA',
      'Gestão de contexto e memória; RAG e bancos vetoriais',
      'Interoperabilidade entre agentes e ferramentas: MCP',
      'Extensibilidade e automação: skills e tool use',
      'Qualidade do código produzido por IA; alucinações e validação',
      'Segurança, privacidade, propriedade intelectual e ética'
    ]
  },
  {
    id: 'devops-entrega',
    name: 'DevOps, Plataforma de Desenvolvimento e Engenharia de Entrega',
    topics: [
      'Integração, entrega e implantação contínuas (CI/CD)',
      'Pipelines de desenvolvimento; automação de build e testes',
      'Infraestrutura como código e gerenciamento de configuração',
      'Observabilidade: métricas, logs, traces, telemetria, alertas e indicadores',
      'Git, GitHub e GitLab: hospedagem, colaboração e automação',
      'Estratégias de branching: Git Flow e trunk-based development',
      'Pull requests, merge requests e revisão de código',
      'Docker e Docker Compose',
      'Orquestração de containers com Kubernetes',
      'Ambientes de desenvolvimento, homologação e produção',
      'GitHub Actions, GitLab CI/CD, Jenkins e ferramentas correlatas'
    ]
  },
  {
    id: 'banco-dados',
    name: 'Banco de Dados',
    topics: [
      'Modelo entidade-relacionamento; normalização e desnormalização',
      'SQL e álgebra relacional',
      'Transações e propriedades ACID',
      'Índices e otimização de consultas',
      'Procedures, triggers e views',
      'Administração e otimização de PostgreSQL e Oracle Database',
      'NoSQL: documentos, chave-valor, famílias de colunas e grafos',
      'MongoDB e Redis: características, casos de uso e conceitos',
      'Bancos vetoriais aplicados à IA e embeddings',
      'Replicação, backup e recuperação',
      'Alta disponibilidade',
      'Segurança e governança de dados'
    ]
  },
  {
    id: 'ia-dados-automacao',
    name: 'Inteligência Artificial, Ciência de Dados e Automação',
    topics: [
      'Fundamentos da inteligência artificial',
      'Aprendizado supervisionado, não supervisionado e por reforço',
      'Redes neurais artificiais e noções de deep learning',
      'Processamento de linguagem natural',
      'IA generativa: conceitos e aplicações',
      'Agentes inteligentes e modelos multimodais',
      'Engenharia de prompts e contexto; RAG',
      'IA aplicada a sistemas de informação e automação de processos',
      'Ética, IA responsável, explicabilidade e governança de IA',
      'LGPD aplicada à IA',
      'Coleta, preparação, limpeza, transformação, exploração e análise de dados',
      'Estatística aplicada e avaliação de modelos',
      'Big Data, processamento distribuído, volume, velocidade e variedade',
      'Estratégia Brasileira de Inteligência Artificial'
    ]
  },
  {
    id: 'seguranca-informacao',
    name: 'Segurança da Informação',
    topics: [
      'Confidencialidade, integridade, disponibilidade, autenticidade e não repúdio',
      'Gestão de riscos, vulnerabilidades e incidentes',
      'Classificação da informação',
      'Controle de acesso: autenticação, autorização e IAM',
      'Criptografia simétrica e assimétrica; PKI, certificados e assinatura digital',
      'Segurança em aplicações: OWASP Top 10:2025 e DevSecOps',
      'Segurança de APIs, containers e nuvem',
      'Backup, continuidade de negócios e recuperação de desastres',
      'Malware, ransomware, phishing e engenharia social',
      'Firewalls, antivírus, IDS/IPS, testes de invasão e análise de vulnerabilidades',
      'Zero Trust',
      'Família ABNT NBR ISO/IEC 27000'
    ]
  },
  {
    id: 'sistemas-redes-nuvem',
    name: 'Sistemas Operacionais, Redes e Computação em Nuvem',
    topics: [
      'Windows e Linux: administração, processos, memória e sistemas de arquivos',
      'Comandos básicos de shell Linux e Windows PowerShell; automação por scripts',
      'Serviços de diretório: Active Directory e LDAP',
      'Virtualização e containers',
      'Redes: arquitetura TCP/IP, IPv4, IPv6, DNS e DHCP',
      'HTTP/2, HTTP/3, HTTPS, SMTP, FTP e SSH',
      'VPN, balanceamento de carga, proxies, firewalls e redes sem fio',
      'Nuvem: IaaS, PaaS, SaaS e serverless',
      'Escalabilidade e alta disponibilidade',
      'Integração entre ambientes locais e nuvem',
      'Monitoramento de infraestrutura'
    ]
  },
  {
    id: 'governanca-ti',
    name: 'Governança de Tecnologia da Informação',
    topics: [
      'Estratégia de TI e alinhamento aos objetivos institucionais',
      'Gestão de serviços: catálogo, incidentes, problemas, mudanças e configuração',
      'Gestão de portfólio, ativos e continuidade de serviços',
      'COBIT 2019, ITIL v4 e ISO/IEC 38500:2024',
      'Fundamentos do PMBOK 8ª edição e métodos ágeis em projetos de TI',
      'Contratações de TIC: Lei nº 14.133/2021',
      'Governo digital e transformação digital no setor público',
      'Lei nº 14.129/2021: Lei do Governo Digital',
      'ENGD 2024–2027 e Decreto nº 12.069/2024'
    ]
  },
  {
    id: 'legislacao-ti',
    name: 'Legislação Aplicada à Tecnologia da Informação',
    topics: [
      'LGPD — Lei nº 13.709/2018: aplicação técnica no desenvolvimento e operação de sistemas',
      'Privacy by design e by default; minimização, anonimização e pseudonimização',
      'Marco Civil da Internet — Lei nº 12.965/2014',
      'Neutralidade de rede, proteção de dados e guarda de registros',
      'Segurança da informação em contratações de TIC',
      'Certificação digital aplicada a sistemas informatizados',
      'Lei Complementar estadual nº 205/2025',
      'Resolução Normativa nº 13/2016: Comitê Estratégico de TI (CETI)',
      'Resolução Administrativa nº 14/2024: Política de Governança Organizacional',
      'Resolução Administrativa nº 17/2024: Política de Segurança da Informação',
      'Resolução Administrativa nº 14/2025: DTI e unidades vinculadas',
      'PDTI 2025–2026: Ordem de Serviço nº 001/2025-CETI'
    ]
  },
  {
    id: 'ingles',
    name: 'Língua Inglesa (Leitura Técnica)',
    topics: [
      'Compreensão de textos técnicos e científicos em inglês relacionados à TI',
      'Estratégias de leitura: ideia principal e localização de informações específicas',
      'Vocabulário técnico de tecnologia da informação'
    ]
  }
].map((subject) => ({
  ...subject,
  topics: subject.topics.map((title, index) => ({ id: `${subject.id}-${index + 1}`, title }))
}));

const storageKey = 'estudos-tce-go:v1';
const allTopics = syllabus.flatMap((subject) => subject.topics);
const topicById = new Map(allTopics.map((topic) => [topic.id, topic]));
const openSubjects = new Set(['portugues']);

const statsElement = document.querySelector('#stats');
const subjectsElement = document.querySelector('#subjects');
const searchElement = document.querySelector('#search');
const statusFilterElement = document.querySelector('#status-filter');
const progressSummaryElement = document.querySelector('#progress-summary');
const noticeElement = document.querySelector('#notice');

let progress = loadProgress();

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return saved && typeof saved === 'object' ? saved : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function progressFor(topicId) {
  const saved = progress[topicId];
  return {
    studied: Boolean(saved?.studied),
    revisions: Number.isInteger(saved?.revisions) && saved.revisions > 0 ? saved.revisions : 0,
    questions: Number.isInteger(saved?.questions) && saved.questions > 0 ? saved.questions : 0,
    studiedAt: saved?.studiedAt || null,
    revisedAt: saved?.revisedAt || null
  };
}

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);
}

function formatDate(value) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(new Date(value));
}

function now() {
  return new Date().toISOString();
}

function visible(topic, subject) {
  const query = normalize(searchElement.value.trim());
  const status = statusFilterElement.value;
  const topicProgress = progressFor(topic.id);
  const matchesSearch = !query || normalize(`${subject.name} ${topic.title}`).includes(query);
  const matchesStatus = status === 'all'
    || (status === 'pending' && !topicProgress.studied)
    || (status === 'done' && topicProgress.studied)
    || (status === 'reviewed' && topicProgress.revisions > 0)
    || (status === 'questions' && topicProgress.questions > 0);
  return matchesSearch && matchesStatus;
}

function subjectStats(subject) {
  const items = subject.topics.map((topic) => progressFor(topic.id));
  const studied = items.filter((item) => item.studied).length;
  return {
    studied,
    revisions: items.reduce((sum, item) => sum + item.revisions, 0),
    questions: items.reduce((sum, item) => sum + item.questions, 0),
    total: items.length,
    percentage: Math.round((studied / items.length) * 100)
  };
}

function renderStats() {
  const completed = allTopics.filter((topic) => progressFor(topic.id).studied).length;
  const revisions = allTopics.reduce((sum, topic) => sum + progressFor(topic.id).revisions, 0);
  const questions = allTopics.reduce((sum, topic) => sum + progressFor(topic.id).questions, 0);
  const pending = allTopics.length - completed;
  const percentage = Math.round((completed / allTopics.length) * 100);
  progressSummaryElement.textContent = `${completed} de ${allTopics.length} tópicos concluídos (${percentage}%).`;
  statsElement.innerHTML = [
    ['Estudados', completed],
    ['Revisões', revisions],
    ['Questões feitas', questions],
    ['Pendentes', pending],
    ['Progresso', `${percentage}%`]
  ].map(([label, value]) => `
    <article class="stat">
      <span class="stat-label">${label}</span>
      <strong class="stat-value">${value}</strong>
    </article>
  `).join('');
}

function activityText(topicProgress) {
  if (topicProgress.revisedAt) return `Última revisão: ${formatDate(topicProgress.revisedAt)}`;
  if (topicProgress.studiedAt) return `Estudado em ${formatDate(topicProgress.studiedAt)}`;
  return 'Ainda não estudado';
}

function topicTemplate(topic) {
  const topicProgress = progressFor(topic.id);
  const status = topicProgress.studied ? 'Estudado' : 'Pendente';
  return `
    <article class="topic">
      <div class="topic-heading">
        <h3 class="topic-title">${escapeHtml(topic.title)}</h3>
        <span class="status status-${topicProgress.studied ? 'done' : 'pending'}">${status}</span>
      </div>
      <div class="topic-actions">
        <label class="study-toggle">
          <input type="checkbox" data-action="study" data-topic-id="${topic.id}" ${topicProgress.studied ? 'checked' : ''} />
          Estudado
        </label>
        <button class="button button-primary" type="button" data-action="revise" data-topic-id="${topic.id}">+ 1 revisão</button>
        <span class="revision-count">${topicProgress.revisions} ${topicProgress.revisions === 1 ? 'revisão' : 'revisões'}</span>
        <button class="button button-undo" type="button" data-action="undo" data-topic-id="${topic.id}" ${topicProgress.revisions === 0 ? 'disabled' : ''}>Desfazer revisão</button>
        <form class="questions" data-topic-id="${topic.id}">
          <input class="questions-input" type="number" step="1" inputmode="numeric" name="amount" placeholder="0"
            aria-label="Somar questões feitas em ${escapeHtml(topic.title)}" />
          <button class="button button-add" type="submit">Somar questões</button>
        </form>
        <span class="questions-count">${topicProgress.questions} ${topicProgress.questions === 1 ? 'questão feita' : 'questões feitas'}</span>
        <p class="last-activity">${activityText(topicProgress)}</p>
      </div>
    </article>
  `;
}

function renderSubjects() {
  const queryOrFilter = searchElement.value.trim() || statusFilterElement.value !== 'all';
  const content = syllabus.map((subject) => {
    const topics = subject.topics.filter((topic) => visible(topic, subject));
    if (!topics.length) return '';
    const stats = subjectStats(subject);
    const open = queryOrFilter || openSubjects.has(subject.id);
    return `
      <details class="subject" data-subject-id="${subject.id}" ${open ? 'open' : ''}>
        <summary>
          <div class="subject-summary">
            <div>
              <h2 class="subject-title">${escapeHtml(subject.name)}</h2>
              <span class="subject-meta">${stats.studied}/${stats.total} estudados · ${stats.revisions} revisões · ${stats.questions} questões</span>
            </div>
            <span class="subject-arrow" aria-hidden="true">⌄</span>
          </div>
          <div class="subject-progress" role="progressbar" aria-label="Progresso em ${escapeHtml(subject.name)}" aria-valuenow="${stats.percentage}" aria-valuemin="0" aria-valuemax="100">
            <span style="width: ${stats.percentage}%"></span>
          </div>
        </summary>
        <div class="topic-list">${topics.map(topicTemplate).join('')}</div>
      </details>
    `;
  }).join('');
  subjectsElement.innerHTML = content || '<p class="empty">Nenhum tópico encontrado com esse filtro.</p>';
}

function render() {
  renderStats();
  renderSubjects();
}

function announce(message) {
  noticeElement.textContent = message;
}

function updateTopic(topicId, update) {
  const current = progressFor(topicId);
  progress[topicId] = update(current);
  saveProgress();
  render();
}

subjectsElement.addEventListener('change', (event) => {
  const control = event.target.closest('[data-action="study"]');
  if (!control) return;
  const topicId = control.dataset.topicId;
  if (!topicById.has(topicId)) return;

  updateTopic(topicId, (current) => {
    if (control.checked) {
      announce('Tópico marcado como estudado.');
      return { ...current, studied: true, studiedAt: current.studiedAt || now() };
    }
    announce('Tópico marcado como pendente e revisões removidas. Questões feitas mantidas.');
    return { ...current, studied: false, revisions: 0, studiedAt: null, revisedAt: null };
  });
});

subjectsElement.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button || button.disabled) return;
  const topicId = button.dataset.topicId;
  if (!topicById.has(topicId)) return;

  if (button.dataset.action === 'revise') {
    updateTopic(topicId, (current) => {
      announce('Revisão registrada.');
      return {
        ...current,
        studied: true,
        studiedAt: current.studiedAt || now(),
        revisions: current.revisions + 1,
        revisedAt: now()
      };
    });
  }

  if (button.dataset.action === 'undo') {
    updateTopic(topicId, (current) => {
      announce('Última revisão removida.');
      return { ...current, revisions: Math.max(0, current.revisions - 1), revisedAt: current.revisions === 1 ? null : current.revisedAt };
    });
  }
});

subjectsElement.addEventListener('submit', (event) => {
  const form = event.target.closest('form.questions');
  if (!form) return;
  event.preventDefault();
  const topicId = form.dataset.topicId;
  if (!topicById.has(topicId)) return;

  const amount = Math.trunc(Number(form.elements.amount.value));
  if (!amount) return;

  updateTopic(topicId, (current) => {
    const questions = Math.max(0, current.questions + amount);
    announce(`Tópico com ${questions} ${questions === 1 ? 'questão feita' : 'questões feitas'}.`);
    return { ...current, questions };
  });
});

subjectsElement.addEventListener('toggle', (event) => {
  const details = event.target;
  if (!details.matches('.subject')) return;
  if (details.open) openSubjects.add(details.dataset.subjectId);
  else openSubjects.delete(details.dataset.subjectId);
}, true);

searchElement.addEventListener('input', renderSubjects);
statusFilterElement.addEventListener('change', renderSubjects);

document.querySelector('#clear-progress').addEventListener('click', () => {
  if (!window.confirm('Limpar todos os tópicos estudados, todas as revisões e todas as questões feitas?')) return;
  progress = {};
  saveProgress();
  announce('Progresso limpo.');
  render();
});

render();
