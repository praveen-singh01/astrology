# Kashi Vedic Astrology Website

A modern, culturally resonant website for Vedic astrology and Hindu spiritual services, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌟 Modern, responsive design with spiritual aesthetics
- 📱 Mobile-first approach for accessibility
- 🔮 Comprehensive astrology services
- 🎨 Rich cultural elements and symbolism
- 🔐 Secure authentication and user profiles
- 📅 Spiritual calendar and event management
- 💬 Real-time consultation booking
- 📱 WhatsApp integration for daily updates

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Authentication:** NextAuth.js
- **Icons:** Heroicons + React Icons
- **Date Handling:** date-fns
- **API Client:** Axios

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kashi-vedic-astrology.git
   cd kashi-vedic-astrology
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   # Add other environment variables as needed
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── (auth)/         # Authentication routes
│   ├── (dashboard)/    # Dashboard routes
│   ├── api/            # API routes
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
│   ├── common/        # Common UI components
│   ├── layout/        # Layout components
│   └── features/      # Feature-specific components
├── lib/               # Utility functions and configurations
├── styles/            # Global styles and Tailwind config
└── types/             # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hindu spiritual symbols and imagery
- Vedic astrology principles and calculations
- Temple architecture and design elements
- Sanskrit typography and calligraphy # astrology
