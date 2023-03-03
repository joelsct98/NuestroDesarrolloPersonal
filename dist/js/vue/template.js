new Vue({
    el: "#app",
    data() {
        return {
            rutaPrimerNivelIndex: null,
            rutaCategorias: null,
            rutaImagenesNav: null,
            redireccionMismaPagina: null,
            titulo: null,
            entrada: null,
            mostrarInput: false,
        }
    },
    mounted() {
        this.sacarValoresHTML()
        this.actualizarHtmlContent(); // Llama al método para actualizar el contenido
    },
    computed: {
        navPage() {
            if (this.comprobarExistenciaVariables() === true) {
                return "  <!-- Navigation-->\n" +
                    "  <nav class=\"navbar navbar-expand-lg navbar-light\" id=\"mainNav\">\n" +
                    "    <div class=\"container px-4 px-lg-5\">\n" +
                    "      <a class=\"navbar-brand\" href=\"" + this.rutaPrimerNivelIndex + "index.html\">Nuestro Desarrollo Personal</a>\n" +
                    "      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarResponsive\"\n" +
                    "              aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
                    "        Menu\n" +
                    "        <i class=\"fas fa-bars\"></i>\n" +
                    "      </button>\n" +
                    "\n" +
                    "      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n" +
                    "        <ul class=\"navbar-nav ms-auto py-4 py-lg-0\">\n" +
                    "          <li class=\"nav-item\"><a class=\"nav-link px-lg-3 py-3 py-lg-4\" href=\"" + this.rutaPrimerNivelIndex + "index.html\">Inicio</a></li>\n" +
                    "          <li class=\"nav-item\"><a class=\"nav-link px-lg-3 py-3 py-lg-4\" href=\"" + this.rutaPrimerNivelIndex + "sobremi.html\">Sobre mi</a></li>\n" +
                    "\n" +
                    "          <li class=\"nav-item dropdown\">\n" +
                    "            <a class=\"nav-link dropdown-toggle nav-link px-lg-3 py-3 py-lg-4\"\n" +
                    "               data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\"\n" +
                    "               aria-expanded=\"false\">Categorías</a>\n" +
                    "            <ul class=\"dropdown-menu\">\n" +
                    "              <li><a class=\"dropdown-item\" href=\"categorias/mentalidad.html\">Mentalidad</a></li>\n" +
                    "              <li><a class=\"dropdown-item\" href=\"#\">Social</a></li>\n" +
                    "              <li><a class=\"dropdown-item\" href=\"#\">Espiritual</a></li>\n" +
                    "              <li><a class=\"dropdown-item\" href=\"#\">Emocional</a></li>\n" +
                    "              <li><a class=\"dropdown-item\" href=\"#\">Físico</a></li>\n" +
                    "              <li><a class=\"dropdown-item\" href=\"#\">Finanzas</a></li>\n" +
                    "            </ul>\n" +
                    "          </li>\n" +
                    "\n" +
                    "          <li class=\"nav-item\"><a class=\"nav-link px-lg-3 py-3 py-lg-4\" href=\"" + this.rutaPrimerNivelIndex + "contact.html\">Contáctanos</a>\n" +
                    "          </li>\n" +
                    "        </ul>\n" +
                    "      </div>\n" +
                    "\n" +
                    "\n" +
                    "    </div>\n" +
                    "  </nav>\n" +
                    "  <!-- Page Header-->\n" +
                    "  <header class=\"masthead\" style=\"background-image: url('" + this.rutaPrimerNivelIndex + "dist/assets/img/Mentalidad.jpg');\n" +
                    "                                            z-index: -1\">\n" +
                    "    <div class=\"container position-relative px-4 px-lg-5\">\n" +
                    "      <div class=\"row gx-4 gx-lg-5 justify-content-center\">\n" +
                    "        <div class=\"col-md-10 col-lg-8 col-xl-7\">\n" +
                    "          <div class=\"site-heading\">\n" +
                    "            <h2>Mentalidad</h2>\n" +
                    "            <span class=\"subheading\">El desarrollo es un proceso continuo de mejora de nuestras\n" +
                    "                                    vidas y de nosotros mismos. Independientemente de la edad que tengamos,\n" +
                    "                                    siempre hay formas de mejorar nuestro crecimiento y desarrollo personal.\n" +
                    "                                    En esta entrada del blog, echaremos un vistazo a seis formas distintas de mejorar\n" +
                    "                                    nuestro desarrollo personal. Exploraremos lo que cada una de estas\n" +
                    "                                    técnicas puede hacer por nosotros y cómo podemos utilizarlas para convertirnos\n" +
                    "                                    en mejores versiones de nosotros mismos. Así que si estás buscando formas de\n" +
                    "                                    mejorar tu crecimiento personal, ¡Este blog es perfecto para ti! </span>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  </header>\n"
            }
        },
        footerIndex() {
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