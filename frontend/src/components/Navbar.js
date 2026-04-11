{/* Navbar */}
<div className="bg-white border-b px-8 py-4 flex justify-between items-center">

  <h2 className="text-xl font-semibold text-gray-700">
    Placement AI 🧠
  </h2>

  <div className="relative flex items-center gap-3">

    <span className="text-gray-600">
      Welcome {user?.name || "User"}
    </span>

    <div
      onClick={() => setOpen(!open)}
      className="w-9 h-9 rounded-full bg-indigo-500 cursor-pointer"
    ></div>

    {open && (
      <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-40 py-2 border">

        <button
          onClick={logout}
          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
        >
          Logout
        </button>

      </div>
    )}

  </div>

</div>