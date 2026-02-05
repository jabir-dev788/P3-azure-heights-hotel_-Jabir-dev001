# GitHub Setup Guide

Complete step-by-step guide to prepare your Azure Heights Hotel project for GitHub.

---

## 📋 Pre-Upload Checklist

Before pushing to GitHub, verify all files are in place:

### Essential Files ✅
- [ ] `hotel.html` - Main website file
- [ ] `hotel.css` - Stylesheets
- [ ] `hotel.js` - JavaScript logic
- [ ] `README.md` - Project documentation
- [ ] `LICENSE` - MIT License
- [ ] `.gitignore` - Git ignore patterns
- [ ] `.env.example` - Environment template
- [ ] `CONTRIBUTING.md` - Contribution guidelines
- [ ] `CHANGELOG.md` - Version history
- [ ] `package.json` - Project metadata
- [ ] `REPO_DESCRIPTION.md` - Repository description help

### Directory Structure
```
azure-heights-hotel/
├── hotel.html
├── hotel.css
├── hotel.js
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── .gitignore
├── .env.example
├── package.json
└── REPO_DESCRIPTION.md
```

---

## 🚀 Step-by-Step GitHub Setup

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Fill in repository details:
   - **Repository name**: `azure-heights-hotel`
   - **Description**: Copy from [REPO_DESCRIPTION.md](REPO_DESCRIPTION.md)
   - **Public/Private**: Select **Public**
   - **Initialize repository**: **Do NOT** check these (we have files)
3. Click **Create repository**

### Step 2: Initialize Git Locally

Open terminal/PowerShell in your project folder:

```bash
# Navigate to your project
cd "C:\Users\JABIR ZAKARIYYA\OneDrive\###PROJECTs\P2 HOTEL"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Azure Heights Hotel website v2.0.0"
```

### Step 3: Add Remote & Push

```bash
# Add GitHub as remote
git remote add origin https://github.com/jabir-dev788/azure-heights-hotel.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Verify on GitHub

1. Go to your repository URL: `https://github.com/jabir-dev788/azure-heights-hotel`
2. Verify all files are visible
3. Check that README.md displays correctly

---

## 🏷️ GitHub Repository Settings

### Step 5: Add Repository Topics

1. Go to your repository
2. Click **Settings** → **General**
3. Scroll to "About" section
4. Click the **gear icon** next to description
5. Add these topics:
   - `html5`
   - `css3`
   - `javascript`
   - `responsive-design`
   - `web-development`
   - `hotel-website`
   - `template`
   - `dark-mode`
   - `open-source`
   - `learning`

### Step 6: Set Repository Description

1. In "About" section, update description to:
   ```
   Modern, responsive hotel website built with HTML, CSS & JavaScript. 
   Features dark mode, smooth animations, Swiper.js gallery, and modular architecture. 
   Perfect for learning web development or as a template for hospitality businesses.
   ```

2. Add website URL (if you have one)
3. Click **Save**

### Step 7: Enable GitHub Features

Optional features to enable:

1. **Issues** - ✅ Keep enabled (for bug tracking)
2. **Discussions** - ✅ Enable (for community Q&A)
3. **Projects** - ✅ Enable (for roadmap/planning)
4. **Wiki** - ✅ Enable (for documentation)
5. **Sponsors** - Optional
6. **Releases** - ✅ Enable (for version releases)

---

## 📄 Important GitHub Files

### What Each File Does

| File | Purpose | Must Have? |
|------|---------|-----------|
| **README.md** | Project overview & documentation | ✅ Yes |
| **LICENSE** | License terms (MIT in our case) | ✅ Yes |
| **CONTRIBUTING.md** | Contribution guidelines | ✅ Recommended |
| **.gitignore** | What Git should ignore | ✅ Yes |
| **CHANGELOG.md** | Version history | ✅ Recommended |
| **.env.example** | Environment template | ⚠️ If using .env |
| **package.json** | Project metadata | ⚠️ Optional |

---

## 🔄 Common Git Commands

### Daily Workflow

```bash
# Check status
git status

# See changes
git diff

# Stage changes
git add .
git add file.html    # Specific file

# Commit changes
git commit -m "Description: What changed"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# View commit history
git log --oneline
```

