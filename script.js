const services = [
  {
    icon: '☀️',
    name: 'Marquinha Express',
    description: 'Sessão para quem quer ganhar cor com rapidez e sair com orientação objetiva de preparo e manutenção.',
    price: 'R$ 55',
    badge: '01'
  },
  {
    icon: '✨',
    name: 'Bronze Natural Guiado',
    description: 'Atendimento ajustado para o seu tom de pele, com foco em uniformidade, conforto e menor risco de erro no resultado.',
    price: 'R$ 75',
    badge: '02'
  },
  {
    icon: '🧴',
    name: 'Autobronzeamento sem Sol',
    description: 'Aplicação profissional para quem quer cor imediata e uniforme sem exposição, ótima opção para evento ou manutenção.',
    price: 'R$ 95',
    badge: '03'
  },
  {
    icon: '📅',
    name: 'Manutenção Mensal',
    description: 'Pacote para cliente recorrente que quer previsibilidade, economia por sessão e rotina de bronze sem depender de encaixe solto.',
    price: 'R$ 210',
    badge: '04'
  },
  {
    icon: '🌿',
    name: 'Pré-Bronze e Banho de Lua',
    description: 'Preparação indicada para melhorar o acabamento da pele antes da sessão e aumentar a chance de um bronze mais limpo.',
    price: 'R$ 65',
    badge: '05'
  },
  {
    icon: '👑',
    name: 'Combo Pré-Evento',
    description: 'Sessão pensada para casamento, viagem, ensaio ou festa, com preparação, bronze e recomendação de produto para segurar o resultado.',
    price: 'R$ 150',
    badge: '06'
  }
];

