// Home View - Mode Selection Logic
function updateMode(mode) {
    const cardPractica = document.getElementById('card-practica');
    const cardEvaluacion = document.getElementById('card-evaluacion');
    const dotPractica = document.getElementById('dot-practica');
    const dotEvaluacion = document.getElementById('dot-evaluacion');
    const startBtn = document.getElementById('start-exam-btn');

    if (!cardPractica || !cardEvaluacion || !dotPractica || !dotEvaluacion || !startBtn) return;

    if (mode === 'practica') {
        cardPractica.className = 'relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all border-blue-600 bg-blue-50/40 dark:bg-blue-950/20 dark:border-blue-500';
        cardEvaluacion.className = 'relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700';
        dotPractica.className = 'w-2 h-2 rounded-full bg-blue-600';
        dotEvaluacion.className = 'w-2 h-2 rounded-full bg-transparent';
        startBtn.href = 'examen.html?modo=practica';
        const radio = document.querySelector('input[name="exam_mode"][value="practica"]');
        if (radio) radio.checked = true;
    } else {
        cardEvaluacion.className = 'relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all border-indigo-600 bg-indigo-50/40 dark:bg-indigo-950/20 dark:border-indigo-500';
        cardPractica.className = 'relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700';
        dotEvaluacion.className = 'w-2 h-2 rounded-full bg-indigo-600';
        dotPractica.className = 'w-2 h-2 rounded-full bg-transparent';
        startBtn.href = 'examen.html?modo=evaluacion';
        const radio = document.querySelector('input[name="exam_mode"][value="evaluacion"]');
        if (radio) radio.checked = true;
    }
    localStorage.setItem('sbd_exam_mode', mode);
}

window.updateMode = updateMode;

document.addEventListener('DOMContentLoaded', function () {
    const savedMode = localStorage.getItem('sbd_exam_mode') || 'practica';
    updateMode(savedMode);
});
