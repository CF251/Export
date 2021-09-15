const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  _id: { type: Schema.Types.ObjectID, required: false },
  name: { type: Schema.Types.String, required: false },
});

// brandSchema.index({ _id: 1, name: 1 }, { unique: true, background: true, w: 1 });

export default mongoose.model('Company', companySchema);
