import { HistoricalEvent } from "@/data/events";

/**
 * Parses a time string in format "8:00 AM" or "08:00 AM" to minutes since midnight
 */
export function parseTimeToMinutes(timeStr: string, defaultAmPm?: string): number {
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

/**
 * Checks if the current time falls within a time range string like "8:00 AM - 8:05 AM" or "5:05-5:10 PM"
 */
export function isCurrentTimeInRange(timeRangeStr: string): boolean {
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

/**
 * Returns events that match the current time from all events
 */
export function getCurrentTimeEvents(events: HistoricalEvent[]): HistoricalEvent[] {
  return events.filter(event => isCurrentTimeInRange(event.time_range));
} 