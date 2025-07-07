'use client';

import { useState, useEffect } from 'react';
import { HistoricalEvent } from '@/data/events';

// Parse time string like "8:00 AM" or "5:05" to minutes since midnight
function parseTimeToMinutes(timeStr: string, defaultAmPm?: string): number {
  // Strip any leading/trailing spaces
  timeStr = timeStr.trim();
  
  // Extract hours, minutes, and AM/PM
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)?/i);
  if (!match) return 0;
  
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  // If AM/PM is specified in this part, use it, otherwise use the default provided
  const amPm = match[3] ? match[3].toUpperCase() : defaultAmPm;
  
  // Convert to 24-hour format if AM/PM is specified
  if (amPm === 'PM' && hours < 12) {
    hours += 12;
  } else if (amPm === 'AM' && hours === 12) {
    hours = 0;
  }
  
  return hours * 60 + minutes;
}

// Check if the current time falls within a time range string
function isCurrentTimeInRange(timeRangeStr: string): boolean {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTimeInMinutes = currentHours * 60 + currentMinutes;
  
  // Handle different formats of time ranges
  let startMinutes = 0;
  let endMinutes = 0;
  
  // Format: "5:05-5:10 PM" (single AM/PM at the end)
  const singleAmPmMatch = timeRangeStr.match(/(\d+):(\d+)-(\d+):(\d+)\s+(AM|PM)/i);
  if (singleAmPmMatch) {
    const startHour = parseInt(singleAmPmMatch[1], 10);
    const startMin = parseInt(singleAmPmMatch[2], 10);
    const endHour = parseInt(singleAmPmMatch[3], 10);
    const endMin = parseInt(singleAmPmMatch[4], 10);
    const amPm = singleAmPmMatch[5].toUpperCase();
    
    // Apply AM/PM logic
    let startHour24 = startHour;
    let endHour24 = endHour;
    
    if (amPm === 'PM') {
      if (startHour < 12) startHour24 += 12;
      if (endHour < 12) endHour24 += 12;
    } else if (amPm === 'AM') {
      if (startHour === 12) startHour24 = 0;
      if (endHour === 12) endHour24 = 0;
    }
    
    startMinutes = startHour24 * 60 + startMin;
    endMinutes = endHour24 * 60 + endMin;
  } 
  // Format: "5:05 PM - 5:10 PM" (separate AM/PM for each time)
  else {
    const parts = timeRangeStr.split(/\s*[-–]\s*/);
    if (parts.length === 2) {
      startMinutes = parseTimeToMinutes(parts[0]);
      endMinutes = parseTimeToMinutes(parts[1]);
    }
  }
  
  // For debugging
  console.log(`Current time: ${currentTimeInMinutes} minutes (${currentHours}:${currentMinutes})`);
  console.log(`Range: ${startMinutes}-${endMinutes} minutes, Range string: ${timeRangeStr}`);
  
  return currentTimeInMinutes >= startMinutes && currentTimeInMinutes <= endMinutes;
}

// Component to display current time events
export default function CurrentTimeEvent({ events }: { events: HistoricalEvent[] }) {
  const [currentEvent, setCurrentEvent] = useState<HistoricalEvent | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateCurrentTimeAndEvents = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);

      const matchingEvent = events.find(event => isCurrentTimeInRange(event.time_range));
      setCurrentEvent(matchingEvent || events[0]);
    };

    updateCurrentTimeAndEvents();
    const interval = setInterval(updateCurrentTimeAndEvents, 60000);
    return () => clearInterval(interval);
  }, [events]);

  if (!currentEvent) return null;

  const sentences = currentEvent.event_description
    .split(/(?<=[.!?])\s+/)
    .filter(sentence => sentence.trim().length > 0);

  return (
    <div className="flex flex-col items-center">
      {/* Glassy Time Indicator */}
      {/* <div className="backdrop-blur-md bg-white/60 border border-blue-200 shadow-lg rounded-full px-10 py-4 mb-10 flex items-center gap-4 animate-fade-in"> */}
        {/* <span className="inline-block pt-[20px] w-4 h-4 rounded-full bg-blue-500 animate-pulse shadow" /> */}
        <span className="text-2xl pt-[20px] font-mono font-semibold text-blue-900 tracking-wide">{currentTime}</span>
      {/* </div> */}

      {/* Event Card */}
      <div className="px-[50px] py-10 max-w-2xl bg-white/90 rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 animate-fade-in-up">
        {/* Header */}
        <br/>
        <br/>
        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white px-8 py-6 flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="text-lg font-serif font-semibold tracking-wide">Date: {currentEvent.event_date}</div>
          <div className="text-base font-mono opacity-80">Time: {currentEvent.time_range}</div>
        </div>

        {/* Content */}
        <br/>
        <div className="px-20 py-10">
          <ul className="space-y-6">
            {sentences.map((sentence, idx) => (
              <li key={idx} className="flex items-start gap-4">
                {/* <span className="mt-1 text-blue-700 text-2xl font-bold">•</span> */}
                <span className="text-gray-800 text-lg leading-relaxed font-sans">• {sentence}</span>
              </li>
            ))}
          </ul>
          <br/>
          {/* Footer */}
          <div className="mt-10 pt-6 text-right pr-[50px] border-t border-blue-100 flex flex-col sm:flex-row gap-6 text-base">
            <span className="font-bold italic text-blue-700">Source: {currentEvent.source}</span>
            {/* <span className="text-gray-700">{currentEvent.source}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}