

function Navbar(props) {
    const handleLogout = () => {
      props.logOut();
    }

    return (
      <header>
      <div className="w-full">
      <nav className="z-50 bg-gray-900 w-full">
      <div className="h-10vh flex justify-between gap-10 lg:py-5 px-20  py-20 border-b">
        <div className="size-16">
          <img src="logo.png"></img>
        </div>
        <div className="flex items-center flex-1">
          <h2 className="text-3xl font-bold text-sky-600"> MediDoc </h2>
        </div>
        <div>
          <ul className="flex gap-8 text-white mr-16 text-[18px]">
            <button>Home</button>
            <button>Patients</button>
            <button>Appointments</button>
            <button onClick={handleLogout} className="text-sky-400/100">SignOut</button>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </header>
    )
}

export default Navbar;
