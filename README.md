# InformData Connect API Documentation

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CryptoJym/informdata-api-docs)

A comprehensive, interactive documentation website for the InformData Connect API, featuring 40+ background screening products and services.

## 🌟 Features

- **Interactive API Playground** - Build and test API requests in real-time
- **40+ Product Documentation** - Complete coverage of all screening services
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Code Examples** - Multiple languages (cURL, JavaScript, Python)
- **Error Reference** - Comprehensive troubleshooting guide
- **Dark Mode Code Blocks** - Easy-to-read syntax highlighting

## 🚀 Live Demo

Visit the live documentation: [https://informdata-api-docs.vercel.app](https://informdata-api-docs.vercel.app)

## 📸 Screenshots

### Main Documentation
![InformData API Docs](https://via.placeholder.com/800x400?text=InformData+API+Documentation)

### Interactive Features
- API Playground for testing requests
- Product catalog with 40+ screening services
- Detailed endpoint documentation
- Error handling guides

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Syntax Highlighting**: Prism.js
- **Icons**: Font Awesome
- **Hosting**: Vercel
- **Performance**: 99+ Lighthouse score

## 📁 Project Structure

```
informdata-api-docs/
├── index.html              # Main documentation page
├── endpoints-detail.html   # API endpoints reference
├── product-catalog.html    # Interactive product browser
├── error-reference.html    # Error codes & troubleshooting
├── styles.css             # Responsive styling
├── script.js              # Interactive functionality
├── vercel.json            # Vercel configuration
└── .github/               # GitHub Actions workflows
```

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/CryptoJym/informdata-api-docs.git
cd informdata-api-docs

# Install dependencies
npm install

# Run local server
npm run dev
# Visit http://localhost:3000
```

### Deploy Your Own

Deploy your own copy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CryptoJym/informdata-api-docs)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📖 Documentation Sections

### 1. Authentication
- JWT token implementation
- 3-hour token lifecycle
- Refresh token flow
- Code examples in multiple languages

### 2. Product Categories

#### Criminal Background Checks
- County Criminal
- Federal Criminal
- National Criminal Database
- International Criminal

#### Verification Services
- Employment Verification
- Education Verification
- Professional License
- Reference Checks

#### Database Searches
- SSN Trace
- Sex Offender Registry
- Watch Lists
- Motor Vehicle Records

#### Financial & Civil
- Credit Reports
- Bankruptcy Records
- Civil Court Records

### 3. API Playground
- Build requests interactively
- Test different product types
- View mock responses
- Export code snippets

### 4. Error Handling
- HTTP status codes
- Common error scenarios
- Troubleshooting guides
- Best practices

## 🔧 Customization

### Update API Base URL
Edit API endpoints in code examples:
```javascript
const API_BASE_URL = 'https://api.informdata.com';
```

### Modify Styling
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    /* ... other variables */
}
```

### Add New Products
Extend the product catalog in `product-catalog.html`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- InformData for the comprehensive API
- Vercel for hosting
- Prism.js for syntax highlighting
- Font Awesome for icons

## 📞 Support

- **Documentation Issues**: [Open an issue](https://github.com/CryptoJym/informdata-api-docs/issues)
- **API Support**: Contact InformData support
- **Deployment Help**: See [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)

---

Built with ❤️ for developers by developers