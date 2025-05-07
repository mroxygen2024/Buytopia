import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearAuthData } from "../utils/auth";

export default function LogoutButton({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // await fetch("https://ecommerce-backend-tqgh.onrender.com/api/v1/auth/logout", {
      //   method: "POST",
      //   credentials: "include",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
      // });

      clearAuthData();
      if (onLogout) onLogout();
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-2 hover:bg-[#31af51] hover:text-white text-red-600 rounded transition-colors duration-200"
    >
      Logout
    </button>
  );
}
