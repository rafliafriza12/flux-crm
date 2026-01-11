# Gutech Frontend Boilerplate

A modern, modular Next.js boilerplate with Atomic Design, TanStack Query, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 16** - The latest version with App Router
- **React 19** - Latest React features
- **TypeScript** - Full type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Atomic Design** - Scalable component architecture
- **TanStack Query** - Powerful data fetching and caching
- **Remixicon** - Beautiful icon library
- **Dark Mode** - Built-in theme support
- **Modular Architecture** - Clean separation of concerns

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── login/              # Login page
│   └── dashboard/          # Dashboard page
├── components/             # UI Components (Atomic Design)
│   ├── atoms/              # Basic building blocks
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Avatar/
│   │   ├── Icon/
│   │   ├── Spinner/
│   │   └── Text/
│   ├── molecules/          # Combinations of atoms
│   │   ├── SearchInput/
│   │   ├── PasswordInput/
│   │   ├── Card/
│   │   ├── Modal/
│   │   ├── Alert/
│   │   └── UserCard/
│   ├── organisms/          # Complex UI sections
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Sidebar/
│   │   └── LoginForm/
│   └── templates/          # Page layouts
│       ├── MainLayout/
│       ├── DashboardLayout/
│       └── AuthLayout/
├── hooks/                  # Custom React hooks
│   ├── use-toggle.ts
│   ├── use-local-storage.ts
│   ├── use-debounce.ts
│   ├── use-media-query.ts
│   ├── use-click-outside.ts
│   └── use-users.ts
├── providers/              # React Context providers
│   ├── query-provider.tsx
│   ├── theme-provider.tsx
│   ├── auth-provider.tsx
│   └── app-providers.tsx
├── services/               # API services
│   ├── http-client.ts
│   ├── auth.service.ts
│   └── user.service.ts
├── config/                 # Configuration files
│   ├── api.config.ts
│   └── app.config.ts
├── types/                  # TypeScript type definitions
│   ├── common.types.ts
│   ├── user.types.ts
│   └── component.types.ts
├── lib/                    # Utility functions
│   └── utils.ts
└── styles/                 # Global styles
    └── globals.css
```

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/boilerplate-frontend-gutech.git

# Navigate to project directory
cd boilerplate-frontend-gutech

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📝 Usage

### Components

Import components from the centralized index:

```tsx
import { Button, Input, Badge } from "@/components/atoms";
import { Card, Modal, Alert } from "@/components/molecules";
import { Header, Footer, Sidebar } from "@/components/organisms";
import { MainLayout, DashboardLayout } from "@/components/templates";
```

### Hooks

```tsx
import { useToggle, useDebounce, useLocalStorage } from "@/hooks";

function MyComponent() {
  const { value, toggle, on, off } = useToggle(false);
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [token, setToken] = useLocalStorage("auth_token", "");
}
```

### Services

```tsx
import { authService, userService } from "@/services";

// Login
await authService.login({ email, password });

// Get users
const users = await userService.getUsers({ page: 1, limit: 10 });
```

### TanStack Query Hooks

```tsx
import { useUsers, useUser, useCreateUser } from "@/hooks";

function UsersPage() {
  const { data, isLoading, error } = useUsers({ page: 1, limit: 10 });
  const createUser = useCreateUser();

  const handleCreate = async () => {
    await createUser.mutateAsync({ name: "John", email: "john@example.com" });
  };
}
```

### Theme

```tsx
import { useTheme } from "@/providers";

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      Toggle Theme
    </button>
  );
}
```

### Authentication

```tsx
import { useAuth } from "@/providers";

function ProfilePage() {
  const { user, isAuthenticated, login, logout } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <div>Welcome, {user.name}!</div>;
}
```

## 🎨 Design System

### Button Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
```

### Button Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### Icons (Remixicon)

```tsx
import { Icon } from "@/components/atoms";

<Icon name="home-line" />
<Icon name="user-fill" size="lg" />
<Icon name="settings-3-line" className="text-blue-500" />
```

Or use directly with class:

```tsx
<i className="ri-home-line" />
<i className="ri-user-fill text-lg" />
```

## 📚 API Configuration

Update API settings in `src/config/api.config.ts`:

```ts
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  TIMEOUT: 30000,
};
```

## 🌐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## 🧪 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 License

MIT License - feel free to use this boilerplate for your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
