<script>
    /* @vite-ignore */
    export let data;
    let Component,
        notFound = false, metadata;
    async function display() {
        try {
            await import(
                `../../../uploads/pages/${data.path}.md`
            ).then((C) => {
                metadata = C.metadata
                Component = C.default;
            });
        } catch (error) {
            notFound = true;
        }
    }
    display();
</script>

{#if notFound}
    <div id="main">
        <div class="fof">
            <h1>Error 404</h1>
            <h2>Page cannot be found</h2>
            <p>It may have been replaced or deleted</p>
        </div>
    </div>
{:else if Component}
    <Component />
    <script>
        document.querySelector('.toc').innerHTML = document.querySelector('.toc').innerHTML.replaceAll('<ol', '<ul').replaceAll('</ol>', '</ul>')
        window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    </script>
      <button id="scrollToTopBtn" onclick="scrollToTop()">Top</button>
    <style>
*{scroll-behavior: smooth;}#scrollToTopBtn {display: none;position: fixed;bottom: 20px;right: 20px;background-color: #007bff;color: #fff;border: none;border-radius: 5px;padding: 10px;cursor: pointer;}#scrollToTopBtn:hover {background-color: #0056b3;}nav.toc {z-index: 999;position: fixed;top: 20px;width: 265px;left: calc(95% - 265px);overflow: hidden;font-family: 'Arial', sans-serif;background-color: #f5f5f5;border: 1px solid #ddd;border-radius: 5px;max-height: 70%;overflow-y: scroll;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}.toc-level-1:before {content: 'Content';font-size: large;display: block;padding: 10px;border-bottom: 1px solid #ccc;}nav.toc ol.toc-level-1 {margin: 0;padding: 0;}nav.toc li.toc-item {margin: 0;}nav.toc a.toc-link {text-decoration: none;color: #4285f4;display: block;padding: 8px 15px;transition: color 0.3s ease;}nav.toc a.toc-link:hover, nav.toc a.toc-link:focus{color: #0d47a1;background-color: #e0e0e0;}nav.toc li.toc-item-h2 {margin-left: 10px;}nav.toc a.toc-link-h2 {font-weight: bold;}
    </style>
{:else}
    <p>Loading...</p>
{/if}

<style>
    * {
        transition: all 0.6s;
    }
    .fof {
        font-family: "Lato", sans-serif;
        color: #888;
        margin: 0;
    }
    
    #main {
        display: table;
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    .fof {
        display: table-cell;
        vertical-align: middle;
    }

    .fof h1 {
        font-size: 50px;
        display: inline-block;
        padding-right: 12px;
        animation: type 0.5s alternate infinite;
    }

    @keyframes type {
        from {
            box-shadow: inset -3px 0px 0px #888;
        }
        to {
            box-shadow: inset -3px 0px 0px transparent;
        }
    }
</style>
