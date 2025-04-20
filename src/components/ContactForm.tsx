
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setName('');
      setEmail('');
      setMessage('');
      setSending(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-teal/50"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-teal/50"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-teal/50 resize-none"
          placeholder="Your message here..."
        />
      </div>
      
      <button
        type="submit"
        disabled={sending}
        className="w-full py-2 px-4 bg-gradient-to-r from-neon-purple to-neon-teal rounded-lg font-medium text-black flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
      >
        {sending ? 'Sending...' : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
