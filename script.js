const voitures = [
    { marque: "Audi", type: "Sportive", modele: "R8", prix: 150000, image: "Placeholder" },
    { marque: "Audi", type: "Citadine", modele: "A1", prix: 25000, image: "Placeholder" },
    { marque: "Audi", type: "Berline", modele: "A4", prix: 45000, image: "Placeholder" },
    { marque: "Audi", type: "SUV", modele: "Q5", prix: 55000, image: "Placeholder" },
    { marque: "BMW", type: "Sportive", modele: "M3", prix: 80000, image: "Placeholder" },
    { marque: "BMW", type: "Citadine", modele: "Série 1", prix: 30000, image: "Placeholder" },
    { marque: "BMW", type: "Berline", modele: "Série 3", prix: 48000, image: "Placeholder" },
    { marque: "BMW", type: "SUV", modele: "X5", prix: 70000, image: "Placeholder" },
    { marque: "Mercedes", type: "Sportive", modele: "AMG GT", prix: 140000, image: "Placeholder" },
    { marque: "Mercedes", type: "Citadine", modele: "Classe A", prix: 32000, image: "Placeholder" },
    { marque: "Mercedes", type: "Berline", modele: "Classe C", prix: 50000, image: "Placeholder" },
    { marque: "Mercedes", type: "SUV", modele: "GLC", prix: 60000, image: "Placeholder" },
    { marque: "Renault", type: "Citadine", modele: "Clio", prix: 20000, image: "Placeholder" },
    { marque: "Renault", type: "SUV", modele: "Captur", prix: 28000, image: "Placeholder" },
    { marque: "Peugeot", type: "Citadine", modele: "208", prix: 21000, image: "Placeholder" },
    { marque: "Peugeot", type: "SUV", modele: "3008", prix: 35000, image: "Placeholder" },
    { marque: "Volkswagen", type: "Citadine", modele: "Golf", prix: 27000, image: "Placeholder" },
    { marque: "Volkswagen", type: "SUV", modele: "Tiguan", prix: 38000, image: "Placeholder" },
    { marque: "Porsche", type: "Sportive", modele: "911", prix: 120000, image: "Placeholder" },
    { marque: "Ferrari", type: "Sportive", modele: "488", prix: 250000, image: "Placeholder" },
    { marque: "Lamborghini", type: "Sportive", modele: "Huracan", prix: 200000, image: "Placeholder" },
    { marque: "Tesla", type: "Berline", modele: "Model 3", prix: 55000, image: "Placeholder" },
    { marque: "Tesla", type: "SUV", modele: "Model Y", prix: 65000, image: "Placeholder" },
    { marque: "Toyota", type: "Citadine", modele: "Yaris", prix: 18000, image: "Placeholder" },
    { marque: "Toyota", type: "SUV", modele: "RAV4", prix: 30000, image: "Placeholder" },
    { marque: "Ford", type: "Sportive", modele: "Mustang", prix: 50000, image: "Placeholder" },
    { marque: "Ford", type: "SUV", modele: "Kuga", prix: 32000, image: "Placeholder" },
    { marque: "Honda", type: "Citadine", modele: "Civic", prix: 24000, image: "Placeholder" },
    { marque: "Honda", type: "Berline", modele: "Accord", prix: 35000, image: "Placeholder" },
    { marque: "Hyundai", type: "Citadine", modele: "i20", prix: 19000, image: "Placeholder" },
    { marque: "Hyundai", type: "SUV", modele: "Tucson", prix: 30000, image: "Placeholder" },
    { marque: "Kia", type: "Citadine", modele: "Picanto", prix: 16000, image: "Placeholder" },
    { marque: "Kia", type: "SUV", modele: "Sportage", prix: 29000, image: "Placeholder" },
    { marque: "Nissan", type: "Citadine", modele: "Micra", prix: 17000, image: "Placeholder" },
    { marque: "Nissan", type: "SUV", modele: "Qashqai", prix: 28000, image: "Placeholder" },
    { marque: "Skoda", type: "Citadine", modele: "Fabia", prix: 18000, image: "Placeholder" },
    { marque: "Skoda", type: "Berline", modele: "Octavia", prix: 25000, image: "Placeholder" },
    { marque: "Fiat", type: "Citadine", modele: "500", prix: 15000, image: "Placeholder" },
    { marque: "Fiat", type: "SUV", modele: "Panda", prix: 16000, image: "Placeholder" },
    { marque: "Citroen", type: "Citadine", modele: "C3", prix: 19000, image: "Placeholder" },
    { marque: "Citroen", type: "SUV", modele: "C5 Aircross", prix: 30000, image: "Placeholder" },
    { marque: "Mazda", type: "Berline", modele: "3", prix: 26000, image: "Placeholder" },
    { marque: "Mazda", type: "SUV", modele: "CX-5", prix: 33000, image: "Placeholder" },
    { marque: "Volvo", type: "Berline", modele: "S60", prix: 40000, image: "Placeholder" },
    { marque: "Volvo", type: "SUV", modele: "XC60", prix: 50000, image: "Placeholder" },
    { marque: "Jaguar", type: "Sportive", modele: "F-Type", prix: 75000, image: "Placeholder" },
    { marque: "Land Rover", type: "SUV", modele: "Range Rover", prix: 80000, image: "Placeholder" },
    { marque: "Bugatti", type: "Sportive", modele: "Chiron", prix: 2500000, image: "Placeholder" },
    { marque: "McLaren", type: "Sportive", modele: "720S", prix: 280000, image: "Placeholder" },
    { marque: "Maserati", type: "Berline", modele: "Ghibli", prix: 70000, image: "Placeholder" },
    { marque: "Jeep", type: "SUV", modele: "Wrangler", prix: 45000, image: "Placeholder" },
    { marque: "Suzuki", type: "Citadine", modele: "Swift", prix: 17000, image: "Placeholder" },
    { marque: "Lexus", type: "Berline", modele: "IS", prix: 45000, image: "Placeholder" },
    { marque: "Subaru", type: "SUV", modele: "Forester", prix: 32000, image: "Placeholder" },
    { marque: "Mini", type: "Citadine", modele: "Cooper", prix: 28000, image: "Placeholder" },
    { marque: "Alfa Romeo", type: "Berline", modele: "Giulia", prix: 48000, image: "Placeholder" },
    { marque: "Rolls-Royce", type: "Berline", modele: "Phantom", prix: 400000, image: "Placeholder" },
    { marque: "Bentley", type: "Berline", modele: "Continental GT", prix: 200000, image: "Placeholder" },
    { marque: "Abarth", type: "Sportive", modele: "595", prix: 25000, image: "Placeholder" },
    { marque: "Lancia", type: "Citadine", modele: "Ypsilon", prix: 15000, image: "Placeholder" },
    { marque: "Cupra", type: "SUV", modele: "Formentor", prix: 40000, image: "Placeholder" },
    { marque: "Smart", type: "Citadine", modele: "Fortwo", prix: 18000, image: "Placeholder" },
    { marque: "Dacia", type: "SUV", modele: "Duster", prix: 19000, image: "Placeholder" },
    { marque: "Mitsubishi", type: "SUV", modele: "Outlander", prix: 35000, image: "Placeholder" },
    { marque: "Infiniti", type: "SUV", modele: "QX50", prix: 45000, image: "Placeholder" },
    { marque: "Lotus", type: "Sportive", modele: "Elise", prix: 60000, image: "Placeholder" },
    { marque: "Koenigsegg", type: "Sportive", modele: "Jesko", prix: 2800000, image: "Placeholder" },
    { marque: "Pagani", type: "Sportive", modele: "Huayra", prix: 2600000, image: "Placeholder" },
    { marque: "Rimac", type: "Sportive", modele: "Nevera", prix: 2000000, image: "Placeholder" },
    { marque: "Rivian", type: "SUV", modele: "R1S", prix: 80000, image: "Placeholder" },
    { marque: "Lucid", type: "Berline", modele: "Air", prix: 100000, image: "Placeholder" },
    { marque: "Polestar", type: "Berline", modele: "2", prix: 50000, image: "Placeholder" },
    { marque: "Genesis", type: "Berline", modele: "G80", prix: 60000, image: "Placeholder" },
    { marque: "Genesis", type: "SUV", modele: "GV80", prix: 65000, image: "Placeholder" },
    { marque: "BYD", type: "Citadine", modele: "Dolphin", prix: 25000, image: "Placeholder" },
    { marque: "BYD", type: "Berline", modele: "Seal", prix: 40000, image: "Placeholder" },
    { marque: "MG", type: "Citadine", modele: "MG4", prix: 30000, image: "Placeholder" },
    { marque: "MG", type: "SUV", modele: "ZS", prix: 25000, image: "Placeholder" },
    { marque: "Audi", type: "Berline", modele: "A6", prix: 60000, image: "Placeholder" },
    { marque: "Audi", type: "Sportive", modele: "RS6", prix: 120000, image: "Placeholder" },
    { marque: "BMW", type: "SUV", modele: "X3", prix: 55000, image: "Placeholder" },
    { marque: "BMW", type: "Berline", modele: "Série 5", prix: 60000, image: "Placeholder" },
    { marque: "Mercedes", type: "Berline", modele: "Classe E", prix: 65000, image: "Placeholder" },
    { marque: "Mercedes", type: "SUV", modele: "GLE", prix: 75000, image: "Placeholder" },
    { marque: "Porsche", type: "SUV", modele: "Macan", prix: 65000, image: "Placeholder" },
    { marque: "Porsche", type: "Berline", modele: "Panamera", prix: 100000, image: "Placeholder" },
    { marque: "Volkswagen", type: "Berline", modele: "Passat", prix: 35000, image: "Placeholder" },
    { marque: "Volkswagen", type: "Citadine", modele: "Polo", prix: 22000, image: "Placeholder" },
    { marque: "Renault", type: "Berline", modele: "Mégane", prix: 25000, image: "Placeholder" },
    { marque: "Peugeot", type: "Berline", modele: "308", prix: 28000, image: "Placeholder" },
    { marque: "Ford", type: "Citadine", modele: "Fiesta", prix: 20000, image: "Placeholder" },
    { marque: "Ford", type: "Berline", modele: "Focus", prix: 26000, image: "Placeholder" },
    { marque: "Toyota", type: "Berline", modele: "Corolla", prix: 25000, image: "Placeholder" },
    { marque: "Toyota", type: "Citadine", modele: "Aygo", prix: 15000, image: "Placeholder" },
    { marque: "Honda", type: "SUV", modele: "CR-V", prix: 38000, image: "Placeholder" },
    { marque: "Hyundai", type: "SUV", modele: "Santa Fe", prix: 40000, image: "Placeholder" },
    { marque: "Kia", type: "Berline", modele: "Ceed", prix: 23000, image: "Placeholder" },
    { marque: "Kia", type: "SUV", modele: "Sorento", prix: 45000, image: "Placeholder" },
    { marque: "Nissan", type: "Berline", modele: "Leaf", prix: 35000, image: "Placeholder" },
    { marque: "Nissan", type: "Sportive", modele: "GT-R", prix: 100000, image: "Placeholder" },
    { marque: "Skoda", type: "SUV", modele: "Kodiaq", prix: 35000, image: "Placeholder" },
    { marque: "Volvo", type: "Berline", modele: "S90", prix: 60000, image: "Placeholder" },
    { marque: "Land Rover", type: "SUV", modele: "Defender", prix: 70000, image: "Placeholder" },
    { marque: "Jeep", type: "SUV", modele: "Cherokee", prix: 40000, image: "Placeholder" },
    { marque: "Fiat", type: "Berline", modele: "Tipo", prix: 22000, image: "Placeholder" },
    { marque: "Citroen", type: "Berline", modele: "C4", prix: 25000, image: "Placeholder" },
    { marque: "Audi", type: "Citadine", modele: "A3", prix: 35000, image: "Placeholder" },
    { marque: "Audi", type: "Berline", modele: "A5", prix: 50000, image: "Placeholder" },
    { marque: "BMW", type: "Citadine", modele: "Série 2", prix: 35000, image: "Placeholder" },
    { marque: "BMW", type: "Berline", modele: "Série 7", prix: 90000, image: "Placeholder" },
    { marque: "Mercedes", type: "SUV", modele: "GLB", prix: 48000, image: "Placeholder" },
    { marque: "Mercedes", type: "Berline", modele: "Classe S", prix: 110000, image: "Placeholder" },
    { marque: "Renault", type: "SUV", modele: "Kadjar", prix: 30000, image: "Placeholder" },
    { marque: "Peugeot", type: "Citadine", modele: "108", prix: 15000, image: "Placeholder" },
    { marque: "Peugeot", type: "Berline", modele: "508", prix: 40000, image: "Placeholder" },
    { marque: "Volkswagen", type: "SUV", modele: "Touareg", prix: 60000, image: "Placeholder" },
    { marque: "Volkswagen", type: "Berline", modele: "Arteon", prix: 45000, image: "Placeholder" },
    { marque: "Porsche", type: "SUV", modele: "Cayenne", prix: 80000, image: "Placeholder" },
    { marque: "Ford", type: "SUV", modele: "Explorer", prix: 55000, image: "Placeholder" },
    { marque: "Toyota", type: "SUV", modele: "Highlander", prix: 45000, image: "Placeholder" },
    { marque: "Honda", type: "Citadine", modele: "Jazz", prix: 22000, image: "Placeholder" },
    { marque: "Hyundai", type: "Berline", modele: "Ioniq", prix: 38000, image: "Placeholder" },
    { marque: "Kia", type: "Berline", modele: "Stinger", prix: 50000, image: "Placeholder" },
    { marque: "Nissan", type: "SUV", modele: "Juke", prix: 25000, image: "Placeholder" },
    { marque: "Skoda", type: "Berline", modele: "Superb", prix: 38000, image: "Placeholder" },
    { marque: "Volvo", type: "SUV", modele: "XC40", prix: 40000, image: "Placeholder" },
    { marque: "Mazda", type: "Citadine", modele: "2", prix: 20000, image: "Placeholder" },
    { marque: "Alfa Romeo", type: "SUV", modele: "Stelvio", prix: 55000, image: "Placeholder" },
    { marque: "Suzuki", type: "SUV", modele: "Vitara", prix: 25000, image: "Placeholder" },
    { marque: "Lexus", type: "SUV", modele: "RX", prix: 60000, image: "Placeholder" },
    { marque: "Subaru", type: "Berline", modele: "Impreza", prix: 28000, image: "Placeholder" },
    { marque: "Mini", type: "SUV", modele: "Countryman", prix: 35000, image: "Placeholder" },
    { marque: "Bugatti", type: "Sportive", modele: "Veyron", prix: 1500000, image: "Placeholder" },
    { marque: "McLaren", type: "Sportive", modele: "Artura", prix: 200000, image: "Placeholder" },
    { marque: "Maserati", type: "SUV", modele: "Levante", prix: 80000, image: "Placeholder" },
    { marque: "Jeep", type: "SUV", modele: "Renegade", prix: 30000, image: "Placeholder" },
    { marque: "Citroen", type: "SUV", modele: "C4 Cactus", prix: 22000, image: "Placeholder" },
    { marque: "Fiat", type: "SUV", modele: "500X", prix: 25000, image: "Placeholder" },
    { marque: "Genesis", type: "Berline", modele: "G70", prix: 50000, image: "Placeholder" },
    { marque: "Genesis", type: "SUV", modele: "GV70", prix: 55000, image: "Placeholder" },
    { marque: "Polestar", type: "SUV", modele: "3", prix: 75000, image: "Placeholder" },
    { marque: "Lucid", type: "Berline", modele: "Air Sapphire", prix: 250000, image: "Placeholder" },
    { marque: "McLaren", type: "Sportive", modele: "Senna", prix: 1000000, image: "Placeholder" },
    { marque: "Koenigsegg", type: "Sportive", modele: "Regera", prix: 2000000, image: "Placeholder" },
    { marque: "Pagani", type: "Sportive", modele: "Zonda", prix: 1800000, image: "Placeholder" },
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
    card.innerHTML = `
        <div class="card-image">Image du véhicule</div>
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