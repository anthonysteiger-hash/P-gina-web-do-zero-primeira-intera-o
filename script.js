
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {

    // Botão de mudar o tema
    if (botao.classList.contains("btn-tema-escuro")) {

        botao.addEventListener("click", function () {
            document.body.classList.toggle("tema-escuro");
        });

    } else {

        // Botões de curtidas
        let curtiu = false;

        botao.addEventListener("click", function () {

            let texto = botao.querySelector("span");

            if (curtiu === false) {
                texto.textContent++;
                curtiu = true;

            } else {
                texto.textContent--;
                curtiu = false;
            }

        });
    }

});
