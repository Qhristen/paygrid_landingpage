"use client";

import CheckoutModal from "@/components/checkout-modal";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useState } from "react";

const App: React.FC = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center pt-24">
        <h1 className="text-4xl w-5xl md:text-6xl font-black mb-6 tracking-tight">
          {/* Build <span className="text-indigo-500">Web3 Checkout</span> into
            any app. */}
          Self-hosted payments with{" "}
          <span className="text-indigo-500">privacy</span> for businesses
        </h1>
        <div className="max-w-xl">
          <p className="text-xl text-gray-400 mb-12">
            PayGrid is a self-hosted, open source Web3 payments
            infrastructure built on Solana, designed with privacy at its core
            for the next generation of commerce.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl cursor-pointer font-bold text-lg shadow-xl shadow-indigo-600/20 transition-all active:scale-95"
            >
              Demo Checkout Widget
            </button>
            <a
              href="https://github.com/Qhristen/paygrid"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl cursor-pointer font-bold text-lg transition-all"
            >
              View Docs
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-2xl">
                🔒
              </div>
              <h3 className="font-bold text-lg text-white">Self-Hosted</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Run the infrastructure on your own servers. You own the keys,
                the data, and the fees.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-2xl">
                🔐
              </div>
              <h3 className="font-bold text-lg text-white">Privacy Payments</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Support for business with privacy-focused payment processing
                built on Solana.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-2xl">
                📊
              </div>
              <h3 className="font-bold text-lg text-white">Analytics</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Built-in dashboard for revenue tracking, analytics, and API access control.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccess={(intent) => {
          console.log("Payment Success!", intent);
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
