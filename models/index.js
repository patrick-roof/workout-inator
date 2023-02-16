const User = require('./User');
const Workout = require('./Workout');
const Gallery = require('./Gallery');

Gallery.hasMany(Workout, {
    foreignKey: 'gallery_id',
});

Workout.belongsTo(Gallery, {
    foreignKey: 'gallery_id'
});

module.exports = { User, Workout, Gallery };
