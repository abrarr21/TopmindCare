import { useState } from "react";
import { cn } from "../utils/cn";

type PopupFormProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        class: "",
        message: "",
    });

    if (!isOpen) return null;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // "mocking data sending"
        setTimeout(() => {
            alert("✅ Submitted:\n" + JSON.stringify(form, null, 2));
            setLoading(false);
            onClose();
            setForm({ name: "", email: "", phone: "", class: "", message: "" });
        }, 1500);
    };

    return (
        // Overlay (click outside to close)
        <div
            className={cn(
                "fixed inset-0 z-[100] flex items-center justify-center bg-black/50",
                "p-3",
                "sm:p-4",
                "md:p-6",
                "lg:p-8",
            )}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="trial-form-title"
        >
            {/* Modal card */}
            <div
                className={cn(
                    "w-full rounded-2xl bg-white shadow-xl",
                    "max-w-sm p-4",
                    "sm:max-w-md sm:p-6",
                    "md:max-w-lg md:p-8",
                    "lg:max-w-xl lg:p-10",
                )}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-4 flex items-start justify-between">
                    <h2
                        id="trial-form-title"
                        className={cn(
                            "text-xl font-bold text-gray-800",
                            "sm:text-2xl",
                            "lg:text-3xl",
                        )}
                    >
                        Start Free Trial
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className={cn(
                            "rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700", // base
                            "sm:text-base", // sm
                        )}
                        aria-label="Close"
                        title="Close"
                    >
                        ✕
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className={cn("space-y-3", "sm:space-y-4")}
                >
                    <input
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={cn(
                            "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500/50 focus:outline-none",
                            "sm:text-base",
                        )}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={cn(
                            "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500/50 focus:outline-none",
                            "sm:text-base",
                        )}
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={handleChange}
                        className={cn(
                            "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500/50 focus:outline-none",
                            "sm:text-base",
                        )}
                    />

                    <input
                        name="class"
                        placeholder="Class (e.g., Grade 5)"
                        value={form.class}
                        onChange={handleChange}
                        className={cn(
                            "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500/50 focus:outline-none",
                            "sm:text-base",
                        )}
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        className={cn(
                            "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500/50 focus:outline-none",
                            "sm:text-base",
                        )}
                    />

                    <div className="flex gap-3 pt-1 sm:pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className={cn(
                                "w-1/2 rounded-lg border border-gray-300 py-2 text-sm text-gray-700 transition hover:bg-gray-100",
                                "sm:text-base",
                            )}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className={cn(
                                "w-1/2 rounded-lg bg-purple-600 py-2 text-sm font-medium text-white transition hover:bg-purple-700 disabled:opacity-60",
                                "sm:text-base",
                            )}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