const products = [
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2023/10/Fixy_2.png',
    category: 'Fitas',
    name: 'Fitas Cores Tradicionais Show Bronze Fixy',
    description: 'Uma das campeãs de giro no segmento. Fita 18 mm x 20 m para montagem de biquíni com alta aderência e baixa retenção de calor.',
    price: 'R$ 4,50',
    badge: '5.798 vendidos',
    link: 'https://armazemdobronze.com.br/produto/fitas-cores-tradicionais-show-bronze-fixy-2/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2024/03/07.png',
    category: 'Fitas',
    name: 'Fitas Cores Tradicionais Decorbronze',
    description: 'Exemplo clássico de fita vendida em personal bronze e espaços de marquinha. Produto com giro muito alto e várias medidas.',
    price: 'R$ 3,99',
    badge: '9.998 vendidos',
    link: 'https://armazemdobronze.com.br/produto/fitas-cores-tradicionais-decorlux/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2025/07/19.png',
    category: 'Fitas',
    name: 'Fitas Estampadas Especiais Decorbronze',
    description: 'Fitas estampadas usadas para diferenciação visual do bronze. Boa saída em estúdios que oferecem biquínis personalizados.',
    price: 'R$ 6,99',
    badge: '4.235 vendidos',
    link: 'https://armazemdobronze.com.br/produto/fitas-estampadas-especiais-decorlux/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2023/07/17-4.jpg',
    category: 'Fitas',
    name: 'Fita Preta Brilhosa Adere',
    description: 'Outra fita muito comum em salões de bronzeamento. Entra como opção de maleabilidade e acabamento mais firme na montagem.',
    price: 'R$ 6,60',
    badge: '2.299 vendidos',
    link: 'https://armazemdobronze.com.br/produto/fita-preta-adere/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2023/07/16-1.jpg',
    category: 'Ativador',
    name: 'Ativador de Marquinha Ametista 450 ml Melanina',
    description: 'Produto real de saída forte no varejo especializado. Usado para realce e fixação de marquinha em bronze natural e artificial.',
    price: 'R$ 30,00',
    badge: '70 vendidos',
    link: 'https://armazemdobronze.com.br/produto/ativador-de-marquinha-ametista-450/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2023/07/60.jpg',
    category: 'Banho de Lua',
    name: 'Magic Touch Frutas Vermelhas 60 ml',
    description: 'Aditivo de banho de lua vendido para personalização de fragrância e sensorial do procedimento.',
    price: 'R$ 30,00',
    badge: '33 vendidos',
    link: 'https://armazemdobronze.com.br/produto/magic-touch-frutas-vermelhas-60ml-capilar-essencia/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2023/07/84.jpg',
    category: 'Banho de Lua',
    name: 'Pó Descolorante Magic Touch 500 g',
    description: 'Produto real de uso recorrente em banho de lua e clareamento de pelos, normalmente vendido junto com água oxigenada e touch.',
    price: 'R$ 50,00',
    badge: 'Uso profissional',
    link: 'https://armazemdobronze.com.br/produto/po-descolorante-magic-touch-500g-capilar/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2025/10/VANESSA_ROCHA_500-X-500-Sem-Fundo-4.png',
    category: 'Potencializador',
    name: 'Pantera Negra 950 g Vanessa Rocha',
    description: 'Potencializador de alto valor agregado, comum em vitrines de bronzeamento para clientes que buscam resultado mais intenso.',
    price: 'R$ 139,00',
    badge: 'Premium',
    link: 'https://armazemdobronze.com.br/produto/pantera-negra-950g-vanessa-rocha/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2024/01/6.png',
    category: 'Potencializador',
    name: 'Blue Neon Inverno Verão 2.0 500 ml Paty Galvão',
    description: 'Potencializador com efeito glow e boa procura em lojas especializadas, vendido como acelerador de bronzeado.',
    price: 'R$ 95,00',
    badge: '35 vendidos',
    link: 'https://armazemdobronze.com.br/produto/blue-neon-inverno-verao-2-0-500ml-paty-galvao/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2024/07/15202746724_80.jpg',
    category: 'Potencializador',
    name: 'Musa Glam 500 g Capilar Essência',
    description: 'Potencializador de tíquete acessível, interessante para venda recorrente e composição de kits de salão.',
    price: 'R$ 45,00',
    badge: '51 vendidos',
    link: 'https://armazemdobronze.com.br/produto/musa-glam-500g-capilar-essencia/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2023/07/46-1.png',
    category: 'Potencializador',
    name: 'Potencializador Brasil Tropical Óleo de Manga 300 g',
    description: 'Item de venda complementar para quem busca textura mais oleosa e sensorial tropical no procedimento.',
    price: 'R$ 60,00',
    badge: 'Linha Max',
    link: 'https://armazemdobronze.com.br/produto/potencializador-brasil-tropical-oleo-de-manga-300g-max-cosmeticos/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2023/07/37-3.jpg',
    category: 'Óleo',
    name: 'Óleo Potencializador Neon Turbo 1 L',
    description: 'Óleo grande para uso profissional em cabine, personal bronze e revenda em volume. Produto real bastante presente no segmento.',
    price: 'R$ 85,00',
    badge: 'Uso profissional',
    link: 'https://armazemdobronze.com.br/produto/oleo-potencializador-de-marquinha-neon-turbo-1-l-max-natural-bronze-cosmeticos/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2025/06/49-1.png',
    category: 'Óleo',
    name: 'Óleo Potencializador Neon Turbo 120 ml',
    description: 'Versão menor para balcão e compra por impulso, mais fácil de vender para cliente final.',
    price: 'R$ 39,00',
    badge: '9 vendidos',
    link: 'https://armazemdobronze.com.br/produto/oleo-potencializador-neon-turbo/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2024/07/15198589407_01.png',
    category: 'Parafina',
    name: 'Selador Corporal Creme de Parafina Karla Alves',
    description: 'Produto de acabamento e selagem corporal vendido como complemento em procedimentos de bronze.',
    price: 'R$ 90,00',
    badge: '44 vendidos',
    link: 'https://armazemdobronze.com.br/produto/selador-corporal-creme-de-parafina-karla-alves/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2022/01/7-1.png',
    category: 'Acelerador',
    name: 'Supremo Potencializador Acelerador 500 g Vanessa Rocha',
    description: 'Acelerador de bronzeado vendido em linha profissional com boa presença no varejo especializado.',
    price: 'R$ 90,00',
    badge: '31 vendidos',
    link: 'https://armazemdobronze.com.br/produto/supremo-potencializador-acelerador-de-bronzeado-500g-vanessa-rocha/'
  },
  {
    image: 'https://armazemdobronze.com.br/wp-content/uploads/2023/07/17.jpg',
    category: 'Autobronzeador',
    name: 'Lumi Autobronzeador Corporal 177 ml',
    description: 'Autobronzeador corporal real vendido em lojas de bronze para atender clientes que querem manutenção em casa.',
    price: 'R$ 170,00',
    badge: 'Sem sol',
    link: 'https://armazemdobronze.com.br/produto/lumi-autobronzeador/'
  },
  {
    image: 'https://bestbronze.com.br/cdn/shop/products/DE0F3453-8C74-4428-B4C3-FCA8F7BF19EE_650x.jpg?v=1693920500',
    category: 'Autobronzeador',
    name: 'Autobronzeador Spray Fácil 150 ml Best Bronze',
    description: 'Um dos mais fortes da linha Best Bronze, muito citado entre mais vendidos da marca para bronze sem sol.',
    price: 'R$ 142,90',
    badge: '581 reviews',
    link: 'https://bestbronze.com.br/products/autobronzeador-spray-facil-150-ml'
  },
  {
    image: 'https://bestbronze.com.br/cdn/shop/files/7_0be5dd3a-7e07-4359-abbc-08b29205b383_650x.jpg?v=1762400565',
    category: 'Autobronzeador',
    name: 'Mousse Autobronzeador Clear Vegan 150 ml',
    description: 'Mousse de grande saída no e-commerce da marca, usado como referência de bronze uniforme sem manchas.',
    price: 'R$ 125,00',
    badge: '147 reviews',
    link: 'https://bestbronze.com.br/products/autobronzeador-clear-mousse-vegan-bronzeador-150ml'
  },
  {
    image: 'https://bestbronze.com.br/cdn/shop/products/conjunto_cartuchos_650x.jpg?v=1737825577',
    category: 'Maquiagem corporal',
    name: 'Leg Makeup Best Bronze',
    description: 'Maquiagem corporal muito conhecida da marca, vendida para acabamento visual imediato em pernas e corpo.',
    price: 'R$ 109,00',
    badge: '646 reviews',
    link: 'https://bestbronze.com.br/products/leg-makeup'
  },
  {
    image: 'https://bestbronze.com.br/cdn/shop/products/luva-aplicadora_650x.jpg?v=1696076278',
    category: 'Acessório',
    name: 'Luva Aplicadora Make It Easier',
    description: 'Acessório real de venda recorrente para aplicação de mousse e autobronzeador sem manchar as mãos.',
    price: 'R$ 26,00',
    badge: '49 reviews',
    link: 'https://bestbronze.com.br/products/luva-aplicadora-make-it-easier'
  }
];

