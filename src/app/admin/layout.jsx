import AdminNavbar from "../components/AdminNavbar"

export default function UserLayout({ children }) {
    return (
        <>
            <AdminNavbar />
            <div>
                {children}
            </div>
        </>
    )
}