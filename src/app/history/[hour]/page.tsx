'use client';

import { use } from 'react';
import { historicalEvents } from '@/data/events';
import CurrentTimeEvent from './CurrentTimeEvent';

// Main page component
export default function HistoryPage({ params }: { params: Promise<{ hour: string }> }) {
  const { hour } = use(params);
  
  // Convert hour parameter to string to ensure lookup works correctly
  const hourKey = hour.toString();
  console.log(`Looking up events for hour: ${hourKey}`);
  
  // Get events for the hour or empty array if none found
  const hourEvents = historicalEvents[hourKey] || [];
  
  // Log for debugging
  console.log(`Found ${hourEvents.length} events for hour ${hourKey}`);
  
  // If no events found for this hour, try to find events for the current hour
  if (hourEvents.length === 0) {
    const currentHour = new Date().getHours().toString();
    console.log(`No events found for hour ${hourKey}, trying current hour: ${currentHour}`);
    const currentHourEvents = historicalEvents[currentHour] || [];
    
    // If we found events for the current hour, use those instead
    if (currentHourEvents.length > 0) {
      console.log(`Found ${currentHourEvents.length} events for current hour ${currentHour}`);
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <CurrentTimeEvent events={currentHourEvents} />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {hourEvents.length > 0 ? (
        <CurrentTimeEvent events={hourEvents} />
      ) : (
        <div className="bg-white text-black p-8 text-center max-w-lg">
          <h1 className="text-2xl font-bold mb-4">No Events Found</h1>
          <p>There are no historical events available for this time.</p>
        </div>
      )}
    </div>
  );
}
