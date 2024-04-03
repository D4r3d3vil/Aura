<script>
  let theme = 'dark', menuOpen = false;
  function menu(){
    menuOpen = !menuOpen;
    let disp = document.querySelector('.navbar').style.display
    document.querySelector('.navbar').style.display = disp == 'block'? 'none': 'block'
  }
</script>

<html>
  <link rel="stylesheet" href="/styles/footer.css" />
  <body class="body">
    <header class="header">
      <div class="top-container">
        <div class="header-container">
          <div class="brand-container">
            <img
              src="/images/me.jpeg"
              alt="Your Name"
              class="brand-image"
            />
            <span class="brand-name">Mulham Alamry</span>
          </div>
          <div class="hamburger">
            <img
              on:click={menu}
              src={menuOpen? "/images/ham-menu-close.svg": "/images/ham-menu.svg"}
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
          </div>
        </div>
        <nav class="navbar">
          <a href="/" class="nav-link">Home</a>
          <a href="/#about" class="nav-link">About</a>
          <a href="/" class="nav-link">Services</a>
          <a href="/#contact" class="nav-link">Contact</a>
        </nav>
      </div>
    </header>
    <div class="slot">
      <slot />
      <style>
        .slot {
          font-size: 260%;
        }
        @media only screen and (max-width: 75em) {
          .slot {
            font-size: 269%;
          }
        }

        @media only screen and (max-width: 56.25em) {
          .slot {
            font-size: 278%;
          }
        }

        @media only screen and (min-width: 112.5em) {
          .slot {
            font-size: 253%;
          }
        }
      </style>
    </div>
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">Social</h2>
            <div class="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mulham-alamry-b14a46270/"
              >
                <img
                  class="main-footer__icon"
                  src="/images/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/D4r3d3vil"
              >
                <img
                  class="main-footer__icon"
                  src="/images/github-ico.png"
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/AlamryMulham"
              >
                <img
                  class="main-footer__icon"
                  src="/images/twitter-ico.png"
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCOAYLFQDmFOfYSIUrHN0JGA"
              >
                <img
                  class="main-footer__icon"
                  src="/images/yt-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Mulham Alamry</h4>
            <p class="main-footer__short-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
              tempora explicabo quae quod deserunt
            </p>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>

<style>
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5% !important;
    scroll-behavior: smooth;
  }
  html::-webkit-scrollbar,
  body::-webkit-scrollbar,
  .slot::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 75em) {
    html {
      font-size: 59%;
    }
  }

  @media only screen and (max-width: 56.25em) {
    html {
      font-size: 56%;
    }
  }

  @media only screen and (min-width: 112.5em) {
    html {
      font-size: 65%;
    }
  }
  .body {
    box-sizing: border-box;
    position: relative;
    line-height: 1.5;
    font-family: sans-serif;
    font-family: "Source Sans Pro", sans-serif;
    padding-top: 3.8rem;
    width: 100vw;
  }
  .slot {
    height: fit-content;
    min-height: 70vh;
  }
  .header {
    background-color: black;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
  }
  .navbar {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .nav-link {
    padding: 2.2rem 3rem;
    display: inline-block;
    font-size: 1.6rem;
    line-height: 22px;
    letter-spacing: 1px;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    text-decoration: none;
  }
  @media only screen and (max-width: 56.25em) {
    .nav-link {
      padding: 3rem 1.8rem;
      font-size: 1.5rem;
    }
  }
  .hamburger {
    display: none;
    cursor: pointer;
    padding: 10px;
    margin-left: auto;
  }
  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
  }
  @media only screen and (max-width: 56.25em) {
    .top-container {
      padding: 2rem;
    }
  }
  .brand-container {
    display: flex;
    align-items: center;
    color: #333;
  }

  @media (max-width: 768px) {
    .header-container {
      display: flex;
    }

    .hamburger {
      display: block;
    }

    .nav-link {
      width: 100%;
      text-align: center;
      border-bottom: solid 1px white;
      padding: 1.2rem 0;
    }
    .top-container {
      display: block;
    }

    .navbar {
      display: none;
      align-items: center;
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .brand-name:hover,
    .nav-link:hover {
      color: rgb(0, 98, 185);
    }
  }
  .brand-image {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .brand-name {
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    color: #333;
  }
</style>
