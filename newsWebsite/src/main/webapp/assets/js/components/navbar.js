import {checkLoginStatus, contextPath} from './global.js';

const navbarContainer = document.getElementById('nav-bar');


document.addEventListener('DOMContentLoaded', async () => {

    let data = await checkLoginStatus();
    navbar(data.isLogged);
});

const navbar = (isLogged)=> {

    let content = `
        <div class="container">
            <header class="border-bottom lh-1 py-2">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img alt="logo" src="${contextPath}/assets/images/IFNews.png" width="100px"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="${contextPath}/index.html">Página Inicial</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="${contextPath}/retrieveCategory">Categorias</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="${contextPath}/about.html">Sobre</a>
                                </li>
    `;

    if (isLogged) {
        content += `
           <li class="nav-item">
                <a class="nav-link" href="${contextPath}/views/news/createNewsArticle.html">Cadastrar Noticia</a>
            </li>
        `;
    }

    content += '</ul>';

    content += `
                <form class="d-flex" role="search" action="${contextPath}/views/news/newsSearch.html" method="get">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="keyword">
                <button class="btn btn-light" type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </form>`;

    if (!isLogged) {

        content += `
            <ul class="navbar-nav me-right mb-2 mb-lg-0 mx-1 mt-2">
                <li class="nav-item dropdown">
                    <a href="${contextPath}/signup" class="btn btn-outline-secondary" role="button">SignUp</a>
                    <a href="${contextPath}/login" class="btn btn-secondary" role="button">Login</a>
                </li>
            </ul>
        `;
    } else {
        content += `
            <ul class="navbar-nav me-right mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="user" width="30px">
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="${contextPath}/views/user/profile.html">Perfil</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="${contextPath}/logoutUser">Sair</a></li>
                    </ul>
                </li>
            </ul>        
        `;
    }

    content += `
            </div>
          </div>
        </nav>
      </header>`;

    navbarContainer.innerHTML = content;
}
