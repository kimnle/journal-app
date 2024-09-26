# React + Vite

## Journal App

### Routes

* `localhost:3000/`
    * root or home page
    * Welcome screen
    * Journal entry form / "comment box"
    * List of entries
        * latest 5 entries?
* `localhost:3000/entries/:entryID/`
    * View and edit individual journal entries by their entryID
    * "edit in place" for journal entry data
        * togggle between read-only and an editable form
* `localhost:3000/search/:searchKey/:searchValue/`
    * Show a list of journal entries where each entry matches the searchParam
* `localhost:3000/latest/`
    * List the entries
        * latest INFINITY entries

localhost:3000/search/:searchKey/:searchValue
localhost:3000/search/type/review

```js
{
    id: "123456789",
    type: "review",
    name: "Exmaple post name",
    content: "Some cool content goes here",
    author: "Kim",
    lastEdited: 12345678901234567890 // milliseconds since JS dates are stored as that internally
}
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
