import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export function VisitCounter() {
  const [visits, setVisits] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        // In a real app, this would be an API call to your backend
        // For now, we'll use localStorage as a simple solution
        const storedVisits = localStorage.getItem('profileVisits');
        const currentVisits = storedVisits ? parseInt(storedVisits) : 0;
        const newVisits = currentVisits + 1;
        localStorage.setItem('profileVisits', newVisits.toString());
        setVisits(newVisits);
      } catch (error) {
        console.error('Error fetching visits:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisits();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span className="text-sm font-medium">{visits.toLocaleString()} profile visits</span>
    </div>
  );
} 