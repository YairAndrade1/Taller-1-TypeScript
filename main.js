import { series } from './data.js';
// Referencias a elementos del DOM
const seriesTbody = document.getElementById('series-table-body');
const avgSeasonDiv = document.getElementById('average-seasons');
const seriesDetailDiv = document.getElementById('series-detail');
// Función para renderizar la lista de series en la tabla
function renderSeriesInTable(seriesList) {
    seriesList.forEach((serie) => {
        let trElement = document.createElement('tr');
        // Crear celdas de la fila
        let idCell = document.createElement('th');
        idCell.scope = 'row';
        idCell.textContent = serie.id.toString();
        let nameCell = document.createElement('td');
        nameCell.textContent = serie.name;
        nameCell.style.color = '#0056b3';
        nameCell.style.textDecoration = 'underline';
        nameCell.style.cursor = 'pointer';
        // Añadir evento de clic al nombre de la serie
        nameCell.addEventListener('click', () => showSeriesDetail(serie));
        let channelCell = document.createElement('td');
        channelCell.textContent = serie.channel;
        let seasonsCell = document.createElement('td');
        seasonsCell.textContent = serie.seasons.toString();
        // Añadir celdas a la fila
        trElement.appendChild(idCell);
        trElement.appendChild(nameCell);
        trElement.appendChild(channelCell);
        trElement.appendChild(seasonsCell);
        // Añadir fila al cuerpo de la tabla
        seriesTbody.appendChild(trElement);
    });
}
// Función para calcular el promedio de temporadas
function getAverageSeasons(seriesList) {
    const totalSeasons = seriesList.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / seriesList.length;
}
// Función para mostrar el detalle de una serie en el componente Card
function showSeriesDetail(serie) {
    seriesDetailDiv.innerHTML = `
    <div class="card">
      <img src="${serie.poster}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.website}" class="btn btn-primary" target="_blank">Go to website</a>
      </div>
    </div>
  `;
}
// Renderizar la tabla de series
renderSeriesInTable(series);
// Mostrar el promedio de temporadas
avgSeasonDiv.innerHTML = `Seasons Average: ${getAverageSeasons(series).toFixed(2)}`;
