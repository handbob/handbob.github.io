const app = {
    selectedItem: null,

    // Přepínání obrazovek
    goto: function(screenId) {
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
        
        const target = document.getElementById(screenId);
        target.classList.remove('hidden');
        target.classList.add('active');
        
        window.scrollTo(0, 0);
    },

    // 1. ČESKÝ JAZYK: Kontrola tlačítek
    checkCJ: function(btn, isCorrect) {
        if (isCorrect) {
            btn.classList.add('correct');
            btn.textContent += " ✅";
        } else {
            btn.classList.add('wrong');
            btn.textContent += " ❌";
        }
        btn.disabled = true; // Zamezí vícenásobnému kliknutí
    },

    // 2. MATEMATIKA: Kontrola příkladu
    checkMath: function(id, correctAnswer) {
        const input = document.getElementById(`math-inp-${id}`);
        const feedback = document.getElementById(`math-fb-${id}`);
        const val = parseInt(input.value);

        if (val === correctAnswer) {
            feedback.innerHTML = "<span class='correct-text'>Výborně! Správně je 7. 🎉</span>";
            input.style.borderColor = "green";
        } else {
            feedback.innerHTML = "<span class='wrong-text'>Zkus to znovu. 🤔</span>";
            input.style.borderColor = "red";
        }
    },

    // 2. MATEMATIKA: Geometrie - přidávání tvarů
    addShape: function(type) {
        const canvas = document.getElementById('geo-canvas');
        const shape = document.createElement('div');
        shape.className = 'geo-shape';
        
        // Náhodná pozice
        const x = Math.floor(Math.random() * (canvas.offsetWidth - 50));
        const y = Math.floor(Math.random() * (canvas.offsetHeight - 50));
        
        shape.style.left = x + 'px';
        shape.style.top = y + 'px';

        // Styly tvarů
        if (type === 'square') {
            shape.style.width = '50px';
            shape.style.height = '50px';
            shape.style.background = '#3498db';
        } else if (type === 'circle') {
            shape.style.width = '50px';
            shape.style.height = '50px';
            shape.style.borderRadius = '50%';
            shape.style.background = '#f1c40f';
        } else if (type === 'triangle') {
            shape.style.width = '0';
            shape.style.height = '0';
            shape.style.borderLeft = '25px solid transparent';
            shape.style.borderRight = '25px solid transparent';
            shape.style.borderBottom = '50px solid #e74c3c';
            shape.style.background = 'transparent';
        }

        canvas.appendChild(shape);
    },

    clearCanvas: function() {
        document.getElementById('geo-canvas').innerHTML = '';
    },

    // 3. PRVOUKA: Třídění (zjednodušená logika pro klikání)
    // Inicializace klikacích prvků
    initPrvouka: function() {
        const items = document.querySelectorAll('.item');
        const homeZone = document.querySelector('.home-zone');
        const forestZone = document.querySelector('.forest-zone');

        items.forEach(item => {
            item.addEventListener('click', () => {
                // Odznačit ostatní
                items.forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                app.selectedItem = item;
            });
        });

        homeZone.addEventListener('click', () => app.moveItem(homeZone, ['item1', 'item3'])); // TV, Postel
        forestZone.addEventListener('click', () => app.moveItem(forestZone, ['item2', 'item4'])); // Krmelec, Jehličí
    },

    moveItem: function(zone, correctIds) {
        if (!app.selectedItem) return;
        
        const id = app.selectedItem.id;
        if (correctIds.includes(id)) {
            zone.appendChild(app.selectedItem);
            app.selectedItem.classList.remove('selected');
            app.selectedItem.style.background = "#d4edda"; // Zelená
            app.selectedItem.style.cursor = "default";
            // Zrušit event listenery (klonováním)
            const newItem = app.selectedItem.cloneNode(true);
            app.selectedItem.parentNode.replaceChild(newItem, app.selectedItem);
            app.selectedItem = null;
        } else {
            alert("To sem asi nepatří... zkus to jinde! 🤔");
        }
    },

    msg: function(text, type) {
        const el = document.getElementById('prv-msg');
        el.textContent = text;
        el.className = 'feedback ' + (type === 'correct' ? 'correct-text' : 'wrong-text');
    },

    // 4. TĚLOCVIK: Posouvání karet
    nextCard: function(cardId) {
        document.querySelectorAll('.tv-card').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.tv-card').forEach(c => c.classList.remove('active-card'));
        
        const target = document.getElementById(`card-${cardId}`);
        target.classList.remove('hidden');
        target.classList.add('active-card');
    }
};

// Spuštění po načtení
document.addEventListener('DOMContentLoaded', () => {
    app.initPrvouka();
});