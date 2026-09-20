import { useState } from "react";
import {
    Eye,
    EyeOff,
    Lock,
    Maximize2,
    X,
    Sparkles,
    ShieldCheck,
    Layers,
    Layout,
} from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";

// Calculate password strength score (0 to 4)
const getPasswordStrength = (password) => {
    if (!password) return { score: 0, label: "", color: "bg-line", width: "w-0" };
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return { score: 1, label: "Weak", color: "bg-red-500", width: "w-1/3" };
    if (score <= 3) return { score: 2, label: "Medium", color: "bg-amber-400", width: "w-2/3" };
    return { score: 3, label: "Strong", color: "bg-emerald-500", width: "w-full" };
};

const AuthKitShowcase = () => {
    const [activeTab, setActiveTab] = useState("demo"); // 'demo' | 'screenshot' | 'architecture'
    const [authMode, setAuthMode] = useState("register"); // 'register' | 'login'
    
    // Interactive Form State
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("Secur3P@ssw0rd!");
    const [confirmPassword, setConfirmPassword] = useState("Secur3P@ssw0rd!");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    // Lightbox modal state for image preview
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const strength = getPasswordStrength(password);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 800);
    };

    const handleReset = () => {
        setSubmitted(false);
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="overflow-hidden border border-line bg-panel shadow-2xl transition-all duration-300">
            {/* Top Chrome / Window Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-line bg-[#0e0e0c] px-4 py-3 gap-3">
                {/* Left: Window Controls & Title */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                        <div className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
                        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
                        <div className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 rounded border border-line/60 bg-surface/80 px-2.5 py-1 font-mono text-[11px] text-muted">
                        <Lock size={11} className="text-emerald-400" />
                        <span className="text-ink/80">localhost:5173</span>
                        <span className="text-muted/60">/{authMode}</span>
                    </div>
                </div>

                {/* Center / Right: View Tabs */}
                <div className="flex items-center rounded-md border border-line/80 bg-surface/50 p-0.5 font-mono text-xs">
                    <button
                        type="button"
                        onClick={() => setActiveTab("demo")}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
                            activeTab === "demo"
                                ? "bg-accent text-canvas font-medium"
                                : "text-muted hover:text-ink"
                        }`}
                        aria-label="View interactive AuthKit demo"
                    >
                        <Sparkles size={12} />
                        <span>Interactive Demo</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab("screenshot")}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
                            activeTab === "screenshot"
                                ? "bg-accent text-canvas font-medium"
                                : "text-muted hover:text-ink"
                        }`}
                        aria-label="View UI screenshot preview"
                    >
                        <Layout size={12} />
                        <span>UI Preview</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab("architecture")}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
                            activeTab === "architecture"
                                ? "bg-accent text-canvas font-medium"
                                : "text-muted hover:text-ink"
                        }`}
                        aria-label="View system architecture diagram"
                    >
                        <Layers size={12} />
                        <span>Architecture</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area based on selected Tab */}
            <div>
                {/* TAB 1: INTERACTIVE LIVE DEMO */}
                {activeTab === "demo" && (
                    <div className="relative min-h-[580px] w-full bg-[#07060a] p-4 sm:p-8 flex items-center justify-center overflow-hidden">
                        {/* Purple Background Glow */}
                        <div
                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, rgba(139, 92, 246, 0.2) 60%, transparent 100%)",
                            }}
                        />

                        {/* Interactive Card */}
                        <div className="relative z-10 w-full max-w-md rounded-2xl border border-[#2e263d] bg-[#0d0a14]/90 p-6 sm:p-8 shadow-[0_0_50px_rgba(124,58,237,0.15)] backdrop-blur-xl">
                            {/* Card Header Logo */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2.5">
                                    <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                                        <div className="h-2.5 w-2.5 rounded-full bg-white shadow-inner" />
                                    </div>
                                    <span className="font-sans text-xl font-bold tracking-tight text-white">
                                        Auth<span className="text-purple-400">Kit</span>
                                    </span>
                                </div>
                                <span className="rounded-full border border-purple-500/30 bg-purple-950/40 px-2.5 py-0.5 font-mono text-[10px] text-purple-300">
                                    Live Interactive
                                </span>
                            </div>

                            {submitted ? (
                                /* Success Feedback State */
                                <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                                        <ShieldCheck size={28} />
                                    </div>
                                    <h3 className="font-sans text-xl font-semibold text-white">
                                        Session Authenticated!
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-zinc-400 max-w-xs mx-auto">
                                        JWT token generated and securely persisted in HTTP-only Cookie. User state synced to app context.
                                    </p>
                                    <div className="mt-6 rounded-lg border border-purple-900/50 bg-[#140e24] p-3 text-left font-mono text-[11px] text-purple-300 space-y-1">
                                        <p className="text-zinc-500">// Auth response payload</p>
                                        <p><span className="text-purple-400">user:</span> "{email || "you@example.com"}"</p>
                                        <p><span className="text-purple-400">status:</span> 200 OK</p>
                                        <p><span className="text-purple-400">httpOnlyCookie:</span> true</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="mt-6 inline-flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 underline underline-offset-4 cursor-pointer"
                                    >
                                        Test interactive form again
                                    </button>
                                </div>
                            ) : (
                                /* Auth Form */
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <h3 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                            {authMode === "register" ? "Create your account" : "Welcome back"}
                                        </h3>
                                        <p className="mt-1 text-xs text-zinc-400">
                                            {authMode === "register"
                                                ? "Start building securely today."
                                                : "Enter your credentials to access your session."}
                                        </p>
                                    </div>

                                    {authMode === "register" && (
                                        <div>
                                            <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-1.5">
                                                Full Name (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                placeholder="Jane Smith"
                                                className="w-full rounded-lg border border-[#2b253b] bg-[#120e1f] px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-1.5">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            className="w-full rounded-lg border border-[#2b253b] bg-[#120e1f] px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                                                Password
                                            </label>
                                            {authMode === "login" && (
                                                <button
                                                    type="button"
                                                    className="font-mono text-[10px] text-purple-400 hover:text-purple-300"
                                                >
                                                    Forgot password?
                                                </button>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full rounded-lg border border-[#2b253b] bg-[#120e1f] pl-3.5 pr-10 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                                                aria-label={showPassword ? "Hide password" : "Show password"}
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>

                                        {/* Password Strength Indicator (Register mode) */}
                                        {authMode === "register" && password && (
                                            <div className="mt-2 space-y-1">
                                                <div className="h-1.5 w-full rounded-full bg-[#1c172e] overflow-hidden">
                                                    <div
                                                        className={`h-full transition-all duration-300 ${strength.color} ${strength.width}`}
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between text-[11px]">
                                                    <span className="font-mono text-zinc-500">Strength</span>
                                                    <span
                                                        className={`font-semibold ${
                                                            strength.score === 1
                                                                ? "text-red-400"
                                                                : strength.score === 2
                                                                ? "text-amber-400"
                                                                : "text-emerald-400"
                                                        }`}
                                                    >
                                                        {strength.label}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {authMode === "register" && (
                                        <div>
                                            <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-1.5">
                                                Confirm Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    required
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    className="w-full rounded-lg border border-[#2b253b] bg-[#120e1f] pl-3.5 pr-10 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                                >
                                                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Primary CTA Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0d0a14] active:scale-[0.99] cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                        ) : authMode === "register" ? (
                                            "Create account"
                                        ) : (
                                            "Sign in"
                                        )}
                                    </button>

                                    {/* Switch Mode Link */}
                                    <div className="pt-2 text-center text-xs text-zinc-400">
                                        {authMode === "register" ? (
                                            <span>
                                                Already have an account?{" "}
                                                <button
                                                    type="button"
                                                    onClick={() => setAuthMode("login")}
                                                    className="font-semibold text-purple-400 hover:text-purple-300 underline underline-offset-2 cursor-pointer"
                                                >
                                                    Sign in
                                                </button>
                                            </span>
                                        ) : (
                                            <span>
                                                Don't have an account?{" "}
                                                <button
                                                    type="button"
                                                    onClick={() => setAuthMode("register")}
                                                    className="font-semibold text-purple-400 hover:text-purple-300 underline underline-offset-2 cursor-pointer"
                                                >
                                                    Create account
                                                </button>
                                            </span>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                )}

                {/* TAB 2: UI SCREENSHOT PREVIEW */}
                {activeTab === "screenshot" && (
                    <div className="relative border-t border-line bg-surface group">
                        <div className="overflow-hidden">
                            <img
                                src="/projects/secureauth-kit.png"
                                alt="SecureAuth Kit registration interface screenshot"
                                width={1920}
                                height={1080}
                                className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                            />
                        </div>
                        {/* Zoom Trigger overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <button
                                type="button"
                                onClick={() => setIsLightboxOpen(true)}
                                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-mono text-xs font-semibold text-canvas shadow-lg transition-transform hover:scale-105 cursor-pointer"
                            >
                                <Maximize2 size={14} />
                                View Fullscreen Screenshot
                            </button>
                        </div>
                    </div>
                )}

                {/* TAB 3: SYSTEM ARCHITECTURE */}
                {activeTab === "architecture" && (
                    <div className="p-4 sm:p-6 bg-canvas">
                        <ArchitectureDiagram />
                    </div>
                )}
            </div>

            {/* Bottom Info Bar */}
            <div className="flex flex-wrap items-center justify-between border-t border-line bg-[#0e0e0c] px-5 py-3 font-mono text-xs text-muted gap-2">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SecureAuth Kit UI v1.0</span>
                </div>
                <div className="flex items-center gap-4">
                    <span>Argon2 Hash</span>
                    <span>•</span>
                    <span>HTTP-only Cookies</span>
                    <span>•</span>
                    <span>JWT Session</span>
                </div>
            </div>

            {/* Lightbox Modal for Screenshot */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div
                        className="relative max-h-[90vh] max-w-[95vw] overflow-auto rounded-lg border border-line bg-panel p-2 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-line pb-2 mb-2 px-2">
                            <span className="font-mono text-xs text-accent">
                                SecureAuth Kit — High Resolution UI Capture
                            </span>
                            <button
                                type="button"
                                onClick={() => setIsLightboxOpen(false)}
                                className="rounded p-1 text-muted hover:bg-surface hover:text-ink cursor-pointer"
                                aria-label="Close lightbox"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <img
                            src="/projects/secureauth-kit.png"
                            alt="SecureAuth Kit UI preview high res"
                            className="max-h-[80vh] w-auto rounded object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthKitShowcase;
