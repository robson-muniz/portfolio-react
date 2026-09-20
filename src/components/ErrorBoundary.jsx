import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-canvas px-6">
                    <div className="max-w-md">
                        <h1 className="font-serif text-3xl text-ink">Something broke.</h1>
                        <p className="mt-4 text-muted">
                            Refresh the page. If it persists, email robsonmuniz.tech@gmail.com.
                        </p>
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="mt-8 inline-flex min-h-12 items-center bg-ink px-6 text-sm font-medium text-canvas"
                        >
                            Reload
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
