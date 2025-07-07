export interface HistoricalEvent {
  time_range: string; // e.g., "08:00 AM - 08:05 AM"
  event_date: string; // Human-readable date of the event
  event_description: string; // Description of what happened
  source: string; // Source of information
  location?: string; // Optional location
  image_url?: string; // Optional image URL
}

// Record keyed by 24-hour numeric string ("0" – "23").
export const historicalEvents: Record<string, HistoricalEvent[]> = {
  // ---------------------------------------------------------------------
  // 08:00 – 09:00
  // ---------------------------------------------------------------------
  "8": [
    {
      time_range: "08:00 AM - 08:05 AM",
      event_date: "May 7, 1945",
      event_description:
        "Germany surrenders in World War II; the surrender document is signed in Reims, France. This act marked the end of the war in Europe, as German General Alfred Jodl signed the unconditional surrender on behalf of the German High Command. The news was broadcast to the world later that day, sparking celebrations across Allied nations. The official end of hostilities in Europe is commemorated as Victory in Europe (VE) Day.",
      source: "US Army",
    },
    {
      time_range: "08:05 AM - 08:10 AM",
      event_date: "Aug 6, 1945",
      event_description:
        "At 8:15 AM local time, the United States dropped an atomic bomb on the Japanese city of Hiroshima. The explosion instantly destroyed much of the city and killed tens of thousands of people. This was the first use of nuclear weapons in warfare, leading to Japan's surrender and the end of World War II. The event remains a powerful symbol of the destructive potential of nuclear arms.",
      source: "US National Archives",
    },
    {
      time_range: "08:10 AM - 08:15 AM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes were officially introduced in 12 European countries, replacing their national currencies. This marked a major step in European integration, making the euro the everyday currency for millions of people. The transition was one of the largest currency changes in history, affecting economies and travelers alike. Today, the euro is used by over 300 million Europeans.",
      source: "European Central Bank",
    },
    {
      time_range: "08:15 AM - 08:20 AM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan officially joined the Customs Union with Russia and Belarus, forming a single economic space. This agreement aimed to facilitate trade, remove customs barriers, and coordinate economic policies among the member states. The Customs Union later evolved into the Eurasian Economic Union, further deepening economic integration in the region. It has had a significant impact on Kazakhstan's trade and foreign relations.",
      source: "Eurasian Economic Union",
    },
    {
      time_range: "08:20 AM - 08:25 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially joined the European Union, expanding the bloc to 15 member states. Their accession marked the first major enlargement after the end of the Cold War, symbolizing a united and peaceful Europe. The new members adopted EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paved the way for future expansions of the EU.",
      source: "European Union",
    },
    {
      time_range: "08:25 AM - 08:30 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joined the European Union, along with Bulgaria, in the EU's largest single expansion to that date. The accession followed years of reforms and negotiations, bringing the two Eastern European countries closer to Western European standards. Membership provided access to EU markets, funding, and political cooperation. It marked a significant milestone in Romania's post-communist transformation.",
      source: "European Union",
    },
    {
      time_range: "08:30 AM - 08:35 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joined the European Union as its 28th member state. The accession was the result of a decade-long process of reforms, negotiations, and alignment with EU standards. Croatia's EU membership opened up new opportunities for trade, travel, and cooperation. It also symbolized the country's recovery and integration following the Yugoslav Wars.",
      source: "European Union",
    },
    {
      time_range: "08:35 AM - 08:40 AM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China established formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation between the two nations. The normalization of relations paved the way for increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State",
    },
    {
      time_range: "08:40 AM - 08:45 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising began in the Mexican state of Chiapas, as indigenous rebels declared war against the Mexican government. The movement protested against NAFTA and demanded indigenous rights, land reform, and democracy. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC",
    },
    {
      time_range: "08:45 AM - 08:50 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC",
    },
    {
      time_range: "08:50 AM - 08:55 AM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska's admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government",
    },
    {
      time_range: "08:55 AM - 09:00 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece's postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece's accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union",
    },
  ],
  "9": [
    {
      time_range: "9:00-9:05 AM",
      event_date: "Nov 22, 1963",
      event_description:
        "President John F. Kennedy began his day in Dallas, Texas, as part of a campaign trip to rally support for the Democratic Party. The visit included a motorcade through downtown Dallas, where thousands gathered to see him. The day would become infamous, as Kennedy was later assassinated during the ride. His death shocked the world and marked a turning point in American history.",
      source: "JFK Library"
    },
    {
      time_range: "9:05-9:10 AM",
      event_date: "Aug 9, 1945",
      event_description:
        "The United States dropped an atomic bomb on Nagasaki, Japan, hastening the end of World War II. The explosion destroyed much of the city and killed tens of thousands instantly. This was the second use of nuclear weapons in warfare, following Hiroshima three days earlier. The devastation led to Japan's unconditional surrender and remains a pivotal moment in world history.",
      source: "US National Archives"
    },
    {
      time_range: "9:10-9:15 AM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes were officially introduced in 12 European countries, replacing their national currencies. This marked a major step in European integration and economic cooperation. The transition was one of the largest currency changes in history, impacting millions of people. Today, the euro is used by over 300 million Europeans.",
      source: "European Central Bank"
    },
    {
      time_range: "9:15-9:20 AM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joined the Customs Union with Russia and Belarus, forming a single economic space. This agreement aimed to facilitate trade, remove customs barriers, and coordinate economic policies among the member states. The Customs Union later evolved into the Eurasian Economic Union. It has had a significant impact on Kazakhstan's trade and foreign relations.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "9:20-9:25 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially joined the European Union, expanding the bloc to 15 member states. Their accession marked the first major enlargement after the end of the Cold War. The new members adopted EU laws and policies, strengthening political and economic ties with Western Europe. This paved the way for future expansions of the EU.",
      source: "European Union"
    },
    {
      time_range: "9:25-9:30 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joined the European Union, along with Bulgaria, in the EU's largest single expansion to that date. The accession followed years of reforms and negotiations, bringing the two Eastern European countries closer to Western European standards. Membership provided access to EU markets, funding, and political cooperation. It marked a significant milestone in Romania's post-communist transformation.",
      source: "European Union"
    },
    {
      time_range: "9:30-9:35 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joined the European Union as its 28th member state. The accession was the result of a decade-long process of reforms, negotiations, and alignment with EU standards. Croatia’s EU membership opened up new opportunities for trade, travel, and cooperation. It also symbolized the country’s recovery and integration following the Yugoslav Wars.",
      source: "European Union"
    },
    {
      time_range: "9:35-9:40 AM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China established formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation between the two nations. The normalization of relations paved the way for increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "9:40-9:45 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising began in the Mexican state of Chiapas, as indigenous rebels declared war against the Mexican government. The movement protested against NAFTA and demanded indigenous rights, land reform, and democracy. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "9:45-9:50 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "9:50-9:55 AM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "9:55-10:00 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "10": [
    {
      time_range: "10:00-10:05 AM",
      event_date: "Nov 11, 1918",
      event_description:
        "At 10:00 AM, the armistice to end World War I is signed in a railway carriage in Compiègne, France. The agreement brings an end to four years of devastating conflict. The news quickly spreads across Europe, and celebrations erupt in many countries. The official ceasefire takes effect at 11:00 AM.",
      source: "National WWI Museum"
    },
    {
      time_range: "10:05-10:10 AM",
      event_date: "July 16, 1969",
      event_description:
        "Apollo 11 launches from Kennedy Space Center, Florida, carrying astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins. The Saturn V rocket lifts off on its historic journey to the Moon. Millions watch the launch live on television around the world. The mission fulfills President John F. Kennedy’s goal to land a man on the Moon before the decade’s end.",
      source: "NASA"
    },
    {
      time_range: "10:10-10:15 AM",  
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "10:15-10:20 AM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "10:20-10:25 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "10:25-10:30 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "10:30-10:35 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "10:35-10:40 AM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "10:40-10:45 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "10:45-10:50 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "10:50-10:55 AM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "10:55-11:00 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "11": [
    {
      time_range: "11:00 AM - 11:05 AM",
      event_date: "Nov 11, 1918",
      event_description:
        "At 11:00 AM on the eleventh day of the eleventh month, the armistice ending World War I went into effect. The guns fell silent across Europe, bringing an end to four years of devastating conflict. This moment is commemorated as Armistice Day or Remembrance Day in many countries. It marked a turning point in global politics and society.",
      source: "National WWI Museum"
    },
    {
      time_range: "11:05 AM - 11:10 AM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes became legal tender in 12 European countries, replacing their national currencies. This historic transition was one of the largest currency changes ever. The euro quickly became one of the world’s most important currencies. It symbolized economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "11:10 AM - 11:15 AM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan officially joined the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aimed to strengthen economic ties and remove trade barriers among the member states. This move laid the groundwork for the later formation of the Eurasian Economic Union. It has played a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "11:15 AM - 11:20 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially joined the European Union, expanding the bloc to 15 member states. This was the first major enlargement after the Cold War. The accession strengthened the EU’s political and economic influence in Europe. It also paved the way for future expansions.",
      source: "European Union"
    },
    {
      time_range: "11:20 AM - 11:25 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joined the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession followed years of reform and negotiation. Membership opened up new opportunities for trade, travel, and funding. It marked a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "11:25 AM - 11:30 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joined the European Union as its 28th member state. The accession was the result of a decade of reforms and negotiations. Croatia’s EU membership opened doors for economic growth and international cooperation. It also symbolized the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "11:30 AM - 11:35 AM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China established formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "11:35 AM - 11:40 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising began in Chiapas, Mexico, as indigenous rebels declared war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "11:40 AM - 11:45 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "11:45 AM - 11:50 AM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "11:50 AM - 11:55 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    },
    {
      time_range: "11:55 AM - 12:00 PM",
      event_date: "Jan 28, 1986",
      event_description:
        "The Space Shuttle Challenger disaster occurred when the shuttle broke apart 73 seconds after launch. All seven crew members were killed, including teacher Christa McAuliffe. The tragedy shocked the world and led to a suspension of the shuttle program. It remains one of the most significant disasters in the history of space exploration.",
      source: "NASA"
    }
  ],
  "12": [
    {
      time_range: "12:00-12:05 PM",
      event_date: "Jan 20, 1937 (and every 4 years since)",
      event_description:
        "The United States holds its presidential inauguration at noon on January 20th, marking the start of a new presidential term. The ceremony is attended by dignitaries, former presidents, and the public. The peaceful transfer of power is a cornerstone of American democracy. The event is broadcast live and watched by millions around the world.",
      source: "US Government"
    },
    {
      time_range: "12:05-12:10 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "12:10-12:15 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "12:15-12:20 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "12:20-12:25 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "12:25-12:30 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "12:30-12:35 PM",
      event_date: "Nov 22, 1963",
      event_description:
        "President John F. Kennedy is assassinated in Dallas, Texas, at 12:30 PM local time. The shocking event is witnessed by crowds and broadcast on television. Vice President Lyndon B. Johnson is sworn in as president later that day. The assassination profoundly impacts American society and politics.",
      source: "JFK Library"
    },
    {
      time_range: "12:35-12:40 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "12:40-12:45 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "12:45-12:50 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "12:50-12:55 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "12:55-1:00 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "13": [
    {
      time_range: "1:00-1:05 PM",
      event_date: "July 20, 1969",
      event_description:
        "Apollo 11 astronauts rest on the Moon after completing their historic moonwalk. Neil Armstrong and Buzz Aldrin, having collected samples and conducted experiments, return to the lunar module for a scheduled rest period. Their successful landing fulfills President Kennedy’s goal and inspires generations worldwide. The mission is broadcast live to millions on Earth.",
      source: "NASA"
    },
    {
      time_range: "1:05-1:10 PM",
      event_date: "Dec 8, 1980",
      event_description:
        "John Lennon, former Beatle and influential musician, is pronounced dead at Roosevelt Hospital in New York City. He was shot outside his apartment building earlier that evening. Lennon's death shocks the world and leads to an outpouring of grief from fans. His legacy continues to influence music and culture.",
      source: "New York Times"
    },
    {
      time_range: "1:10-1:15 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "1:15-1:20 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "1:20-1:25 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "1:25-1:30 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "1:30-1:35 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "1:35-1:40 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "1:40-1:45 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "1:45-1:50 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "1:50-1:55 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "1:55-2:00 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "14": [
    {
      time_range: "2:00-2:05 PM",
      event_date: "May 8, 1945",
      event_description:
        "Victory in Europe Day (VE Day) is celebrated as Nazi Germany surrenders unconditionally to the Allied forces. The announcement is made in London, sparking jubilant celebrations across Europe and North America. The end of the war in Europe brings relief after years of conflict and devastation. VE Day is remembered annually as a symbol of peace and freedom.",
      source: "BBC"
    },
    {
      time_range: "2:05-2:10 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "2:10-2:15 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "2:15-2:20 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "2:20-2:25 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "2:25-2:30 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "2:30-2:35 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "2:35-2:40 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "2:40-2:45 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "2:45-2:50 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "2:50-2:55 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    },
    {
      time_range: "2:55-3:00 PM",
      event_date: "July 21, 1969",
      event_description:
        "At 2:56 AM UTC (broadcast later in the day in the US), Neil Armstrong becomes the first human to set foot on the Moon. His famous words, 'That's one small step for man, one giant leap for mankind,' are broadcast live to millions. The Apollo 11 mission is a defining moment in space exploration. Armstrong’s moonwalk inspires generations to dream big.",
      source: "NASA"
    }
  ],
  "15": [
    {
      time_range: "3:00-3:05 PM",
      event_date: "July 4, 1776",
      event_description:
        "The United States Declaration of Independence is adopted by the Continental Congress in Philadelphia. This document proclaims the thirteen American colonies' separation from British rule. Its adoption marks the birth of the United States of America. The event is celebrated annually as Independence Day.",
      source: "US National Archives"
    },
    {
      time_range: "3:05-3:10 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "3:10-3:15 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "3:15-3:20 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "3:20-3:25 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "3:25-3:30 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "3:30-3:35 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "3:35-3:40 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "3:40-3:45 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "3:45-3:50 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "3:50-3:55 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    },
    {
      time_range: "3:55-4:00 PM",
      event_date: "Mar 11, 2011",
      event_description:
        "A massive earthquake and tsunami strike the Tōhoku region of Japan, causing widespread devastation and triggering the Fukushima nuclear disaster. The event results in thousands of deaths and displaces hundreds of thousands of people. The disaster leads to global discussions on nuclear safety and disaster preparedness. Recovery and rebuilding efforts continue for years.",
      source: "USGS"
    }
  ],
  "16": [
    {
      time_range: "4:00-4:05 PM",
      event_date: "June 28, 1914",
      event_description:
        "Archduke Franz Ferdinand of Austria and his wife Sophie are assassinated in Sarajevo. This event set off a chain reaction of alliances and hostilities that directly led to the outbreak of World War I. The assassination shocked Europe and the world, forever changing the course of 20th-century history. It is considered one of the most significant turning points in modern times.",
      source: "History.com"
    },
    {
      time_range: "4:05-4:10 PM",
      event_date: "Sept 2, 1945",
      event_description:
        "Japan formally surrenders aboard the USS Missouri in Tokyo Bay, bringing World War II to an official end. The ceremony was attended by representatives of the Allied powers, including General Douglas MacArthur. This moment marked the conclusion of the deadliest conflict in human history. It also set the stage for the postwar reconstruction of Japan and the beginning of the United Nations era.",
      source: "US Navy"
    },
    {
      time_range: "4:10-4:15 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change was one of the largest currency transitions ever attempted. The euro quickly became one of the world’s most important currencies, facilitating trade and travel. It symbolized economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "4:15-4:20 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    },
    {
      time_range: "4:20-4:25 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aimed to strengthen economic ties and remove trade barriers among the member states. This move laid the groundwork for the later formation of the Eurasian Economic Union. It has played a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "4:25-4:30 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This was the first major enlargement after the Cold War. The accession strengthened the EU’s political and economic influence in Europe. It also paved the way for future expansions.",
      source: "European Union"
    },
    {
      time_range: "4:30-4:35 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession followed years of reform and negotiation. Membership opened up new opportunities for trade, travel, and funding. It marked a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "4:35-4:40 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession was the result of a decade of reforms and negotiations. Croatia’s EU membership opened doors for economic growth and international cooperation. It also symbolized the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "4:40-4:45 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "4:45-4:50 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "4:50-4:55 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "4:55-5:00 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    }
  ],
  "17": [
    {
      time_range: "5:00-5:05 PM",
      event_date: "Nov 9, 1989",
      event_description:
        "The Berlin Wall, which had divided East and West Berlin for nearly three decades, is opened to the public. Crowds of East Germans cross into West Berlin, celebrating with friends and family. The fall of the Wall became a powerful symbol of the end of the Cold War. It paved the way for German reunification and a new era in European history.",
      source: "BBC"
    },
    {
      time_range: "5:05-5:10 PM",
      event_date: "May 6, 1954",
      event_description:
        "Roger Bannister becomes the first person to run a mile in under four minutes, achieving a time of 3:59.4. His record-breaking run took place at the Iffley Road Track in Oxford, England. Bannister’s achievement was considered one of the greatest athletic milestones of the 20th century. It inspired generations of runners and sports enthusiasts worldwide.",
      source: "Oxford University"
    },
    {
      time_range: "5:10-5:15 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change was one of the largest currency transitions ever attempted. The euro quickly became one of the world’s most important currencies, facilitating trade and travel. It symbolized economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "5:15-5:20 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aimed to strengthen economic ties and remove trade barriers among the member states. This move laid the groundwork for the later formation of the Eurasian Economic Union. It has played a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "5:20-5:25 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This was the first major enlargement after the Cold War. The accession strengthened the EU’s political and economic influence in Europe. It also paved the way for future expansions.",
      source: "European Union"
    },
    {
      time_range: "5:25-5:30 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession followed years of reform and negotiation. Membership opened up new opportunities for trade, travel, and funding. It marked a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "5:30-5:35 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession was the result of a decade of reforms and negotiations. Croatia’s EU membership opened doors for economic growth and international cooperation. It also symbolized the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "5:35-5:40 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "5:40-5:45 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "5:45-5:50 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "5:50-5:55 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "5:55-6:00 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "18": [
    {
      time_range: "6:00-6:05 PM",
      event_date: "July 21, 1969",
      event_description:
        "Apollo 11's lunar module, Eagle, lifts off from the surface of the Moon, beginning its return journey to Earth. This successful ascent marked the completion of the first manned lunar landing. The lunar module carried astronauts Neil Armstrong and Buzz Aldrin back to the command module in lunar orbit. The mission remains one of humanity’s greatest technological achievements.",
      source: "NASA"
    },
    {
      time_range: "6:05-6:10 PM",
      event_date: "June 6, 1944",
      event_description:
        "The D-Day landings in Normandy, France, come to an end as the last Allied troops secure their beachheads. The operation involved over 150,000 Allied soldiers and was the largest seaborne invasion in history. The success of D-Day marked the beginning of the liberation of Western Europe from Nazi occupation. It was a pivotal moment in World War II.",
      source: "Imperial War Museum"
    },
    {
      time_range: "6:10-6:15 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change was one of the largest currency transitions ever attempted. The euro quickly became one of the world’s most important currencies, facilitating trade and travel. It symbolized economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "6:15-6:20 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aimed to strengthen economic ties and remove trade barriers among the member states. This move laid the groundwork for the later formation of the Eurasian Economic Union. It has played a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "6:20-6:25 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This was the first major enlargement after the Cold War. The accession strengthened the EU’s political and economic influence in Europe. It also paved the way for future expansions.",
      source: "European Union"
    },
    {
      time_range: "6:25-6:30 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession followed years of reform and negotiation. Membership opened up new opportunities for trade, travel, and funding. It marked a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "6:30-6:35 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession was the result of a decade of reforms and negotiations. Croatia’s EU membership opened doors for economic growth and international cooperation. It also symbolized the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "6:35-6:40 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    { 
      time_range: "6:40-6:45 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "6:45-6:50 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "6:50-6:55 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "6:55-7:00 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "19": [
    {
      time_range: "7:00-7:05 PM",
      event_date: "Dec 31, 1999",
      event_description:
        "Millennium celebrations begin in Greenwich, UK, marking the arrival of the year 2000. People around the world watched as Big Ben struck midnight, ushering in the new millennium. The event was broadcast globally and featured spectacular fireworks on the River Thames. It was a symbol of hope and unity for the future.",
      source: "BBC"
    },
    {
      time_range: "7:05-7:10 PM",
      event_date: "May 1, 2011",
      event_description:
        "Osama bin Laden, leader of al-Qaeda and mastermind of the September 11 attacks, is killed by US Navy SEALs in Abbottabad, Pakistan. The operation was authorized by President Barack Obama and ended a decade-long manhunt. Bin Laden’s death was announced to the world later that evening. The event was seen as a major victory in the fight against terrorism.",
      source: "White House"
    },
    {
      time_range: "7:10-7:15 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change was one of the largest currency transitions ever attempted. The euro quickly became one of the world’s most important currencies, facilitating trade and travel. It symbolized economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "7:15-7:20 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aimed to strengthen economic ties and remove trade barriers among the member states. This move laid the groundwork for the later formation of the Eurasian Economic Union. It has played a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "7:20-7:25 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This was the first major enlargement after the Cold War. The accession strengthened the EU’s political and economic influence in Europe. It also paved the way for future expansions.",
      source: "European Union"
    },
    {
      time_range: "7:25-7:30 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession followed years of reform and negotiation. Membership opened up new opportunities for trade, travel, and funding. It marked a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "7:30-7:35 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession was the result of a decade of reforms and negotiations. Croatia’s EU membership opened doors for economic growth and international cooperation. It also symbolized the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "7:35-7:40 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "7:40-7:45 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "7:45-7:50 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "7:50-7:55 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "7:55-8:00 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "20": [
    {
      time_range: "8:00-8:05 PM",
      event_date: "Nov 9, 1989",
      event_description:
        "The Berlin Wall opening is announced on East German television, leading to crowds gathering at the border crossings. In a matter of hours, people from East and West Berlin are celebrating together atop the wall. The event becomes a symbol of the end of the Cold War and the beginning of German reunification. It marks a turning point in European and world history.",
      source: "BBC"
    },
    {
      time_range: "8:05-8:10 PM",
      event_date: "Aug 6, 1945",
      event_description:
        "The atomic bomb is dropped on Hiroshima, Japan, by the United States during World War II. The explosion destroys much of the city and kills tens of thousands instantly. This was the first use of nuclear weapons in warfare, leading to Japan's eventual surrender. The event remains a powerful symbol of the destructive potential of nuclear arms.",
      source: "US National Archives"
    },
    {
      time_range: "8:10-8:15 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change was one of the largest currency transitions ever attempted. The euro quickly became one of the world’s most important currencies, facilitating trade and travel. It symbolized economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "8:15-8:20 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aimed to strengthen economic ties and remove trade barriers among the member states. This move laid the groundwork for the later formation of the Eurasian Economic Union. It has played a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "8:20-8:25 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This was the first major enlargement after the Cold War. The accession strengthened the EU’s political and economic influence in Europe. It also paved the way for future expansions.",
      source: "European Union"
    },
    {
      time_range: "8:25-8:30 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession followed years of reform and negotiation. Membership opened up new opportunities for trade, travel, and funding. It marked a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "8:30-8:35 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession was the result of a decade of reforms and negotiations. Croatia’s EU membership opened doors for economic growth and international cooperation. It also symbolized the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "8:35-8:40 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "8:40-8:45 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "8:45-8:50 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "8:50-8:55 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "8:55-9:00 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "21": [
    {
      time_range: "9:00-9:05 PM",
      event_date: "July 16, 1969",
      event_description:
        "Apollo 11 enters lunar orbit, preparing for the historic moon landing. This mission, led by astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins, was a pivotal moment in the space race. The successful entry into lunar orbit set the stage for Armstrong's famous first steps on the Moon. The mission inspired generations and showcased the possibilities of human space exploration.",
      source: "NASA"
    },
    {
      time_range: "9:05-9:10 PM",
      event_date: "Aug 9, 1945",
      event_description:
        "The United States drops an atomic bomb on Nagasaki, Japan, during World War II. The explosion devastated the city and killed tens of thousands of people. This was the second use of nuclear weapons in warfare, following Hiroshima three days earlier. The bombing led to Japan's unconditional surrender and the end of World War II.",
      source: "US National Archives"
    },
    {
      time_range: "9:10-9:15 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This transition was one of the largest currency changes ever attempted. The euro quickly became one of the world’s most important currencies, facilitating trade and travel. It symbolized economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "9:15-9:20 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aimed to strengthen economic ties and remove trade barriers among the member states. This move laid the groundwork for the later formation of the Eurasian Economic Union. It has played a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "9:20-9:25 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This was the first major enlargement after the Cold War. The accession strengthened the EU’s political and economic influence in Europe. It also paved the way for future expansions.",
      source: "European Union"
    },
    {
      time_range: "9:25-9:30 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession followed years of reform and negotiation. Membership opened up new opportunities for trade, travel, and funding. It marked a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "9:30-9:35 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession was the result of a decade of reforms and negotiations. Croatia’s EU membership opened doors for economic growth and international cooperation. It also symbolized the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "9:35-9:40 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "9:40-9:45 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "9:45-9:50 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "9:50-9:55 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "9:55-10:00 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "22": [
    {
      time_range: "10:00-10:05 PM",
      event_date: "Dec 31, 1999",
      event_description:
        "The new millennium officially begins in London and much of the world, as clocks strike midnight. Celebrations erupt globally, with fireworks, concerts, and televised events marking the transition from the 20th to the 21st century. The Y2K computer bug, which was widely feared, passes without major incident. The moment is remembered as a symbol of hope and renewal.",
      source: "BBC"
    },
    {
      time_range: "10:05-10:10 PM",
      event_date: "May 1, 2011",
      event_description:
        "President Barack Obama addresses the United States and the world to announce the death of Osama bin Laden. The speech confirms that the al-Qaeda leader was killed in a raid by US Navy SEALs in Pakistan. The announcement is met with spontaneous celebrations in American cities. It marks a major milestone in the fight against terrorism.",
      source: "White House"
    },
    {
      time_range: "10:10-10:15 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change was one of the largest currency transitions ever attempted. The euro quickly became one of the world’s most important currencies, facilitating trade and travel. It symbolized economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "10:15-10:20 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aimed to strengthen economic ties and remove trade barriers among the member states. This move laid the groundwork for the later formation of the Eurasian Economic Union. It has played a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "10:20-10:25 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This was the first major enlargement after the Cold War. The accession strengthened the EU’s political and economic influence in Europe. It also paved the way for future expansions.",
      source: "European Union"
    },
    {
      time_range: "10:25-10:30 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession followed years of reform and negotiation. Membership opened up new opportunities for trade, travel, and funding. It marked a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "10:30-10:35 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession was the result of a decade of reforms and negotiations. Croatia’s EU membership opened doors for economic growth and international cooperation. It also symbolized the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "10:35-10:40 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "10:40-10:45 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "10:45-10:50 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "10:50-10:55 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "10:55-11:00 PM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "23": [
    {
      time_range: "11:00-11:05 PM",
      event_date: "July 20, 1969",
      event_description:
        "The Apollo 11 crew prepares to sleep on the Moon after their historic lunar landing. Neil Armstrong and Buzz Aldrin rest inside the lunar module, while Michael Collins orbits above in the command module. Their successful mission marks a defining moment in human exploration. The world watches in awe as humanity spends its first night on another celestial body.",
      source: "NASA"
    },
    {
      time_range: "11:05-11:10 PM",
      event_date: "Dec 31, 1999",
      event_description:
        "As the final hour of the 20th century approaches, cities worldwide prepare for millennium celebrations. Major capitals host concerts, fireworks, and countdown events. The Y2K computer bug, a global concern, is closely monitored. The world eagerly anticipates the arrival of the year 2000.",
      source: "BBC"
    },
    {
      time_range: "11:10-11:15 PM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change was one of the largest currency transitions ever attempted. The euro quickly became one of the world’s most important currencies, facilitating trade and travel. It symbolized economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "11:15-11:20 PM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aimed to strengthen economic ties and remove trade barriers among the member states. This move laid the groundwork for the later formation of the Eurasian Economic Union. It has played a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "11:20-11:25 PM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This was the first major enlargement after the Cold War. The accession strengthened the EU’s political and economic influence in Europe. It also paved the way for future expansions.",
      source: "European Union"
    },
    {
      time_range: "11:25-11:30 PM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession followed years of reform and negotiation. Membership opened up new opportunities for trade, travel, and funding. It marked a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "11:30-11:35 PM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession was the result of a decade of reforms and negotiations. Croatia’s EU membership opened doors for economic growth and international cooperation. It also symbolized the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "11:35-11:40 PM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "11:40-11:45 PM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "11:45-11:50 PM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "11:50-11:55 PM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "11:55-12:00 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "24": [
    {
      time_range: "12:00-12:05 AM",
      event_date: "Jan 1, 45 BC",
      event_description:
        "The Julian calendar takes effect as the civil calendar of the Roman Republic, establishing January 1 as the new date of the new year. This reform, introduced by Julius Caesar, replaced the previous Roman calendar and aligned the year more closely with the solar cycle. The Julian calendar remained in widespread use for over 1,600 years. It laid the foundation for modern Western calendars.",
      source: "Wikipedia"
    },
    {
      time_range: "12:05-12:10 AM",
      event_date: "Jan 1, 404",
      event_description:
        "Saint Telemachus, a Christian monk, attempts to stop a gladiatorial fight in a Roman amphitheatre and is stoned to death by the crowd. In response, Emperor Honorius issues a historic ban on gladiatorial games. This act marks a turning point in the decline of such brutal spectacles in the Roman Empire. It is remembered as a symbol of early Christian pacifism.",
      source: "Wikipedia"
    },
    {
      time_range: "12:10-12:15 AM",
      event_date: "Jan 1, 153 BC",
      event_description:
        "For the first time, Roman consuls begin their year in office on January 1. This change was part of a broader calendar reform in the Roman Republic. It established a tradition that continues in many modern societies, where the new year begins in January. The reform helped standardize political and administrative cycles.",
      source: "Wikipedia"
    },
    {
      time_range: "12:15-12:20 AM",
      event_date: "Jan 1, 1801",
      event_description:
        "The legislative union of Great Britain and Ireland is completed, forming the United Kingdom of Great Britain and Ireland. This political change followed the Acts of Union 1800. It created a single parliament at Westminster and unified the two countries under one crown. The union would last until the establishment of the Irish Free State in 1922.",
      source: "Internet4Classrooms"
    },
    {
      time_range: "12:20-12:25 AM",
      event_date: "Jan 1, 1863",
      event_description:
        "President Abraham Lincoln issues the Emancipation Proclamation, declaring all slaves in Confederate-held territory to be free. This executive order was a turning point in the American Civil War. It shifted the war’s focus to the abolition of slavery and paved the way for the Thirteenth Amendment. The proclamation is celebrated as a milestone in the fight for civil rights.",
      source: "US National Archives"
    },
    {
      time_range: "12:25-12:30 AM",
      event_date: "Jan 1, 1892",
      event_description:
        "Ellis Island opens in New York Harbor to begin processing immigrants into the United States. Over the next decades, millions of newcomers would pass through its gates. Ellis Island became a symbol of hope and opportunity for people seeking a new life in America. Its legacy endures as a key chapter in US immigration history.",
      source: "Internet4Classrooms"
    },
    {
      time_range: "12:30-12:35 AM",
      event_date: "Jan 1, 1947",
      event_description:
        "The American and British occupation zones in Germany merge to form the Bizone, later becoming West Germany. This administrative unification was a crucial step in post-World War II reconstruction. It laid the groundwork for the Marshall Plan and the eventual creation of the Federal Republic of Germany. The Bizone helped stabilize Western Europe during the early Cold War.",
      source: "Internet4Classrooms"
    },
    {
      time_range: "12:35-12:40 AM",
      event_date: "Jan 1, 1948",
      event_description:
        "The British railway network is nationalized to form British Railways. This move brought the country's rail infrastructure under government ownership. The goal was to modernize and improve efficiency in the aftermath of World War II. British Railways would operate until privatization began in the 1990s.",
      source: "Wikipedia"
    },
    {
      time_range: "12:40-12:45 AM",
      event_date: "Jan 1, 1959",
      event_description:
        "Fidel Castro and Cuban communist revolutionaries enter Havana, marking the triumph of the Cuban Revolution. The overthrow of Fulgencio Batista’s regime led to the establishment of a socialist state in Cuba. Castro’s victory had a profound impact on Cold War geopolitics. The revolution inspired movements throughout Latin America and beyond.",
      source: "History.com"
    },
    {
      time_range: "12:45-12:50 AM",
      event_date: "Jan 1, 1993",
      event_description:
        "Czechoslovakia officially splits into the Czech Republic and Slovakia, an event known as the Velvet Divorce. The separation was peaceful and negotiated by both governments. It marked the end of a shared state that had existed since 1918. Both countries went on to join the European Union and NATO.",
      source: "Historic-Newspapers"
    },
    {
      time_range: "12:50-12:55 AM",
      event_date: "Jan 1, 2002",
      event_description:
        "The euro, the monetary unit of the European Union, is introduced with the issuance of both currency and coins. This transition was one of the largest currency changes in history. The euro quickly became one of the world’s most important currencies, facilitating trade and travel. It symbolized economic unity and cooperation across much of Europe.",
      source: "Britannica"
    },
    {
      time_range: "12:55-1:00 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The 21st century and the 3rd millennium begin per the Gregorian calendar. Celebrations take place around the world as people welcome the year 2000. The anticipated Y2K computer bug passes without major incident. The event is remembered as a symbol of hope and technological progress.",
      source: "Wikipedia"
    }
  ],
  "1": [
    {
      time_range: "1:00-1:05 AM",
      event_date: "Jan 1, 1984",
      event_description:
        "Brunei gains independence from the United Kingdom and becomes a fully sovereign nation. The small Southeast Asian country had been a British protectorate for nearly a century. Independence Day is celebrated annually in Brunei with parades and cultural festivities. The Sultan of Brunei remains one of the world's longest-reigning monarchs.",
      source: "BBC"
    },
    {
      time_range: "1:05-1:10 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "The World Trade Organization (WTO) is officially established, replacing the General Agreement on Tariffs and Trade (GATT). The WTO oversees international trade rules and helps resolve disputes between member countries. Its creation marked a major step toward global economic integration. Today, the WTO has over 160 member nations.",
      source: "WTO"
    },
    {
      time_range: "1:10-1:15 AM",
      event_date: "Jan 1, 1999",
      event_description:
        "The euro is introduced as an electronic currency for banking and financial transactions in 11 European countries. Physical coins and notes would follow in 2002. The euro's introduction marked a major milestone in European integration. It is now used by millions of people across the continent.",
      source: "European Central Bank"
    },
    {
      time_range: "1:15-1:20 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The United States officially transfers control of the Panama Canal to Panama. This historic handover ended nearly a century of American administration of the canal. The event was celebrated with parades and ceremonies in Panama City. The canal remains a vital artery for global trade.",
      source: "US Government"
    },
    {
      time_range: "1:20-1:25 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Bulgaria and Romania join the European Union, expanding the bloc further into Eastern Europe. Their accession marked the EU’s largest single expansion to date. Membership provided access to EU markets, funding, and political cooperation. It was a major milestone in both countries' post-communist transitions.",
      source: "European Union"
    },
    {
      time_range: "1:25-1:30 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as a full member after years of reforms and negotiations. The country’s accession is seen as a symbol of stability and progress in the Balkans. EU membership opened new opportunities for trade, travel, and cooperation. Croatia became the 28th member of the EU.",
      source: "European Union"
    },
    {
      time_range: "1:30-1:35 AM",
      event_date: "Jan 1, 1962",
      event_description:
        "Western Samoa becomes independent from New Zealand, becoming the first Pacific island country to achieve independence in the 20th century. The event is celebrated annually as Independence Day. Samoa’s independence inspired other Pacific nations to seek self-governance. The country is now known simply as Samoa.",
      source: "NZ History"
    },
    {
      time_range: "1:35-1:40 AM",
      event_date: "Jan 1, 2016",
      event_description:
        "China officially ends its one-child policy, allowing families to have two children. The policy change was prompted by concerns over an aging population and shrinking workforce. The one-child policy had been in place since 1979. The new policy aimed to balance population growth and economic development.",
      source: "Xinhua"
    },
    {
      time_range: "1:40-1:45 AM",
      event_date: "Jan 1, 1956",
      event_description:
        "Sudan becomes an independent republic, ending decades of joint British-Egyptian rule. Independence was celebrated in Khartoum with parades and festivities. Sudan’s independence inspired other African nations in their own struggles for freedom. The country’s history since then has been marked by both progress and challenges.",
      source: "BBC"
    },
    {
      time_range: "1:45-1:50 AM",
      event_date: "Apr 26, 1986",
      event_description:
        "At 1:23 AM Moscow time, the Chernobyl nuclear disaster occurs as Reactor 4 explodes at the Chernobyl Nuclear Power Plant in Ukraine. The explosion releases large amounts of radioactive material into the atmosphere. The disaster is considered the worst nuclear accident in history. It led to widespread health, environmental, and political consequences.",
      source: "IAEA"
    },
    {
      time_range: "1:50-1:55 AM",
      event_date: "July 20, 1969",
      event_description:
        "At 1:46 AM UTC, Apollo 11’s lunar module lands safely on the Moon. Astronauts Neil Armstrong and Buzz Aldrin prepare for their historic moonwalk. The landing fulfills President Kennedy’s goal of sending Americans to the Moon before the end of the 1960s. The achievement is broadcast live to millions around the world.",
      source: "NASA"
    },
    {
      time_range: "1:55-2:00 AM",
      event_date: "Jan 1, 1973",
      event_description:
        "The United Kingdom, Ireland, and Denmark officially join the European Economic Community (EEC), marking the first enlargement of the organization. Their accession strengthens economic and political cooperation in Western Europe. The EEC would later evolve into the European Union. This expansion paved the way for further enlargements in the decades to come.",
      source: "EU"
    }
  ],
  "2": [
    {
      time_range: "2:00-2:05 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joins the European Economic Community (EEC), the precursor to the European Union. This historic step marked Greece’s integration into the Western European economic and political sphere. Membership brought economic aid, access to new markets, and a strengthened democracy. It paved the way for further EU expansion into Southern Europe.",
      source: "European Union"
    },
    {
      time_range: "2:05-2:10 AM",
      event_date: "Jan 1, 1991",
      event_description:
        "The Soviet Union is officially dissolved, ending over 70 years of communist rule. The dissolution leads to the independence of 15 republics, including Russia, Ukraine, and the Baltic states. The end of the USSR marks a major turning point in world history. It brings the Cold War to a close and reshapes the global political landscape.",
      source: "BBC"
    },
    {
      time_range: "2:10-2:15 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protests NAFTA and demands indigenous rights, land reform, and democracy. The uprising draws international attention to social inequalities in Mexico. It leads to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "2:15-2:20 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Slovenia adopts the euro as its official currency, becoming the first of the 2004 EU enlargement countries to do so. The move further integrates Slovenia’s economy with the rest of the Eurozone. Euro adoption is seen as a sign of economic stability and progress. It marks a milestone in the country’s post-communist transformation.",
      source: "European Central Bank"
    },
    {
      time_range: "2:20-2:25 AM",
      event_date: "Jan 1, 2008",
      event_description:
        "Cyprus and Malta officially adopt the euro, replacing their national currencies. The transition to the euro is celebrated with public events and festivities in both countries. Euro adoption brings economic benefits and easier travel within the Eurozone. It also symbolizes the countries’ deepening integration with the European Union.",
      source: "European Central Bank"
    },
    {
      time_range: "2:25-2:30 AM",
      event_date: "Jan 1, 2009",
      event_description:
        "Slovakia adopts the euro, becoming the 16th member of the Eurozone. The switch from the Slovak koruna to the euro is marked by celebrations across the country. Euro adoption is seen as a major achievement for Slovakia’s economy. It further strengthens the country’s ties to Western Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "2:30-2:35 AM",
      event_date: "Jan 1, 2011",
      event_description:
        "Estonia becomes the 17th country to adopt the euro as its official currency. The move is praised as a sign of the country’s economic stability and commitment to European integration. Estonia’s adoption of the euro is celebrated with fireworks and public events. It marks another step in the expansion of the Eurozone.",
      source: "European Central Bank"
    },
    {
      time_range: "2:35-2:40 AM",
      event_date: "Jan 1, 2014",
      event_description:
        "Latvia adopts the euro, joining the Eurozone as its 18th member. The transition from the Latvian lats to the euro is marked by celebrations and optimism for the future. Euro adoption is expected to boost Latvia’s economy and attract foreign investment. It also strengthens the country’s ties to the rest of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "2:40-2:45 AM",
      event_date: "Jan 1, 2015",
      event_description:
        "Lithuania adopts the euro, becoming the 19th member of the Eurozone. The switch from the litas to the euro is celebrated nationwide. Euro adoption is seen as a symbol of Lithuania’s European identity and economic progress. It completes the Baltic states’ integration into the Eurozone.",
      source: "European Central Bank"
    },
    {
      time_range: "2:45-2:50 AM",
      event_date: "Apr 15, 1912",
      event_description:
        "At 2:45 AM ship time, the RMS Titanic sinks in the North Atlantic after striking an iceberg. Over 1,500 passengers and crew lose their lives in one of the deadliest maritime disasters in history. The tragedy leads to major changes in maritime safety regulations. Titanic’s story continues to captivate people around the world.",
      source: "US Senate Inquiry"
    },
    {
      time_range: "2:50-2:55 AM",
      event_date: "July 21, 1969",
      event_description:
        "At 2:56 AM UTC, Neil Armstrong becomes the first human to set foot on the Moon. His famous words, 'That's one small step for man, one giant leap for mankind,' are broadcast live to millions. The Apollo 11 mission is a defining moment in space exploration. Armstrong’s moonwalk inspires generations to dream big.",
      source: "NASA"
    },
    {
      time_range: "2:55-3:00 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The Y2K computer bug, feared to cause global technological chaos, passes without major incident. Years of preparation and software updates prevent widespread problems. The smooth transition is a relief for businesses, governments, and the public. The event highlights the importance of IT infrastructure in modern society.",
      source: "BBC"
    }
  ],
  "3": [
    {
      time_range: "3:00-3:05 AM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially becomes the 49th state of the United States. The transition from territory to statehood expands the US both geographically and demographically. Alaska’s admission brings new resources and strategic significance, especially during the Cold War. Statehood is celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "3:05-3:10 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Palau becomes self-governing in free association with the United States. This marks a significant step toward full independence, which Palau achieves in 1994. The agreement provides for US defense and economic assistance. Palau’s self-governance serves as a model for other Pacific island nations.",
      source: "US Department of State"
    },
    {
      time_range: "3:10-3:15 AM",
      event_date: "Jan 1, 1993",
      event_description:
        "The Czech Republic and Slovakia become independent nations after the peaceful dissolution of Czechoslovakia, known as the Velvet Divorce. The split is amicable and negotiated by both governments. Both countries go on to join the European Union and NATO. The event is seen as a model for peaceful state separation.",
      source: "Historic-Newspapers"
    },
    {
      time_range: "3:15-3:20 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The North American Free Trade Agreement (NAFTA) comes into effect, creating a trilateral trade bloc in North America. The agreement eliminates most tariffs between the US, Canada, and Mexico. NAFTA boosts trade and economic integration but also sparks debate over jobs and labor standards. It is later replaced by the United States–Mexico–Canada Agreement (USMCA).",
      source: "US Government"
    },
    {
      time_range: "3:20-3:25 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "3:25-3:30 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The Y2K computer bug, feared to cause global technological chaos, passes without major incident. Years of preparation and software updates prevent widespread problems. The smooth transition is a relief for businesses, governments, and the public. The event highlights the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "3:30-3:35 AM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "3:35-3:40 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "3:40-3:45 AM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "3:45-3:50 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "3:50-3:55 AM",
      event_date: "Feb 1, 2003",
      event_description:
        "The Space Shuttle Columbia breaks up on re-entry over Texas, killing all seven astronauts on board. The disaster occurs just minutes before the scheduled landing. The tragedy prompts a suspension of the shuttle program and a major investigation. It highlights the dangers and challenges of human spaceflight.",
      source: "NASA"
    },
    {
      time_range: "3:55-4:00 AM",
      event_date: "Apr 26, 1986",
      event_description:
        "At 3:23 AM local time, Chernobyl Reactor 4 explodes in Ukraine, releasing massive amounts of radioactive material. The disaster is considered the worst nuclear accident in history. It leads to widespread health, environmental, and political consequences. The Chernobyl exclusion zone remains uninhabitable to this day.",
      source: "IAEA"
    }
  ],
  "4": [
    {
      time_range: "4:00-4:05 AM",
      event_date: "Jan 1, 1993",
      event_description:
        "The Czech Republic and Slovakia become independent nations after the peaceful dissolution of Czechoslovakia, known as the Velvet Divorce. The split is amicable and negotiated by both governments. Both countries go on to join the European Union and NATO. The event is seen as a model for peaceful state separation.",
      source: "Historic-Newspapers"
    },
    {
      time_range: "4:05-4:10 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The North American Free Trade Agreement (NAFTA) comes into effect, creating a trilateral trade bloc in North America. The agreement eliminates most tariffs between the US, Canada, and Mexico. NAFTA boosts trade and economic integration but also sparks debate over jobs and labor standards. It is later replaced by the United States–Mexico–Canada Agreement (USMCA).",
      source: "US Government"
    },
    {
      time_range: "4:10-4:15 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "4:15-4:20 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The Y2K computer bug, feared to cause global technological chaos, passes without major incident. Years of preparation and software updates prevent widespread problems. The smooth transition is a relief for businesses, governments, and the public. The event highlights the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "4:20-4:25 AM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "4:25-4:30 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "4:30-4:35 AM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "4:35-4:40 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "4:40-4:45 AM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "4:45-4:50 AM",
      event_date: "Jan 17, 1995",
      event_description:
        "The Great Hanshin earthquake strikes the city of Kobe, Japan, at 4:31 AM local time. The disaster kills over 6,000 people and causes widespread destruction. It is one of the most devastating earthquakes in Japan's history. The event leads to major changes in disaster preparedness and urban planning.",
      source: "USGS"
    },
    {
      time_range: "4:50-4:55 AM",
      event_date: "June 6, 1944",
      event_description:
        "At 4:45 AM British time, the D-Day landings begin on the beaches of Normandy, France. Allied forces launch the largest seaborne invasion in history to liberate Western Europe from Nazi occupation. The operation is a turning point in World War II. The bravery of the soldiers is commemorated each year on D-Day.",
      source: "Imperial War Museum"
    },
    {
      time_range: "4:55-5:00 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joins the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "5": [
    {
      time_range: "5:00-5:05 AM",
      event_date: "Apr 18, 1906",
      event_description:
        "The San Francisco earthquake strikes at 5:12 AM local time, devastating the city and causing widespread fires. Over 3,000 people are killed and more than 80% of the city is destroyed. The disaster leads to major changes in building codes and urban planning. It remains one of the most significant natural disasters in U.S. history.",
      source: "USGS"
    },
    {
      time_range: "5:05-5:10 AM",
      event_date: "July 16, 1945",
      event_description:
        "At 5:29 AM local time, the first atomic bomb test, codenamed 'Trinity', is conducted in the New Mexico desert. The explosion marks the dawn of the nuclear age. The successful test paves the way for the use of atomic bombs in World War II. It also ushers in a new era of global politics and security concerns.",
      source: "US Department of Energy"
    },
    {
      time_range: "5:10-5:15 AM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "5:15-5:20 AM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "5:20-5:25 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "5:25-5:30 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "5:30-5:35 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "5:35-5:40 AM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "5:40-5:45 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "5:45-5:50 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "5:50-5:55 AM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "5:55-6:00 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "6": [
    {
      time_range: "6:00-6:05 AM",
      event_date: "Sept 1, 1939",
      event_description:
        "Germany invades Poland, marking the beginning of World War II in Europe. The attack is launched in the early morning hours and quickly overwhelms Polish defenses. The invasion prompts Britain and France to declare war on Germany two days later. This event changes the course of the 20th century and leads to a global conflict.",
      source: "BBC"
    },
    {
      time_range: "6:05-6:10 AM",
      event_date: "Dec 7, 1941",
      event_description:
        "The Japanese attack on Pearl Harbor begins, drawing the United States into World War II. The surprise assault destroys much of the US Pacific Fleet and causes over 2,400 American deaths. President Franklin D. Roosevelt calls it 'a date which will live in infamy.' The attack leads to a declaration of war on Japan the following day.",
      source: "US Navy"
    },
    {
      time_range: "6:10-6:15 AM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "6:15-6:20 AM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "6:20-6:25 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "6:25-6:30 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "6:30-6:35 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "6:35-6:40 AM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "6:40-6:45 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "6:45-6:50 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "6:50-6:55 AM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "6:55-7:00 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ],
  "7": [
    {
      time_range: "7:00-7:05 AM",
      event_date: "Apr 9, 1865",
      event_description:
        "General Robert E. Lee surrenders to General Ulysses S. Grant at Appomattox Court House, Virginia. This event marks the effective end of the American Civil War. The surrender terms are generous, aiming to promote reconciliation and healing. The event is a pivotal moment in United States history.",
      source: "National Park Service"
    },
    {
      time_range: "7:05-7:10 AM",
      event_date: "Dec 7, 1941",
      event_description:
        "The main wave of the Japanese attack on Pearl Harbor strikes, devastating the US Pacific Fleet. The surprise assault results in the loss of eight battleships and over 2,400 American lives. The attack leads to the United States' entry into World War II. The event is remembered as 'a date which will live in infamy.'",
      source: "US Navy"
    },
    {
      time_range: "7:10-7:15 AM",
      event_date: "Jan 1, 2002",
      event_description:
        "Euro coins and notes become legal tender in 12 European countries, replacing their national currencies. This historic change is one of the largest currency transitions ever attempted. The euro quickly becomes one of the world’s most important currencies, facilitating trade and travel. It symbolizes economic unity and cooperation across much of Europe.",
      source: "European Central Bank"
    },
    {
      time_range: "7:15-7:20 AM",
      event_date: "Jan 1, 2010",
      event_description:
        "Kazakhstan joins the Customs Union with Russia and Belarus, creating a single market for goods and services. The union aims to strengthen economic ties and remove trade barriers among the member states. This move lays the groundwork for the later formation of the Eurasian Economic Union. It plays a significant role in Central Asian trade.",
      source: "Eurasian Economic Union"
    },
    {
      time_range: "7:20-7:25 AM",
      event_date: "Jan 1, 1995",
      event_description:
        "Austria, Finland, and Sweden officially join the European Union, expanding the bloc to 15 member states. This is the first major enlargement after the Cold War. The new members adopt EU laws and policies, strengthening political and economic ties with Western Europe. The enlargement paves the way for future EU expansions.",
      source: "European Union"
    },
    {
      time_range: "7:25-7:30 AM",
      event_date: "Jan 1, 2007",
      event_description:
        "Romania joins the European Union, along with Bulgaria, marking the EU’s largest single expansion. The accession follows years of reform and negotiation. Membership opens up new opportunities for trade, travel, and funding. It marks a major milestone in Romania’s post-communist development.",
      source: "European Union"
    },
    {
      time_range: "7:30-7:35 AM",
      event_date: "Jan 1, 2013",
      event_description:
        "Croatia joins the European Union as its 28th member state. The accession is the result of a decade of reforms and negotiations. Croatia’s EU membership opens doors for economic growth and international cooperation. It also symbolizes the country’s post-war recovery and integration with Europe.",
      source: "European Union"
    },
    {
      time_range: "7:35-7:40 AM",
      event_date: "Jan 1, 1979",
      event_description:
        "The United States and China establish formal diplomatic relations for the first time since 1949. This historic move ended decades of hostility and isolation. The normalization of relations led to increased trade, cultural exchange, and global cooperation. It remains a cornerstone of modern international diplomacy.",
      source: "US Department of State"
    },
    {
      time_range: "7:40-7:45 AM",
      event_date: "Jan 1, 1994",
      event_description:
        "The Zapatista uprising begins in Chiapas, Mexico, as indigenous rebels declare war against the Mexican government. The movement protested NAFTA and demanded indigenous rights and land reform. The uprising drew international attention to social inequalities in Mexico. It led to negotiations and ongoing activism for indigenous communities.",
      source: "BBC"
    },
    {
      time_range: "7:45-7:50 AM",
      event_date: "Jan 1, 2000",
      event_description:
        "The world entered the year 2000, and the anticipated Y2K computer bug passed without major incident. Many feared that computer systems would fail due to the date change, but extensive preparations prevented widespread problems. The smooth transition was a relief for businesses, governments, and the public. The event highlighted the importance of IT infrastructure in modern society.",
      source: "BBC"
    },
    {
      time_range: "7:50-7:55 AM",
      event_date: "Jan 1, 1959",
      event_description:
        "Alaska officially became the 49th state of the United States. The transition from territory to statehood expanded the US both geographically and demographically. Alaska’s admission brought new resources and strategic significance, especially during the Cold War. Statehood was celebrated across Alaska with parades and festivities.",
      source: "US Government"
    },
    {
      time_range: "7:55-8:00 AM",
      event_date: "Jan 1, 1981",
      event_description:
        "Greece joined the European Economic Community (EEC), the precursor to the European Union. This marked a turning point in Greece’s postwar history, integrating the nation with Western Europe. Membership brought economic aid, access to markets, and political stability. Greece’s accession was the first expansion of the EEC into Southern Europe.",
      source: "European Union"
    }
  ]
};
