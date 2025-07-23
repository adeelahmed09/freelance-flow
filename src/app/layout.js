import { ToastContainer } from "react-toastify";
import SideMenu from "./components/SideMenu";
import "./globals.css";
import MobileNav from "./components/MobileNav";
import AuthProvider from "./provider/AuthProvider";


export const metadata = {
  title: "Freelance Flow",
  description: "Simplify your freelancing with FreelanceFlow — manage clients, projects, and invoices all in one place.",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` h-screen  overflow-x-hidden`}
      >
        <AuthProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <MobileNav />
          <SideMenu />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