const availableTimes = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
const saturdayTimes = availableTimes.filter(time => time !== '19:00');

const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const bookingForm = document.getElementById('bookingForm');
const bookingSubmit = document.getElementById('bookingSubmit');
const bookingSubmitText = document.getElementById('bookingSubmitText');
const formStatus = document.getElementById('formStatus');
const serviceCards = document.getElementById('serviceCards');
const productCards = document.getElementById('productCards');
const serviceSelect = document.getElementById('f-servico');
const horarioSelect = document.getElementById('f-horario');
const dateInput = document.getElementById('f-data');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const navMenuLinks = document.querySelectorAll('.nav-menu a');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

const fieldMap = {
  nome: document.getElementById('f-nome'),
  telefone: document.getElementById('f-telefone'),
  servico: serviceSelect,
  data: dateInput,
  horario: horarioSelect
};

let mx = 0;
let my = 0;
let fx = 0;
let fy = 0;

function animFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.transform = `translate(${fx - 18}px, ${fy - 18}px)`;
  requestAnimationFrame(animFollower);
}

function renderServices() {
  serviceCards.innerHTML = services.map(service => `
    <article class="service-card">
      <span class="service-icon" aria-hidden="true">${service.icon}</span>
      <span class="service-num">${service.badge}</span>
      <h3 class="service-name">${service.name}</h3>
      <p class="service-desc">${service.description}</p>
      <div class="service-price">
        <span class="price-from">A partir de</span>
        <span class="price-value">${service.price}</span>
      </div>
      <a href="#agendar" class="service-book">Agendar →</a>
    </article>
  `).join('');
}

