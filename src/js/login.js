document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  // Verifica se os campos estão vazios
  if (username === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return; // Impede o envio do formulário
  }

  // Validação das credenciais
  if (username === "pindamoiangaba" && password === "ChamaNaAlta") {
      // Redireciona para a página principal
      window.location.href = "/Vinheria-Agnello/index.html";
  } else {
      alert("Usuário ou senha incorretos.");
  }
});
