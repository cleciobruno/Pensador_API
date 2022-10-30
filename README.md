<h1 align="center">Pensador_API</h1>
<div>
 <p align="center">API desenvolvida para pegar textos do site "<a href="https://pensador.com">Pensador.com<a>"</p>
 <br><h2>Como funciona:</h2>
 <p>A API funciona pegando frases de autores do site "<a href="https://pensador.com">Pensador.com<a/>" e retornando em <code>formato Json</code> o <code>autor</code> e a <code>frase</code>.</p>
 <img src="https://i.ibb.co/VJvSKST/albert.png" target="_blank">
</div>
<div>
 <br><h2>Para autor aleatório:</h2>
 <p>Basta escrever <code>a</code> de <code>aleatório</code> após o <code>/autor</code>.</p>
 <blockquote>
  <a href="https://bruno-api-pensador.herokuapp.com/autor/a">https://bruno-api-pensador.herokuapp.com/autor/<code>a</code></a>
 </blockquote>
 <br><h2>Para autor determiando:</h2>
 <p>Basta escrever o <code>nome do autor</code> após o <code>/autor</code>, seguindo as <code>Regras do nome do autor</code>.</p>
 <blockquote>
  <a href="https://bruno-api-pensador.herokuapp.com/autor/platao">https://bruno-api-pensador.herokuapp.com/autor/<code>platao</code></a>
 </blockquote>
 <br><h2>Regras do nome do autor:</h2>
 <ul>
  <li><p>O nome do autor deve ser escrito em letra minúscula;</p></li>
  <li><p>Caso haja <code>espaços em branco</code> ou <code>-</code> no nome do autor, substituir por <code>_</code>.</p></li>
  <p>Exemplo: <code>Roger Bussy-Rabutin</code> == <code>roger_bussy_rabutin</code>.</p>
 </ul>
 <br><h2>Caso o autor não exista:</h2>
 <p>Caso o autor informado não exista, a API retornará <code>false</code>.</p>
 <img src="https://i.ibb.co/yhRKSW1/false2.png" target="_blank">
</div>
