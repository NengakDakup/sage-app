export const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
  
    return window.location.replace(`${window.location.origin}/auth/login`);
};
  