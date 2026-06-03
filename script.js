document.addEventListener("DOMContentLoaded", function () {

    // TENTA TOCAR MÚSICA
    const musica = document.getElementById("musica");
    if (musica) {
        musica.play().catch(() => {});
    }

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

    // MENSAGEM
    window.mensagemSecreta = function () {
        document.getElementById("msgSecreta").classList.remove("hidden");
        criarCoracoes();

        setTimeout(mostrarTelaFinal, 4000);
    };

    function criarCoracoes() {
        for (let i = 0; i < 40; i++) {
            let c = document.createElement("div");
            c.innerHTML = "💜";
            c.classList.add("coracao");

            c.style.left = Math.random() * window.innerWidth + "px";
            c.style.top = window.innerHeight + "px";

            document.body.appendChild(c);

            setTimeout(() => c.remove(), 3000);
        }
    }

    // TELA FINAL COM FALA ANTIGA 💖
    function mostrarTelaFinal() {
        const card = document.getElementById("cardPrincipal");
        const telaFinal = document.getElementById("telaFinal");
        const textoFinal = document.getElementById("textoFinal");

        // EFEITO CINEMA
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";

        setTimeout(() => {
            card.style.display = "none";
            telaFinal.classList.remove("hidden");
        }, 800);

        // 💖 TEXTO ORIGINAL (MAIS EMOCIONAL)
        let texto = "Nycole… hoje é o seu aniversário 🎂✨\n\nVocê é única, especial e merece tudo de melhor nesse mundo 💜\n\nNunca esqueça o quanto você é incrível… 💖";

        let i = 0;

        function escrever() {
            if (i < texto.length) {
                textoFinal.innerHTML += texto.charAt(i);
                i++;
                setTimeout(escrever, 60);
            }
        }

        escrever();
    }

});