// ============================================================================
// MOTOR INTERACTIVO DEL BANCO DE PREGUNTAS Y CASOS DE ESTUDIO
// Calificación Porcentual (Base 100%) y Modo Práctica / Simulacro
// ============================================================================

(function () {
    const bank = window.ExamData && window.ExamData.questionBank;
    if (!bank) {
        console.error("ExamData.questionBank no está disponible.");
        return;
    }

    const { selectionQuestions, trueFalseQuestions, pareoBattery1, pareoBattery2, caseStudies } = bank;

    let currentMode = 'practica';
    let userSelection = {};
    let userVF = {};
    let userPareo1 = {};
    let userPareo2 = {};
    let secondsElapsed = 0;
    let timerInterval = null;

    const TOTAL_QUESTIONS = selectionQuestions.length + trueFalseQuestions.length + pareoBattery1.statements.length + pareoBattery2.statements.length;

    function init() {
        const params = new URLSearchParams(window.location.search);
        const urlMode = params.get('modo');
        if (urlMode === 'evaluacion' || urlMode === 'practica') {
            currentMode = urlMode;
            localStorage.setItem('sbd_banco_mode', currentMode);
        } else if (localStorage.getItem('sbd_banco_mode')) {
            currentMode = localStorage.getItem('sbd_banco_mode');
        }

        renderModeUI();
        renderSelection();
        renderTrueFalse();
        renderPareo1();
        renderPareo2();
        renderCaseStudies();
        updateGlobalCounters();
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
        localStorage.setItem('sbd_banco_mode', currentMode);
        renderModeUI();

        Object.keys(userSelection).forEach(id => updateSelectionFeedback(id));
        Object.keys(userVF).forEach(id => updateVFFeedback(id));
        Object.keys(userPareo1).forEach(id => updatePareo1Feedback(id));
        Object.keys(userPareo2).forEach(id => updatePareo2Feedback(id));
    }

    // ------------------------------------------------------------------------
    // RENDER: 1. SELECCIÓN SIMPLE
    // ------------------------------------------------------------------------
    function renderSelection() {
        const container = document.getElementById('selection-container');
        if (!container) return;

        container.innerHTML = selectionQuestions.map(q => `
            <div class="p-6 sm:p-8 transition" id="block-${q.id}">
                <div class="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <span class="inline-block text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 mb-1">
                            ${q.category || 'Teoría E-R'}
                        </span>
                        <h3 class="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                            <span class="text-blue-600 dark:text-blue-400 mr-1">${q.number}.</span> ${q.prompt}
                        </h3>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="options-${q.id}">
                    ${q.options.map(opt => `
                        <label id="label-${q.id}-${opt.key}" class="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition select-none">
                            <input type="radio" name="${q.id}" value="${opt.key}" class="mt-1 text-blue-600 focus:ring-blue-500" onchange="selectQuestion('${q.id}', '${opt.key}')">
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

    function selectQuestion(qId, optKey) {
        userSelection[qId] = optKey;
        updateGlobalCounters();

        const q = selectionQuestions.find(item => item.id === qId);
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
            updateSelectionFeedback(qId, true);
        } else {
            const fb = document.getElementById(`feedback-${qId}`);
            if (fb) fb.classList.add('hidden');
        }
    }

    function updateSelectionFeedback(qId, forceShow = false) {
        const fb = document.getElementById(`feedback-${qId}`);
        if (!fb) return;
        const selected = userSelection[qId];
        if (!selected || (currentMode === 'evaluacion' && !forceShow)) {
            fb.classList.add('hidden');
            return;
        }

        const q = selectionQuestions.find(item => item.id === qId);
        const isCorrect = selected === q.correctKey;

        fb.classList.remove('hidden');
        if (isCorrect) {
            fb.className = "mt-4 p-4 rounded-xl text-xs sm:text-sm border bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800/60 dark:text-emerald-200";
            fb.innerHTML = `<strong class="font-bold">✔ ¡Correcto!</strong> ${q.explanation}`;
        } else {
            fb.className = "mt-4 p-4 rounded-xl text-xs sm:text-sm border bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/30 dark:border-rose-800/60 dark:text-rose-200";
            fb.innerHTML = `<strong class="font-bold">✘ Incorrecto — Respuesta de pauta: ${q.correctKey.toUpperCase()}</strong><br>${q.explanation}`;
        }
    }

    // ------------------------------------------------------------------------
    // RENDER: 2. VERDADERO O FALSO
    // ------------------------------------------------------------------------
    function renderTrueFalse() {
        const container = document.getElementById('vf-container');
        if (!container) return;

        container.innerHTML = trueFalseQuestions.map(q => `
            <div class="p-6 sm:p-8 transition" id="block-${q.id}">
                <div class="mb-3">
                    <span class="inline-block text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 mb-1">
                        Análisis Rápido
                    </span>
                    <h3 class="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                        <span class="text-emerald-600 dark:text-emerald-400 mr-1">${q.number}.</span> ${q.prompt}
                    </h3>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="options-${q.id}">
                    ${q.options.map(opt => `
                        <label id="label-${q.id}-${opt.key}" class="flex items-center space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition select-none">
                            <input type="radio" name="${q.id}" value="${opt.key}" class="text-emerald-600 focus:ring-emerald-500" onchange="selectVF('${q.id}', '${opt.key}')">
                            <span class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                ${opt.text}
                            </span>
                        </label>
                    `).join('')}
                </div>

                <div id="feedback-${q.id}" class="hidden mt-4 p-4 rounded-xl text-xs sm:text-sm border"></div>
            </div>
        `).join('');
    }

    function selectVF(qId, optKey) {
        userVF[qId] = optKey;
        updateGlobalCounters();

        const q = trueFalseQuestions.find(item => item.id === qId);
        q.options.forEach(opt => {
            const lbl = document.getElementById(`label-${qId}-${opt.key}`);
            if (!lbl) return;
            if (opt.key === optKey) {
                lbl.className = "flex items-center space-x-3 p-3.5 rounded-xl border-2 border-emerald-600 bg-emerald-50/40 dark:bg-emerald-950/30 dark:border-emerald-500 cursor-pointer transition select-none";
            } else {
                lbl.className = "flex items-center space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition select-none";
            }
        });

        if (currentMode === 'practica') {
            updateVFFeedback(qId, true);
        } else {
            const fb = document.getElementById(`feedback-${qId}`);
            if (fb) fb.classList.add('hidden');
        }
    }

    function updateVFFeedback(qId, forceShow = false) {
        const fb = document.getElementById(`feedback-${qId}`);
        if (!fb) return;
        const selected = userVF[qId];
        if (!selected || (currentMode === 'evaluacion' && !forceShow)) {
            fb.classList.add('hidden');
            return;
        }

        const q = trueFalseQuestions.find(item => item.id === qId);
        const isCorrect = selected === q.correctKey;

        fb.classList.remove('hidden');
        if (isCorrect) {
            fb.className = "mt-4 p-4 rounded-xl text-xs sm:text-sm border bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800/60 dark:text-emerald-200";
            fb.innerHTML = `<strong class="font-bold">✔ ¡Correcto!</strong> ${q.explanation}`;
        } else {
            const expectedText = q.options.find(o => o.key === q.correctKey).text;
            fb.className = "mt-4 p-4 rounded-xl text-xs sm:text-sm border bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/30 dark:border-rose-800/60 dark:text-rose-200";
            fb.innerHTML = `<strong class="font-bold">✘ Incorrecto — Respuesta esperada: ${expectedText}</strong><br>${q.explanation}`;
        }
    }

    // ------------------------------------------------------------------------
    // RENDER: 3. PAREO BATERÍA 1
    // ------------------------------------------------------------------------
    function renderPareo1() {
        const bankEl = document.getElementById('terms-bank-1');
        const container = document.getElementById('pareo1-container');
        if (!bankEl || !container) return;

        bankEl.innerHTML = pareoBattery1.terms.map(t => `
            <div class="flex items-center space-x-2 p-1.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <span class="w-5 h-5 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center text-[11px] shrink-0">${t.id}</span>
                <span class="truncate">${t.name}</span>
            </div>
        `).join('');

        container.innerHTML = pareoBattery1.statements.map((item, idx) => `
            <div class="p-5 sm:p-6 flex flex-col gap-3 transition" id="block-${item.id}">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="flex items-start space-x-3">
                        <span class="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            ${idx + 1}
                        </span>
                        <p class="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                            ${item.statement}
                        </p>
                    </div>

                    <div class="w-full md:w-72 shrink-0">
                        <select id="select-${item.id}" onchange="selectPareo1('${item.id}', this.value)" class="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm px-3.5 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition">
                            <option value="">-- Seleccionar concepto --</option>
                            ${pareoBattery1.terms.map(t => `<option value="${t.id}">${t.id}. ${t.name}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div id="feedback-${item.id}" class="hidden p-3.5 rounded-xl text-xs sm:text-sm border"></div>
            </div>
        `).join('');
    }

    function selectPareo1(sId, val) {
        if (!val) {
            delete userPareo1[sId];
        } else {
            userPareo1[sId] = parseInt(val, 10);
        }
        updateGlobalCounters();

        if (currentMode === 'practica' && val) {
            updatePareo1Feedback(sId, true);
        } else {
            const fb = document.getElementById(`feedback-${sId}`);
            if (fb) fb.classList.add('hidden');
        }
    }

    function updatePareo1Feedback(sId, forceShow = false) {
        const fb = document.getElementById(`feedback-${sId}`);
        if (!fb) return;
        const selected = userPareo1[sId];
        if (!selected || (currentMode === 'evaluacion' && !forceShow)) {
            fb.classList.add('hidden');
            return;
        }

        const item = pareoBattery1.statements.find(s => s.id === sId);
        const isCorrect = selected === item.correctId;

        fb.classList.remove('hidden');
        if (isCorrect) {
            fb.className = "p-3.5 rounded-xl text-xs sm:text-sm border bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800/60 dark:text-emerald-200";
            fb.innerHTML = `<strong class="font-bold">✔ ¡Correcto!</strong> ${item.explanation}`;
        } else {
            const term = pareoBattery1.terms.find(t => t.id === item.correctId);
            fb.className = "p-3.5 rounded-xl text-xs sm:text-sm border bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/30 dark:border-rose-800/60 dark:text-rose-200";
            fb.innerHTML = `<strong class="font-bold">✘ Incorrecto — Respuesta esperada: [${item.correctId}] ${term ? term.name : ''}</strong><br>${item.explanation}`;
        }
    }

    // ------------------------------------------------------------------------
    // RENDER: 4. PAREO BATERÍA 2
    // ------------------------------------------------------------------------
    function renderPareo2() {
        const bankEl = document.getElementById('terms-bank-2');
        const container = document.getElementById('pareo2-container');
        if (!bankEl || !container) return;

        bankEl.innerHTML = pareoBattery2.terms.map(t => `
            <div class="flex items-center space-x-2 p-1.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <span class="w-5 h-5 rounded bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-bold flex items-center justify-center text-[11px] shrink-0">${t.id}</span>
                <span class="truncate">${t.name}</span>
            </div>
        `).join('');

        container.innerHTML = pareoBattery2.statements.map((item, idx) => `
            <div class="p-5 sm:p-6 flex flex-col gap-3 transition" id="block-${item.id}">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="flex items-start space-x-3">
                        <span class="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            ${idx + 1}
                        </span>
                        <p class="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                            ${item.statement}
                        </p>
                    </div>

                    <div class="w-full md:w-72 shrink-0">
                        <select id="select-${item.id}" onchange="selectPareo2('${item.id}', this.value)" class="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm px-3.5 py-2.5 focus:ring-2 focus:ring-purple-500 focus:outline-none transition">
                            <option value="">-- Seleccionar concepto --</option>
                            ${pareoBattery2.terms.map(t => `<option value="${t.id}">${t.id}. ${t.name}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div id="feedback-${item.id}" class="hidden p-3.5 rounded-xl text-xs sm:text-sm border"></div>
            </div>
        `).join('');
    }

    function selectPareo2(sId, val) {
        if (!val) {
            delete userPareo2[sId];
        } else {
            userPareo2[sId] = parseInt(val, 10);
        }
        updateGlobalCounters();

        if (currentMode === 'practica' && val) {
            updatePareo2Feedback(sId, true);
        } else {
            const fb = document.getElementById(`feedback-${sId}`);
            if (fb) fb.classList.add('hidden');
        }
    }

    function updatePareo2Feedback(sId, forceShow = false) {
        const fb = document.getElementById(`feedback-${sId}`);
        if (!fb) return;
        const selected = userPareo2[sId];
        if (!selected || (currentMode === 'evaluacion' && !forceShow)) {
            fb.classList.add('hidden');
            return;
        }

        const item = pareoBattery2.statements.find(s => s.id === sId);
        const isCorrect = selected === item.correctId;

        fb.classList.remove('hidden');
        if (isCorrect) {
            fb.className = "p-3.5 rounded-xl text-xs sm:text-sm border bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800/60 dark:text-emerald-200";
            fb.innerHTML = `<strong class="font-bold">✔ ¡Correcto!</strong> ${item.explanation}`;
        } else {
            const term = pareoBattery2.terms.find(t => t.id === item.correctId);
            fb.className = "p-3.5 rounded-xl text-xs sm:text-sm border bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/30 dark:border-rose-800/60 dark:text-rose-200";
            fb.innerHTML = `<strong class="font-bold">✘ Incorrecto — Respuesta esperada: [${item.correctId}] ${term ? term.name : ''}</strong><br>${item.explanation}`;
        }
    }

    // ------------------------------------------------------------------------
    // RENDER: 5. CASOS DE ESTUDIO (FICHAS)
    // ------------------------------------------------------------------------
    function renderCaseStudies() {
        const container = document.getElementById('cases-container');
        if (!container) return;

        container.innerHTML = caseStudies.map(cs => `
            <div class="rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-slate-50/60 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
                <div class="space-y-2">
                    <span class="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                        Caso Práctico
                    </span>
                    <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        ${cs.title}
                    </h4>
                    <div class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pt-1">
                        <p><strong class="text-slate-900 dark:text-white">Escenario:</strong> ${cs.problem}</p>
                        <p class="text-rose-700 dark:text-rose-400"><strong class="font-semibold">¿Por qué falla?:</strong> ${cs.whyFails}</p>
                    </div>
                </div>

                <div class="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-xs text-emerald-900 dark:text-emerald-200">
                    <strong class="font-bold">Solución recomendada (Clean Design):</strong> ${cs.solution}
                </div>
            </div>
        `).join('');
    }

    // ------------------------------------------------------------------------
    // PROGRESO Y CONTADORES
    // ------------------------------------------------------------------------
    function updateGlobalCounters() {
        const selCount = Object.keys(userSelection).length;
        const vfCount = Object.keys(userVF).length;
        const p1Count = Object.keys(userPareo1).length;
        const p2Count = Object.keys(userPareo2).length;
        const totalAnswered = selCount + vfCount + p1Count + p2Count;

        const selProgress = document.getElementById('selection-progress');
        const vfProgress = document.getElementById('vf-progress');
        const p1Progress = document.getElementById('pareo1-progress');
        const p2Progress = document.getElementById('pareo2-progress');
        const globalProgress = document.getElementById('global-progress');

        if (selProgress) selProgress.textContent = `${selCount} / ${selectionQuestions.length}`;
        if (vfProgress) vfProgress.textContent = `${vfCount} / ${trueFalseQuestions.length}`;
        if (p1Progress) p1Progress.textContent = `${p1Count} / ${pareoBattery1.statements.length}`;
        if (p2Progress) p2Progress.textContent = `${p2Count} / ${pareoBattery2.statements.length}`;
        if (globalProgress) globalProgress.textContent = `Respondidas: ${totalAnswered} / ${TOTAL_QUESTIONS}`;
    }

    // ------------------------------------------------------------------------
    // CALIFICACIÓN EN BASE 100%
    // ------------------------------------------------------------------------
    function gradeBank() {
        let correctSel = 0;
        let correctVF = 0;
        let correctP1 = 0;
        let correctP2 = 0;

        selectionQuestions.forEach(q => {
            if (userSelection[q.id] === q.correctKey) correctSel++;
            updateSelectionFeedback(q.id, true);
        });

        trueFalseQuestions.forEach(q => {
            if (userVF[q.id] === q.correctKey) correctVF++;
            updateVFFeedback(q.id, true);
        });

        pareoBattery1.statements.forEach(s => {
            if (userPareo1[s.id] === s.correctId) correctP1++;
            updatePareo1Feedback(s.id, true);
        });

        pareoBattery2.statements.forEach(s => {
            if (userPareo2[s.id] === s.correctId) correctP2++;
            updatePareo2Feedback(s.id, true);
        });

        const totalCorrect = correctSel + correctVF + correctP1 + correctP2;
        const percentage = ((totalCorrect / TOTAL_QUESTIONS) * 100).toFixed(1);

        const banner = document.getElementById('score-banner');
        const headline = document.getElementById('score-headline');
        const subtext = document.getElementById('score-subtext');

        if (banner && headline && subtext) {
            banner.classList.remove('hidden');
            if (percentage >= 80) {
                banner.className = "rounded-2xl p-6 border shadow-lg transition-all bg-emerald-50 border-emerald-300 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-100";
            } else if (percentage >= 50) {
                banner.className = "rounded-2xl p-6 border shadow-lg transition-all bg-amber-50 border-amber-300 text-amber-950 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-100";
            } else {
                banner.className = "rounded-2xl p-6 border shadow-lg transition-all bg-rose-50 border-rose-300 text-rose-950 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-100";
            }

            headline.textContent = `Calificación Obtenida: ${percentage}% (${totalCorrect} / ${TOTAL_QUESTIONS} aciertos)`;
            subtext.textContent = `Desglose: Selección Simple: ${correctSel} / ${selectionQuestions.length} • Verdadero/Falso: ${correctVF} / ${trueFalseQuestions.length} • Pareo Batería 1: ${correctP1} / ${pareoBattery1.statements.length} • Pareo Batería 2: ${correctP2} / ${pareoBattery2.statements.length}.`;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetBank() {
        userSelection = {};
        userVF = {};
        userPareo1 = {};
        userPareo2 = {};
        secondsElapsed = 0;

        const banner = document.getElementById('score-banner');
        if (banner) banner.classList.add('hidden');

        renderSelection();
        renderTrueFalse();
        renderPareo1();
        renderPareo2();
        updateGlobalCounters();
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

    // Exponer funciones globales
    window.toggleMode = toggleMode;
    window.selectQuestion = selectQuestion;
    window.selectVF = selectVF;
    window.selectPareo1 = selectPareo1;
    window.selectPareo2 = selectPareo2;
    window.gradeBank = gradeBank;
    window.resetBank = resetBank;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
