function gerarSenha(tamanho = 12) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("senha").value = senha;
  document.getElementById("status").textContent = "Senha gerada com sucesso!";
}

function copiarSenha() {
  const campo = document.getElementById("senha");
  campo.select();
  document.execCommand("copy");
  document.getElementById("status").textContent = "Senha copiada!";
}
