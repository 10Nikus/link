export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.name = user.firstName + user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.name = token.firstName + token.lastName;
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

      if (request.nextUrl.pathname === "/") {
        return Response.redirect(new URL("/links", request.nextUrl));
      }

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
