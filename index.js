function getImageUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function renderPokemonList(pokemonData) {
    const container = document.querySelector(".image__items"); // Chọn danh sách hiển thị

    // Duyệt qua danh sách Pokémon và tạo thẻ
    pokemonData.results.forEach(({ name, url }) => {
        // Lấy ID từ URL
        const id = url.split("/").filter(Boolean).pop(); // Lấy ID cuối cùng từ URL

        // Tạo các phần tử HTML
        const div = document.createElement("div");
        div.classList.add("pokemon-card");

        const imageTag = document.createElement("img");
        imageTag.src = getImageUrl(id);
        imageTag.alt = name;

        const nameTag = document.createElement("h2");
        nameTag.innerText = name;

        // Thêm các phần tử vào thẻ div
        div.appendChild(imageTag);
        div.appendChild(nameTag);

        // Thêm thẻ div vào container
        container.appendChild(div);
    });
}


// Gọi hàm để render danh sách
renderPokemonList(data);
