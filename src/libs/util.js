const util = {
    title(title) {
        title = title ? title + ' - Home' : 'iView project';
        window.document.title = title;
    }
};
// util.title = function (title) {
//     title = title ? title + ' - Home' : 'iView project';
//     window.document.title = title;
// };

export default util;