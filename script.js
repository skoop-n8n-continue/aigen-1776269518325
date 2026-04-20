const facts = [
    { title: "City Insight", text: "Smart lighting systems can reduce municipal energy costs by up to 50% while improving public safety." },
    { title: "Network Status", text: "Global internet traffic is projected to grow by 25% annually as city infrastructure becomes increasingly connected." },
    { title: "Traffic Data", text: "Real-time AI traffic management can reduce average commute times in major metro areas by 15-20%." },
    { title: "Urban Growth", text: "By 2050, it is estimated that nearly 70% of the world's population will live in urban centers." },
    { title: "Data Security", text: "Advanced encryption protocols protect 100% of the municipal data transmitted across the city grid." }
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
        if (m.textContent.includes('dB')) {
            let val = parseFloat(m.textContent);
            val += (Math.random() - 0.5) * 0.5;
            m.textContent = `${val.toFixed(1)} dB`;
        }
    });
}, 5000);
