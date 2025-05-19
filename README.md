# Wiki Forum React App

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd wiki-forum-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Example: Using a Custom Hero Image

To use your own image in the Hero section, place your image in the `src/assets/` folder. For example, you can use the provided sample image:

```
src/assets/HeroImagesample.PNG
```

To use it in your code:

```tsx
import HeroImagesample from './assets/HeroImagesample.PNG';

<Hero imageUrl={HeroImagesample} />
```

## Project Structure

- `src/components/` – React components
- `src/assets/` – Images and icons
- `src/` – Main source code

---

Feel free to customize and extend the app as you like!
