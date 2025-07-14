import "./globals.css";


export const metadata = {
  title: "Freelance Flow",
  description: "Simplify your freelancing with FreelanceFlow — manage clients, projects, and invoices all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
