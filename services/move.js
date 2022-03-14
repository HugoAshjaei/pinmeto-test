const en = require("../helper/language/en.json"),
    _ = require("lodash");

const turnLeft = (direction) => {
    try {
        if (direction === "N") {
            return "W";
        } else if (direction === "W") {
            return "S";
        } else if (direction === "S") {
            return "E";
        } else if (direction === "E") {
            return "N";
        } else {
            throw new Error(en.enterDataCorrectly);
        }
    } catch (error) {
        throw new Error(error.message || en.enterDataCorrectly);
    }
};

const turnRight = (direction) => {
    try {
        if (direction === "N") {
            return "E";
        } else if (direction === "E") {
            return "S";
        } else if (direction === "S") {
            return "W";
        } else if (direction === "W") {
            return "N";
        } else {
            throw new Error(en.enterDataCorrectly);
        }
    } catch (error) {
        throw new Error(error.message || en.enterDataCorrectly);
    }
};

const moveForward = (position, direction, room, roomSize) => {
    try {
        if (room === "square") {
            if (direction === "N") {
                position[1]--;
            } else if (direction === "S") {
                position[1]++;
            } else if (direction === "E") {
                position[0]++;
            } else if (direction === "W") {
                position[0]--;
            }
            if (position[0] > roomSize || position[0] < 1 || position[1] > roomSize || position[1] < 1) {
                throw new Error(en.outOfRoom);
            }
        } else if (room === "circular") {
            // check direction after move is not out of room
            if (direction === "N") {
                position[1]--;
            }
            if (direction === "S") {
                position[1]++;
            }
            if (direction === "E") {
                position[0]++;
            }
            if (direction === "W") {
                position[0]--;
            }
            if (!checkPositionIsNotOutOfCircularRoom(position, roomSize)) {
                throw new Error(en.outOfRoom);
            }
        } else {
            throw new Error(en.enterDataCorrectly);
        }
        return position;
    } catch (error) {
        throw new Error(error.message || en.enterDataCorrectly);
    }
};

const checkPositionIsNotOutOfCircularRoom = (position, roomSize) => {
    try {
        const distance = Math.sqrt(Math.pow(position[0], 2) + Math.pow(position[1], 2));
        if (distance > roomSize) {
            throw new Error(en.outOfRoom);
        }
        return true;
    } catch (error) {
        throw new Error(error.message || en.enterDataCorrectly);
    }
};

module.exports = {
    turnLeft,
    turnRight,
    moveForward
};