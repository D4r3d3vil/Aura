<script>
  import { onMount } from "svelte";
    import { listen } from "svelte/internal";

  export let data;
  let Component,
    notFound = false,
    metadata;

  onMount(async () => {
    try {
      const C = await import(
        /* @vite-ignore */ `/src/uploads/pages/${data.path}.md`
      );
      metadata = C.metadata;
      Component = C.default;
    } catch (error) {
      notFound = true;
    }
  });
</script>

{#if notFound}
  <div class="container">
    <style>
      .fof{
        text-align:center;color:#888;margin:0
      }

      .fof h1{
        font-size:50px;display:inline-block;padding-right:12px;animation:.5s infinite alternate type
      }
      
      @keyframes type{
        from{box-shadow:inset -3px 0 0 #888}
        to{box-shadow:inset -3px 0 0 transparent}
      }
    </style>
    <div class="fof">
      <h1>Error 404</h1>
      <h2>Page cannot be found</h2>
      <p>It may have been replaced or deleted</p>
    </div>
  </div>
{:else if Component}
  <div class="container">
    <!-- Table of Contents -->

    <!-- Page Content -->
    <div class="content">
      <Component />
    </div>
  </div>
  <button id="scrollToTopBtn" onclick="scrollToTop()">&uarr;</button>

  <script>
    let TOC = document.querySelector(".toc");
    let content = document.querySelector(".content");
    let container = document.querySelector(".container");
    TOC.innerHTML = TOC.innerHTML
      .replaceAll("<ol", "<ul")
      .replaceAll("</ol>", "</ul>");
    content.removeChild(TOC);
    container.insertBefore(TOC, container.firstChild);
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    function scrollFunction() {
      console.log(document.querySelector('.content').scrollTop)
      if (
        document.querySelector('.content').scrollTop > 20
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }
    scrollFunction();
    content.onscroll = () => scrollFunction();
    function scrollToTop() {
      document.querySelector('.content').scrollTop = 0;
    }
  </script>
  <style>
#scrollToTopBtn{position:fixed;left:92%;top:92%;height:50px;width:50px;font-size:30px;background-color:#0098ea;color:#fff;font-weight:900;text-shadow:0 1px,1px 0,1px 1px;border:2px solid #000;border-radius:100%}.container{display:flex;flex:1;width:100%;margin:auto;background-color:#fff;box-shadow:0 0 20px rgba(0,0,0,.1);border-radius:10px;overflow-y:hidden}.content,.toc{overflow-y:scroll;}.toc{border:1px solid #ddd;border-radius:5px;width:200px;overflow-x:hidden;padding:20px;}.toc a,pre{border-radius:5px}.toc-level-1{margin-bottom:10px}.toc ol{list-style-type:none;padding:0;margin:0}.toc li{list-style-type:inherit;margin:4px 0 0 0;padding:0;}.toc a{text-decoration:none;color:#4285f4;display:block;transition:color .3s}.toc a:hover{color:#0d47a1;background-color:#e0e0e0}.content{flex:1;box-sizing:border-box}pre{background-color:#1e1e1e;color:#f8f8f2;padding:20px;overflow-x:auto}pre code{font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#6a9955}.token.punctuation{color:#f8f8f2}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#36acaa}.token.boolean,.token.number{color:#ff79c6}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#f1fa8c}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#bd93f9}.token.atrule,.token.attr-value,.token.keyword{color:#f55}.token.class-name,.token.function{color:#50fa7b}.token.important,.token.regex,.token.variable{color:#ffb86c}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}*{scroll-behavior:smooth}@media(max-width: 768px){.toc{display:none;}#scrollToTopBtn{z-index:-999;background:transparent;border:none;text-shadow:0;}}
  </style>
{:else}
  <p>Loading...</p>
{/if}