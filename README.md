# MJ HandiCraft Website

MJ HandiCraft is an e-commerce website for handcrafted jewellery and decor.

## Adding Product Images

To display your product images on the website:

1. **Create folders** in the `assets` directory:
   - `assets/pendant/` - for pendant images
   - `assets/earring/` - for ear ring images
   - `assets/decor/` - for home decor images (optional)

2. **Add your images** to these folders (JPG, PNG, or WebP format)

3. **Update `src/script.js`** - Open the file and update the `productCategories` array:
   - Change the `file` property to match your actual image file names
   - Example: If your image is `assets/pendant/gold-pendant.jpg`, set `file: "gold-pendant.jpg"`

4. **Check browser console** - Open browser DevTools (F12) and uncomment the `logExpectedImages()` line in `script.js` to see what paths are expected

## Folder Structure

```
MJHandiCraft_website/
├── assets/
│   ├── pendant/
│   │   ├── pendant-1.jpg
│   │   └── pendant-2.jpg
│   ├── earring/
│   │   ├── earring-1.jpg
│   │   └── earring-2.jpg
│   └── logo.png
├── src/
│   ├── styles.css
│   └── script.js
└── index.html
```
