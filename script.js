document.querySelectorAll('.btn-group button').forEach(button => {
    button.addEventListener('click', function() {
        let group = this.parentNode;
        group.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        group.setAttribute('data-selected', this.getAttribute('data-value'));
    });
});

document.getElementById('nextStep').addEventListener('click', function() {
    const satisfacao = document.getElementById('satisfacao').getAttribute('data-selected');
    if (!satisfacao) {
        alert('Por favor, selecione a satisfação antes de continuar.');
        return;
    }
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
});

document.getElementById('avaliacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const tempoAtendimento = document.getElementById('tempoAtendimento').getAttribute('data-selected');
    const comentario = document.getElementById('comentario').value;
    
    if (!tempoAtendimento) {
        alert('Por favor, selecione o tempo de atendimento antes de enviar.');
        return;
    }
    
    alert(`Obrigado pelo seu feedback!\nSatisfação: ${document.getElementById('satisfacao').getAttribute('data-selected')}\nTempo de Atendimento: ${tempoAtendimento}\nComentário: ${comentario}`);
    this.reset();
    document.querySelectorAll('.btn-group button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step1').classList.add('active');
});
