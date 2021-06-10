// получить данные для зщаполнения
// вызвать методы рендера и передать туда эти данные
// import { getNumber } from "./garage.servise";
// import { garageSetting } from "./garage.model";
// export function garage() {
//   const array = getNumber();
//   garageSetting.page = garageSetting.page + 1;
//   garageSetting.allPage = array.length;
//   garageRender();
// }

// export function garageRender(setting) {
//     document.querySelector('wrapper')?.innerHTML = `
//     <div>${setting.name}</div>
//     <div>${setting.page}</div>
//     <div>${setting.allPage}</div>
//     <input type='checkbox' ${garageSetting.check ? "checked" : ""}>
//     `;

//   document
//     .querySelector("input")
//     ?.addEventListener(
//       "click",
//       () => (garageSetting.check = !garageSetting.check)
//     );
// }
