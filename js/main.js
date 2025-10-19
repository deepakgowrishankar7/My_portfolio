// Add at the end of the file
const text = "3rd Year Computer Science Student at SIR CR Reddy College of Engineering";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-headline").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}
window.onload = typeWriter;