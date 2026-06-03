document.addEventListener("DOMContentLoaded", function () {

    // MÚSICA
    const musica = document.getElementById("musica");

    // SLIDES
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {

        if (slides.length > 0) {

            slides[index].classList.remove("ativo");

            index = (index + 1) % slides.length;

            slides[index].classList.add("ativo");
        }

    }, 2000);

    // BOTÃO SURPRESA
    window.mensagemSecreta = function () {

        // TOCA A MÚSICA
        if (musica) {
            musica.volume = 0.5;
            musica.play().catch(() => {});
        }

        // MOSTRA A MENSAGEM
        document
            .getElementById("msgSecreta")
            .classList.remove("hidden");

        criarCoracoes();

        setTimeout(mostrarTelaFinal, 4000);
    };

    // CORAÇÕES
    function criarCoracoes() {

        for (let i = 0; i < 40; i++) {

            let c = document.createElement("div");

            c.innerHTML = "💜";

            c.classList.add("coracao");

            c.style.left =
                Math.random() * window.innerWidth + "px";

            c.style.top =
                window.innerHeight + "px";

            document.body.appendChild(c);

            setTimeout(() => {
                c.remove();
            }, 3000);
        }
    }

    // TELA FINAL
    function mostrarTelaFinal() {

        const card =
            document.getElementById("cardPrincipal");

        const telaFinal =
            document.getElementById("telaFinal");

        const textoFinal =
            document.getElementById("textoFinal");

        // LIMPA TEXTO ANTIGO
        textoFinal.innerHTML = "";

        // EFEITO CINEMA
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";

        setTimeout(() => {

            card.style.display = "none";

            telaFinal.classList.remove("hidden");

        }, 800);

        // TEXTO FINAL
        let texto =
`💜 Feliz Aniversário Nycole 💜

Hoje é um dia muito especial 🎂✨

Que seu novo ciclo seja cheio de amor,
felicidade, saúde e sonhos realizados.

Você é uma pessoa incrível e merece
tudo de melhor nesse mundo.

Nunca deixe de sorrir e acreditar
nos seus sonhos.

Aproveite muito o seu dia! 💖`;

        let i = 0;

        function escrever() {

            if (i < texto.length) {

                if (texto.charAt(i) === "\n") {
                    textoFinal.innerHTML += "<br>";
                } else {
                    textoFinal.innerHTML += texto.charAt(i);
                }

                i++;

                setTimeout(escrever, 50);
            }
        }

        escrever();
    }

});