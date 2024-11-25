document.addEventListener("DOMContentLoaded", () => {
    fetchMedicines();
});
//function to fetch medicines from backend
function fetchMedicines() {
    fetch("http://localhost:8000/medicines")
        .then((response) => response.json())
        .then((data) => {
            displayMedicines(data.medicines);
        })
        .catch((error) => {
            console.error("Error fetching medicines:", error);
            document.getElementById("medicineList").innerHTML = "<p>Failed to load medicines.</p>";
        });
}
//function to display medicines
function displayMedicines(medicines) {
    const medicineList = document.getElementById("medicineList");
    medicineList.innerHTML = "";
    medicines.forEach((medicine) => {
        const medName = medicine.name || "Unknown Medicine";
        const medPrice = medicine.price !== null ? `$${medicine.price}` : "Price not available";
        const medElement = document.createElement("div");
        medElement.className = "medicine-item";
        medElement.innerHTML = `<strong>${medName}</strong>: ${medPrice}`;
        medicineList.appendChild(medElement);
    });
}
document.getElementById("addMedicineForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const medName = document.getElementById("medName").value.trim();
    const medPrice = parseFloat(document.getElementById("medPrice").value);

    if (!medName) {
        alert("Please enter a medicine name.");
        return;
    }
    if (isNaN(medPrice) || medPrice <= 0) {
        alert("Please enter a valid price.");
        return;
    }

    createMedicine(medName, medPrice);
});
//function to create and add new medicine
function createMedicine(name, price) {
    fetch("http://localhost:8000/create", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name, price })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
                fetchMedicines();
                document.getElementById("addMedicineForm").reset();
            }
        })
        .catch((error) => {
            console.error("Error creating medicine:", error);
            alert("Failed to add medicine.");
        });
}

// Function to fetch and display the average price
function fetchAveragePrice() {
    fetch("http://localhost:8000/average-price")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch average price.");
            }
            return response.json();
        })
        .then((data) => {
            const displayElement = document.getElementById("averagePriceDisplay");
            if (data.error) {
                displayElement.textContent = `Error: ${data.error}`;
            } else {
                displayElement.textContent = `Price Average: $${data.average_price}`;
            }
        })
        .catch((error) => {
            console.error("Error fetching average price:", error);
            document.getElementById("averagePriceDisplay").textContent =
                "Failed to calculate average price. Please try again.";
        });
}
document
    .getElementById("averagePriceButton")
    .addEventListener("click", fetchAveragePrice);
