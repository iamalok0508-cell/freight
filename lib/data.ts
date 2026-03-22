// All 57 routes extracted from Cosmo Carrying emails
// Factory: Duraxia Industries, Dabaspet, Nelamangala, 562111
// Coordinates: [lat, lng]

export interface Route {
  destination: string;
  pincode: string;
  state: string;
  lat: number;
  lng: number;
  distanceKm: number;
  cost: number;
  vehicleType: string;
  ratePerKm: number;
  date: string;
  approved: boolean;
}

// Factory coordinates: Dabaspet, Nelamangala, Karnataka
export const FACTORY = {
  name: "Duraxia Industries, Dabaspet",
  pincode: "562111",
  lat: 13.0827,
  lng: 77.3983,
};

export const ROUTES: Route[] = [
  { destination: "Madurai", pincode: "625001", state: "Tamil Nadu", lat: 9.9252, lng: 78.1198, distanceKm: 490, cost: 41000, vehicleType: "36ft SXL (7MT)", ratePerKm: 83.7, date: "13 Mar 2026", approved: false },
  { destination: "Dharmabad", pincode: "584223", state: "Karnataka", lat: 18.0, lng: 77.74, distanceKm: 510, cost: 33000, vehicleType: "20ft Container (6MT)", ratePerKm: 64.7, date: "07 Mar 2026", approved: false },
  { destination: "Vasai & Khanapur", pincode: "401201", state: "Maharashtra", lat: 19.3641, lng: 72.8347, distanceKm: 1030, cost: 33000, vehicleType: "32ft SXL (7MT)", ratePerKm: 32.0, date: "06 Mar 2026", approved: true },
  { destination: "Hyderabad", pincode: "500001", state: "Telangana", lat: 17.3850, lng: 78.4867, distanceKm: 570, cost: 31000, vehicleType: "36ft SXL (7MT)", ratePerKm: 54.4, date: "23 Feb 2026", approved: true },
  { destination: "Belgaum (Belagavi)", pincode: "590001", state: "Karnataka", lat: 15.8497, lng: 74.4977, distanceKm: 500, cost: 26000, vehicleType: "32ft SXL (7MT)", ratePerKm: 52.0, date: "17 Feb 2026", approved: false },
  { destination: "Nirmal", pincode: "504106", state: "Telangana", lat: 19.0951, lng: 78.3496, distanceKm: 650, cost: 47000, vehicleType: "32ft SXL (7MT)", ratePerKm: 72.3, date: "12 Feb 2026", approved: false },
  { destination: "Coimbatore + Madurai", pincode: "641001", state: "Tamil Nadu", lat: 11.0168, lng: 76.9558, distanceKm: 480, cost: 39000, vehicleType: "32ft SXL (7MT)", ratePerKm: 81.3, date: "10 Feb 2026", approved: false },
  { destination: "Chiplun", pincode: "415605", state: "Maharashtra", lat: 17.5333, lng: 73.5167, distanceKm: 810, cost: 43000, vehicleType: "32ft SXL (7MT)", ratePerKm: 53.1, date: "29 Jan 2026", approved: true },
  { destination: "Medak & Udgir", pincode: "502110", state: "Telangana", lat: 18.0496, lng: 78.2627, distanceKm: 610, cost: 37000, vehicleType: "32ft SXL (7MT)", ratePerKm: 60.7, date: "27 Jan 2026", approved: true },
  { destination: "Shahpur + Gulbarga + Bijapur + Thane", pincode: "585101", state: "Karnataka", lat: 17.3297, lng: 76.8200, distanceKm: 530, cost: 52000, vehicleType: "32ft SXL (7MT)", ratePerKm: 98.1, date: "22 Jan 2026", approved: true },
  { destination: "Majhgawan", pincode: "485441", state: "Madhya Pradesh", lat: 24.4218, lng: 80.7456, distanceKm: 1350, cost: 68000, vehicleType: "22ft Container (6MT)", ratePerKm: 50.4, date: "20 Jan 2026", approved: true },
  { destination: "Raigad (Alibag)", pincode: "402201", state: "Maharashtra", lat: 18.6412, lng: 72.8718, distanceKm: 980, cost: 32000, vehicleType: "20ft Open (6MT)", ratePerKm: 32.7, date: "14 Jan 2026", approved: true },
  { destination: "Sindhudurg & Ratnagiri", pincode: "416812", state: "Maharashtra", lat: 16.0499, lng: 73.5173, distanceKm: 650, cost: 30000, vehicleType: "20ft Open (6MT)", ratePerKm: 46.2, date: "07 Jan 2026", approved: true },
  { destination: "Bellary (Ballari)", pincode: "583101", state: "Karnataka", lat: 15.1394, lng: 76.9214, distanceKm: 290, cost: 16000, vehicleType: "20ft Open (6MT)", ratePerKm: 55.2, date: "06 Jan 2026", approved: true },
  { destination: "Medak + Nagpur", pincode: "502110", state: "Telangana", lat: 18.0496, lng: 78.2627, distanceKm: 820, cost: 53000, vehicleType: "32ft SXL (7MT)", ratePerKm: 64.6, date: "05 Jan 2026", approved: true },
  { destination: "Thanjavur", pincode: "613001", state: "Tamil Nadu", lat: 10.7870, lng: 79.1378, distanceKm: 580, cost: 26000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 44.8, date: "03 Jan 2026", approved: true },
  { destination: "Chennai", pincode: "600001", state: "Tamil Nadu", lat: 13.0827, lng: 80.2707, distanceKm: 350, cost: 16000, vehicleType: "32ft SXL (7MT)", ratePerKm: 45.7, date: "01 Jan 2026", approved: true },
  { destination: "Sabalgarh & Nagpur", pincode: "476229", state: "Madhya Pradesh", lat: 26.2481, lng: 77.3982, distanceKm: 1320, cost: 62000, vehicleType: "20ft Container (6MT)", ratePerKm: 47.0, date: "29 Dec 2025", approved: true },
  { destination: "Hyderabad", pincode: "500001", state: "Telangana", lat: 17.3850, lng: 78.4867, distanceKm: 570, cost: 29000, vehicleType: "32ft SXL (7MT)", ratePerKm: 50.9, date: "24 Dec 2025", approved: true },
  { destination: "Palakkad + Thiruvananthapuram", pincode: "678001", state: "Kerala", lat: 10.7867, lng: 76.6548, distanceKm: 640, cost: 54000, vehicleType: "32ft SXL (7MT)", ratePerKm: 84.4, date: "22 Dec 2025", approved: true },
  { destination: "Guntur + Bhimavaram & Kavali", pincode: "522001", state: "Andhra Pradesh", lat: 16.3067, lng: 80.4365, distanceKm: 870, cost: 63000, vehicleType: "32ft SXL (7MT)", ratePerKm: 72.4, date: "20 Dec 2025", approved: false },
  { destination: "Kavali + Guntur + Bhimavaram", pincode: "524201", state: "Andhra Pradesh", lat: 14.9167, lng: 79.9950, distanceKm: 870, cost: 68000, vehicleType: "32ft SXL (7MT)", ratePerKm: 78.2, date: "19 Dec 2025", approved: false },
  { destination: "Puttur", pincode: "517583", state: "Andhra Pradesh", lat: 13.4417, lng: 79.5490, distanceKm: 260, cost: 13500, vehicleType: "7ft Bolero Pickup (1.2MT)", ratePerKm: 51.9, date: "19 Dec 2025", approved: false },
  { destination: "Miryalguda + Gadwal", pincode: "508207", state: "Telangana", lat: 16.8718, lng: 79.5647, distanceKm: 600, cost: 37000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 61.7, date: "17 Dec 2025", approved: false },
  { destination: "Erode & Trichy + Erode", pincode: "638001", state: "Tamil Nadu", lat: 11.3410, lng: 77.7172, distanceKm: 420, cost: 28000, vehicleType: "32ft SXL (7MT)", ratePerKm: 66.7, date: "13 Dec 2025", approved: true },
  { destination: "Nashik", pincode: "422001", state: "Maharashtra", lat: 19.9975, lng: 73.7898, distanceKm: 950, cost: 42000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 44.2, date: "06 Dec 2025", approved: true },
  { destination: "Kankavli", pincode: "416602", state: "Maharashtra", lat: 16.3500, lng: 73.7167, distanceKm: 700, cost: 31000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 44.3, date: "04 Dec 2025", approved: true },
  { destination: "Karwar", pincode: "581301", state: "Karnataka", lat: 14.8013, lng: 74.1288, distanceKm: 420, cost: 31000, vehicleType: "32ft SXL (7MT)", ratePerKm: 73.8, date: "01 Dec 2025", approved: false },
  { destination: "Hyderabad", pincode: "500001", state: "Telangana", lat: 17.3850, lng: 78.4867, distanceKm: 570, cost: 26000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 45.6, date: "28 Nov 2025", approved: false },
  { destination: "Sangamner & Shirur", pincode: "422605", state: "Maharashtra", lat: 19.5734, lng: 74.2099, distanceKm: 870, cost: 36000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 41.4, date: "26 Nov 2025", approved: true },
  { destination: "Malegaon", pincode: "423203", state: "Maharashtra", lat: 20.5579, lng: 74.5089, distanceKm: 900, cost: 41000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 45.6, date: "21 Nov 2025", approved: false },
  { destination: "Nashik", pincode: "422001", state: "Maharashtra", lat: 19.9975, lng: 73.7898, distanceKm: 950, cost: 38000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 40.0, date: "20 Nov 2025", approved: true },
  { destination: "Sabalgarh", pincode: "476229", state: "Madhya Pradesh", lat: 26.2481, lng: 77.3982, distanceKm: 1320, cost: 76000, vehicleType: "32ft SXL (7MT)", ratePerKm: 57.6, date: "19 Nov 2025", approved: false },
  { destination: "Lodhikheda", pincode: "480441", state: "Madhya Pradesh", lat: 22.1500, lng: 79.5833, distanceKm: 1280, cost: 58000, vehicleType: "32ft SXL (7MT)", ratePerKm: 45.3, date: "18 Nov 2025", approved: true },
  { destination: "Bagalkot", pincode: "587101", state: "Karnataka", lat: 16.1690, lng: 75.6960, distanceKm: 470, cost: 31000, vehicleType: "32ft SXL (7MT)", ratePerKm: 66.0, date: "15 Nov 2025", approved: false },
  { destination: "Bellary (Ballari)", pincode: "583101", state: "Karnataka", lat: 15.1394, lng: 76.9214, distanceKm: 290, cost: 29000, vehicleType: "32ft SXL (7MT)", ratePerKm: 100.0, date: "15 Nov 2025", approved: true },
  { destination: "Visakhapatnam", pincode: "530001", state: "Andhra Pradesh", lat: 17.6868, lng: 83.2185, distanceKm: 1100, cost: 69000, vehicleType: "32ft SXL (7MT)", ratePerKm: 62.7, date: "16 Oct 2025", approved: false },
  { destination: "Pune", pincode: "411001", state: "Maharashtra", lat: 18.5204, lng: 73.8567, distanceKm: 835, cost: 34000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 40.7, date: "14 Oct 2025", approved: true },
  { destination: "Ratnagiri & Mandvi (Gujarat)", pincode: "415612", state: "Maharashtra", lat: 16.9902, lng: 73.3120, distanceKm: 680, cost: 34000, vehicleType: "20ft Open Body (6MT)", ratePerKm: 50.0, date: "10 Oct 2025", approved: true },
  { destination: "Sindhudurg", pincode: "416812", state: "Maharashtra", lat: 16.0499, lng: 73.5173, distanceKm: 650, cost: 42000, vehicleType: "32ft SXL Container (7MT)", ratePerKm: 64.6, date: "08 Oct 2025", approved: false },
  { destination: "Sikar", pincode: "332001", state: "Rajasthan", lat: 27.6094, lng: 75.1399, distanceKm: 2100, cost: 82000, vehicleType: "32ft SXL Container (7MT)", ratePerKm: 39.0, date: "30 Sep 2025", approved: true },
  { destination: "Kumta", pincode: "581343", state: "Karnataka", lat: 14.4276, lng: 74.4148, distanceKm: 490, cost: 33000, vehicleType: "32ft SXL Container (7MT)", ratePerKm: 67.3, date: "30 Sep 2025", approved: true },
  { destination: "Pune", pincode: "411001", state: "Maharashtra", lat: 18.5204, lng: 73.8567, distanceKm: 835, cost: 27000, vehicleType: "32ft SXL Container (7MT)", ratePerKm: 32.3, date: "29 Sep 2025", approved: true },
  { destination: "Tirupati", pincode: "517501", state: "Andhra Pradesh", lat: 13.6288, lng: 79.4192, distanceKm: 260, cost: 19000, vehicleType: "20ft Open (7MT)", ratePerKm: 73.1, date: "20 Sep 2025", approved: true },
  { destination: "Vijayanagar (Hospet)", pincode: "583203", state: "Karnataka", lat: 15.2600, lng: 76.3979, distanceKm: 340, cost: 22000, vehicleType: "20ft Open (7MT)", ratePerKm: 64.7, date: "06 Sep 2025", approved: true },
  { destination: "Bagalkot & Ankola", pincode: "587101", state: "Karnataka", lat: 16.1690, lng: 75.6960, distanceKm: 470, cost: 26000, vehicleType: "32ft SXL (7MT)", ratePerKm: 55.3, date: "22 Aug 2025", approved: true },
  { destination: "Malur", pincode: "563130", state: "Karnataka", lat: 13.0035, lng: 77.9402, distanceKm: 55, cost: 10000, vehicleType: "20ft Open (7MT)", ratePerKm: 181.8, date: "20 Aug 2025", approved: true },
  { destination: "Visakhapatnam", pincode: "530001", state: "Andhra Pradesh", lat: 17.6868, lng: 83.2185, distanceKm: 1100, cost: 45000, vehicleType: "20ft Open (7MT)", ratePerKm: 40.9, date: "07 Aug 2025", approved: true },
  { destination: "Gadwal + Nizamabad", pincode: "509125", state: "Telangana", lat: 16.2330, lng: 77.7970, distanceKm: 570, cost: 47000, vehicleType: "32ft SXL (7MT)", ratePerKm: 82.5, date: "06 Aug 2025", approved: true },
  { destination: "Hyderabad", pincode: "500001", state: "Telangana", lat: 17.3850, lng: 78.4867, distanceKm: 570, cost: 30000, vehicleType: "32ft SXL (7MT)", ratePerKm: 52.6, date: "04 Aug 2025", approved: true },
  { destination: "Vijayapura (Bijapur)", pincode: "586101", state: "Karnataka", lat: 16.8302, lng: 75.7100, distanceKm: 520, cost: 26000, vehicleType: "32ft SXL (7MT)", ratePerKm: 50.0, date: "30 Jul 2025", approved: true },
  { destination: "Renigunta", pincode: "517520", state: "Andhra Pradesh", lat: 13.6530, lng: 79.5122, distanceKm: 255, cost: 21000, vehicleType: "20ft Open (7MT)", ratePerKm: 82.4, date: "28 Jul 2025", approved: true },
  { destination: "Mahbubnagar", pincode: "509001", state: "Telangana", lat: 16.7488, lng: 77.9836, distanceKm: 480, cost: 25000, vehicleType: "20ft Open (7MT)", ratePerKm: 52.1, date: "19 Jul 2025", approved: true },
  { destination: "Guntakal + Satuna", pincode: "515801", state: "Andhra Pradesh", lat: 15.1672, lng: 77.3666, distanceKm: 400, cost: 51000, vehicleType: "32ft SXL (7MT)", ratePerKm: 127.5, date: "07 Jul 2025", approved: true },
  { destination: "Vikarabad + Shadnagar", pincode: "501101", state: "Telangana", lat: 17.3375, lng: 77.9042, distanceKm: 590, cost: 35000, vehicleType: "32ft SXL (7MT)", ratePerKm: 59.3, date: "05 Jul 2025", approved: true },
  { destination: "Anantapur", pincode: "515001", state: "Andhra Pradesh", lat: 14.6819, lng: 77.6006, distanceKm: 280, cost: 14000, vehicleType: "20ft Open Vehicle (6MT)", ratePerKm: 50.0, date: "09 May 2025", approved: true },
  { destination: "West Godavari", pincode: "534001", state: "Andhra Pradesh", lat: 16.9174, lng: 81.3402, distanceKm: 950, cost: 28000, vehicleType: "20ft Open Vehicle (6MT)", ratePerKm: 29.5, date: "07 Apr 2025", approved: true },
];

