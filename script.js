const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu button");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("active");
    menuItems.forEach(item => item.classList.add("fade"));
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("active");
    menuItems.forEach(item => item.classList.remove("fade"));
    menuOpen = false;
  }
});

function showDropdown() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('show-dropdown');
  }

  document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown');
    var target = event.target;
    if (!dropdown.contains(target)) {
      dropdown.querySelector('.dropdown-content').classList.remove('show-dropdown');
    }
  });

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Discord scripts", "Websites", "e muito mais"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["ZNV STORE"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    
});

// URL do webhook
const webhookURL = 'https://discord.com/api/webhooks/1115277842985525308/eC_Yttpeb8v_ta9qc8dKN_fgRHygRaPlmON74nXzRDn1ko630KZc0HFAJm4kEESUryVa';

// Função para enviar a mensagem
function enviarMensagem() {
  // Obtenha os valores do formulário
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const pagamento = document.getElementById('pagamento').value;

  // Crie o objeto embed com as informações
  const embed = {
    title: 'Encomenda',
    description: 'Nova encomenda recebida:',
    fields: [
      { name: 'Nome', value: nome },
      { name: 'Sobrenome', value: sobrenome },
      { name: 'Método de pagamento', value: pagamento }
    ]
  };

  // Crie o objeto de payload com a mensagem e a embed
  const payload = {
    content: 'Novo pedido de encomenda:',
    embeds: [embed]
  };

  // Crie um objeto XMLHttpRequest
  const request = new XMLHttpRequest();
  request.open('POST', webhookURL);
  request.setRequestHeader('Content-Type', 'application/json');

  // Envie o payload como uma string JSON
  request.send(JSON.stringify(payload));

  // Verifique o status da resposta
  request.onload = function () {
    if (request.status === 200) {
      console.log('Mensagem enviada com sucesso!');
      window.location.href = 'invite.html'; // Redirecionar para a página invite.html
    } else {
      console.error('Erro ao enviar a mensagem. Código de status:', request.status);
    }
  };
}

// Adicione um evento de clique ao botão Enviar
const enviarButton = document.querySelector('.submit');
enviarButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evita o envio do formulário padrão
  enviarMensagem();
});
