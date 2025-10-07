const voitures = [
    { marque: "Audi", type: "Sportive", modele: "R8", prix: 150000, image: "" },
    { marque: "Audi", type: "Citadine", modele: "A1", prix: 25000, image: "AudiA1.jpg" },
    { marque: "Audi", type: "Berline", modele: "A4", prix: 45000, image: "AudiA4.jpg" },
    { marque: "Audi", type: "SUV", modele: "Q5", prix: 55000, image: "AudiQ5.jpg" },
    { marque: "BMW", type: "Sportive", modele: "M3", prix: 80000, image: "" },
    { marque: "BMW", type: "Citadine", modele: "Série 1", prix: 30000, image: "BMWSerie1.jpg" },
    { marque: "BMW", type: "Berline", modele: "Série 3", prix: 48000, image: "BMWSerie3.jpg" },
    { marque: "BMW", type: "SUV", modele: "X5", prix: 70000, image: "BMWX5.jpg" },
    { marque: "Mercedes", type: "Sportive", modele: "AMG GT", prix: 140000, image: "" },
    { marque: "Mercedes", type: "Citadine", modele: "Classe A", prix: 32000, image: "MercedesClasseA.jpg" },
    { marque: "Mercedes", type: "Berline", modele: "Classe C", prix: 50000, image: "MercedesClasseC.jpg" },
    { marque: "Mercedes", type: "SUV", modele: "GLC", prix: 60000, image: "MercedesGLC.jpg" },
    { marque: "Renault", type: "Citadine", modele: "Clio", prix: 20000, image: "RenaultClio.jpg" },
    { marque: "Renault", type: "SUV", modele: "Captur", prix: 28000, image: "RenaultCaptur.jpg" },
    { marque: "Peugeot", type: "Citadine", modele: "208", prix: 21000, image: "Peugeot208.jpg" },
    { marque: "Peugeot", type: "SUV", modele: "3008", prix: 35000, image: "Peugeot3008.jpg" },
    { marque: "Volkswagen", type: "Citadine", modele: "Golf", prix: 27000, image: "VolkswagenGolf.jpg" },
    { marque: "Volkswagen", type: "SUV", modele: "Tiguan", prix: 38000, image: "" },
    { marque: "Porsche", type: "Sportive", modele: "911", prix: 120000, image: "" },
    { marque: "Ferrari", type: "Sportive", modele: "488", prix: 250000, image: "" },
    { marque: "Lamborghini", type: "Sportive", modele: "Huracan", prix: 200000, image: "" },
    { marque: "Tesla", type: "Berline", modele: "Model 3", prix: 55000, image: "TeslaModel3.jpg" },
    { marque: "Tesla", type: "SUV", modele: "Model Y", prix: 65000, image: "" },
    { marque: "Toyota", type: "Citadine", modele: "Yaris", prix: 18000, image: "ToyotaYaris.jpg" },
    { marque: "Toyota", type: "SUV", modele: "RAV4", prix: 30000, image: "" },
    { marque: "Ford", type: "Sportive", modele: "Mustang", prix: 50000, image: "" },
    { marque: "Ford", type: "SUV", modele: "Kuga", prix: 32000, image: "" },
    { marque: "Honda", type: "Citadine", modele: "Civic", prix: 24000, image: "HondaCivic.jpg" },
    { marque: "Honda", type: "Berline", modele: "Accord", prix: 35000, image: "HondaAccord.jpg" },
    { marque: "Hyundai", type: "Citadine", modele: "i20", prix: 19000, image: "HyundaiI20.jpg" },
    { marque: "Hyundai", type: "SUV", modele: "Tucson", prix: 30000, image: "" },
    { marque: "Kia", type: "Citadine", modele: "Picanto", prix: 16000, image: "KiaPicanto.jpg" },
    { marque: "Kia", type: "SUV", modele: "Sportage", prix: 29000, image: "" },
    { marque: "Nissan", type: "Citadine", modele: "Micra", prix: 17000, image: "NissanMicra.jpg" },
    { marque: "Nissan", type: "SUV", modele: "Qashqai", prix: 28000, image: "" },
    { marque: "Skoda", type: "Citadine", modele: "Fabia", prix: 18000, image: "SkodaFabia.jpg" },
    { marque: "Skoda", type: "Berline", modele: "Octavia", prix: 25000, image: "SkodaOctavia.jpg" },
    { marque: "Fiat", type: "Citadine", modele: "500", prix: 15000, image: "Fiat500.jpg" },
    { marque: "Fiat", type: "SUV", modele: "Panda", prix: 16000, image: "" },
    { marque: "Citroen", type: "Citadine", modele: "C3", prix: 19000, image: "CitroenC3.jpg" },
    { marque: "Citroen", type: "SUV", modele: "C5 Aircross", prix: 30000, image: "" },
    { marque: "Mazda", type: "Berline", modele: "3", prix: 26000, image: "Mazda3.jpg" },
    { marque: "Mazda", type: "SUV", modele: "CX-5", prix: 33000, image: "" },
    { marque: "Volvo", type: "Berline", modele: "S60", prix: 40000, image: "VolvoS60.jpg" },
    { marque: "Volvo", type: "SUV", modele: "XC60", prix: 50000, image: "" },
    { marque: "Jaguar", type: "Sportive", modele: "F-Type", prix: 75000, image: "" },
    { marque: "Land Rover", type: "SUV", modele: "Range Rover", prix: 80000, image: "" },
    { marque: "Bugatti", type: "Sportive", modele: "Chiron", prix: 2500000, image: "" },
    { marque: "McLaren", type: "Sportive", modele: "720S", prix: 280000, image: "" },
    { marque: "Maserati", type: "Berline", modele: "Ghibli", prix: 70000, image: "MaseratiGhibli.jpg" },
    { marque: "Jeep", type: "SUV", modele: "Wrangler", prix: 45000, image: "" },
    { marque: "Suzuki", type: "Citadine", modele: "Swift", prix: 17000, image: "SuzukiSwift.jpg" },
    { marque: "Lexus", type: "Berline", modele: "IS", prix: 45000, image: "" },
    { marque: "Subaru", type: "SUV", modele: "Forester", prix: 32000, image: "" },
    { marque: "Mini", type: "Citadine", modele: "Cooper", prix: 28000, image: "" },
    { marque: "Alfa Romeo", type: "Berline", modele: "Giulia", prix: 48000, image: "AlfaRomeoGiulia.jpg" },
    { marque: "Rolls-Royce", type: "Berline", modele: "Phantom", prix: 400000, image: "RollsRoycePhantom.jpg" },
    { marque: "Bentley", type: "Berline", modele: "Continental GT", prix: 200000, image: "BentleyContinental.jpg" },
    { marque: "Abarth", type: "Sportive", modele: "595", prix: 25000, image: "" },
    { marque: "Lancia", type: "Citadine", modele: "Ypsilon", prix: 15000, image: "LanciaYpsilon.jpg" },
    { marque: "Cupra", type: "SUV", modele: "Formentor", prix: 40000, image: "" },
    { marque: "Smart", type: "Citadine", modele: "Fortwo", prix: 18000, image: "" },
    { marque: "Dacia", type: "SUV", modele: "Duster", prix: 19000, image: "" },
    { marque: "Mitsubishi", type: "SUV", modele: "Outlander", prix: 35000, image: "" },
    { marque: "Infiniti", type: "SUV", modele: "QX50", prix: 45000, image: "" },
    { marque: "Lotus", type: "Sportive", modele: "Elise", prix: 60000, image: "" },
    { marque: "Koenigsegg", type: "Sportive", modele: "Jesko", prix: 2800000, image: "" },
    { marque: "Pagani", type: "Sportive", modele: "Huayra", prix: 2600000, image: "" },
    { marque: "Rimac", type: "Sportive", modele: "Nevera", prix: 2000000, image: "" },
    { marque: "Rivian", type: "SUV", modele: "R1S", prix: 80000, image: "" },
    { marque: "Lucid", type: "Berline", modele: "Air", prix: 100000, image: "" },
    { marque: "Polestar", type: "Berline", modele: "2", prix: 50000, image: "" },
    { marque: "Genesis", type: "Berline", modele: "G80", prix: 60000, image: "" },
    { marque: "Genesis", type: "SUV", modele: "GV80", prix: 65000, image: "" },
    { marque: "BYD", type: "Citadine", modele: "Dolphin", prix: 25000, image: "BYDDolphin.jpg" },
    { marque: "BYD", type: "Berline", modele: "Seal", prix: 40000, image: "BYDSeal.jpg" },
    { marque: "MG", type: "Citadine", modele: "MG4", prix: 30000, image: "MGMG4.jpg" },
    { marque: "MG", type: "SUV", modele: "ZS", prix: 25000, image: "" },
    { marque: "Audi", type: "Berline", modele: "A6", prix: 60000, image: "AudiA6.jpg" },
    { marque: "Audi", type: "Sportive", modele: "RS6", prix: 120000, image: "" },
    { marque: "BMW", type: "SUV", modele: "X3", prix: 55000, image: "" },
    { marque: "BMW", type: "Berline", modele: "Série 5", prix: 60000, image: "BMWSerie5.jpg" },
    { marque: "Mercedes", type: "Berline", modele: "Classe E", prix: 65000, image: "" },
    { marque: "Mercedes", type: "SUV", modele: "GLE", prix: 75000, image: "" },
    { marque: "Porsche", type: "SUV", modele: "Macan", prix: 65000, image: "" },
    { marque: "Porsche", type: "Berline", modele: "Panamera", prix: 100000, image: "" },
    { marque: "Volkswagen", type: "Berline", modele: "Passat", prix: 35000, image: "" },
    { marque: "Volkswagen", type: "Citadine", modele: "Polo", prix: 22000, image: "VolkswagenPolo.jpg" },
    { marque: "Renault", type: "Berline", modele: "Mégane", prix: 25000, image: "RenaultMegane.jpg" },
    { marque: "Peugeot", type: "Berline", modele: "308", prix: 28000, image: "Peugeot308.jpg" },
    { marque: "Ford", type: "Citadine", modele: "Fiesta", prix: 20000, image: "FordFiesta.jpg" },
    { marque: "Ford", type: "Berline", modele: "Focus", prix: 26000, image: "FordFocus.jpg" },
    { marque: "Toyota", type: "Berline", modele: "Corolla", prix: 25000, image: "ToyotaCorolla.jpg" },
    { marque: "Toyota", type: "Citadine", modele: "Aygo", prix: 15000, image: "ToyotaAygo.jpg" },
    { marque: "Honda", type: "SUV", modele: "CR-V", prix: 38000, image: "" },
    { marque: "Hyundai", type: "SUV", modele: "Santa Fe", prix: 40000, image: "" },
    { marque: "Kia", type: "Berline", modele: "Ceed", prix: 23000, image: "KiaCeed.jpg" },
    { marque: "Kia", type: "SUV", modele: "Sorento", prix: 45000, image: "" },
    { marque: "Nissan", type: "Berline", modele: "Leaf", prix: 35000, image: "NissanLeaf.jpg" },
    { marque: "Nissan", type: "Sportive", modele: "GT-R", prix: 100000, image: "" },
    { marque: "Skoda", type: "SUV", modele: "Kodiaq", prix: 35000, image: "" },
    { marque: "Volvo", type: "Berline", modele: "S90", prix: 60000, image: "VolvoS90.jpg" },
    { marque: "Land Rover", type: "SUV", modele: "Defender", prix: 70000, image: "" },
    { marque: "Jeep", type: "SUV", modele: "Cherokee", prix: 40000, image: "" },
    { marque: "Fiat", type: "Berline", modele: "Tipo", prix: 22000, image: "FiatTipo.jpg" },
    { marque: "Citroen", type: "Berline", modele: "C4", prix: 25000, image: "" },
    { marque: "Audi", type: "Citadine", modele: "A3", prix: 35000, image: "AudiA3.jpg" },
    { marque: "Audi", type: "Berline", modele: "A5", prix: 50000, image: "AudiA5.jpg" },
    { marque: "BMW", type: "Citadine", modele: "Série 2", prix: 35000, image: "BMWSerie2.jpg" },
    { marque: "BMW", type: "Berline", modele: "Série 7", prix: 90000, image: "BMWSerie7.jpg" },
    { marque: "Mercedes", type: "SUV", modele: "GLB", prix: 48000, image: "" },
    { marque: "Mercedes", type: "Berline", modele: "Classe S", prix: 110000, image: "MercedesClasseS.jpg" },
    { marque: "Renault", type: "SUV", modele: "Kadjar", prix: 30000, image: "" },
    { marque: "Peugeot", type: "Citadine", modele: "108", prix: 15000, image: "Peugeot108.jpg" },
    { marque: "Peugeot", type: "Berline", modele: "508", prix: 40000, image: "" },
    { marque: "Volkswagen", type: "SUV", modele: "Touareg", prix: 60000, image: "" },
    { marque: "Volkswagen", type: "Berline", modele: "Arteon", prix: 45000, image: "VolkswagenArteon.jpg" },
    { marque: "Porsche", type: "SUV", modele: "Cayenne", prix: 80000, image: "" },
    { marque: "Ford", type: "SUV", modele: "Explorer", prix: 55000, image: "" },
    { marque: "Toyota", type: "SUV", modele: "Highlander", prix: 45000, image: "" },
    { marque: "Honda", type: "Citadine", modele: "Jazz", prix: 22000, image: "HondaJazz.jpg" },
    { marque: "Hyundai", type: "Berline", modele: "Ioniq", prix: 38000, image: "" },
    { marque: "Kia", type: "Berline", modele: "Stinger", prix: 50000, image: "KiaStinger.jpg" },
    { marque: "Nissan", type: "SUV", modele: "Juke", prix: 25000, image: "" },
    { marque: "Skoda", type: "Berline", modele: "Superb", prix: 38000, image: "SkodaSuperb.jpg" },
    { marque: "Volvo", type: "SUV", modele: "XC40", prix: 40000, image: "" },
    { marque: "Mazda", type: "Citadine", modele: "2", prix: 20000, image: "" },
    { marque: "Alfa Romeo", type: "SUV", modele: "Stelvio", prix: 55000, image: "" },
    { marque: "Suzuki", type: "SUV", modele: "Vitara", prix: 25000, image: "" },
    { marque: "Lexus", type: "SUV", modele: "RX", prix: 60000, image: "" },
    { marque: "Subaru", type: "Berline", modele: "Impreza", prix: 28000, image: "" },
    { marque: "Mini", type: "SUV", modele: "Countryman", prix: 35000, image: "" },
    { marque: "Bugatti", type: "Sportive", modele: "Veyron", prix: 1500000, image: "" },
    { marque: "McLaren", type: "Sportive", modele: "Artura", prix: 200000, image: "" },
    { marque: "Maserati", type: "SUV", modele: "Levante", prix: 80000, image: "" },
    { marque: "Jeep", type: "SUV", modele: "Renegade", prix: 30000, image: "" },
    { marque: "Citroen", type: "SUV", modele: "C4 Cactus", prix: 22000, image: "" },
    { marque: "Fiat", type: "SUV", modele: "500X", prix: 25000, image: "" },
    { marque: "Genesis", type: "Berline", modele: "G70", prix: 50000, image: "" },
    { marque: "Genesis", type: "SUV", modele: "GV70", prix: 55000, image: "" },
    { marque: "Polestar", type: "SUV", modele: "3", prix: 75000, image: "" },
    { marque: "Lucid", type: "Berline", modele: "Air Sapphire", prix: 250000, image: "LucidAirSapphire.jpg" },
    { marque: "McLaren", type: "Sportive", modele: "Senna", prix: 1000000, image: "" },
    { marque: "Koenigsegg", type: "Sportive", modele: "Regera", prix: 2000000, image: "" },
    { marque: "Pagani", type: "Sportive", modele: "Zonda", prix: 1800000, image: "" },
];