// Haversine formula to compute straight-line distance in km between two lat/lng points
export function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Estimate road distance from straight-line distance (average factor ~1.3 for India)
export function estimateRoadKm(straightKm: number): number {
  return Math.round(straightKm * 1.3);
}

export interface EstimateResult {
  type: "exact" | "nearby" | "interpolated";
  destination: string;
  pincode: string;
  state: string;
  distanceKm: number;
  estimatedCost: number;
  minCost: number;
  maxCost: number;
  ratePerKm: number;
  vehicleSuggestion: string;
  confidence: "high" | "medium" | "low";
  similarRoutes: Route[];
  note: string;
}

// Pincode to lat/lng lookup for India (covering all 6-digit pin ranges by region)
// We use a simplified approach: derive approximate coords from pincode prefix
export function pincodeToLatLng(pincode: string): { lat: number; lng: number; state: string } | null {
  const p = parseInt(pincode.substring(0, 3));

  // Major pincode zone mappings (first 3 digits → approximate center)
  const zones: Record<string, { lat: number; lng: number; state: string }> = {
    "110": { lat: 28.6139, lng: 77.2090, state: "Delhi" },
    "111": { lat: 28.5, lng: 77.0, state: "Delhi" },
    "112": { lat: 28.4, lng: 77.3, state: "Haryana" },
    "120": { lat: 28.4595, lng: 77.0266, state: "Haryana" },
    "121": { lat: 28.4089, lng: 77.3178, state: "Haryana" },
    "122": { lat: 28.4595, lng: 77.0266, state: "Haryana" },
    "123": { lat: 28.1, lng: 76.6, state: "Haryana" },
    "124": { lat: 28.8, lng: 76.6, state: "Haryana" },
    "125": { lat: 29.1, lng: 75.8, state: "Haryana" },
    "126": { lat: 29.3, lng: 76.5, state: "Haryana" },
    "127": { lat: 28.9, lng: 76.1, state: "Haryana" },
    "128": { lat: 29.5, lng: 76.8, state: "Haryana" },
    "129": { lat: 29.7, lng: 77.0, state: "Haryana" },
    "131": { lat: 29.0, lng: 76.9, state: "Haryana" },
    "132": { lat: 29.7, lng: 76.9, state: "Haryana" },
    "133": { lat: 30.0, lng: 77.0, state: "Haryana" },
    "134": { lat: 30.6, lng: 77.0, state: "Himachal Pradesh" },
    "140": { lat: 30.7, lng: 76.8, state: "Punjab" },
    "141": { lat: 30.9, lng: 75.8, state: "Punjab" },
    "142": { lat: 30.5, lng: 75.6, state: "Punjab" },
    "143": { lat: 31.6, lng: 74.9, state: "Punjab" },
    "144": { lat: 31.3, lng: 75.6, state: "Punjab" },
    "145": { lat: 31.9, lng: 75.1, state: "Punjab" },
    "146": { lat: 31.1, lng: 75.1, state: "Punjab" },
    "147": { lat: 30.2, lng: 76.4, state: "Punjab" },
    "148": { lat: 30.2, lng: 75.2, state: "Punjab" },
    "151": { lat: 29.9, lng: 74.5, state: "Punjab" },
    "152": { lat: 30.5, lng: 74.2, state: "Punjab" },
    "160": { lat: 30.7333, lng: 76.7794, state: "Chandigarh" },
    "171": { lat: 31.1048, lng: 77.1734, state: "Himachal Pradesh" },
    "176": { lat: 31.8, lng: 76.5, state: "Himachal Pradesh" },
    "180": { lat: 32.7266, lng: 74.8570, state: "Jammu & Kashmir" },
    "190": { lat: 34.0837, lng: 74.7973, state: "Jammu & Kashmir" },
    "201": { lat: 28.5355, lng: 77.3910, state: "Uttar Pradesh" },
    "202": { lat: 27.8974, lng: 78.0880, state: "Uttar Pradesh" },
    "203": { lat: 28.2, lng: 78.0, state: "Uttar Pradesh" },
    "204": { lat: 27.9, lng: 78.5, state: "Uttar Pradesh" },
    "205": { lat: 27.5, lng: 78.5, state: "Uttar Pradesh" },
    "206": { lat: 26.5, lng: 79.6, state: "Uttar Pradesh" },
    "207": { lat: 27.3, lng: 79.0, state: "Uttar Pradesh" },
    "208": { lat: 26.4499, lng: 80.3319, state: "Uttar Pradesh" },
    "209": { lat: 26.5, lng: 80.5, state: "Uttar Pradesh" },
    "211": { lat: 25.4358, lng: 81.8463, state: "Uttar Pradesh" },
    "212": { lat: 25.3, lng: 81.5, state: "Uttar Pradesh" },
    "221": { lat: 25.3176, lng: 82.9739, state: "Uttar Pradesh" },
    "226": { lat: 26.8467, lng: 80.9462, state: "Uttar Pradesh" },
    "250": { lat: 29.0, lng: 77.7, state: "Uttar Pradesh" },
    "261": { lat: 27.5706, lng: 80.7849, state: "Uttar Pradesh" },
    "302": { lat: 26.9124, lng: 75.7873, state: "Rajasthan" },
    "303": { lat: 27.0, lng: 76.5, state: "Rajasthan" },
    "304": { lat: 25.7, lng: 76.7, state: "Rajasthan" },
    "305": { lat: 26.4, lng: 74.6, state: "Rajasthan" },
    "306": { lat: 25.9, lng: 73.8, state: "Rajasthan" },
    "307": { lat: 25.1, lng: 73.7, state: "Rajasthan" },
    "311": { lat: 25.7, lng: 74.5, state: "Rajasthan" },
    "313": { lat: 24.5854, lng: 73.7125, state: "Rajasthan" },
    "321": { lat: 27.2, lng: 77.5, state: "Rajasthan" },
    "324": { lat: 25.2138, lng: 75.8648, state: "Rajasthan" },
    "325": { lat: 25.1, lng: 76.6, state: "Rajasthan" },
    "326": { lat: 24.9, lng: 76.6, state: "Rajasthan" },
    "327": { lat: 23.8, lng: 75.6, state: "Rajasthan" },
    "331": { lat: 28.3, lng: 75.8, state: "Rajasthan" },
    "332": { lat: 27.6094, lng: 75.1399, state: "Rajasthan" },
    "333": { lat: 27.8, lng: 75.8, state: "Rajasthan" },
    "334": { lat: 28.0, lng: 73.3, state: "Rajasthan" },
    "335": { lat: 29.1, lng: 73.3, state: "Rajasthan" },
    "341": { lat: 27.0, lng: 74.3, state: "Rajasthan" },
    "342": { lat: 26.2870, lng: 73.0243, state: "Rajasthan" },
    "344": { lat: 25.7, lng: 72.1, state: "Rajasthan" },
    "345": { lat: 27.2, lng: 72.4, state: "Rajasthan" },
    "360": { lat: 22.3, lng: 70.8, state: "Gujarat" },
    "361": { lat: 22.3, lng: 70.1, state: "Gujarat" },
    "362": { lat: 21.5, lng: 70.5, state: "Gujarat" },
    "363": { lat: 22.7, lng: 71.7, state: "Gujarat" },
    "364": { lat: 21.8, lng: 72.1, state: "Gujarat" },
    "365": { lat: 21.6, lng: 71.2, state: "Gujarat" },
    "370": { lat: 23.2, lng: 69.7, state: "Gujarat" },
    "380": { lat: 23.0225, lng: 72.5714, state: "Gujarat" },
    "382": { lat: 23.1, lng: 72.4, state: "Gujarat" },
    "383": { lat: 23.5, lng: 72.9, state: "Gujarat" },
    "384": { lat: 23.9, lng: 72.9, state: "Gujarat" },
    "385": { lat: 24.2, lng: 72.3, state: "Gujarat" },
    "387": { lat: 22.8, lng: 72.8, state: "Gujarat" },
    "388": { lat: 22.6, lng: 72.8, state: "Gujarat" },
    "390": { lat: 22.3072, lng: 73.1812, state: "Gujarat" },
    "391": { lat: 22.4, lng: 73.3, state: "Gujarat" },
    "392": { lat: 21.9, lng: 72.7, state: "Gujarat" },
    "393": { lat: 21.7, lng: 73.5, state: "Gujarat" },
    "394": { lat: 21.2, lng: 72.8, state: "Gujarat" },
    "395": { lat: 21.1702, lng: 72.8311, state: "Gujarat" },
    "396": { lat: 20.6, lng: 72.9, state: "Gujarat" },
    "400": { lat: 19.0760, lng: 72.8777, state: "Maharashtra" },
    "401": { lat: 19.3, lng: 72.9, state: "Maharashtra" },
    "402": { lat: 18.5, lng: 73.0, state: "Maharashtra" },
    "403": { lat: 15.4909, lng: 73.8278, state: "Goa" },
    "410": { lat: 18.7, lng: 73.0, state: "Maharashtra" },
    "411": { lat: 18.5204, lng: 73.8567, state: "Maharashtra" },
    "412": { lat: 18.2, lng: 74.0, state: "Maharashtra" },
    "413": { lat: 17.9, lng: 75.5, state: "Maharashtra" },
    "414": { lat: 19.1, lng: 75.1, state: "Maharashtra" },
    "415": { lat: 17.7, lng: 73.8, state: "Maharashtra" },
    "416": { lat: 16.7, lng: 74.2, state: "Maharashtra" },
    "417": { lat: 17.5, lng: 74.7, state: "Maharashtra" },
    "421": { lat: 19.2, lng: 73.1, state: "Maharashtra" },
    "422": { lat: 19.9975, lng: 73.7898, state: "Maharashtra" },
    "423": { lat: 20.5, lng: 74.5, state: "Maharashtra" },
    "424": { lat: 20.6, lng: 74.8, state: "Maharashtra" },
    "425": { lat: 21.1, lng: 75.6, state: "Maharashtra" },
    "431": { lat: 19.8762, lng: 75.3433, state: "Maharashtra" },
    "440": { lat: 21.1458, lng: 79.0882, state: "Maharashtra" },
    "441": { lat: 20.9, lng: 79.2, state: "Maharashtra" },
    "442": { lat: 20.4, lng: 78.5, state: "Maharashtra" },
    "444": { lat: 20.6, lng: 77.2, state: "Maharashtra" },
    "445": { lat: 20.0, lng: 78.1, state: "Maharashtra" },
    "451": { lat: 22.4, lng: 76.0, state: "Madhya Pradesh" },
    "452": { lat: 22.7196, lng: 75.8577, state: "Madhya Pradesh" },
    "455": { lat: 22.7, lng: 76.7, state: "Madhya Pradesh" },
    "457": { lat: 23.0, lng: 75.1, state: "Madhya Pradesh" },
    "458": { lat: 23.9, lng: 74.9, state: "Madhya Pradesh" },
    "461": { lat: 22.6, lng: 77.5, state: "Madhya Pradesh" },
    "462": { lat: 23.2599, lng: 77.4126, state: "Madhya Pradesh" },
    "464": { lat: 23.5, lng: 78.5, state: "Madhya Pradesh" },
    "465": { lat: 23.8, lng: 77.0, state: "Madhya Pradesh" },
    "470": { lat: 23.8, lng: 78.7, state: "Madhya Pradesh" },
    "471": { lat: 25.5, lng: 79.0, state: "Madhya Pradesh" },
    "472": { lat: 25.5, lng: 78.8, state: "Madhya Pradesh" },
    "473": { lat: 24.6, lng: 77.7, state: "Madhya Pradesh" },
    "474": { lat: 26.2, lng: 78.2, state: "Madhya Pradesh" },
    "475": { lat: 26.2, lng: 78.5, state: "Madhya Pradesh" },
    "476": { lat: 26.3, lng: 77.4, state: "Madhya Pradesh" },
    "480": { lat: 21.8, lng: 79.9, state: "Madhya Pradesh" },
    "481": { lat: 22.0, lng: 80.5, state: "Madhya Pradesh" },
    "482": { lat: 23.8, lng: 80.0, state: "Madhya Pradesh" },
    "483": { lat: 23.2, lng: 79.9, state: "Madhya Pradesh" },
    "484": { lat: 23.1, lng: 81.7, state: "Madhya Pradesh" },
    "485": { lat: 24.5, lng: 80.8, state: "Madhya Pradesh" },
    "486": { lat: 24.2, lng: 81.3, state: "Madhya Pradesh" },
    "487": { lat: 22.8, lng: 79.2, state: "Madhya Pradesh" },
    "488": { lat: 23.1, lng: 79.0, state: "Madhya Pradesh" },
    "490": { lat: 21.3, lng: 81.3, state: "Chhattisgarh" },
    "491": { lat: 21.2, lng: 81.5, state: "Chhattisgarh" },
    "492": { lat: 21.2514, lng: 81.6296, state: "Chhattisgarh" },
    "500": { lat: 17.3850, lng: 78.4867, state: "Telangana" },
    "501": { lat: 17.3, lng: 78.0, state: "Telangana" },
    "502": { lat: 17.8, lng: 78.2, state: "Telangana" },
    "503": { lat: 18.3, lng: 78.3, state: "Telangana" },
    "504": { lat: 19.1, lng: 78.3, state: "Telangana" },
    "505": { lat: 18.3, lng: 79.5, state: "Telangana" },
    "506": { lat: 17.9, lng: 79.6, state: "Telangana" },
    "507": { lat: 17.2, lng: 80.2, state: "Telangana" },
    "508": { lat: 16.9, lng: 79.6, state: "Telangana" },
    "509": { lat: 16.7, lng: 77.9, state: "Telangana" },
    "510": { lat: 16.3, lng: 80.4, state: "Andhra Pradesh" },
    "515": { lat: 14.7, lng: 77.6, state: "Andhra Pradesh" },
    "516": { lat: 14.4, lng: 78.8, state: "Andhra Pradesh" },
    "517": { lat: 13.6, lng: 79.4, state: "Andhra Pradesh" },
    "518": { lat: 15.8, lng: 78.0, state: "Andhra Pradesh" },
    "520": { lat: 16.5062, lng: 80.6480, state: "Andhra Pradesh" },
    "521": { lat: 16.2, lng: 80.6, state: "Andhra Pradesh" },
    "522": { lat: 16.3, lng: 80.4, state: "Andhra Pradesh" },
    "523": { lat: 15.5, lng: 80.1, state: "Andhra Pradesh" },
    "524": { lat: 14.9, lng: 80.0, state: "Andhra Pradesh" },
    "525": { lat: 15.2, lng: 78.5, state: "Andhra Pradesh" },
    "530": { lat: 17.6868, lng: 83.2185, state: "Andhra Pradesh" },
    "531": { lat: 17.8, lng: 83.0, state: "Andhra Pradesh" },
    "532": { lat: 18.3, lng: 83.9, state: "Andhra Pradesh" },
    "533": { lat: 17.2, lng: 81.8, state: "Andhra Pradesh" },
    "534": { lat: 16.9, lng: 81.4, state: "Andhra Pradesh" },
    "535": { lat: 18.1, lng: 83.4, state: "Andhra Pradesh" },
    "560": { lat: 12.9716, lng: 77.5946, state: "Karnataka" },
    "561": { lat: 13.3, lng: 77.4, state: "Karnataka" },
    "562": { lat: 13.1, lng: 77.4, state: "Karnataka" },
    "563": { lat: 13.0, lng: 77.9, state: "Karnataka" },
    "564": { lat: 13.5, lng: 77.5, state: "Karnataka" },
    "565": { lat: 12.5, lng: 77.2, state: "Karnataka" },
    "570": { lat: 12.2958, lng: 76.6394, state: "Karnataka" },
    "571": { lat: 12.2, lng: 76.4, state: "Karnataka" },
    "572": { lat: 13.3, lng: 76.5, state: "Karnataka" },
    "573": { lat: 13.0, lng: 76.1, state: "Karnataka" },
    "574": { lat: 12.8, lng: 74.9, state: "Karnataka" },
    "575": { lat: 12.8698, lng: 74.8431, state: "Karnataka" },
    "576": { lat: 13.8, lng: 74.7, state: "Karnataka" },
    "577": { lat: 14.0, lng: 75.6, state: "Karnataka" },
    "578": { lat: 14.6, lng: 75.9, state: "Karnataka" },
    "580": { lat: 15.3647, lng: 75.1240, state: "Karnataka" },
    "581": { lat: 14.8, lng: 74.1, state: "Karnataka" },
    "582": { lat: 15.7, lng: 75.5, state: "Karnataka" },
    "583": { lat: 15.1, lng: 76.9, state: "Karnataka" },
    "584": { lat: 17.8, lng: 77.0, state: "Karnataka" },
    "585": { lat: 17.3, lng: 76.8, state: "Karnataka" },
    "586": { lat: 16.8, lng: 75.7, state: "Karnataka" },
    "587": { lat: 16.2, lng: 75.7, state: "Karnataka" },
    "590": { lat: 15.8497, lng: 74.4977, state: "Karnataka" },
    "591": { lat: 15.5, lng: 74.3, state: "Karnataka" },
    "600": { lat: 13.0827, lng: 80.2707, state: "Tamil Nadu" },
    "601": { lat: 12.8, lng: 80.2, state: "Tamil Nadu" },
    "602": { lat: 13.0, lng: 80.0, state: "Tamil Nadu" },
    "603": { lat: 12.7, lng: 80.1, state: "Tamil Nadu" },
    "604": { lat: 12.2, lng: 79.8, state: "Tamil Nadu" },
    "605": { lat: 11.9, lng: 79.8, state: "Tamil Nadu" },
    "606": { lat: 11.6, lng: 78.9, state: "Tamil Nadu" },
    "607": { lat: 11.3, lng: 79.4, state: "Tamil Nadu" },
    "608": { lat: 11.0, lng: 79.8, state: "Tamil Nadu" },
    "609": { lat: 10.8, lng: 79.8, state: "Tamil Nadu" },
    "610": { lat: 10.8, lng: 79.7, state: "Tamil Nadu" },
    "611": { lat: 10.6, lng: 79.6, state: "Tamil Nadu" },
    "612": { lat: 10.8, lng: 79.5, state: "Tamil Nadu" },
    "613": { lat: 10.7870, lng: 79.1378, state: "Tamil Nadu" },
    "614": { lat: 10.6, lng: 79.1, state: "Tamil Nadu" },
    "615": { lat: 10.1, lng: 79.2, state: "Tamil Nadu" },
    "616": { lat: 10.2, lng: 79.6, state: "Tamil Nadu" },
    "620": { lat: 10.7905, lng: 78.7047, state: "Tamil Nadu" },
    "621": { lat: 11.0, lng: 78.8, state: "Tamil Nadu" },
    "622": { lat: 10.4, lng: 78.8, state: "Tamil Nadu" },
    "623": { lat: 9.9, lng: 78.4, state: "Tamil Nadu" },
    "624": { lat: 10.3, lng: 77.9, state: "Tamil Nadu" },
    "625": { lat: 9.9252, lng: 78.1198, state: "Tamil Nadu" },
    "626": { lat: 9.7, lng: 77.8, state: "Tamil Nadu" },
    "627": { lat: 8.7, lng: 77.7, state: "Tamil Nadu" },
    "628": { lat: 8.4, lng: 77.6, state: "Tamil Nadu" },
    "629": { lat: 8.1, lng: 77.6, state: "Tamil Nadu" },
    "630": { lat: 10.1, lng: 78.6, state: "Tamil Nadu" },
    "636": { lat: 11.7, lng: 78.1, state: "Tamil Nadu" },
    "637": { lat: 11.5, lng: 78.3, state: "Tamil Nadu" },
    "638": { lat: 11.3410, lng: 77.7172, state: "Tamil Nadu" },
    "639": { lat: 11.1, lng: 77.5, state: "Tamil Nadu" },
    "641": { lat: 11.0168, lng: 76.9558, state: "Tamil Nadu" },
    "642": { lat: 10.7, lng: 77.0, state: "Tamil Nadu" },
    "643": { lat: 11.4, lng: 76.7, state: "Tamil Nadu" },
    "678": { lat: 10.7867, lng: 76.6548, state: "Kerala" },
    "679": { lat: 10.6, lng: 76.6, state: "Kerala" },
    "680": { lat: 10.3, lng: 76.3, state: "Kerala" },
    "682": { lat: 9.9312, lng: 76.2673, state: "Kerala" },
    "683": { lat: 10.0, lng: 76.4, state: "Kerala" },
    "685": { lat: 9.6, lng: 76.8, state: "Kerala" },
    "686": { lat: 9.6, lng: 76.5, state: "Kerala" },
    "688": { lat: 9.2, lng: 76.7, state: "Kerala" },
    "689": { lat: 9.3, lng: 76.6, state: "Kerala" },
    "690": { lat: 9.0, lng: 76.6, state: "Kerala" },
    "691": { lat: 8.9, lng: 76.6, state: "Kerala" },
    "695": { lat: 8.5241, lng: 76.9366, state: "Kerala" },
  };

  const prefix = pincode.substring(0, 3);
  const zone = zones[prefix];
  if (zone) return zone;

  // Fallback: search nearby prefixes
  const prefixNum = parseInt(prefix);
  for (let delta = 1; delta <= 5; delta++) {
    const candidate = String(prefixNum - delta).padStart(3, "0");
    if (zones[candidate]) return zones[candidate];
    const candidate2 = String(prefixNum + delta).padStart(3, "0");
    if (zones[candidate2]) return zones[candidate2];
  }
  return null;
}

