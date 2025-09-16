# Foster Greatness Testimonials Widget

A beautiful, responsive testimonials widget featuring scrolling marquee animations built with Next.js, React, and MagicUI.

## ✨ Features

- 🎡 **Dual Marquee Animation** - Two rows of testimonials scrolling in opposite directions
- 📱 **Fully Responsive** - Works perfectly on all device sizes
- ⚡ **Next.js Optimized** - Fast loading and SEO-friendly
- 🎨 **Beautiful Design** - Clean cards with avatars and smooth animations
- ⏸️ **Interactive** - Hover to pause animations
- 🌐 **Easy Integration** - Ready for Squarespace, WordPress, or any platform

## 🎯 Live Demo

View the live widget: [Foster Greatness Testimonials](https://foster-greatness-testimonials.vercel.app)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sunjanay/foster-greatness-testimonials.git
   cd foster-greatness-testimonials
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📦 Deployment

### Vercel (Recommended)
1. Fork this repository
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- For static hosting: `npm run build` creates an exportable site
- For Squarespace: Use the provided embed code in `squarespace-embed-code.html`

## 🎨 Customization

### Adding New Testimonials
Edit the `reviews` array in `src/app/page.tsx`:

```javascript
const reviews = [
  {
    name: "John Doe",
    username: "@john",
    body: "Your testimonial text here.",
    img: "https://avatar.vercel.sh/john",
  },
  // Add more testimonials...
];
```

### Styling
- Modify colors and styles in the component files
- Adjust animation speed by changing `[--duration:20s]` values
- Customize card layouts in the `ReviewCard` component

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animation**: MagicUI Marquee
- **Language**: TypeScript
- **Deployment**: Vercel

## 📄 Files Included

- `src/app/page.tsx` - Main testimonials widget
- `foster-greatness-testimonials.html` - Standalone HTML version
- `squarespace-embed-code.html` - Squarespace-ready embed code
- `src/registry/magicui/marquee.tsx` - Marquee component

## 💡 Integration

### Squarespace
Use the code from `squarespace-embed-code.html` in a Code Block.

### WordPress
Embed the standalone HTML file or use the Vercel deployment URL.

### Other Platforms
Use the provided HTML files or iframe the Vercel deployment.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

💫 **Built with [Claude Code](https://claude.ai/code)**

Co-Authored-By: Claude <noreply@anthropic.com>