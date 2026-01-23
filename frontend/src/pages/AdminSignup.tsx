import { useState } from "react";
import "./CSS/admin-signup.css";
import { apiRequest } from "../services/api";

export default function AdminSignup() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    selectedPlan: "FREE"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiRequest("/auth/signup", "POST", form);
      console.log("Signup successful:", res);
      alert("Signup successful!");
    } catch (err: any) {
      alert(err.message || "Signup failed");
    }
  };

  return (
    <div className="admin-signup-page">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Create Admin Account 🌿</h1>
          <p>Manage menus, orders & analytics securely</p>
        </div>

        {/* FORM */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Admin name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="admin@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+91 XXXXX XXXXX"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password with Eye Toggle */}
          <div className="input-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create strong password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <span
                className="eye-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>
          </div>

          <button type="submit" className="signup-btn">
            Create Admin Account
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already an admin?
            <a href="/admin/login"> Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