function renderProducts() {
  productCards.innerHTML = products.map(product => `
    <article class="product-card reveal-card">
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <a href="${product.link}" class="btn-buy" target="_blank" rel="noopener noreferrer">Ver Produto</a>
        </div>
      </div>
    </article>
  `).join('');

  bindProductImageFallbacks();
}

function bindProductImageFallbacks() {
  const productImages = productCards.querySelectorAll('.product-img img');

  productImages.forEach(image => {
    image.addEventListener('error', () => {
      image.style.display = 'none';
    }, { once: true });
  });
}

function populateServiceOptions() {
  const options = services
    .map(service => `<option value="${service.name} — ${service.price}">${service.name} — ${service.price}</option>`)
    .join('');
  serviceSelect.insertAdjacentHTML('beforeend', options);
}

function updateAvailableTimes() {
  const selectedDate = dateInput.value;
  const previousValue = horarioSelect.value;
  const baseOption = '<option value="" selected>Horário</option>';

  if (!selectedDate) {
    horarioSelect.innerHTML = baseOption;
    availableTimes.forEach(time => {
      horarioSelect.insertAdjacentHTML('beforeend', `<option value="${time}">${time}</option>`);
    });
    return;
  }

  const day = new Date(`${selectedDate}T12:00:00`).getDay();
  const times = day === 6 ? saturdayTimes : availableTimes;

  horarioSelect.innerHTML = baseOption + times.map(time => `<option value="${time}">${time}</option>`).join('');

  if (times.includes(previousValue)) {
    horarioSelect.value = previousValue;
  }
}

function setMinBookingDate() {
  const today = new Date();
  const minDate = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
  dateInput.min = minDate;
}

function clearFieldError(field) {
  const input = fieldMap[field];
  const errorElement = document.getElementById(`f-${field}-error`);
  input.classList.remove('has-error');
  input.removeAttribute('aria-invalid');
  errorElement.textContent = '';
}

function setFieldError(field, message) {
  const input = fieldMap[field];
  const errorElement = document.getElementById(`f-${field}-error`);
  input.classList.add('has-error');
  input.setAttribute('aria-invalid', 'true');
  errorElement.textContent = message;
}

function clearFormStatus() {
  formStatus.textContent = '';
  formStatus.classList.remove('is-error', 'is-success');
}

function setFormStatus(message, type) {
  formStatus.textContent = message;
  formStatus.classList.remove('is-error', 'is-success');
  formStatus.classList.add(type === 'error' ? 'is-error' : 'is-success');
}

function validateName() {
  const value = fieldMap.nome.value.trim();
  if (value.length < 3) {
    setFieldError('nome', 'Informe um nome com pelo menos 3 caracteres.');
    return false;
  }
  clearFieldError('nome');
  return true;
}

function validatePhone() {
  const rawValue = fieldMap.telefone.value.trim();
  const digits = rawValue.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11) {
    setFieldError('telefone', 'Informe um WhatsApp válido com DDD.');
    return false;
  }
  clearFieldError('telefone');
  return true;
}

function validateService() {
  if (!fieldMap.servico.value) {
    setFieldError('servico', 'Selecione um serviço para continuar.');
    return false;
  }
  clearFieldError('servico');
  return true;
}

