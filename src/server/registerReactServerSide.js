import express from 'express'
import path from 'path'

import renderFullPage from '../../src-client-react/template'
import ssr from '../../src-client-react/server'

// @params app: expressjs instace
export default (app) => {
    app.use('/assets', express.static(path.resolve(__dirname, '../../assets')));

    app.get('/*', async (req, res) => {
        const { finalState, content } =  await ssr(req)
        res.send(renderFullPage(content, finalState));
    });
}