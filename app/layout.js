import Navbar from "@/components/Navbar";
import './globals.css';

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className="bg-[#040508] text-[#dadada]">
        <Navbar/>
        {children}
        
      </body>
    </html>


  );
}
