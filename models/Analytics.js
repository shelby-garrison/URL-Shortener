const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  alias: { type: String, required: true },
    
  totalClicks: { type: Number, default: 0 },
  uniqueUsers: { type: Number, default: 0 }, 
  clicksByDate: [
      {
          date: { type: Date, required: true },
          clickCount: { type: Number, default: 0 }
      }
  ],
  osType: [
      {
          osName: { type: String, required: true },
          uniqueClicks: { type: Number, default: 0 },
          uniqueUsers: { type: Number, default: 0 }
      }
  ],
  deviceType: [
      {
          deviceName: { type: String, required: true },
          uniqueClicks: { type: Number, default: 0 },
          uniqueUsers: { type: Number, default: 0 }
      }
  ]
}, { timestamps: true });

// AnalyticsSchema.methods.incrementClick = function (ip) {
//   this.clicks += 1;
  
//   if (!this.visitorIPs.includes(ip)) {
//     this.visitorIPs.push(ip);
//     this.uniqueVisitors += 1;
//   }

//   return this.save();
// };

module.exports = mongoose.model('Analytics', AnalyticsSchema);
