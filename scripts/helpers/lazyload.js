'use strict';

const theme = hexo.config.theme_config;
const url_for = require('hexo-util').url_for.bind(hexo);

hexo.extend.helper.register('lazyloadImage', html => {
    if (!theme.lazyload || !theme.lazyload.enable) {
        return html;
    }
    const loading = url_for(theme.lazyload.loading_image);

    return html.replace(/(<img[^>]*) src="(.*?)"(.*?>)/gim, (match, p1, p2, p3) => {
        // Do nothing if already processed
        if (match.includes(loading)) {
            return match;
        }

        return `${p1} src="${p2}" srcset="${loading}" data-srcset="${p2}"${p3}`;
    });
});