const pagesKey = "pages";

let pagesJson = localStorage.getItem(pagesKey);

let pagesStore = JSON.parse(pagesJson);

function save() {
  localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

export default {
  getAllPages() {
    return pagesStore;
  },
  getSinglePage(index) {
    return pagesStore[index];
  },
  editPage(index, pageObj) {
    pagesStore[index] = pageObj;
    save();
  },
  addPage(newPage) {
    pagesStore.push(newPage);
    save();
  },
  deletePage(index) {
    pagesStore.splice(index, 1);
    save();
  },
};