---

## 🏆 Best Practices

### Commit Messages
```bash
# Good ✅
git commit -m "feat: Add dark mode support"
git commit -m "fix: Correct mobile menu alignment"
git commit -m "docs: Update README installation steps"

# Bad ❌
git commit -m "fixed stuff"
git commit -m "changes"
git commit -m "asdf"
```

### Keep Repository Clean

```bash
# Before pushing, remove OS files
git rm --cached .DS_Store
git rm --cached Thumbs.db

# Add to .gitignore to prevent future issues
```

### Branch Naming

```bash
feature/add-booking-system
bugfix/form-validation-error
docs/update-readme
refactor/modularize-js
```

---

## 🌐 Making Your Project Discoverable

### GitHub Search Optimization

1. **Write detailed README**
   - Clear description
   - Installation steps
   - Usage examples
   - Screenshots

2. **Use meaningful commits**
   - Good commit messages = searchable history

3. **Add topics/tags**
   - Makes project findable by category

4. **Pin important files**
   - Pin important issues/PRs

5. **Create releases**
   - Tag versions: `v1.0.0`, `v2.0.0`

### Trending on GitHub

To increase visibility:
- [ ] Add detailed README
- [ ] Add screenshots/GIFs
- [ ] Update frequently
- [ ] Respond to issues
- [ ] Welcome contributions
- [ ] Share on social media

---

## 📊 Setting Up CI/CD (Optional)

### GitHub Actions Workflow

Create `.github/workflows/main.yml`:

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run linter
        run: npm run lint
```

---

## 🔐 Security Best Practices

### Protect Your Repository

1. **Never commit secrets**
   - Use `.env.example` (no actual values)
   - Never commit `.env` file

2. **Use branch protection**
   - Require pull request reviews
   - Require status checks

3. **Enable security alerts**
   - Settings → Security & analysis
   - Enable "Dependabot alerts"

4. **Keep dependencies updated**
   - Review security updates regularly

---

## 📱 Deployment Options

### Free Hosting for Your Website

#### GitHub Pages (Recommended)
```bash
# No setup needed! Your website is live at:
https://USERNAME.github.io/azure-heights-hotel
```

**Setup:**
1. Go to Repository → Settings → Pages
2. Select "Deploy from a branch"
3. Choose "main" branch
4. Save

Your site is now live! ✅

#### Alternative Free Hosting
- **Netlify** - Connected to GitHub, auto-deploys
- **Vercel** - For Next.js (future upgrade)
- **Render** - Simple static site hosting

---

## 📞 Getting Support

### If You Get Stuck

1. **GitHub Docs**: https://docs.github.com
2. **Git Tutorial**: https://learngitbranching.js.org
3. **Stack Overflow**: Tag `github` and `git`
4. **GitHub Community**: https://github.community

---

## ✅ Final Checklist

Before considering your GitHub setup complete:

- [ ] Repository created on GitHub
- [ ] All files pushed successfully
- [ ] README displays correctly
- [ ] Topics/tags added
- [ ] Description set
- [ ] LICENSE visible
- [ ] CONTRIBUTING.md visible
- [ ] .gitignore working (no secrets exposed)
- [ ] GitHub Pages enabled (if desired)
- [ ] Issues enabled
- [ ] Discussions enabled (optional)

---

## 🎉 You're Done!

Your project is now ready for:
- 👥 **Contributions** from other developers
- 📚 **Learning** for students
- 🔗 **Portfolio** showcase
- 🌟 **Community** engagement

### Next Steps

1. **Share your project**
   - LinkedIn, Twitter, GitHub Discussions
   - Dev.to, Hashnode
   - Your portfolio website

2. **Encourage contributions**
   - Respond to issues promptly
   - Review PRs thoughtfully
   - Thank contributors publicly

3. **Keep it updated**
   - Regular commits
   - Update documentation
   - Respond to feedback

---

## 📚 Resources

- [GitHub Guides](https://guides.github.com/)
- [GitHub Docs](https://docs.github.com/)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Skills](https://skills.github.com/)

---

**Happy GitHub-ing! 🚀**

Questions? Check [CONTRIBUTING.md](CONTRIBUTING.md) or open an issue!
