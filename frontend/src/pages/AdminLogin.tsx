import { useState } from "react";
import "./CSS/admin-login.css";
import { apiRequest } from "../services/api";

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: ""
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
            // Send 'identifier' instead of 'email' to match backend
            const payload = { identifier: form.email, password: form.password };
            const res = await apiRequest("/auth/login", "POST", payload);

            //  Store JWT token
            localStorage.setItem("token", res.token);

            console.log("Login successful:", res);
            alert("Login successful!");

            // TODO: redirect to dashboard
            // navigate("/admin/dashboard");

        } catch (err: any) {
            alert(err.message || "Invalid email or password");
        }
    };

    return (
        <div className="admin-login-page">
            <div className="login-card">
                <div className="login-header">
                    <h1>Admin Login 🌿</h1>
                    <p>Access your dashboard securely</p>
                </div>

                {/* FORM */}
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email or Phone Number</label>
                        <input
                            type="text"
                            name="identifier"
                            placeholder="Email or Phone"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })} // Keeping state key 'email' for now to avoid breaking state object, but sending as 'identifier' later
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
                                placeholder="Enter your password"
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

                    <div className="login-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <a href="/admin/forgot-password" className="forgot-link">
                            Forgot password?
                        </a>
                    </div>

                    <button type="submit" className="login-btn">
                        Login to Dashboard
                    </button>
                </form>

                <div className="login-footer">
                    <p>
                        New admin?
                        <a href="/admin/signup"> Create account</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
