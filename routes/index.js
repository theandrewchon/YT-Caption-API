const router = require('express').Router();
const getSubtitles = require('youtube-captions-scraper').getSubtitles;

router.get('/', (req, res) => {
	res.json('hi')
})

router.get('/api/:id', async (req, res) => {
	getSubtitles({
		videoID: req.params.id, // youtube video id
		lang: 'ko', // default: `en`
	}).then(function (captions) {
		res.json(captions);
	});
});

module.exports = router;
