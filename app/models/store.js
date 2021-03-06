var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({
  caseId: {
    type: Schema.Types.ObjectId,
    ref: 'Case',
    required: true
  },
  lat: {
    type: Number,
    required: false
  },
  lng: {
    type: Number,
    required: false
  },
  speed: {
    type: Number,
    required: false
  },
  time: {
    type: Date
  },
  status: {
    type: Number
  },
  id: false,
},{
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

module.exports = mongoose.model('Store', StoreSchema);