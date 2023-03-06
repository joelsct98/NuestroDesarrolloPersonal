/*
* Si hay alguna variable que no mande, simplmente va a dar un error y no va a pintar ningun componente
* */

new Vue({
    el: "#app",
    data: {
        mostrarInput: false,

        /*
        * Nav Bar
        * */
        rutaIndex: null,
        rutaCategorias: null,
        rutaSobreMi: null,
        rutaImagen: null,

        /*
        * paginas de Blog
        * */
        fechaCreacion: null,
        autorCreacion: null,
        PBlogPrimerNivel: null,

        /*
        * Indice enlaces
        * */
        paginaPrincipal: null,
        linkPrincipal: null,
        paginaSecundaria: null,
        linkSecundaria: null,
        paginaTercearia: null,
        linkTercearia: null,

        /*
        * Imagen Pagina
        * */
        tituloPagina: null,
        imagenPaginaPortada: null,
        entradaPaginaPortada: null,
        numeroImagenes: null,

        /*
        * Plantillas estaticas
        * */
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
        this.vueltaMounted = true;
        this.sacarValoresHTML();
        this.actualizarHtmlContent(); // Llama al método para actualizar el contenido
    },
    computed: {
        navPage() {
            if (this.comprobarExistenciaVariablesNavBar() === true) {

                return "" +
                    "    <nav id=\"header\" class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n" +
                    "      <div class=\"container-fluid \">\n" +
                    "        <a class=\"navbar-brand\" href=\"" + this.rutaIndex + "\">\n" +
                    "          <img src=\"" + this.rutaImagen + "\" alt=\"logo-bayiba\" style=\"width: 10em; height: 5em\">\n" +
                    "        </a>\n" +
                    "        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
                    "          <span class=\"navbar-toggler-icon\"></span>\n" +
                    "        </button>\n" +
                    "\n" +
                    "        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
                    "          <ul class=\"navbar-nav ml-auto\">\n" +
                    "            <li class=\"nav-item active\">\n" +
                    "              <a class=\"nav-link\" href=\"" + this.rutaIndex + "\">Inicio <span class=\"sr-only\">(current)</span></a>\n" +
                    "            </li>\n" +
                    "            <li class=\"nav-item dropdown\">\n" +
                    "              <a class=\"nav-link text-service dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
                    "                Categorías\n" +
                    "              </a>\n" +
                    "              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" +
                    "                <a class=\"dropdown-item\" href=\"" + this.rutaCategorias + "mentalidad.html\">Mentalidad</a>\n" +
                    "                <a class=\"dropdown-item\" href=\"" + this.rutaCategorias + "social.html\">Social</a>\n" +
                    "                <a class=\"dropdown-item\" href=\"" + this.rutaCategorias + "espiritual.html\">Espiritual</a>\n" +
                    "                <a class=\"dropdown-item\" href=\"" + this.rutaCategorias + "emocional.html\">Emocional</a>\n" +
                    "                <a class=\"dropdown-item\" href=\"" + this.rutaCategorias + "fisico.html\">Físico</a>\n" +
                    "                <a class=\"dropdown-item\" href=\"" + this.rutaCategorias + "finanzas.html\">Finanzas</a>\n" +
                    "              </div>\n" +
                    "            </li>\n" +
                    "            <li class=\"nav-item\">\n" +
                    "              <a class=\"nav-link\" href=\"" + this.rutaIndex + "#contacto\">Contacto <span class=\"sr-only\">(current)</span></a>\n" +
                    "            </li>\n" +
                    "            <li class=\"nav-item\">\n" +
                    "              <a class=\"nav-link\" href=\"" + this.rutaSobreMi + "\">Sobre Mi <span class=\"sr-only\">(current)</span></a>\n" +
                    "            </li>\n" +
                    "            <li class=\"nav-item\">\n" +
                    "              <a class=\"nav-link text-platzi disabled\" href=\"" + this.rutaIndex + "#suscribete\" data-toggle=\"modal\" data-target=\"#modelSus\"><del>Suscríbete</del> <span class=\"sr-only\">(current)</span></a>\n" +
                    "            </li>\n" +
                    "          </ul>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </nav>\n"
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
        entradaBlog() {
            if (this.comprobarExistenciaVariablesAuthorFecha() === true) {

                return "<div class=\"componente\">" + this.fechaCreacion + " por <a href=\"" + this.PBlogPrimerNivel + "sobremi.html\">" + this.autorCreacion + "</a></div>\n";

            }
        },
        indiceEnlaces() {
            if (this.comprobarExistenciaVariablesIndiceEnlaces() === true) {
                if (this.paginaTercearia !== "") {
                    return "<div class=\"componente\"><a href=\"" + this.linkPrincipal + "\">" + this.paginaPrincipal + "</a> > <a href=\"" + this.linkSecundaria + "\">" + this.paginaSecundaria + "</a> > " + this.paginaTercearia + "</div>\n";
                } else if (this.paginaSecundaria !== "") {
                    return "<div class=\"componente\"><a href=\"" + this.linkPrincipal + "\">" + this.paginaPrincipal + "</a> > " + this.paginaSecundaria + "</div>\n";
                } else {
                    return ""
                }

            }
        },
        imagenPagina() {
            if (this.comprobarExistenciaVariablesImagenPagina() === true) {

                var componente;

                if (parseInt(this.numeroImagenes) > 1){

                    var imagenPortada = "";

                    try {
                        var imagenPaginaPortada2 = this.$refs.imagenPaginaPortada2.value;
                        this.imagenPaginaPortada2 = imagenPaginaPortada2;

                        if (parseInt(this.numeroImagenes) === 2){
                            imagenPortada += "" +
                                "          <div class=\"carousel-item active\">\n" +
                                "            <img class=\"d-block w-100\" src=\" "+this.imagenPaginaPortada+"\" alt=\"ImagenCarrusel "+1+"\">\n" +
                                "          </div>\n"+
                                "          <div class=\"carousel-item\">\n" +
                                "            <img class=\"d-block w-100\" src=\" "+this.imagenPaginaPortada2+"\" alt=\"ImagenCarrusel "+2+"\">\n" +
                                "          </div>\n"
                        }
                    } catch (error) {
                        console.error("No existe la segunda imagen para el componente ImagenPagina");
                    }

                    try {
                        var imagenPaginaPortada3 = this.$refs.imagenPaginaPortada3.value;
                        this.imagenPaginaPortada3 = imagenPaginaPortada3;

                        if (parseInt(this.numeroImagenes) === 3){
                            imagenPortada += "" +
                                "          <div class=\"carousel-item active\">\n" +
                                "            <img class=\"d-block w-100\" src=\" "+this.imagenPaginaPortada+"\" alt=\"ImagenCarrusel "+1+"\">\n" +
                                "          </div>\n"+
                                "          <div class=\"carousel-item\">\n" +
                                "            <img class=\"d-block w-100\" src=\" "+this.imagenPaginaPortada2+"\" alt=\"ImagenCarrusel "+2+"\">\n" +
                                "          </div>\n"+
                                "          <div class=\"carousel-item\">\n" +
                                "            <img class=\"d-block w-100\" src=\" "+this.imagenPaginaPortada3+"\" alt=\"ImagenCarrusel "+3+"\">\n" +
                                "          </div>\n"
                        }
                    } catch (error) {
                        console.error("No existe la tercera imagen para el componente ImagenPagina");
                    }

                    componente = "" +
                        "    <main id=\"main\">\n" +
                        "      <div id=\"carousel\" class=\"carousel slide carousel-fade mb-4\" data-ride=\"carousel\" data-pause=\"false\">\n" +
                        "        <div class=\"carousel-inner\">\n" +
                                    imagenPortada +
                        "          <div class=\"overlay\">\n" +
                        "            <div class=\"container\">\n" +
                        "              <div class=\"row align-items-center\">\n" +
                        "                <div class=\"col-md-6 offset-md-6 text-center text-md-right\">\n" +
                        "                  <h1>"+ this.tituloPagina +"</h1>\n" +
                        "                  <p class=\"d-md-block\">\n" +
                        "                    "+ this.entradaPaginaPortada +" \n" +
                        "                  </p>\n" +
                        "                </div>\n" +
                        "              </div>\n" +
                        "            </div>\n" +
                        "          </div>\n" +
                        "        </div>\n" +
                        "      </div>\n" +
                        "    </main>"

                }else {

                    componente = "" +
                    "    <main id=\"main\">\n" +
                    "      <div id=\"carousel\" class=\"carousel slide carousel-fade mb-4\" data-ride=\"carousel\" data-pause=\"false\">\n" +
                    "        <div class=\"carousel-inner\">\n" +
                    "          <div class=\"carousel-item active\">\n" +
                    "            <img class=\"d-block w-100\" src=\" "+this.imagenPaginaPortada+"\" alt=\"Hawaii 1\">\n" +
                    "          </div>\n" +
                    "          <div class=\"overlay\">\n" +
                    "            <div class=\"container\">\n" +
                    "              <div class=\"row align-items-center\">\n" +
                    "                <div class=\"col-md-6 offset-md-6 text-center text-md-right\">\n" +
                    "                  <h1>"+ this.tituloPagina +"</h1>\n" +
                    "                  <p class=\"d-md-block\">\n" +
                    "                    "+ this.entradaPaginaPortada +" \n" +
                    "                  </p>\n" +
                    "                </div>\n" +
                    "              </div>\n" +
                    "            </div>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </main>"

                }

                return componente;

            }
        },

    },
    methods: {
        /*
        * Comprobar Variables
        * */
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
        comprobarExistenciaVariablesAuthorFecha() {
            if ((this.fechaCreacion !== null &&
                this.autorCreacion !== null &&
                this.PBlogPrimerNivel !== null)) {
                return true
            } else {
                return false
            }
        },
        comprobarExistenciaVariablesIndiceEnlaces() {
            if ((this.paginaPrincipal !== null &&
                this.linkPrincipal !== null &&
                this.paginaSecundaria !== null &&
                this.linkSecundaria !== null &&
                this.paginaTercearia !== null &&
                this.linkTercearia !== null)) {
                return true
            } else {
                return false
            }
        },
        comprobarExistenciaVariablesImagenPagina() {
            if ((this.tituloPagina !== null &&
                this.imagenPaginaPortada !== null &&
                this.entradaPaginaPortada !== null &&
                this.numeroImagenes !== null)) {
                return true
            } else {
                return false
            }
        },
        comprobarExistenciaVariablesNavBar() {
            if ((this.rutaIndex !== null &&
                this.rutaCategorias !== null &&
                this.rutaImagen !== null &&
                this.rutaSobreMi !== null)) {
                return true
            } else {
                return false
            }
        },

        /*
        * Sacar Variables del HTML
        * */
        sacarValoresComponenteCreacion() {
            try {
                /*Variables Nav*/
                const fechaCreacion = this.$refs.fechaCreacion.value;
                this.fechaCreacion = fechaCreacion;

                const autorCreacion = this.$refs.autorCreacion.value;
                this.autorCreacion = autorCreacion;

                const PBlogPrimerNivel = this.$refs.PBlogPrimerNivel.value;
                this.PBlogPrimerNivel = PBlogPrimerNivel;
            } catch (error) {
                console.error("No existe variables para Componente Autor Fecha");
            }

        },
        sacarValoresHTMLIndiceEnlaces() {
            try {
                /*Variables*/
                const paginaPrincipal = this.$refs.paginaPrincipal.value;
                this.paginaPrincipal = paginaPrincipal;

                const linkPrincipal = this.$refs.linkPrincipal.value;
                this.linkPrincipal = linkPrincipal;

                const paginaSecundaria = this.$refs.paginaSecundaria.value;
                this.paginaSecundaria = paginaSecundaria;

                const linkSecundaria = this.$refs.linkSecundaria.value;
                this.linkSecundaria = linkSecundaria;

                const paginaTercearia = this.$refs.paginaTercearia.value;
                this.paginaTercearia = paginaTercearia;

                const linkTercearia = this.$refs.linkTercearia.value;
                this.linkTercearia = linkTercearia;
            } catch (error) {
                // Aquí manejas el error o excepción
                console.error("No existe variables para Componente Indice Variables");
            }

        },
        sacarValoresImagenPagina() {
            try {
                /*Variables Nav*/
                const tituloPagina = this.$refs.tituloPagina.value;
                this.tituloPagina = tituloPagina;

                const imagenPaginaPortada = this.$refs.imagenPaginaPortada.value;
                this.imagenPaginaPortada = imagenPaginaPortada;

                const entradaPaginaPortada = this.$refs.entradaPaginaPortada.value;
                this.entradaPaginaPortada = entradaPaginaPortada;

                const numeroImagenes = this.$refs.numeroImagenes.value;
                this.numeroImagenes = numeroImagenes;
            } catch (error) {
                console.error("No existe variables para Componente Imagen Pagina");
            }

        },
        sacarValoresNavBar() {
            try {
                /*Variables Nav*/
                const rutaIndex = this.$refs.rutaIndex.value;
                this.rutaIndex = rutaIndex;

                const rutaCategorias = this.$refs.rutaCategorias.value;
                this.rutaCategorias = rutaCategorias;

                const rutaSobreMi = this.$refs.rutaSobreMi.value;
                this.rutaSobreMi = rutaSobreMi;

                const rutaImagen = this.$refs.rutaImagen.value;
                this.rutaImagen = rutaImagen;

            } catch (error) {
                console.error("No existe variables para Componente NavBar");
            }

        },
        actualizarHtmlContent() {
            this.$forceUpdate(); // Forza la actualización del componente
        },
        sacarValoresHTML() {
            this.sacarValoresComponenteCreacion();
            this.sacarValoresHTMLIndiceEnlaces();
            this.sacarValoresImagenPagina();
            this.sacarValoresNavBar();
        },
    },
})