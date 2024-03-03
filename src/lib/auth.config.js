export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnDetailsPage = request.nextUrl.pathname === "/details";
      const isOnLinksPage = request.nextUrl.pathname === "/links";
      const isOnAddLinkspage = request.nextUrl.pathname === "/addlinks";
      const isOnLoginPage = request.nextUrl.pathname === "/login";
      const isOnRegisterPage = request.nextUrl.pathname === "/register";

      if (!user && (isOnDetailsPage || isOnLinksPage || isOnAddLinkspage)) {
        return false;
      }

      if (user && (isOnLoginPage || isOnRegisterPage)) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
