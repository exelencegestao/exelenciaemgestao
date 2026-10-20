const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuButton.textContent = isOpen ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) { menuButton.textContent = '☰'; menuButton.setAttribute('aria-label', 'Abrir menu'); }
}));
document.getElementById('year').textContent = new Date().getFullYear();

const articleData = {
  financas: {
    label: 'GESTÃO · ORGANIZAÇÃO FINANCEIRA',
    title: 'Separe as finanças pessoais das finanças da empresa',
    paragraphs: [
      'Misturar despesas pessoais e empresariais dificulta entender quanto o negócio realmente recebe, gasta e gera de resultado. Uma separação clara ajuda a manter os registros mais confiáveis.',
      'Comece usando uma conta dedicada às movimentações da empresa, registre todas as entradas e saídas e defina uma forma consistente de retirada dos sócios ou do titular, conforme a orientação contábil adequada.',
      'Guarde comprovantes e revise os registros periodicamente. A organização facilita a análise do caixa e o diálogo com quem cuida da contabilidade.'
    ],
    list: ['Registre entradas e despesas com regularidade.', 'Guarde notas fiscais e comprovantes.', 'Revise os resultados e tire dúvidas com seu contador.']
  },
  documentos: {
    label: 'CONTABILIDADE · ROTINA',
    title: 'Documentos organizados: menos correria no fechamento',
    paragraphs: [
      'Manter documentos acessíveis ao longo do mês pode tornar a rotina de fechamento mais previsível. A organização também ajuda a localizar informações quando surgem dúvidas ou solicitações.',
      'Crie uma estrutura simples por mês e categoria, preserve notas fiscais, comprovantes, extratos e documentos relacionados à operação. Combine com a equipe contábil quais arquivos devem ser enviados e em qual formato.',
      'Os documentos necessários e os prazos variam conforme o tipo e o regime da empresa. Confirme a lista atualizada com o profissional responsável.'
    ],
    list: ['Separe os arquivos por mês.', 'Use nomes claros para identificar cada documento.', 'Confirme prazos e exigências aplicáveis à sua empresa.']
  },
  caixa: {
    label: 'PLANEJAMENTO · FLUXO DE CAIXA',
    title: 'Fluxo de caixa: enxergue melhor o movimento do dinheiro',
    paragraphs: [
      'O fluxo de caixa organiza os recebimentos e pagamentos previstos e realizados. Com ele, fica mais fácil visualizar compromissos futuros e antecipar períodos em que o dinheiro pode ficar mais apertado.',
      'Registre datas, valores, origem dos recebimentos e natureza das despesas. Compare o que foi planejado com o que realmente aconteceu e atualize as previsões sempre que houver mudanças.',
      'O fluxo de caixa é uma ferramenta de gestão e não substitui demonstrações contábeis ou orientação profissional. Use-o junto de outras informações para tomar decisões.'
    ],
    list: ['Anote recebimentos e pagamentos com datas.', 'Atualize as previsões semanalmente.', 'Planeje despesas futuras e mantenha registros de apoio.']
  }
};
const dialog = document.getElementById('article-dialog');
const dialogContent = document.getElementById('dialog-content');
document.querySelectorAll('[data-article]').forEach(button => button.addEventListener('click', () => {
  const article = articleData[button.dataset.article];
  if (!article) return;
  dialogContent.innerHTML = `<div class="dialog-label">${article.label}</div><h2>${article.title}</h2>${article.paragraphs.map(p => `<p>${p}</p>`).join('')}<ul>${article.list.map(item => `<li>${item}</li>`).join('')}</ul>`;
  dialog.showModal();
}));
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
