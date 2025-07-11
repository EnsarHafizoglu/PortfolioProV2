const axios = require('axios');

router.post('/contact', async (req, res) => {
    try {
        const response = await axios.post('https://geribildirimapi.onrender.com/api/geribildirim/gonder', req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Error forwarding request' });
    }
});
