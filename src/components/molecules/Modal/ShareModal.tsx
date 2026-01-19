"use client";

import { useState } from "react";
import { Icon } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/hooks";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [isShareViewExpanded, setIsShareViewExpanded] = useState(true);
  const [shareWithAnyone, setShareWithAnyone] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // Lock scroll when modal is open
  useScrollLock(isOpen);

  if (!isOpen) return null;

  const handleInvite = () => {
    if (email) {
      console.log("Inviting:", email);
      setEmail("");
      // Show success notification
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1B1B1B]/50 backdrop-blur-[10px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-112.5 flex flex-col rounded-2xl bg-white dark:bg-black overflow-hidden">
        {/* Share this space section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-black dark:text-white">
              Share this space
            </h2>
            <button
              onClick={onClose}
              className="text-black dark:text-white hover:opacity-70 transition-opacity"
            >
              <Icon name="close-line" size="xl" />
            </button>
          </div>

          {/* Email Input */}
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Icon
                name="mail-line"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-text"
                size="lg"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Invite by name or email"
                className="w-full bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white placeholder:text-neutral-text rounded-full pl-12 pr-4 py-3 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
              />
            </div>
            <button
              onClick={handleInvite}
              disabled={!email}
              className="px-6 py-3 rounded-full bg-primary text-black font-medium hover:bg-primary/80 transition-colors disabled:opacity-50"
            >
              Invite
            </button>
          </div>
        </div>

        {/* Share this view section */}
        <div className="border-t border-greyscale-100-light dark:border-greyscale-100-dark">
          <button
            onClick={() => setIsShareViewExpanded(!isShareViewExpanded)}
            className="w-full flex items-center justify-between p-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white text-left">
                Share this view
              </h3>
              <p className="text-sm text-neutral-text text-left">
                Sharing List as a single view
              </p>
            </div>
            <Icon
              name={isShareViewExpanded ? "arrow-down-s-line" : "arrow-right-s-line"}
              className="text-neutral-text"
              size="xl"
            />
          </button>

          {isShareViewExpanded && (
            <div className="px-6 pb-6 space-y-4">
              {/* Share link with anyone */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="global-line" className="text-neutral-text" size="lg" />
                  <span className="text-sm text-neutral-text">Share link with anyone</span>
                  <Icon name="information-line" className="text-neutral-text" size="sm" />
                </div>
                <button
                  onClick={() => setShareWithAnyone(!shareWithAnyone)}
                  className={cn(
                    "w-12 h-6 rounded-full transition-colors relative",
                    shareWithAnyone ? "bg-primary" : "bg-greyscale-100-light dark:bg-greyscale-100-dark"
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                      shareWithAnyone ? "left-7" : "left-1"
                    )}
                  />
                </button>
              </div>

              {/* Private link */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="lock-line" className="text-neutral-text" size="lg" />
                  <span className="text-sm text-neutral-text">Private link</span>
                  <Icon name="information-line" className="text-neutral-text" size="sm" />
                </div>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-black text-sm font-medium hover:bg-primary/80 transition-colors"
                >
                  <Icon name="file-copy-line" size="sm" className="text-black" />
                  {isCopied ? "Copied!" : "Copy link"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
