import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function FloatingChatButton() {
  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        onClick={handleClick}
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg bg-[#00ADB5] hover:bg-[#00ADB5]/90"
      >
        <MessageCircle size={24} />
      </Button>
    </motion.div>
  );
}
