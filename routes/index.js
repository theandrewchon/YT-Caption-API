const router = require('express').Router();
const getSubtitles = require('youtube-captions-scraper').getSubtitles;

router.get('/api/:id', async (req, res) => {
	getSubtitles({
		videoID: req.params.id, // youtube video id
		lang: 'en', // default: `en`
	}).then(function (captions) {
		res.json(captions);
	});
});

module.exports = router;
