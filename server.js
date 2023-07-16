const express = require('express');
const app = express();
const port = 1234;

app.use(express.static(__dirname));
app.listen(port, () => {
    console.log(`로컬서버가 ${port} 포트에서 가동합니다.`);
    console.log(`브라우저에서 열기: http://localhost:${port}`);
});