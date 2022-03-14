const en = require('../helper/language/en.json'),
    sendResponse = require('../utils/sendResponse'),
    fs = require('fs'),
    calculateService = require('../services/calculate');

exports.whereIsRobot = async (req, res) => {
    try {
        const data = await calculateService.whereIsRobot(req.body);
        sendResponse(res, 200, data);
    } catch (error) {
        return sendResponse(res, 400, {
            error: {
                message: error.message || en.enterDataCorrectly
            }
        });
    }
};

exports.servePage = async (req, res) => {
    try {
        const page = await fs.readFileSync('./templates/robot.html', 'utf8');
        return res.send(page);
    } catch (error) {
        return sendResponse(res, 400, {
            error: {
                message: error.message || en.enterDataCorrectly
            }
        });
    }
}