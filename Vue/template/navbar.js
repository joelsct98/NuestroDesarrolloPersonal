new Vue({
    el: "#app",
    data: {
        rutaPrimerNivelIndex: null,
        rutaCategorias: null,
        rutaImagenesNav: null,
        redireccionMismaPagina: null,
        titulo: null,
        entrada: null,
        mostrarInput: false,
        navbarBLog: `
        
      <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid ">
            <a class="navbar-brand" href="../index.html">
              <img src="../dist/assets/img/logo-bKthKv-Qu-transformed (1).png" alt="logo-bayiba" style="width: 10em; height: 5em">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="../index.html">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown active">
                  <a class="nav-link text-service dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorías
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="../categorias/mentalidad.html">Mentalidad</a>
                    <a class="dropdown-item" href="../categorias/social.html">Social</a>
                    <a class="dropdown-item" href="../categorias/espiritual.html">Espiritual</a>
                    <a class="dropdown-item" href="../categorias/emocional.html">Emocional</a>
                    <a class="dropdown-item" href="../categorias/fisico.html">Físico</a>
                    <a class="dropdown-item" href="../categorias/finanzas.html">Finanzas</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../index.html#contacto">Contacto <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../sobremi.html">Sobre Mi <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-platzi disabled" href="../index.html#suscribete" data-toggle="modal" data-target="#modelSus"><del>Suscríbete</del> <span class="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
        
        
        `,
        navbarP_blog: `
   
           
      <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid ">
            <a class="navbar-brand" href="../../../index.html">
                <img src="../../assets/img/logo-bKthKv-Qu-transformed (1).png" alt="logo-bayiba" style="width: 10em; height: 5em">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="../../../index.html">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown active">
                  <a class="nav-link text-service dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorías
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="../../../categorias/mentalidad.html">Mentalidad</a>
                    <a class="dropdown-item" href="../../../categorias/social.html">Social</a>
                    <a class="dropdown-item" href="../../../categorias/espiritual.html">Espiritual</a>
                    <a class="dropdown-item" href="../../../categorias/emocional.html">Emocional</a>
                    <a class="dropdown-item" href="../../../categorias/fisico.html">Físico</a>
                    <a class="dropdown-item" href="../../../categorias/finanzas.html">Finanzas</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../../index.html#contacto">Contacto <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./../../sobremi.html">Sobre Mi <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-platzi disabled" href="../../../index.html#suscribete" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom" data-toggle="modal" data-target="#modelSus"><del>Suscríbete</del> <span class="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
        
`,
        navbarIndex: `
      <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid ">
            <a class="navbar-brand" href="index.html">
              <img src="dist/assets/img/logo-bKthKv-Qu-transformed (1).png" alt="logo-bayiba" style="width: 10em; height: 5em">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link text-service dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorías
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="categorias/mentalidad.html">Mentalidad</a>
                    <a class="dropdown-item" href="categorias/social.html">Social</a>
                    <a class="dropdown-item" href="categorias/espiritual.html">Espiritual</a>
                    <a class="dropdown-item" href="categorias/emocional.html">Emocional</a>
                    <a class="dropdown-item" href="categorias/fisico.html">Físico</a>
                    <a class="dropdown-item" href="categorias/finanzas.html">Finanzas</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="index.html#contacto">Contacto <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sobremi.html">Sobre Mi <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-platzi disabled" href="#suscribete" data-toggle="modal" data-target="#modelSus"><del>Suscríbete</del> <span class="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
`,

    },

    mounted() {
        this.sacarValoresHTML()
        this.actualizarHtmlContent(); // Llama al método para actualizar el contenido
    },
    computed: {
        navPage() {
            if (this.comprobarExistenciaVariables() === true) {
                return `
      <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid ">
            <a class="navbar-brand" href="index.html">
              <img src="img/logo.png" alt="logo-bayiba">
              <strong>NTP</stron
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="paginas/blog.html">Blog</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link text-service dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Servicios
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#Proyectos">Crear Paginas Web</a>
                    <a class="dropdown-item" href="#Proyectos">Servicio Técnico Personalizado </a>
                   
                  </div>
                </li>
              <li class="nav-item">
                <a class="nav-link text-tienda" href="paginas/tienda.html">Tienda<span class="sr-only">(current)</span></a>
              </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contacto">Contacto <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="paginas/sobremi.html">Sobre Mi <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-platzi disabled" href="#suscribete" data-toggle="modal" data-target="#modelSus">Suscríbete <span class="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
`
            }
        },
        footerPage() {
            if (this.comprobarExistenciaVariables() === true) {

                return "<footer class=\"border-top\">\n" +
                    "  <div class=\"container px-4 px-lg-5\">\n" +
                    "    <div class=\"row gx-4 gx-lg-5 justify-content-center\">\n" +
                    "      <div class=\"col-md-10 col-lg-8 col-xl-7\">\n" +
                    "        <ul class=\"list-inline text-center\">\n" +
                    "          <li class=\"list-inline-item\">\n" +
                    "            <a href=\"#!\">\n" +
                    "              <span class=\"fa-stack fa-lg\">\n" +
                    "                <i class=\"fas fa-circle fa-stack-2x\"></i>\n" +
                    "                <i class=\"fab fa-twitter fa-stack-1x fa-inverse\"></i>\n" +
                    "              </span>\n" +
                    "            </a>\n" +
                    "          </li>\n" +
                    "          <li class=\"list-inline-item\">\n" +
                    "            <a href=\"#!\">\n" +
                    "              <span class=\"fa-stack fa-lg\">\n" +
                    "                <i class=\"fas fa-circle fa-stack-2x\"></i>\n" +
                    "                <i class=\"fab fa-facebook-f fa-stack-1x fa-inverse\"></i>\n" +
                    "              </span>\n" +
                    "            </a>\n" +
                    "          </li>\n" +
                    "          <li class=\"list-inline-item\">\n" +
                    "            <a href=\"#!\">\n" +
                    "              <span class=\"fa-stack fa-lg\">\n" +
                    "                <i class=\"fas fa-circle fa-stack-2x\"></i>\n" +
                    "                <i class=\"fab fa-github fa-stack-1x fa-inverse\"></i>\n" +
                    "              </span>\n" +
                    "            </a>\n" +
                    "          </li>\n" +
                    "        </ul>\n" +
                    "        <div class=\"small text-center text-muted fst-italic\">2023 Copyright. All Rights Reserved.\n" +
                    "        </div>\n" +
                    "        <br>\n" +
                    "        <div class=\"small text-center text-muted fst-italic\">\n" +
                    "          <a href=\"" + this.rutaPrimerNivelIndex + "dist/politicasPrivacidad/politica-privacidad.html\">Política de Privacidad</a>\n" +
                    "          -\n" +
                    "          <a href=\"" + this.rutaPrimerNivelIndex + "dist/politicasPrivacidad/aviso-legal.html\">Aviso Legal</a>\n" +
                    "          -\n" +
                    "          <a href=\"" + this.rutaPrimerNivelIndex + "dist/politicasPrivacidad/aviso-cookies.html\">Política de Cookies</a>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  </div>\n" +
                    "</footer>";
            }
        },

    },
    methods: {
        actualizarHtmlContent() {
            this.$forceUpdate(); // Forza la actualización del componente
        },
        comprobarExistenciaVariables() {
            if ((this.rutaPrimerNivelIndex !== null &&
                this.rutaCategorias !== null &&
                this.rutaImagenesNav !== null &&
                this.redireccionMismaPagina !== null &&
                this.titulo !== null &&
                this.entrada !== null) === true) {
                return true
            } else {
                return false
            }
        },
        sacarValoresHTML() {
            /*Variables Nav*/
            const rutaPrimerNivelIndex = this.$refs.rutaPrimerNivelIndex.value;
            this.rutaPrimerNivelIndex = rutaPrimerNivelIndex;

            const rutaCategorias = this.$refs.rutaCategorias.value;
            this.rutaCategorias = rutaCategorias;

            const rutaImagenesNav = this.$refs.rutaImagenesNav.value;
            this.rutaImagenesNav = rutaImagenesNav;

            const redireccionMismaPagina = this.$refs.redireccionMismaPagina.value;
            this.redireccionMismaPagina = redireccionMismaPagina;

            const titulo = this.$refs.titulo.value;
            this.titulo = titulo;

            const entrada = this.$refs.entrada.value;
            this.entrada = entrada;
            /*Variables Nav*/

        },
    },
})