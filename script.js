* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: system-ui;
    background: #020617;
    color: #e2e8f0;
    overflow-x: hidden;
}

/* Glow */
body::before {
    content: "";
    position: fixed;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, #38bdf8, transparent);
    top: -250px;
    left: -250px;
    filter: blur(150px);
    opacity: 0.2;
    z-index: -1;
}

/* NAV */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    position: fixed;
    width: 100%;
    background: rgba(2,6,23,0.7);
    z-index: 1000;
}

.nav-links {
    display: flex;
    gap: 20px;
}

/* HERO */
.hero {
    padding: 200px 20px 120px;
    text-align: center;
}

.hero h1 {
    font-size: 3.5rem;
    background: linear-gradient(90deg,#38bdf8,#8b5cf6);
    -webkit-background-clip: text;
    color: transparent;
}

.hero p {
    max-width: 650px;
    margin: 20px auto;
    color: #94a3b8;
}

.hero-actions {
    margin-top: 20px;
}

.link {
    margin-left: 15px;
    color: #38bdf8;
}

/* BUTTON */
.btn {
    padding: 12px 24px;
    border-radius: 30px;
    background: linear-gradient(90deg,#38bdf8,#8b5cf6);
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    transform: translateY(-2px);
}

/* SECTION */
.section {
    padding: 80px 8%;
}

/* GRID */
.grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
}

/* CARD */
.card {
    background: rgba(255,255,255,0.05);
    padding: 25px;
    border-radius: 15px;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-6px);
}

.clickable {
    cursor: pointer;
}

/* FORM */
form input, form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 10px;
    border: none;
    background: rgba(255,255,255,0.05);
    color: white;
}

/* MODAL */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
}

.modal-box {
    max-width: 700px;
    margin: 80px auto;
    background: #020617;
    padding: 25px;
    border-radius: 15px;
}

.close {
    float: right;
    cursor: pointer;
}

.note {
    color: #64748b;
}

footer {
    text-align: center;
    padding: 30px;
}

/* MOBILE */
@media(max-width:768px){
    .hero h1 {
        font-size: 2.4rem;
    }
}
