export const config = {
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'your-development-secret-key',
    nextAuthUrl: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  },
  api: {
    key: process.env.API_KEY,
  },
}

