document.addEventListener("DOMContentLoaded", function() {
    const text = "Sono un giovane sviluppatore che ha iniziato il suo viaggio nel mondo dello sviluppo web durante il percorso formativo presso Boolean. Questa esperienza ha acceso in me una passione ardente per la programmazione e ha alimentato la mia fame di conoscenza. Con una mente aperta e una determinazione incrollabile, sono pronto ad affrontare ogni sfida e a imparare continuamente dalle esperienze che incontrerò. Sono entusiasta di contribuire con la mia creatività e dedizione a progetti stimolanti, diventando sempre più competente nel mio percorso di sviluppo professionale.";
    let i = 0;
    const speed = 50; // Velocità di battitura

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
