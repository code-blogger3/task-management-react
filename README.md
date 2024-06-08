1. tailwind setup

2. setting up darkmode:

### State Management
```javascript
const [theme, setTheme] = useState(localStorage.theme);
```
- **theme**: A state variable that holds the current theme, initialized with the value from `localStorage.theme`.

### Color Theme Calculation
```javascript
const colorTheme = theme === "dark" ? "light" : "dark";
```
- **colorTheme**: A derived value that represents the opposite of the current theme. If the current theme is "dark", `colorTheme` will be "light", and vice versa.

### useEffect Hook
```javascript
useEffect(() => {
  const root = window.document.documentElement;
  root.classList.remove(colorTheme);
  root.classList.add(theme);
  localStorage.setItem('theme', theme);
}, [theme, colorTheme]);
```
- This effect runs whenever `theme` or `colorTheme` changes.
- **root**: Represents the root HTML element (`<html>`).
- **root.classList.remove(colorTheme)**: Removes the class corresponding to the opposite theme from the root element.
- **root.classList.add(theme)**: Adds the class corresponding to the current theme to the root element.
- **localStorage.setItem('theme', theme)**: Saves the current theme in `localStorage` so it persists across page reloads.

### Return Statement
```javascript
return [colorTheme, setTheme];
```
- Returns an array containing `colorTheme` (the opposite theme) and `setTheme` (the function to update the theme). This allows components using this hook to toggle the theme.

### Export Statement
```javascript
export default useDarkMode;
```
- Exports the `useDarkMode` hook so it can be imported and used in other parts of the application.

### Summary
The `useDarkMode` hook:
1. Initializes the theme state from `localStorage`.
2. Determines the opposite theme.
3. Updates the root HTML element's class based on the current theme.
4. Persists the current theme in `localStorage`.
5. Returns the opposite theme and the function to update the theme, enabling components to toggle between dark and light modes.