document.getElementById('avaliacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        satisfacao: document.getElementById('satisfacao').getAttribute('data-selected'),
        tempoAtendimento: document.getElementById('tempoAtendimento').getAttribute('data-selected'),
        comentario: document.getElementById('comentario').value
    };

    fetch("https://script.google.com/macros/s/AKfycbz-C3orDqDnAmYAo5UY5OJnDKysm-2ToDmpGMW_tKK3xdXgIKORv8XSPpP-JusV8Sp4/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(response => {
        alert("Obrigado pelo seu feedback!");
        document.getElementById('avaliacaoForm').reset();
        document.querySelectorAll('.btn-group button').forEach(btn => btn.classList.remove('active'));
        document.getElementById('step2').classList.remove('active');
        document.getElementById('step1').classList.add('active');
    })
    .catch(error => {
        console.error("Erro ao enviar:", error);
        alert("Houve um erro ao enviar sua avaliação.");
    });
});
