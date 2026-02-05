# Contributing to Azure Heights Hotel

First off, thank you for considering contributing to the Azure Heights Hotel project! 🎉

This document provides guidelines and instructions for contributing to this project. Whether you're fixing bugs, adding features, improving documentation, or simply using the project for learning, your contributions are valued!

---

## 📋 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How to Contribute](#how-to-contribute)
4. [Reporting Bugs](#reporting-bugs)
5. [Suggesting Features](#suggesting-features)
6. [Pull Requests](#pull-requests)
7. [Style Guide](#style-guide)
8. [Commit Messages](#commit-messages)
9. [Community](#community)

---

## 🤝 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and follow our Code of Conduct:

- **Be respectful** - Respect different opinions and experiences
- **Be inclusive** - Welcome people of all backgrounds
- **Be collaborative** - Work together constructively
- **Be professional** - Use clear and kind language
- **Be safe** - Report any harassment or inappropriate behavior

Any violations of the Code of Conduct should be reported to the project maintainers.

---

## 🚀 Getting Started

### Prerequisites
- Git installed on your machine
- A GitHub account
- A code editor (VS Code, Sublime, etc.)
- Basic knowledge of HTML, CSS, and/or JavaScript

### Fork & Clone

1. **Fork the repository** - Click the "Fork" button on GitHub
   ```bash
   # This creates a copy under your account
   ```

2. **Clone your fork** - Download to your computer
   ```bash
   git clone https://github.com/YOUR_USERNAME/azure-heights-hotel.git
   cd azure-heights-hotel
   ```

3. **Add upstream remote** - Keep your fork synced
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/azure-heights-hotel.git
   ```

4. **Create a branch** - For your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## 💡 How to Contribute

### Types of Contributions

#### 🐛 Bug Fixes
- Fix typos or broken functionality
- Improve error handling
- Enhance accessibility

#### ✨ Features
- Add new sections or components
- Improve animations or interactions
- Add new amenities or services

#### 📚 Documentation
- Improve README or guides
- Add code comments
- Create tutorials or examples

#### 🎨 Design
- Improve visual design
- Enhance user experience
- Add new color schemes

#### 🧪 Testing
- Test on different browsers
- Test on different devices
- Report compatibility issues

### Steps to Contribute

1. **Pick an issue** or create a new one
   - Check existing [issues](https://github.com/jabir-dev788/azure-heights-hotel/issues)
   - Look for `good-first-issue` or `help-wanted` labels

2. **Create a feature branch**
   ```bash
   git checkout -b feature/issue-description
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow the style guide (see below)
   - Test your changes thoroughly

4. **Commit with clear messages**
   ```bash
   git commit -m "Add feature: Brief description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/issue-description
   ```

6. **Create a Pull Request (PR)**
   - Go to GitHub and click "New Pull Request"
   - Provide a clear title and description
   - Reference related issues: `Fixes #123`

---

## 🐛 Reporting Bugs

### Before Submitting

- Check existing [issues](https://github.com/yourname/azure-heights-hotel/issues)
- Try different browsers and devices
- Clear your cache and reload

### Bug Report Template

When reporting a bug, please include:

```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Observe error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- Browser: [e.g. Chrome 120]
- OS: [e.g. Windows 11]
- Device: [e.g. Desktop/Mobile]

**Screenshots**
If applicable, add screenshots

**Additional Notes**
Any other information
```

### Example Bug Report

```markdown
**Title**: Contact form not submitting on mobile

**Description**
When I try to submit the contact form on my iPhone, nothing happens.

**Steps to Reproduce**
1. Open the website on iPhone 14
2. Scroll to Contact section
3. Fill in all fields
4. Click "Send Message"

**Expected Behavior**
Form should submit and show success message

**Actual Behavior**
Button doesn't respond, form doesn't submit

**Environment**
- Browser: Safari on iOS 16
- Device: iPhone 14

**Screenshots**
[image attached]
```

---

## ✨ Suggesting Features

### Feature Request Template

```markdown
**Title**: Brief description of feature

**Description**
Clear explanation of what feature you want

**Use Case**
Why would this be useful?

**Suggested Implementation**
How could this be done?

**Examples**
Examples of similar features elsewhere
```

### Example Feature Request

```markdown
**Title**: Add image lightbox gallery

**Description**
I'd like to add a lightbox/modal when clicking gallery images to view them in full screen.

**Use Case**
Users can get a better view of hotel photos without leaving the page

**Suggested Implementation**
Use Lightbox.js library or implement custom modal with vanilla JS

**Examples**
Similar to how AirBnB displays photos
```

---

## 📤 Pull Requests

### PR Guidelines

- **One feature per PR** - Keep changes focused
- **Update documentation** - Update README if needed
- **Add comments** - Explain complex code
- **Test thoroughly** - Test on multiple devices
- **Reference issues** - Link to related issues

### PR Checklist

Before submitting, ensure:
- [ ] Code follows style guide
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] No unnecessary files included
- [ ] Commit messages are clear
- [ ] PR has descriptive title and description

### PR Template

```markdown
**Description**
Brief explanation of changes

**Type of Change**
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style improvement

**Related Issues**
Fixes #123

**Testing**
How to test these changes

**Screenshots**
Before/after screenshots if applicable

**Checklist**
- [ ] Code reviewed by myself
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes
```

---

## 📝 Style Guide

### HTML

```html
<!-- Use semantic HTML -->
<section class="rooms">
    <h2>Our Rooms</h2>
    <article class="room-card">
        <img src="..." alt="descriptive alt text">
        <h3>Room Title</h3>
    </article>
</section>

<!-- Guidelines -->
<!-- - Use meaningful alt text for images -->
<!-- - Use semantic tags (section, article, nav, etc.) -->
<!-- - Indent consistently (2 spaces) -->
<!-- - Use lowercase for HTML tags -->
<!-- - Quote all attributes -->
```

### CSS

```css
/* Use logical organization and comments */
/* ======================================== */
/* Section Name */
/* ======================================== */

/* Use CSS variables for colors */
.component {
    background-color: var(--primary-color);
    color: var(--dark-color);
    transition: var(--transition);
    
    /* Group related properties */
}

/* Guidelines */
/* - Use CSS variables for colors */
/* - Use meaningful class names */
/* - Group related properties */
/* - Include comments for sections */
/* - Use consistent naming conventions */
```

### JavaScript

```javascript
// Use clear, descriptive names
const initializeFeature = () => {
    // Comment complex logic
    const config = {
        delay: 1000,
        repeat: true
    };
    
    return config;
};

// Guidelines
// - Use meaningful variable names
// - Add comments for complex logic
// - Use const for constants
// - Follow modular structure
// - Add error handling
```

---

## 📮 Commit Messages

### Commit Message Format

```
[type]: Brief description (50 characters max)

Detailed explanation (if needed)
- Bullet point 1
- Bullet point 2

Fixes #123
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (no logic change)
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Test addition/modification
- `chore`: Build/dependency updates

### Examples

```
feat: Add dark mode support

- Add CSS media query for prefers-color-scheme
- Update colors for dark theme
- Test on multiple devices

Fixes #42

---

fix: Correct form validation on mobile

Fixes #89

---

docs: Update installation instructions

Add more detailed setup steps for beginners
```

---

## 🔍 Reviewing Process

1. **Automated Checks** - Code style, formatting
2. **Maintainer Review** - Code quality, compatibility
3. **Community Feedback** - Suggestions and improvements
4. **Revisions** - Update based on feedback
5. **Merge** - Finally merged when approved!

---

## 🌟 Recognition

Contributors will be:
- Listed in the README
- Credited in CHANGELOG
- Mentioned in releases
- Appreciated in the community!

---

## 📚 Resources

### Learning Resources
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub Guides](https://guides.github.com/)
- [First Timers Only](https://www.firsttimersonly.com/)

### Git & GitHub
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript Info](https://javascript.info/)

---

## ❓ Questions?

- Check [Discussions](https://github.com/jabir-dev788/azure-heights-hotel/discussions)
- Open an [Issue](https://github.com/jabir-dev788/azure-heights-hotel/issues)
- Read the [README](README.md)

---

## 🎉 Thank You!

Whether it's a small typo fix or a major feature, every contribution makes this project better. Thank you for being part of our community!

**Happy contributing! 🚀**

---

**Last Updated**: February 2026