export function estimateFreight(pincode: string): EstimateResult | null {
  // 1. Exact pincode match
  const exactMatches = ROUTES.filter((r) => r.pincode === pincode);
  if (exactMatches.length > 0) {
    const avg = exactMatches.reduce((s, r) => s + r.cost, 0) / exactMatches.length;
    const min = Math.min(...exactMatches.map((r) => r.cost));
    const max = Math.max(...exactMatches.map((r) => r.cost));
    const latest = exactMatches.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    return {
      type: "exact",
      destination: latest.destination,
      pincode,
      state: latest.state,
      distanceKm: latest.distanceKm,
      estimatedCost: Math.round(avg),
      minCost: min,
      maxCost: max,
      ratePerKm: latest.ratePerKm,
      vehicleSuggestion: latest.vehicleType,
      confidence: "high",
      similarRoutes: exactMatches.slice(0, 5),
      note: `Based on ${exactMatches.length} actual shipment${exactMatches.length > 1 ? "s" : ""} to this pincode`,
    };
  }

  // 2. Resolve coordinates for the input pincode
  const destCoords = pincodeToLatLng(pincode);
  if (!destCoords) {
    // Still try to find nearest by prefix
    return null;
  }

  // 3. Find K nearest routes by straight-line distance to their coords
  const withDist = ROUTES.map((r) => ({
    route: r,
    geoDistance: haversineKm(destCoords.lat, destCoords.lng, r.lat, r.lng),
  })).sort((a, b) => a.geoDistance - b.geoDistance);

  const nearest = withDist.slice(0, 5);
  const closest = nearest[0];

  // Estimate straight-line distance from factory to destination
  const straightKm = haversineKm(FACTORY.lat, FACTORY.lng, destCoords.lat, destCoords.lng);
  const roadKm = estimateRoadKm(straightKm);

  // Weighted average rate from nearest routes (weight = 1/distance)
  const totalWeight = nearest.reduce((s, n) => s + 1 / (n.geoDistance + 1), 0);
  const weightedRate = nearest.reduce((s, n) => s + (n.route.ratePerKm * (1 / (n.geoDistance + 1))) / totalWeight, 0);

  const estimatedCost = Math.round(roadKm * weightedRate);
  const spread = 0.15; // ±15%

  const confidence: "high" | "medium" | "low" =
    closest.geoDistance < 80 ? "high" : closest.geoDistance < 200 ? "medium" : "low";

  // Pick vehicle suggestion from closest route
  const vehicleSuggestion = closest.route.vehicleType;

  return {
    type: closest.geoDistance < 50 ? "nearby" : "interpolated",
    destination: destCoords.state + " region",
    pincode,
    state: destCoords.state,
    distanceKm: roadKm,
    estimatedCost,
    minCost: Math.round(estimatedCost * (1 - spread)),
    maxCost: Math.round(estimatedCost * (1 + spread)),
    ratePerKm: Math.round(weightedRate * 10) / 10,
    vehicleSuggestion,
    confidence,
    similarRoutes: nearest.map((n) => n.route).slice(0, 4),
    note: `Estimated using ${nearest.length} nearby routes. Closest match: ${closest.route.destination} (${Math.round(closest.geoDistance)} km away)`,
  };
}
