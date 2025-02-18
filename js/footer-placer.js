// Substitui a chamada do script por um documento HTML de barra de navegação inferior em tempo de execução
fetch("../elements/footer.html")
.then(res => res.text())
.then(text => {

    // Seleciona o script de substituição
    let old_element = document.querySelector("script#footer-placer");

    // Cria o novo elemento com base no HTML da barra de navegação
    let new_element = document.createElement("div");
    new_element.setAttribute("id", "footer-container");
    new_element.innerHTML = text;

    // Substitui no HTML em tempo-real
    old_element.parentNode.replaceChild(new_element, old_element);
})