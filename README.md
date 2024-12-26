# Meta UI

Meta UI is a powerful platform designed to help users create, a fully functional lending page effortlessly. By combining AI technology with customizable prebuilt templates, users can simply input their company information to generate websites tailored to their needs.

## Features

- **AI-Powered Website Creation**: Provide your company information, and MetaUi will handle the rest by leveraging AI-powered tools and prebuilt templates to bring your ideas to life effortlessly
- **Customizable Templates**: Choose from a variety of templates to match your brand's look and feel.
- **Built with Cutting-Edge Technology**: Powered by Next.js, Prisma, Tailwind CSS, tRPC, Clerk, and TypeScript.
- **Streamlined Authentication**: Seamless user sign-up and sign-in experiences with Clerk.

---

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Prisma](https://www.prisma.io/) with PostgreSQL
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API Layer**: [tRPC](https://trpc.io/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Programming Language**: TypeScript
- **Package Manager**: Yarn

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/meta-ui.git
   cd meta-ui
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up the environment variables by creating a `.env` file at the root of your project:

   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/website"
   OPENAI_API_KEY="your_openai_api_key"

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_PINATA_API_KEY="your_pinata_api_key"
   NEXT_PUBLIC_PINATA_API_SECRET="your_pinata_api_secret"
   ```

4. Apply database migrations:

   ```bash
   yarn prisma migrate dev
   ```

5. Start the development server:
   ```bash
   yarn dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

- **`/pages`**: Contains all the Next.js pages.
- **`/components`**: Reusable UI components.
- **`/styles`**: Global and component-specific styles.
- **`/server`**: API routes and server-side logic powered by tRPC.
- **`/prisma`**: Database schema and migration files.

---

## Environment Variables

Ensure the following environment variables are configured correctly:

| Variable                            | Description                            |
| ----------------------------------- | -------------------------------------- |
| `DATABASE_URL`                      | PostgreSQL connection string           |
| `OPENAI_API_KEY`                    | API key for OpenAI                     |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key for authentication    |
| `CLERK_SECRET_KEY`                  | Clerk secret key for server-side logic |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`     | URL for the sign-in page               |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`     | URL for the sign-up page               |
| `NEXT_PUBLIC_PINATA_API_KEY`        | Pinata API key                         |
| `NEXT_PUBLIC_PINATA_API_SECRET`     | Pinata API secret                      |

---

## Scripts

| Script                    | Description                           |
| ------------------------- | ------------------------------------- |
| `yarn dev`                | Starts the development server         |
| `yarn build`              | Builds the application for production |
| `yarn start`              | Starts the production server          |
| `yarn lint`               | Lints the codebase                    |
| `yarn prisma migrate dev` | Applies database migrations           |

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Contact

For questions or feedback, feel free to reach out to:

- **Project Owner**: Joshua

---

### Happy Building with Meta UI!
