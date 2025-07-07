'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HistoricalEvent } from '@/data/events';

export default function EventsDisplay({ events }: { events: HistoricalEvent[] }) {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);

  // Function to handle clicking on an event
  const handleEventClick = (index: number) => {
    setSelectedEventIndex(index === selectedEventIndex ? null : index);
  };

  if (selectedEventIndex !== null) {
    // Display the selected event in a formal way
    const event = events[selectedEventIndex];
    
    return (
      <div className="selected-event-container">
        <button 
          onClick={() => setSelectedEventIndex(null)}
          className="back-to-grid mb-6 text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
        >
          ← Back to all events
        </button>
        
        <div className="event-detail bg-white dark:bg-gray-800/60 rounded-xl overflow-hidden shadow-2xl">
          <div className="event-header bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 text-white p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-2">
                {event.event_date}
              </h2>
              <p className="text-gray-300 font-light tracking-wide">
                {event.time_range}
              </p>
            </div>
          </div>
          
          <div className="event-content p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="image-container lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                    <Image 
                      src={event.image_url || '/globe.svg'} 
                      alt={`Image for ${event.event_date} event`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2 items-center">
                    <div className="source-tag py-1 px-3 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      Source: {event.source}
                    </div>
                    
                    {event.location && (
                      <div className="location-tag py-1 px-3 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 flex items-center">
                        <span className="mr-1">📍</span>
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="event-description lg:w-1/2">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {event.event_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Display the grid of events
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <div 
          key={index}
          onClick={() => handleEventClick(index)}
          className="event-card bg-white dark:bg-gray-800/60 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:translate-y-[-4px]"
        >
          <div className="relative h-48 overflow-hidden">
            <Image 
              src={event.image_url || '/globe.svg'} 
              alt={`${event.event_date} preview`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <p className="text-sm font-light">{event.time_range}</p>
                <h3 className="text-xl font-medium font-serif">{event.event_date}</h3>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {event.event_description.substring(0, 100)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 