function validateDate() {
  const value = fieldMap.data.value;
  if (!value) {
    setFieldError('data', 'Escolha uma data para o atendimento.');
    return false;
  }

  const selectedDate = new Date(`${value}T12:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    setFieldError('data', 'A data não pode estar no passado.');
    return false;
  }

  if (selectedDate.getDay() === 0) {
    setFieldError('data', 'Não atendemos aos domingos. Escolha outra data.');
    return false;
  }

  clearFieldError('data');
  return true;
}

function validateTime() {
  const value = fieldMap.horario.value;
  if (!value) {
    setFieldError('horario', 'Selecione um horário para o atendimento.');
    return false;
  }

  const selectedDate = fieldMap.data.value ? new Date(`${fieldMap.data.value}T12:00:00`) : null;
  const allowedTimes = selectedDate && selectedDate.getDay() === 6 ? saturdayTimes : availableTimes;

  if (!allowedTimes.includes(value)) {
    setFieldError('horario', 'O horário selecionado não está disponível para essa data.');
    return false;
  }

  clearFieldError('horario');
  return true;
}

function validateForm() {
  const validations = [
    validateName(),
    validatePhone(),
    validateService(),
    validateDate(),
    validateTime()
  ];

  return validations.every(Boolean);
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 10) {
    return digits.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, ddd, first, second) => {
      let formatted = '';
      if (ddd) formatted += `(${ddd}`;
      if (ddd.length === 2) formatted += ') ';
      if (first) formatted += first;
      if (second) formatted += `-${second}`;
      return formatted;
    });
  }

  return digits.replace(/^(\d{0,2})(\d{0,5})(\d{0,4}).*/, (_, ddd, first, second) => {
    let formatted = '';
    if (ddd) formatted += `(${ddd}`;
    if (ddd.length === 2) formatted += ') ';
    if (first) formatted += first;
    if (second) formatted += `-${second}`;
    return formatted;
  });
}

function buildBookingMessage() {
  const nome = fieldMap.nome.value.trim();
  const telefone = fieldMap.telefone.value.trim();
  const servico = fieldMap.servico.value;
  const data = new Date(`${fieldMap.data.value}T12:00:00`).toLocaleDateString('pt-BR');
  const horario = fieldMap.horario.value;
  const obs = document.getElementById('f-obs').value.trim();

  let message = 'Olá! Gostaria de agendar uma sessão na Pedito Bronze 💛\n\n';
  message += `👤 *Nome:* ${nome}\n`;
  message += `📱 *WhatsApp:* ${telefone}\n`;
  message += `💆 *Serviço:* ${servico}\n`;
  message += `📅 *Data:* ${data}\n`;
  message += `⏰ *Horário:* ${horario}\n`;
  if (obs) message += `📝 *Observações:* ${obs}\n`;
  message += '\nAguardo confirmação!';
  return message;
}

function closeMobileMenu() {
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

if (finePointer.matches && cursor && follower) {
  document.addEventListener('mousemove', event => {
    mx = event.clientX;
    my = event.clientY;
    cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
  });

  animFollower();
}

renderServices();
renderProducts();
populateServiceOptions();
setMinBookingDate();
updateAvailableTimes();

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${current}`;
    link.style.opacity = isActive ? '1' : '0.75';
    link.style.color = isActive ? 'var(--gold)' : '';
  });
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (!entry.isIntersecting) return;

    entry.target.style.transitionDelay = `${(index % 3) * 0.1}s`;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

reveals.forEach(reveal => observer.observe(reveal));

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMobileMenu();
});

navMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

fieldMap.telefone.addEventListener('input', event => {
  event.target.value = formatPhone(event.target.value);
  validatePhone();
});

fieldMap.nome.addEventListener('blur', validateName);
fieldMap.servico.addEventListener('change', validateService);
fieldMap.data.addEventListener('change', () => {
  validateDate();
  updateAvailableTimes();
  validateTime();
});
fieldMap.horario.addEventListener('change', validateTime);

bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  clearFormStatus();

  if (!validateForm()) {
    setFormStatus('Revise os campos destacados antes de enviar.', 'error');
    const firstInvalidField = bookingForm.querySelector('.has-error');
    if (firstInvalidField) firstInvalidField.focus();
    return;
  }

  bookingSubmit.disabled = true;
  bookingSubmitText.textContent = 'Abrindo WhatsApp...';

  const encodedMessage = encodeURIComponent(buildBookingMessage());
  const popup = window.open(`https://wa.me/5500000000000?text=${encodedMessage}`, '_blank', 'noopener');

  if (!popup) {
    setFormStatus('Seu navegador bloqueou a abertura do WhatsApp. Libere pop-ups e tente novamente.', 'error');
    bookingSubmit.disabled = false;
    bookingSubmitText.textContent = 'Enviar pelo WhatsApp';
    return;
  }

  setFormStatus('Mensagem pronta. Confirme o envio no WhatsApp para finalizar seu agendamento.', 'success');
  bookingSubmitText.textContent = 'WhatsApp aberto';

  window.setTimeout(() => {
    bookingSubmit.disabled = false;
    bookingSubmitText.textContent = 'Enviar pelo WhatsApp';
  }, 2500);
});
