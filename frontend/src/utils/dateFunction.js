export function formatReleaseDate(date) {
    return new Date(date).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function formatDate(dateString) {
    const date = new Date(dateString);

    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    
    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
}
