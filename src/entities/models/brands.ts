const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  _id: { type: Schema.Types.ObjectID, required: false },
  name: { type: Schema.Types.String, required: false },
  type: { type: Schema.Types.String, required: false },
  dose: { type: Schema.Types.String, required: false },
  unit_price: { type: Schema.Types.Number, required: false },
  generic_name: { type: Schema.Types.String, required: false },
  company_id: { type: Schema.Types.ObjectID, required: false },
});

// brandSchema.index({ _id: 1, name: 1 }, { unique: true, background: true, w: 1 });

export default mongoose.model('Brand', brandSchema);
