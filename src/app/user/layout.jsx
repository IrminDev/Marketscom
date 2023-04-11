import Navbar from "../components/Navbar"

export default function UserLayout({ children }) {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
        </>
    )
}