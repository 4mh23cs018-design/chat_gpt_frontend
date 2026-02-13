import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-20 bg-[#f8fafc] flex flex-col items-center justify-center px-4">
            <div className="max-w-3xl w-full text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Contact Us</h1>
                <p className="text-xl text-slate-500 font-medium mb-12">
                    Have questions? We'd love to hear from you.
                </p>
                <div className="modern-card p-10 bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="text-left">
                                <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                <input type="text" className="w-full px-5 py-4 border border-slate-200 rounded-2xl bg-slate-50/50 focus:bg-white outline-none" placeholder="Your Name" />
                            </div>
                            <div className="text-left">
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full px-5 py-4 border border-slate-200 rounded-2xl bg-slate-50/50 focus:bg-white outline-none" placeholder="name@example.com" />
                            </div>
                        </div>
                        <div className="text-left">
                            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea rows="4" className="w-full px-5 py-4 border border-slate-200 rounded-2xl bg-slate-50/50 focus:bg-white outline-none" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-xl hover:bg-indigo-700 transition-all">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
