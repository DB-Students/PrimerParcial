// ==========================================
// MOTOR DEL EXAMEN Y LÓGICA DE INTERACCIÓN
// ==========================================

(function () {
    const { part1Questions, termsList, part2Statements } = window.ExamData;

    let currentMode = 'practica';
    let userPart1 = {};
    let userPart2 = {};
    let secondsElapsed = 0;
    let timerInterval = null;

    function init() {
        // Leer modo desde la URL o localStorage
        const params = new URLSearchParams(window.location.search);
        const urlMode = params.get('modo');
        if (urlMode === 'evaluacion' || urlMode === 'practica') {
            currentMode = urlMode;
            localStorage.setItem('sbd_exam_mode', currentMode);
        } else if (localStorage.getItem('sbd_exam_mode')) {
            currentMode = localStorage.getItem('sbd_exam_mode');
        }

        renderModeUI();
        renderTermsBank();
        renderPart1();
        renderPart2();
        startTimer();
    }

    function renderModeUI() {
        const badge = document.getElementById('mode-badge');
        const dot = document.getElementById('mode-dot');
        const text = document.getElementById('mode-text');
        if (!badge || !dot || !text) return;

        if (currentMode === 'practica') {
            badge.className = "px-3 py-1.5 rounded-full text-xs font-semibold border transition flex items-center gap-1.5 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800";
            dot.className = "w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400";
            text.textContent = "Modo Práctica (Feedback Inmediato)";
        } else {
            badge.className = "px-3 py-1.5 rounded-full text-xs font-semibold border transition flex items-center gap-1.5 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800";
            dot.className = "w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400";
            text.textContent = "Modo Simulacro (Evaluación)";
        }
    }

    function toggleMode() {
        currentMode = currentMode === 'practica' ? 'evaluacion' : 'practica';
        localStorage.setItem('sbd_exam_mode', currentMode);
        renderModeUI();
        // Actualizar feedbacks según el modo activo
        Object.keys(userPart1).forEach(qId => updatePart1Feedback(qId));
        Object.keys(userPart2).forEach(sId => updatePart2Feedback(sId));
    }

    function renderTermsBank() {
        const bank = document.getElementById('terms-bank');
        if (!bank) return;
        bank.innerHTML = termsList.map(t => `
            <div class="flex items-center space-x-2 p-1.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <span class="w-5 h-5 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center text-[11px]">${t.id}</span>
                <span class="truncate">${t.name}</span>
            </div>
        `).join('');
    }

    function renderPart1() {
        const container = document.getElementById('part1-container');
        if (!container) return;
        container.innerHTML = part1Questions.map(q => `
            <div class="p-6 sm:p-8 transition" id="block-${q.id}">
                <div class="flex items-start justify-between gap-4 mb-4">
                    <h3 class="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        <span class="text-blue-600 dark:text-blue-400 mr-1">${q.number}.</span> ${q.prompt}
                    </h3>
                    <span class="text-xs font-mono px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">0.5 ptos</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="options-${q.id}">
                    ${q.options.map(opt => `
                        <label id="label-${q.id}-${opt.key}" class="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition select-none">
                            <input type="radio" name="${q.id}" value="${opt.key}" class="mt-1 text-blue-600 focus:ring-blue-500" onchange="selectPart1('${q.id}', '${opt.key}')">
                            <span class="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                                <strong class="font-semibold text-slate-900 dark:text-white">${opt.key})</strong> ${opt.text}
                            </span>
                        </label>
                    `).join('')}
                </div>

                <div id="feedback-${q.id}" class="hidden mt-4 p-4 rounded-xl text-xs sm:text-sm border"></div>
            </div>
        `).join('');
    }

    function renderPart2() {
        const container = document.getElementById('part2-container');
        if (!container) return;
        container.innerHTML = part2Statements.map((item, idx) => `
            <div class="p-5 sm:p-6 flex flex-col gap-3 transition" id="block-${item.id}">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="flex items-start space-x-3">
                        <span class="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            ${idx + 1}
                        </span>
                        <p class="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                            ${item.statement}
                        </p>
                    </div>

                    <div class="w-full md:w-72 shrink-0">
                        <select id="select-${item.id}" onchange="selectPart2('${item.id}', this.value)" class="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm px-3.5 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition">
                            <option value="">-- Seleccionar concepto --</option>
                            ${termsList.map(t => `<option value="${t.id}">${t.id}.${t.name}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div id="feedback-${item.id}" class="hidden p-3.5 rounded-xl text-xs sm:text-sm border"></div>
            </div>
        `).join('');
    }

    function selectPart1(qId, optKey) {
        userPart1[qId] = optKey;
        updateProgressCounters();

        // Destacar la opción seleccionada
        const q = part1Questions.find(item => item.id === qId);
        q.options.forEach(opt => {
            const lbl = document.getElementById(`label-${qId}-${opt.key}`);
            if (!lbl) return;
            if (opt.key === optKey) {
                lbl.className = "flex items-start space-x-3 p-3.5 rounded-xl border-2 border-blue-600 bg-blue-50/40 dark:bg-blue-950/30 dark:border-blue-500 cursor-pointer transition select-none";
            } else {
                lbl.className = "flex items-start space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition select-none";
            }
        });

        if (currentMode === 'practica') {
            updatePart1Feedback(qId, true);
        } else {
            const fb = document.getElementById(`feedback-${qId}`);
            if (fb) fb.classList.add('hidden');
        }
    }

    function updatePart1Feedback(qId, forceShow = false) {
        const fb = document.getElementById(`feedback-${qId}`);
        if (!fb) return;
        const selected = userPart1[qId];
        if (!selected || (currentMode === 'evaluacion' && !forceShow)) {
            fb.classList.add('hidden');
            return;
        }

        const q = part1Questions.find(item => item.id === qId);
        const isCorrect = selected === q.correctKey;

        fb.classList.remove('hidden');
        if (isCorrect) {
            fb.className = "mt-4 p-4 rounded-xl text-xs sm:text-sm border bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800/60 dark:text-emerald-200";
            fb.innerHTML = `<strong class="font-bold">✔ ¡Correcto! (+0.5 ptos):</strong> ${q.explanation}`;
        } else {
            fb.className = "mt-4 p-4 rounded-xl text-xs sm:text-sm border bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/30 dark:border-rose-800/60 dark:text-rose-200";
            fb.innerHTML = `<strong class="font-bold">✘ Incorrecto (0 ptos) — Respuesta de pauta: ${q.correctKey.toUpperCase()}</strong><br>${q.explanation}`;
        }
    }

    function selectPart2(sId, val) {
        if (!val) {
            delete userPart2[sId];
        } else {
            userPart2[sId] = parseInt(val, 10);
        }
        updateProgressCounters();

        if (currentMode === 'practica' && val) {
            updatePart2Feedback(sId, true);
        } else {
            const fb = document.getElementById(`feedback-${sId}`);
            if (fb) fb.classList.add('hidden');
        }
    }

    function updatePart2Feedback(sId, forceShow = false) {
        const fb = document.getElementById(`feedback-${sId}`);
        if (!fb) return;
        const selected = userPart2[sId];
        if (!selected || (currentMode === 'evaluacion' && !forceShow)) {
            fb.classList.add('hidden');
            return;
        }

        const item = part2Statements.find(s => s.id === sId);
        const isCorrect = selected === item.correctId;

        fb.classList.remove('hidden');
        if (isCorrect) {
            fb.className = "p-3.5 rounded-xl text-xs sm:text-sm border bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800/60 dark:text-emerald-200";
            fb.innerHTML = `<strong class="font-bold">✔ ¡Correcto! (+0.5 ptos):</strong> ${item.explanation}`;
        } else {
            fb.className = "p-3.5 rounded-xl text-xs sm:text-sm border bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/30 dark:border-rose-800/60 dark:text-rose-200";
            fb.innerHTML = `<strong class="font-bold">✘ Incorrecto (0 ptos):</strong> ${item.explanation}`;
        }
    }

    function updateProgressCounters() {
        const p1 = document.getElementById('part1-progress');
        const p2 = document.getElementById('part2-progress');
        if (p1) p1.textContent = `${Object.keys(userPart1).length} / ${part1Questions.length}`;
        if (p2) p2.textContent = `${Object.keys(userPart2).length} / ${part2Statements.length}`;
    }

    function gradeExam() {
        let scorePart1 = 0;
        let scorePart2 = 0;

        part1Questions.forEach(q => {
            if (userPart1[q.id] === q.correctKey) scorePart1 += 0.5;
            updatePart1Feedback(q.id, true);
        });

        part2Statements.forEach(s => {
            if (userPart2[s.id] === s.correctId) scorePart2 += 0.5;
            updatePart2Feedback(s.id, true);
        });

        const totalScore = scorePart1 + scorePart2;
        const banner = document.getElementById('score-banner');
        const headline = document.getElementById('score-headline');
        const subtext = document.getElementById('score-subtext');

        if (banner && headline && subtext) {
            banner.classList.remove('hidden');
            if (totalScore >= 5.5) {
                banner.className = "rounded-2xl p-6 border shadow-lg transition-all bg-emerald-50 border-emerald-300 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-100";
            } else if (totalScore >= 3.5) {
                banner.className = "rounded-2xl p-6 border shadow-lg transition-all bg-amber-50 border-amber-300 text-amber-950 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-100";
            } else {
                banner.className = "rounded-2xl p-6 border shadow-lg transition-all bg-rose-50 border-rose-300 text-rose-950 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-100";
            }

            headline.textContent = `Nota de Teoría: ${totalScore.toFixed(2)} / 7.00 ptos`;
            subtext.textContent = `Desglose: Parte I (Selección): ${scorePart1.toFixed(2)} / 3.00 ptos • Parte II (Pareo): ${scorePart2.toFixed(2)} / 4.00 ptos. Revisa cada pregunta abajo para ver la explicación de la cátedra.`;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function fillOriginalExamAnswers() {
        part1Questions.forEach(q => {
            const radio = document.querySelector(`input[name="${q.id}"][value="${q.studentKey}"]`);
            if (radio) radio.checked = true;
            selectPart1(q.id, q.studentKey);
        });

        part2Statements.forEach(s => {
            const sel = document.getElementById(`select-${s.id}`);
            if (sel) sel.value = s.studentId;
            selectPart2(s.id, s.studentId);
        });

        gradeExam();
    }

    function resetExam() {
        userPart1 = {};
        userPart2 = {};
        secondsElapsed = 0;
        const banner = document.getElementById('score-banner');
        if (banner) banner.classList.add('hidden');
        renderPart1();
        renderPart2();
        updateProgressCounters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            secondsElapsed++;
            const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
            const secs = String(secondsElapsed % 60).padStart(2, '0');
            const timerEl = document.getElementById('timer-display');
            if (timerEl) timerEl.textContent = `${mins}:${secs}`;
        }, 1000);
    }

    // Exponer funciones globales para los eventos del HTML
    window.toggleMode = toggleMode;
    window.selectPart1 = selectPart1;
    window.selectPart2 = selectPart2;
    window.gradeExam = gradeExam;
    window.fillOriginalExamAnswers = fillOriginalExamAnswers;
    window.resetExam = resetExam;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
