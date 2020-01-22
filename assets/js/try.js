function getKatacodaLnk (katacodaSrc) {
  const elems = katacodaSrc.split('/');
  return `${elems[0]}/scenarios/${elems[1]}`;
}

function openModal (article) {
  const katacodaSrc = article.getAttribute('data-katacoda-src');
  const katacodaLnk = getKatacodaLnk(katacodaSrc);
  const githubLnk = article.getAttribute('data-github-src');
  const qwiklabsLnk = article.getAttribute('data-qwiklabs-src');

  document.getElementById('modal').classList.add('is-active');
  document.getElementById('katacoda-button').setAttribute('href', `https://katacoda.com/${katacodaLnk}`);
  document.getElementById('github-button').setAttribute('href', `https://github.com/${githubLnk}`);
  document.getElementById('qwiklabs-button').setAttribute('href', `https://qwiklabs.com/${qwiklabsLnk}`);

  const scenario = document.getElementById('embedded-katacoda-scenario');
  const katacodaCanvasNode = document.createElement('div');
  katacodaCanvasNode.setAttribute('id', 'katacoda-scenario');
  katacodaCanvasNode.setAttribute('data-katacoda-id', katacodaSrc);
  katacodaCanvasNode.setAttribute('data-katacoda-color', '004d7f');
  katacodaCanvasNode.setAttribute('style', 'height: 900px; padding-top: 20px;');
  const katacodaScriptNode = document.createElement('script');
  katacodaScriptNode.setAttribute('id', 'katacoda-scenario-script');
  katacodaScriptNode.setAttribute('src', '//katacoda.com/embed.js');
  scenario.appendChild(katacodaCanvasNode);
  scenario.appendChild(katacodaScriptNode);
}

function closeModal () {
  document.getElementById('embedded-katacoda-scenario').removeChild(
    document.getElementById('katacoda-scenario')
  );
  document.getElementById('embedded-katacoda-scenario').removeChild(
    document.getElementById('katacoda-scenario-script')
  );
  document.getElementById('modal').classList.remove('is-active');
  document.getElementById('katacoda-button').removeAttribute('href');
  document.getElementById('github-button').removeAttribute('href');
  document.getElementById('qwiklabs-button').removeAttribute('href');
  document.getElementById('message').classList.remove('is-hidden');
}

function closeNote () {
  document.getElementById('message').classList.add('is-hidden');
}