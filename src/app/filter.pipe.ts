import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(articles: object[], endDate: Date): any {
    if (!articles) { return [] };

    const filteredArticles = articles.filter((article) => {
      const tempDate = new Date(article['publishedAt']);
      tempDate.setHours(0,0,0,0);
      if (tempDate >= endDate) {
        return article;

      }
    });
    return filteredArticles;
  }

}
