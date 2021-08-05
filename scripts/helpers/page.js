'use strict';

hexo.extend.helper.register('page_title', function (page = null) {
    page = (page === null) ? this.page : page;

    let title = page.title;

    if (this.is_archive()) {
        title = this.__('archive');
        if (this.is_month()) {
            title += `: ${page.year}/${page.month}`;
        } else if (this.is_year()) {
            title += `: ${page.year}`;
        }
    } else if (this.is_category()) {
        title = `${this.__('category')}: ${page.category}`;
    } else if (this.is_tag()) {
        title = `${this.__('tag')}: ${page.tag}`;
    }

    return [title, hexo.config.title].filter((str) => typeof (str) !== 'undefined' && str.trim() !== '').join(' - ');
});