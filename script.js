const namaDiterima = {
    "082140579321": "Sita",
    "087811486292": "Nabella",
    "085755144168": "Anindya",
    "082216404065": "Nada",
    "085894327576": "Joanna",
    "08563290269": "Inaya",
    "085646175126": "Naylla",
    "081233901513": "Sharin",
    "081217114511": "Raja",
    "082141029038":	"Tirta",
    "085748369452":	"Faiz",
    "081336658694":	"Dananjaya",
    "088235947537":	"Hikmal",
    "081332792012": "Farrel",
    "082131803387": "Kevin",
    "0881036242959": "Ervina",
    "082335256844": "Mirza",
    "085785074894": "Refitria",
    "081296312821": "Erlita",
    "082338642330": "Azza",
    "085806104453": "Zulfia",
    "081221129515": "Safa",
    "081259199805": "Jeffry",
    "082229036377": "Rafi",
    "081234275397": "Izza",
    "081333613267": "Rossa",
    "08113059206": "Athar",
    "082232021620": "Abimanyu",
    "088996147976": "Aqila",
    "087755099005": "Aqilla",
    "0895367166526": "Farah",
    "081234421978": "Felicia",
    "082140337287": "Lovyna",
    "081330400904": "Refia",
    "085790268398": "Elsa",
    "087856653994": "Nadia",
    "082139294588": "Chlorinda",
    "085737091514": "Balqis",
    "089606333388": "Anastasya",
    "081239688700": "Raihana",
    "089620105355": "Nabilah",
    "082213175445": "Silvany",
    "0895700224796": "Najwa",
    "08113516664": "Syarifah",
    "087814992362": "Laili",
    "081559896062": "Diandra",
    "085707771993": "Atikah",
    "081330118778": "Lisyifail",
    "085748014580": "Nasywa"
};

document.getElementById("cekNamaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const namaInput = document.getElementById("namaInput").value;
    const resultElement = document.getElementById("result");
    const whatsappBox = document.getElementById("whatsappBox");

    if (namaDiterima[namaInput]) {
        resultElement.textContent = `Congrats, ${namaDiterima[namaInput]}! You have been selected as a staff CAMPEX 2025!`;
        resultElement.style.color = "#4CAF50";
        whatsappBox.classList.remove("hidden"); // Show WhatsApp box
    } else {
        resultElement.textContent = `Sorry, you are not selected as a staff CAMPEX 2025.`;
        resultElement.style.color = "#ff7c82";
        whatsappBox.classList.add("hidden"); // Hide WhatsApp box
    }
});
   