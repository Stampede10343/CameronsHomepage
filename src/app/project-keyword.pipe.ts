import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'projectKeyword'
})
export class ProjectKeywordPipe implements PipeTransform {
  private const keywords = [
    'MySQL', 'Node', 'Express', 'RxJava', 'Dagger 2', 'Model View Presenter', 'Retrofit', 'Realm', 'Room', 'Model-View-View Model', 'SimpleStack'
  ];

  transform(value: String, args?: any): any {
    this.keywords.forEach(keyword => {
      let keywordIndex = value.indexOf(keyword);
      if (keywordIndex != -1) {
        let boldKeyword = '<b>' + value.substring(keywordIndex, keywordIndex + keyword.length) + '</b>';
        value = value.replace(keyword, boldKeyword);
      }
    });

    return value;
  }

}
