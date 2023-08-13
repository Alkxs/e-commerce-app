import { NextAuthOptions } from "next-auth";
import { prismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db/prisma;
import { Adapter } from "next-auth/adapter";
import { GoogleProvider } from "next-auth/providers/google"

export const authOptions = (): NextAuthOptions => {
  adapter: PrismaAdapter(prisma) as Adapter, 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}