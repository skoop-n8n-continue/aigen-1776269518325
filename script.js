const facts = [
    { title: "Daily Eco-Fact", text: "Forests cover about 31% of the world's land surface and provide habitat for over 80% of terrestrial species." },
    { title: "Energy Insight", text: "Wind energy is one of the fastest-growing renewable energy sources, with global capacity increasing by 50% since 2018." },
    { title: "Ocean Health", text: "The ocean absorbs about 30% of carbon dioxide produced by humans, buffering the impacts of global warming." },
    { title: "Conservation Status", text: "Protecting 30% of our planet's land and oceans by 2030 is critical for preventing mass extinction." },
    { title: "Water Wisdom", text: "Less than 1% of the world's freshwater is accessible for human use, making conservation vital." }
];

let factIndex = 0;

function updateDateTime() {
    const now = new Date();
    const dateEl = document.getElementById('date');
    const timeEl = document.getElementById('time');

    if (dateEl && timeEl) {
        dateEl.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        timeEl.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }
}

function rotateFacts() {
    const titleEl = document.getElementById('fact-title');
    const textEl = document.getElementById('fact-text');

    if (titleEl && textEl) {
        // Fade out
        textEl.parentElement.style.opacity = '0';

        setTimeout(() => {
            factIndex = (factIndex + 1) % facts.length;
            titleEl.textContent = facts[factIndex].title;
            textEl.textContent = facts[factIndex].text;

            // Fade in
            textEl.parentElement.style.opacity = '1';
        }, 500);
    }
}

// Initial calls
updateDateTime();
setInterval(updateDateTime, 1000);

// Set initial fact
const titleEl = document.getElementById('fact-title');
const textEl = document.getElementById('fact-text');
if (titleEl && textEl) {
    titleEl.textContent = facts[0].title;
    textEl.textContent = facts[0].text;
    textEl.parentElement.style.transition = 'opacity 0.5s ease-in-out';
}

// Rotate facts every 10 seconds
setInterval(rotateFacts, 10000);

// Simulate small fluctuations in metrics
setInterval(() => {
    const metrics = document.querySelectorAll('.metric');
    metrics.forEach(m => {
        if (m.textContent.includes('kWh')) {
            let val = parseFloat(m.textContent);
            val += (Math.random() - 0.4) * 0.1;
            m.textContent = `${val.toFixed(1)} kWh`;
        }
    });
}, 5000);
