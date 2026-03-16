import { motion } from 'framer-motion';

const blobs = [
  { size: 420, left: '10%', top: '5%', color: 'rgba(124,58,237,0.18)' },
  { size: 360, left: '70%', top: '0%', color: 'rgba(14,165,233,0.16)' },
  { size: 380, left: '40%', top: '70%', color: 'rgba(16,185,129,0.14)' }
];

export default function AnimatedBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {blobs.map((blob, idx) => (
        <motion.div
          key={idx}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{
            scale: [0.95, 1.05, 0.95],
            x: [0, 20, -20, 0],
            y: [0, -15, 15, 0],
            opacity: [0.45, 0.55, 0.45]
          }}
          transition={{ duration: 16 + idx * 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.left,
            top: blob.top,
            background: blob.color,
            filter: 'blur(60px)'
          }}
          className="absolute rounded-full"
        />
      ))}
    </div>
  );
}
