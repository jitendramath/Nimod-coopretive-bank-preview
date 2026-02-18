"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight, Loader2, CheckCircle, ShieldCheck } from "lucide-react";
import { auth } from "@/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function SignInModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Number, 2: OTP
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  // 🔄 Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setPhone("");
      setOtp("");
      setLoading(false);
    }
  }, [isOpen]);

  // 1️⃣ Send OTP Logic
  const sendOtp = async () => {
    if (phone.length < 10) return alert("कृपया सही 10-अंकों का मोबाइल नंबर डालें");
    setLoading(true);

    try {
      // Initialize Invisible Recaptcha (Only once)
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          }
        });
      }

      const formattedPhone = `+91${phone}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setStep(2); // Move to OTP screen
    } catch (error) {
      console.error("SMS Error:", error);
      alert("SMS भेजने में समस्या हुई। (Firebase Quota या Network चेक करें)");
      // If captcha error, reset it
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    }
    setLoading(false);
  };

  // 2️⃣ Verify OTP Logic
  const verifyOtp = async () => {
    setLoading(true);
    try {
      await confirmationResult.confirm(otp);
      // ✅ Success
      onClose(); 
      alert("लॉगिन सफल! स्वागत है। 🎉");
    } catch (error) {
      console.error("OTP Error:", error);
      alert("गलत OTP। कृपया दोबारा प्रयास करें।");
    }
    setLoading(false);
  };

  // 3️⃣ Google Login Logic
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
      alert("Google से लॉगिन सफल! 🎉");
    } catch (error) {
      console.error("Google Auth Error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        
        {/* 🌑 Backdrop with Blur */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all"
        />

        {/* 💎 Premium Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-md bg-[#0f1115] border border-white/10 rounded-[2rem] p-8 shadow-2xl overflow-hidden"
        >
          {/* Ambient Glow inside Modal */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-premium-accent/10 blur-[60px] pointer-events-none" />

          {/* Close Button */}
          <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-colors z-10">
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-premium-accent mb-4 border border-white/5 shadow-inner">
               <ShieldCheck size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              {step === 1 ? "सदस्य लॉगिन" : "OTP सत्यापित करें"}
            </h2>
            <p className="text-white/40 text-sm font-medium">
              {step === 1 ? "सुरक्षित बैंकिंग के लिए मोबाइल नंबर दर्ज करें" : `हमने +91 ${phone} पर कोड भेजा है`}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6 relative z-10">
            
            {step === 1 ? (
              // Step 1: Phone Input
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 font-bold text-lg pointer-events-none group-focus-within:text-premium-accent transition-colors">
                  +91
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-14 pr-4 text-white text-lg font-bold tracking-widest focus:outline-none focus:border-premium-accent/50 focus:bg-black/40 transition-all placeholder:text-white/10 placeholder:font-normal placeholder:tracking-normal"
                  placeholder="98765 43210"
                />
              </div>
            ) : (
              // Step 2: OTP Input
              <div className="flex justify-center">
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 text-center text-white text-3xl font-bold tracking-[0.5em] focus:outline-none focus:border-premium-accent/50 focus:bg-black/40 transition-all placeholder:text-white/10"
                  placeholder="------"
                  autoFocus
                />
              </div>
            )}

            {/* Hidden Recaptcha Element */}
            <div id="recaptcha-container"></div>

            {/* Action Button */}
            <button
              onClick={step === 1 ? sendOtp : verifyOtp}
              disabled={loading || (step === 1 ? phone.length < 10 : otp.length < 6)}
              className="w-full py-4 bg-premium-accent hover:bg-emerald-500 text-black font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-premium-accent/20 active:scale-95"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : step === 1 ? (
                <>OTP भेजें <ArrowRight size={20} /></>
              ) : (
                <>लॉगिन करें <CheckCircle size={20} /></>
              )}
            </button>

            {/* Change Number (Only in Step 2) */}
            {step === 2 && (
              <button onClick={() => setStep(1)} className="w-full text-center text-xs font-bold text-white/30 hover:text-premium-accent uppercase tracking-widest transition-colors">
                नंबर बदलें
              </button>
            )}

            {/* Google Divider */}
            {step === 1 && (
              <>
                <div className="flex items-center gap-4 text-white/20 text-[10px] font-bold uppercase tracking-widest my-6">
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                  OR
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>

                <button 
                  onClick={handleGoogleLogin}
                  className="w-full py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <svg className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google से जारी रखें
                </button>
              </>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
