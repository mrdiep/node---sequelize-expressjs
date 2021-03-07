import dotenv from 'dotenv';

dotenv.config();

import server from './server';

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
