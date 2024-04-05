const connection = require("../config/connection");
const { User } = require("../models");

const usernames = [
    "johnsmith",
    "janedoe",
    "michaeljackson",
    "emilybrown",
    "chriswilson",
    "sarahthompson",
    "davidlee",
    "amandajones",
    "peterpark",
    "lindawilliams",
    "matthewmartin",
    "sophieanderson",
    "danielcooper",
    "oliviaevans",
    "robertturner",
    "hannahmiller",
    "jamesharris",
    "ashleyrobinson",
    "williamtaylor",
];

const emails = [
    "johnsmith@example.com",
    "janedoe@example.com",
    "michaeljackson@example.com",
    "emilybrown@example.com",
    "chriswilson@example.com",
    "sarahthompson@example.com",
    "davidlee@example.com",
    "amandajones@example.com",
    "peterpark@example.com",
    "lindawilliams@example.com",
    "matthewmartin@example.com",
    "sophieanderson@example.com",
    "danielcooper@example.com",
    "oliviaevans@example.com",
    "robertturner@example.com",
    "hannahmiller@example.com",
    "jamesharris@example.com",
    "ashleyrobinson@example.com",
    "williamtaylor@example.com",
];

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected");
    await User.deleteMany({});

    const users = [];

    for (i = 0; i < 19; i++) {
        const username = usernames[i];
        const email = emails[i];

        users.push({
            username,
            email,
            thoughts: [],
            friends: [],
        });
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.info("Seeding complete! 🌱");
    process.exit(0);
});
