const rowsField = document.querySelector(`#rows`);
const cellsField = document.querySelector(`#cells`);
const btn = document.querySelector(`#btn-table-create`);
const container = document.querySelector(`#container`);

btn.addEventListener(`click`, () => {
    let tableString = `<table>`;

    for (let i = 0, l = rowsField.value; i < l; i++) {
        tableString += `<tr>`;
        for (let j = 0, l = cellsField.value; j < l; j++) {
            tableString += `<td></td>`;
        }
        tableString += `</tr>`;
    }

    container.innerHTML = tableString += `</table>`;
});