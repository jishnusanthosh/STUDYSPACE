# Redux Counter Demo (React + Vite)

## Run the project

1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Open a terminal in that folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal.

## Project structure

```text
src/
├── redux/
│   ├── store.js
│   └── counterSlice.js
├── App.jsx
├── main.jsx
└── style.css
```

- `store.js`: configures the Redux store.
- `counterSlice.js`: defines the counter state and actions.
- `main.jsx`: connects the store to React using `Provider`.
- `App.jsx`: reads the count with `useSelector` and dispatches actions with `useDispatch`.
