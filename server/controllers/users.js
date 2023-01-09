import User from "../models/User.js";

// Create User

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;

    const latitude = req.body.location.coordinates[0];
    const longitude = req.body.location.coordinates[1];

    const newUser = new User({
      userName: name,
      location: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
    });

    await newUser.save();

    const user = newUser;

    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const findUsers = async (req, res) => {
  try {
    const { lat, lng, rad } = req.query;

    const users = await User.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [Number(lng), Number(lat)],
          },
          distanceField: "distance",
          includeLocs: "location",
          maxDistance: Number(rad) * 1000,
          spherical: true,
          key: "location",
        },
      },
    ]);

    // const users = await User.find(query);
    res.status(201).json(users);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
