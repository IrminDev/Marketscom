export default function Layout({ children }) {
    return (
      <div className="flex justify-between items-center w-[100%] h-[100vh]">
        <div className=" bg-escom3 bg-no-repeat bg-center w-[50%] h-[100%]">
        </div>
        <div className=" flex items-center justify-center w-[50%] flex-col">
            {children}
        </div>
      </div>
    )
}