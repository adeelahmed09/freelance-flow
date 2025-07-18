import { ToastContainer } from "react-toastify";
import SideMenu from "./components/SideMenu";
import "./globals.css";


export const metadata = {
  title: "Freelance Flow",
  description: "Simplify your freelancing with FreelanceFlow — manage clients, projects, and invoices all in one place.",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` h-screen`}
      >
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
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
