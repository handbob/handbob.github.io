const app = {
    score: 0,
    currentSubject: null,

    // Databáze pro češtinu (RVP 1. třída - jednoduchá slova)
    czechData: [
        { word: "KO_KA", answer: "Č", options: ["Č", "C", "Š", "S"] },
        { word: "_ES", answer: "P", options: ["B", "P", "D", "T"] },
        { word: "MÁM_", answer: "A", options: ["A", "Á", "E", "I"] },
        { word: "ŠKO_A", answer: "L", options: ["L", "R", "N", "M"] },
        { word: "AUTO_US", answer: "B", options: ["P", "B", "D", "T"] }
    ],

    // Databáze pro prvouku
    prvoukaData: [
        { q: "Které zvíře štěká?", answer: "Pes", options: ["Pes", "Kočka", "Kráva", "Had"] },
        { q: "Kdy padá sníh?", answer: "V zimě", options: ["V létě", "Na jaře", "V zimě", "Na podzim"] },
        { q: "Co je zelené?", answer: "Tráva", options: ["Slunce", "Tráva", "Nebe", "Voda"] },
        { q: "Čím jíme polévku?", answer: "Lžící", options: ["Vidličkou", "Nožem", "Lžící", "Rukou"] }
    ],

    // Inicializace
    init: function() {
        this.updateScore(0);
    },

    // Přepínání předmětů
    loadSubject: function(subject) {
        this.currentSubject = subject;
        
        // Skrytí všech sekcí
        document.querySelectorAll('.game-section, #welcome-screen').forEach(el => el.classList.add('hidden'));
        document.getElementById('feedback').classList.add('hidden');

        // Zobrazení vybrané sekce a generování nové úlohy
        if (subject === 'math') {
            document.getElementById('math-section').classList.remove('hidden');
            this.generateMath();
        } else if (subject === 'czech') {
            document.getElementById('czech-section').classList.remove('hidden');
            this.generateCzech();
        } else if (subject === 'prvouka') {
            document.getElementById('prvouka-section').classList.remove('hidden');
            this.generatePrvouka();
        }
    },

    // 1. MATEMATIKA: Generátor sčítání/odčítání do 20
    generateMath: function() {
        const isAddition = Math.random() > 0.5;
        let a, b, result, operator;

        if (isAddition) {
            // Sčítání do 20
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * (20 - a)) + 1;
            result = a + b;
            operator = "+";
        } else {
            // Odčítání (výsledek nesmí být záporný)
            a = Math.floor(Math.random() * 19) + 1;
            b = Math.floor(Math.random() * a);
            result = a - b;
            operator = "-";
        }

        document.getElementById('math-q').textContent = `${a} ${operator} ${b}`;
        
        // Generování 4 možností (1 správná, 3 špatné)
        let options = [result];
        while (options.length < 4) {
            let wrong = Math.floor(Math.random() * 20);
            if (!options.includes(wrong) && wrong !== result) options.push(wrong);
        }
        this.renderOptions('math-options', options.sort(() => Math.random() - 0.5), result);
    },

    // 2. ČEŠTINA: Výběr náhodného slova
    generateCzech: function() {
        const item = this.czechData[Math.floor(Math.random() * this.czechData.length)];
        document.getElementById('czech-word').textContent = item.word;
        this.renderOptions('czech-options', item.options, item.answer);
    },

    // 3. PRVOUKA: Výběr náhodné otázky
    generatePrvouka: function() {
        const item = this.prvoukaData[Math.floor(Math.random() * this.prvoukaData.length)];
        document.getElementById('prvouka-q').textContent = item.q;
        this.renderOptions('prvouka-options', item.options, item.answer);
    },

    // Vykreslení tlačítek
    renderOptions: function(elementId, options, correctAnswer) {
        const container = document.getElementById(elementId);
        container.innerHTML = ''; // Vyčistit staré

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.textContent = opt;
            btn.onclick = () => this.checkAnswer(opt, correctAnswer);
            container.appendChild(btn);
        });
    },

    // Kontrola odpovědi
    checkAnswer: function(userAnswer, correctAnswer) {
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.classList.remove('hidden', 'correct', 'wrong');

        if (String(userAnswer) === String(correctAnswer)) {
            feedbackEl.textContent = "Výborně! 🎉 Správná odpověď.";
            feedbackEl.classList.add('correct');
            this.updateScore(10);
            
            // Po chvilce generovat novou otázku
            setTimeout(() => {
                feedbackEl.classList.add('hidden');
                if (this.currentSubject === 'math') this.generateMath();
                if (this.currentSubject === 'czech') this.generateCzech();
                if (this.currentSubject === 'prvouka') this.generatePrvouka();
            }, 1500);
        } else {
            feedbackEl.textContent = "Zkus to znovu. 😔";
            feedbackEl.classList.add('wrong');
            this.updateScore(-5);
        }
    },

    updateScore: function(points) {
        this.score += points;
        if (this.score < 0) this.score = 0;
        document.getElementById('score').textContent = this.score;
    }
};

// Spuštění aplikace
app.init();