const app = {
    selectedItem: null,

    // Databáze (zkrácena pro přehlednost)
    czechData: [
        { word: "KO_KA", answer: "Č", options: ["Č", "C", "Š", "S"] },
        { word: "_ES", answer: "P", options: ["B", "P", "D", "T"] }
    ],
    prvoukaData: [
        { q: "Které zvíře štěká?", answer: "Pes", options: ["Pes", "Kočka", "Kráva", "Had"] },
        { q: "Kdy padá sníh?", answer: "V zimě", options: ["V létě", "Na jaře", "V zimě", "Na podzim"] }
    ],

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
        btn.disabled = true;
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
        
        // Náhodná pozice uprostřed plátna s malým posunem
        const x = canvas.offsetWidth / 2 - 25 + (Math.random() * 20 - 10);
        const y = canvas.offsetHeight / 2 - 25 + (Math.random() * 20 - 10);
        
        shape.style.left = x + 'px';
        shape.style.top = y + 'px';

        // Styly tvarů
        if (type === 'square' || type === 'circle') {
            shape.style.width = '50px';
            shape.style.height = '50px';
            if (type === 'circle') {
                shape.style.borderRadius = '50%';
                shape.style.background = '#f1c40f';
            } else {
                shape.style.background = '#3498db';
            }
        } else if (type === 'triangle') {
            shape.style.width = '0';
            shape.style.height = '0';
            shape.style.borderLeft = '25px solid transparent';
            shape.style.borderRight = '25px solid transparent';
            shape.style.borderBottom = '50px solid #e74c3c';
            shape.style.background = 'transparent';
            // Nastavení rozměrů pro správnou detekci při přetahování (bounding box):
            shape.style.setProperty('--bounding-width', '50px');
            shape.style.setProperty('--bounding-height', '50px');
        }

        canvas.appendChild(shape);
        app.makeDraggable(shape);
    },

    clearCanvas: function() {
        document.getElementById('geo-canvas').innerHTML = '';
    },

    // NOVÁ FUNKCE: Logika pro přetahování (myš i dotyk)
    makeDraggable: function(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const canvas = document.getElementById('geo-canvas');
        
        // --- Obsluha myši ---
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            app.updateElementPosition(element, pos1, pos2, canvas);
        }
        
        // --- Obsluha dotyku ---
        function dragTouchStart(e) {
            e = e || window.event;
            if (e.touches.length === 1) { 
                // Vypne výchozí chování (např. posouvání stránky)
                e.preventDefault(); 
            }
            const touch = e.touches[0];
            pos3 = touch.clientX;
            pos4 = touch.clientY;
            document.ontouchend = closeDragElement;
            document.ontouchmove = elementTouchDrag;
        }

        function elementTouchDrag(e) {
            e = e || window.event;
            e.preventDefault();
            const touch = e.touches[0];
            
            pos1 = pos3 - touch.clientX;
            pos2 = pos4 - touch.clientY;
            pos3 = touch.clientX;
            pos4 = touch.clientY;
            
            app.updateElementPosition(element, pos1, pos2, canvas);
        }

        // --- Pomocné funkce ---
        app.updateElementPosition = function(element, pos1, pos2, canvas) {
            let newTop = element.offsetTop - pos2;
            let newLeft = element.offsetLeft - pos1;
            
            // Pro správné omezení u trojúhelníku použijeme fallback hodnotu 50px
            const elHeight = element.offsetHeight || 50; 
            const elWidth = element.offsetWidth || 50;

            // Omezení pohybu uvnitř kontejneru
            newTop = Math.max(0, Math.min(newTop, canvas.offsetHeight - elHeight));
            newLeft = Math.max(0, Math.min(newLeft, canvas.offsetWidth - elWidth));

            element.style.top = newTop + "px";
            element.style.left = newLeft + "px";
        };

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
        }

        // Připojení listenerů
        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragTouchStart;
    },
    
    // 3. PRVOUKA: Třídění (logika pro klikání zůstává)
    initPrvouka: function() {
        const items = document.querySelectorAll('.item');
        const homeZone = document.querySelector('.home-zone');
        const forestZone = document.querySelector('.forest-zone');

        items.forEach(item => {
            item.addEventListener('click', () => {
                items.forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                app.selectedItem = item;
            });
        });

        homeZone.addEventListener('click', () => app.moveItem(homeZone, ['item1', 'item3']));
        forestZone.addEventListener('click', () => app.moveItem(forestZone, ['item2', 'item4']));
    },

    moveItem: function(zone, correctIds) {
        if (!app.selectedItem) return;
        
        const id = app.selectedItem.id;
        if (correctIds.includes(id)) {
            zone.appendChild(app.selectedItem);
            app.selectedItem.classList.remove('selected');
            app.selectedItem.style.background = "#d4edda";
            app.selectedItem.style.cursor = "default";
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