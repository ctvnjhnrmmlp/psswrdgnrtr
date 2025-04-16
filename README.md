# psswrdgnrtr

_Effortless Password Generation for Secure Digital Living_

> A sleek and customizable password generation app — Built with modern tech to prioritize security, usability, and performance.

## Overview

**psswrdgnrtr** is a modern password-generating application built for individuals and developers who prioritize digital security. It enables users to generate secure, unique, and customizable passwords with options for length, casing, numbers, special characters, and even pronounceability — striking a perfect balance between strength and memorability.

Whether you're managing personal logins or developing secure user flows, this tool empowers you with an intuitive interface and real-time strength feedback, helping users make better decisions about password hygiene.

## Why This Project?

Most password generators either compromise on usability or are limited in customization. This project was inspired by the need for:

- Strong, unique passwords tailored to user needs
- A beautiful, responsive interface that’s easy to use
- Real-time feedback on password strength
- A seamless experience for generating and copying passwords on any device

**Design Philosophy:**

- Security without complexity
- Transparency through strength indicators
- Customizability without overwhelming the user

## Features

- Customizable password generation (length, casing, numbers, symbols)
- One-click clipboard copy
- Password strength meter
- Option to generate pronounceable passwords
- Local password storage
- Built with a sleek, modern UI (Next UI)
- Real-time state management with Zustand & React Query

## Roadmap

- [x] MVP: Core password generation logic
- [x] Copy to clipboard functionality
- [x] Password strength indicator
- [ ] Add dark/light theme toggle
- [ ] Integration with browser password managers
- [ ] Encrypted cloud backup & sync
- [ ] Mobile responsiveness & PWA support

## Tech Stack

**Web:**
Next.js · React · TypeScript · Tailwind CSS · Zustand · React Query · Next UI

**DevOps:**
Vercel (for deployment)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Git

### Installation

```bash
git clone https://github.com/yourusername/psswrdgnrtr.git
cd psswrdgnrtr
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file in the root directory and include any environment-specific settings:

```env
NEXT_PUBLIC_API_URL=https://...
```

(For now, the app may not require sensitive API keys.)

## Usage

```bash
# Start development server
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) to view the app.
- Customize your password preferences and generate a strong password.
- Click to copy and save as needed.

## Architecture

> Frontend Only (Client-side App)

```
[React + Next.js (Frontend)]
     |
 [Zustand + React Query (State/Data)]
     |
 [Next UI + Tailwind (Styling/UI)]
```

## Deployment

- **Cloud:** Deployed on [Vercel](https://vercel.com)
- **Domain:** [psswrdgnrtr.app](https://psswrdgnrtr.app) _(optional)_

## Contributing

We welcome contributions from the community!

1. Fork this repo
2. Create your branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

- Built by John Rommel Octaviano
- Inspired by tools like 1Password, Bitwarden, and Dashlane
- Powered by modern web technologies