const marqueSelect = document.getElementById('marque-select');
const typeSelect = document.getElementById('type-select');
const modeleSelect = document.getElementById('modele-select');
const prixSelect = document.getElementById('prix-select');
const searchButton = document.getElementById('search-button');
const homeButton = document.getElementById('home-button');
const galerieContainer = document.getElementById('galerie-container');

function initFilters() {
    const marques = [...new Set(voitures.map(v => v.marque))].sort();
    marques.forEach(marque => {
        const option = document.createElement('option');
        option.value = marque;
        option.textContent = marque;
        marqueSelect.appendChild(option);
    });

    const prixMax = [25000, 50000, 75000, 100000, 200000, 500000, 1000000, 5000000];
    prixMax.forEach(prix => {
        const option = document.createElement('option');
        option.value = prix;
        option.textContent = `< ${prix.toLocaleString()} €`;
        prixSelect.appendChild(option);
    });

    updateTypesAndModeles();
}

function updateTypesAndModeles() {
    const selectedMarque = marqueSelect.value;
    const selectedType = typeSelect.value;
    let filteredList = voitures;

    if (selectedMarque) {
        filteredList = voitures.filter(v => v.marque === selectedMarque);
    }

    const types = [...new Set(filteredList.map(v => v.type))].sort();
    typeSelect.innerHTML = '<option value="">Tous</option>';
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });
    if (selectedType && !types.includes(selectedType)) {
        typeSelect.value = '';
    } else {
        typeSelect.value = selectedType;
    }

    let modelesList = filteredList;
    if (selectedType) {
        modelesList = filteredList.filter(v => v.type === selectedType);
    }
    const modeles = [...new Set(modelesList.map(v => v.modele))].sort();
    modeleSelect.innerHTML = '<option value="">Tous</option>';
    modeles.forEach(modele => {
        const option = document.createElement('option');
        option.value = modele;
        option.textContent = modele;
        modeleSelect.appendChild(option);
    });
    modeleSelect.disabled = !selectedMarque && !selectedType;
}

