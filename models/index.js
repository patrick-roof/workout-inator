const User = require('./User');
const Workout = require('./Workout');
const Gallery = require('./Gallery');
const Survey = require('./Survey');

Gallery.hasMany(Workout, {
    foreignKey: 'gallery_id',
});

Workout.belongsTo(Gallery, {
    foreignKey: 'gallery_id'
});

Survey.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Workout, Gallery, Survey };
