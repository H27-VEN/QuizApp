import { TestBed, inject } from '@angular/core/testing';

import { FetchQuestionService } from './fetch-question-service';

describe('FetchQuestionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchQuestionService]
    });
  });

  it('should be created', inject([FetchQuestionService], (service: FetchQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