function createCard(voiture) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Chemin d'accès : ./Pic/ + nom_du_fichier.jpg (le nom doit être EXACT)
    const imagePath = `./Pic/${voiture.image}`; 
    
    // S'il y a un nom de fichier dans 'voiture.image', on affiche l'image
    const imageHtml = voiture.image 
        ? `<img src="${imagePath}" alt="${voiture.marque} ${voiture.modele}" class="card-img">`
        : `<div class="card-image">Image non disponible</div>`; // Sinon, on affiche le placeholder

    card.innerHTML = `
        ${imageHtml}
        <h3>${voiture.marque} ${voiture.modele}</h3>
        <p><strong>Type:</strong> ${voiture.type}</p>
        <p><strong>Prix:</strong> ${voiture.prix.toLocaleString()} €</p>
    `;
    return card;
}

function displayVoitures(voituresToDisplay, isFiltered = false) {
    galerieContainer.innerHTML = '';
    
    // Si la recherche est filtrée (isFiltered = true)
    if (isFiltered) {
        if (voituresToDisplay.length === 0) {
            const noResults = document.createElement('div');
            noResults.id = 'no-results';
            noResults.textContent = "Aucun résultat ne correspond à votre recherche.";
            galerieContainer.appendChild(noResults);
        } else {
            const galerieDiv = document.createElement('div');
            galerieDiv.className = 'galerie';
            galerieDiv.innerHTML = `<h2>Résultats de votre recherche</h2>`;
            const voituresDiv = document.createElement('div');
            voituresDiv.className = 'galerie-voitures';
            voituresToDisplay.forEach(v => voituresDiv.appendChild(createCard(v)));
            galerieDiv.appendChild(voituresDiv);
            galerieContainer.appendChild(galerieDiv);
        }
    } else {
        // Affichage des vitrines par défaut pour la page d'accueil
        const types = [...new Set(voitures.map(v => v.type))].sort();
        const marques = ['Audi', 'BMW', 'Mercedes', 'Renault', 'Peugeot']; 

        types.forEach(type => {
            const voituresByType = voitures.filter(v => v.type === type);
            if (voituresByType.length > 0) {
                const galerieDiv = document.createElement('div');
                galerieDiv.className = 'galerie';
                galerieDiv.innerHTML = `<h2>Découvrez nos modèles de type "${type}"</h2>`;
                const voituresDiv = document.createElement('div');
                voituresDiv.className = 'galerie-voitures';
                voituresByType.forEach(v => voituresDiv.appendChild(createCard(v)));
                galerieDiv.appendChild(voituresDiv);
                galerieContainer.appendChild(galerieDiv);
            }
        });

        marques.forEach(marque => {
            const voituresByMarque = voitures.filter(v => v.marque === marque);
            if (voituresByMarque.length > 0) {
                const galerieDiv = document.createElement('div');
                galerieDiv.className = 'galerie';
                galerieDiv.innerHTML = `<h2>Nos coups de cœur chez ${marque}</h2>`;
                const voituresDiv = document.createElement('div');
                voituresDiv.className = 'galerie-voitures';
                voituresByMarque.forEach(v => voituresDiv.appendChild(createCard(v)));
                galerieDiv.appendChild(voituresDiv);
                galerieContainer.appendChild(galerieDiv);
            }
        });
    }
}

function resetFilters() {
    marqueSelect.value = '';
    typeSelect.value = '';
    modeleSelect.value = '';
    prixSelect.value = '';
    updateTypesAndModeles();
}

searchButton.addEventListener('click', () => {
    const marque = marqueSelect.value;
    const type = typeSelect.value;
    const modele = modeleSelect.value;
    const prix = parseInt(prixSelect.value, 10) || Infinity;

    const filteredVoitures = voitures.filter(v => {
        return (!marque || v.marque === marque) &&
               (!type || v.type === type) &&
               (!modele || v.modele === modele) &&
               (v.prix <= prix);
    });

    displayVoitures(filteredVoitures, true); // On passe 'true' pour indiquer que c'est une recherche filtrée
});

homeButton.addEventListener('click', () => {
    resetFilters();
    displayVoitures([], false); // On passe 'false' pour afficher les vitrines par défaut
});

marqueSelect.addEventListener('change', () => {
    typeSelect.value = '';
    modeleSelect.value = '';
    updateTypesAndModeles();
});

typeSelect.addEventListener('change', () => {
    modeleSelect.value = '';
    updateTypesAndModeles();
});

initFilters();
displayVoitures([], false); // Affiche la page d'accueil au chargement