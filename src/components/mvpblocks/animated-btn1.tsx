'use client';

import WhatsAppModal from '@/src/components/whatsapp-modal';
import { useState } from 'react';

export default function AnimatedBtn1() {
  const [showModal, setShowModal] = useState(false);
  function handleClick() {
    window.open('https://www.mediafire.com/file/tp7trzhaz7f92im/Kawa_%25284%2529.apk/file', '_blank');
  }
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={handleClick}
        className="bubbleeffectbtn flex items-center justify-center no-underline border-none p-0"
      >
        <style jsx>{`
          .bubbleeffectbtn {
            min-width: 150px;
            height: 44px;
            color: #ffffff;
            cursor: pointer;
            position: relative;
            display: inline-flex;
            border-radius: 999px;
            background: linear-gradient(135deg, #035503, #7ADD7A);
            box-shadow:
              0 6px 14px rgba(30, 107, 255, 0.45),
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
            overflow: hidden;
            transition: all 0.25s ease;
          }
          /* glossy sweep */
          .bubbleeffectbtn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -60%;
            width: 60%;
            height: 100%;
            background: linear-gradient(
              120deg,
              transparent,
              rgba(255, 255, 255, 0.35),
              transparent
            );
            transition: all 0.6s ease;
          }
          .bubbleeffectbtn:hover::before {
            left: 120%;
          }

          .bubbleeffectbtn:hover {
            transform: translateY(-1px);
            box-shadow:
              0 10px 22px rgba(30, 107, 255, 0.55),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }

          .bubbleeffectbtn:active {
            transform: translateY(1px);
            box-shadow:
              0 4px 10px rgba(30, 107, 255, 0.4);
          }

          .bubbleeffectbtn span {
            position: relative;
            z-index: 1;
            font-size: 0.9rem;
            font-weight: 600;
            letter-spacing: 0.3px;
          }
        `}</style>

        <span>Get for Android</span>
      </button>
      <WhatsAppModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
