const images = document.querySelectorAll(".cliquable");
const overlay = document.getElementById("overlay");
const imageGrande = document.getElementById("imageGrande");

images.forEach(img => {
    img.addEventListener("click", () => {
        overlay.style.display = "flex";
        imageGrande.src = img.src;
    });
});
overlay.addEventListener("click", () => { overlay.style.display = "none"; });

function afficherListe(bouton) {
    let liste = bouton.nextElementSibling;
    if (liste.style.display === "block") { liste.style.display = "none;" } else {
        liste.style.display = "block";
    }
}

let panier = [];
function selectionProduit(select) {
    let produit = select.parentElement.querySelector(".nom-produit").innerText;
    let quantite = select.value;

    if (!quantite) return;
    let existant = panier.find(p => p.produit === produit);
    if (existant) { existant.quantite = quantite; }
    else { panier.push({ produit, quantite }) }

    let lignes = panier.map(p => p.quantite + " de " + p.produit);
    let message =
        "Bonjour je voudrais commander : " + lignes.join(" et ");

    let numero = "22890519758";
    let lien = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);
    document.getElementById("lienWatsapp").href = lien;
    console.log("lien watsapp mis a jour : ", lien);
}