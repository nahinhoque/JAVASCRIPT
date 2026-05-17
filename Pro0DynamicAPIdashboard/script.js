const ui = {
    userGrid: document.getElementById("userGrid"),
    resultText: document.getElementById("resultText"),
    searchInput: document.getElementById("searchInput"),
    refreshBtn: document.getElementById("refreshBtn"),
    loadingState: document.getElementById("loadingState"),
    errorState: document.getElementById("errorState")
}

let allUsers = [];

function showLoading(isLoading) {
    ui.loadingState.classList.toggle("hidden", !isLoading);
    ui.userGrid.classList.toggle("hidden", isLoading);
}

function showError(message) {
    ui.errorState.textContent = message;
    ui.errorState.classList.remove("hidden");
}

function renderUsers(users = []) {
    ui.userGrid.textContent = "";

    // 2. Map the users and join them into one big string of HTML
    const htmlString = users.map(
        (user) => `
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
                <img src="${user.picture.medium}" alt="${user.name.first}" class="w-16 h-16 rounded-full mx-auto mb-3">
                <h3 class="text-lg font-semibold text-center">${user.name.first} ${user.name.last}</h3>
                <p class="text-sm text-gray-600 text-center">
                    ${user.location.country}
                </p>
                <p class="text-sm text-gray-600 mt-2">${user.email}</p>
                <p class="text-sm text-gray-600">${user.phone}</p>
            </div>
        `
    ).join("");

    ui.userGrid.insertAdjacentHTML("afterbegin", htmlString);

    ui.resultText.textContent = `Showing ${users.length} user${users.length == 1 ? "" : "s"} `;
}

function hideError() {
    ui.errorState.classList.add("hidden");
}


function filterAndRender() {
    const term = ui.searchInput.value.toLowerCase();

    const filtered = allUsers.filter(
        (user) =>
            `${user.name.first} ${user.name.last}`.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)

    )
    renderUsers(filtered);
}



async function fetchUsers() {
    showLoading(true);
    hideError();

    try {
        const res = await fetch("https://randomuser.me/api/?results=100");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        allUsers = data.results;
        renderUsers(allUsers);
    } catch (error) {
        console.log("Fetch Error", error);
        showError("Could not load users. Check your connection and try again");
        ui.userGrid.classList.add("hidden");
    } finally {
        showLoading(false);
    }
}

ui.searchInput.addEventListener("input", filterAndRender);
ui.refreshBtn.addEventListener("click", fetchUsers);

await fetchUsers()
