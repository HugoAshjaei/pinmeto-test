const en = require("../helper/language/en.json"),
    {
        turnLeft,
        turnRight,
        moveForward
    } = require("../services/move"),
    _ = require("lodash");

const whereIsRobot = async ({
    room,
    roomSize,
    start,
    instructions
}) => {
    try {

        instructions = instructions.toUpperCase();
        // replace all 'V' with 'L' and 'H' with 'R' and 'G' with 'F'
        instructions = instructions.replace(/V/g, "L").replace(/H/g, "R").replace(/G/g, "F");
        // split instructions into array
        instructions = instructions.split("");

        let direction = "N";
        let position = [start[0], start[1]];
        for (let i = 0; i < instructions.length; i++) {
            let instruction = instructions[i];
            if (instruction === "L") {
                direction = turnLeft(direction);
            } else if (instruction === "R") {
                direction = turnRight(direction);
            } else if (instruction === "F") {
                position = moveForward(position, direction, room, roomSize);
            }
        }

        return {
            position: `${position[0]} ${position[1]} ${direction}`
        };
    } catch (error) {
        throw new Error(error.message || en.emailOrPasswordIncorrect);
    }
};


module.exports = {
    whereIsRobot,
};