
const csvData = `
Timestamp,Name,Address,Blood Group,Phone number,Current Location
06/01/2026 12:18:10,Sijo Varghese Mathew ,Edavathra Peedikayil Puthencavu ,A positive (A+),9400850654,Puthencavu 
06/01/2026 12:18:33,Navin Koshy Varghese ,Kunnumpurath house puthencavu p.o Chengannur ,A positive (A+),8113919725,Chengannur 
06/01/2026 12:19:50,NIKHIL M VARGHESE ,Muriyil house puthencavu p o chengannur,B positive (B+),9744780198,Chengannur 
06/01/2026 12:21:21,Jeswin Koshy Titus,"Kallodikuzhiyil House
Edanad P.O.,
Chengannur, Puthencavu.",O positive (O+),7736702214,"Chengannur,India."
06/01/2026 12:21:38,LINTO JACOB VARGHESE ,MAMKUNNEL JOHN VILLA PUTHENCAVU PO CHENGANNUR 689123,B positive (B+),9656621436,FAHAHEEL. KUWAIT 
06/01/2026 12:22:34,LIJO VARGHESE ,Mamkunnel john Villa  puthencavu p.o chengannur 689123,AB positive (AB+),8714201095,GCC
06/01/2026 12:22:38,Dickson Thomas Chacko,"Charivuparampil House, Puthencavu P O, Chengannur.",A positive (A+),0567366212,Dubai
06/01/2026 12:22:53,Bijil M Varghese,Muriyil (H) puthencavu po chengannur ,A positive (A+),6282565901,Kerala
06/01/2026 12:26:23,VIPIN VALSON,"KADAVIL, PUTHENCAVU, CHENGANNUR",B negative (B-),0097474747963,Qatar
06/01/2026 12:26:30,Jijo Varghese,"Valliathu(H), Puthencavu. P.O, Angadical, Chengannur",O positive (O+),7736741693,Hyderabad
`; 
function parseCSV(csv) {
    const rows = [];
    let row = [];
    let current = '';
    let insideQuotes = false;

    for (let i = 0; i < csv.length; i++) {
        const char = csv[i];
        const next = csv[i + 1];

        if (char === '"' && next === '"') {
            current += '"';
            i++;
        } else if (char === '"') {
            insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
            row.push(current.trim());
            current = '';
        } else if (char === '\n' && !insideQuotes) {
            if (row.length) {
                row.push(current.trim());
                rows.push(row);
            }
            row = [];
            current = '';
        } else {
            current += char;
        }
    }

    if (current) {
        row.push(current.trim());
        rows.push(row);
    }

    rows.shift(); 

    return rows.map(r => ({
        name: r[1]?.trim() || "Unknown",
        blood: r[3]?.match(/\((.*?)\)/)?.[1] || null,
        phone: (r[4] || "").replace(/\s+/g, ""),
        location: r[5]?.trim() || "Unknown"
    })).filter(d => d.blood);
}

const donors = parseCSV(csvData);

const select = document.getElementById("bloodGroupSelect");
const cards = document.getElementById("cards");
const noResults = document.getElementById("noResults");

function populateBloodGroups() {
    const groups = [...new Set(donors.map(d => d.blood))].sort();

    groups.forEach(bg => {
        const opt = document.createElement("option");
        opt.value = bg;
        opt.textContent = `🩸 ${bg}`;
        select.appendChild(opt);
    });
}

populateBloodGroups();

select.addEventListener("change", () => {
    cards.innerHTML = "";
    noResults.style.display = "none";

    if (!select.value) return;

    const filtered = donors.filter(d => d.blood === select.value);

    if (!filtered.length) {
        noResults.style.display = "block";
        return;
    }

    filtered.forEach((d, i) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${i * 0.06}s`;

        card.innerHTML = `
            <div class="blood">${d.blood}</div>
            <div class="name">${d.name}</div>
            <div class="info">📞 <a href="tel:${d.phone}">${d.phone}</a></div>
            <div class="info">📍 ${d.location}</div>
        `;

        cards.appendChild(card);
    });
});

select.addEventListener("change", () => {
    setTimeout(() => {
        cards.scrollIntoView({ behavior: "smooth" });
    }, 200);
});
